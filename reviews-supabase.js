// =====================================================================
// Game Verse: login Discord + ulasan dari Supabase (berdiri sendiri, script.js TIDAK diubah)
// - Pengunjung login dengan Discord dulu, baru bisa kirim ulasan
// - Foto profil dan nama Discord ikut tersimpan dan tampil di ulasan
// - Ulasan tampil di "Rating dan ulasan", di bawah form
// Muat file ini SETELAH script.js
// =====================================================================
(function () {
  'use strict';

  var SUPABASE_URL = 'https://wwhaesewjsvaopoigupc.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_XKYGT9aqD_-oZa80iNrYYw_U8Q4e4xF';
  var TABLE = 'feedback';

  var enabled = !!SUPABASE_URL;
  var API = SUPABASE_URL.replace(/\/+$/, '');
  var base = API + '/rest/v1/' + TABLE;
  var pubHeaders = { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' };
  var SESSION_KEY = 'gv_sb_session';
  var DISCORD_CDN = 'https://cdn.discordapp.com/';
  var SITE = (typeof GV_CONFIG !== 'undefined' && GV_CONFIG.siteUrl) ? GV_CONFIG.siteUrl : (location.origin + location.pathname);

  var profile = null;      // { id, name, avatar } kalau sudah login
  var form = null, nameInput = null, bar = null;

  // ---------- Helper ----------
  function T(id, en) { return typeof window.tr === 'function' ? window.tr(id, en) : id; }
  function isEn() { return !!(window.GV_LANG && window.GV_LANG.get() === 'en'); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function toast(msg) { if (typeof showToast === 'function') showToast(msg); }
  function okAvatar(u) { return u && String(u).indexOf(DISCORD_CDN) === 0 ? String(u) : null; }

  // ---------- Sesi login ----------
  function readSession() { try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); } catch (e) { return null; } }
  function writeSession(s) {
    try { if (s) localStorage.setItem(SESSION_KEY, JSON.stringify(s)); else localStorage.removeItem(SESSION_KEY); } catch (e) {}
  }

  // Setelah login, Discord/Supabase mengembalikan pengunjung ke web dengan token di alamat (#access_token=...)
  (function readLoginResult() {
    if (!enabled) return;
    var h = location.hash ? location.hash.slice(1) : '';
    var q = new URLSearchParams(location.search);
    try {
      if (h.indexOf('access_token=') !== -1) {
        var p = new URLSearchParams(h);
        var exp = parseInt(p.get('expires_at') || '0', 10) || (Math.floor(Date.now() / 1000) + parseInt(p.get('expires_in') || '3600', 10));
        writeSession({ access_token: p.get('access_token'), refresh_token: p.get('refresh_token'), expires_at: exp });
        sessionStorage.setItem('gv_just_login', '1');
        history.replaceState(null, '', location.pathname + location.search);
      } else if (h.indexOf('error=') !== -1 || q.get('error_description')) {
        var pe = new URLSearchParams(h);
        sessionStorage.setItem('gv_login_err', pe.get('error_description') || q.get('error_description') || 'error');
        history.replaceState(null, '', location.pathname);
      }
    } catch (e) {}
  })();

  function refreshSession(s) {
    return fetch(API + '/auth/v1/token?grant_type=refresh_token', {
      method: 'POST', headers: pubHeaders, body: JSON.stringify({ refresh_token: s.refresh_token })
    }).then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('refresh')); })
      .then(function (j) {
        var ns = {
          access_token: j.access_token,
          refresh_token: j.refresh_token || s.refresh_token,
          expires_at: j.expires_at || (Math.floor(Date.now() / 1000) + (j.expires_in || 3600))
        };
        writeSession(ns);
        return ns;
      });
  }

  // Token yang masih berlaku (diperbarui otomatis kalau sudah hampir habis)
  function getToken() {
    var s = readSession();
    if (!s || !s.access_token) return Promise.resolve(null);
    if (s.expires_at - 60 > Math.floor(Date.now() / 1000)) return Promise.resolve(s.access_token);
    if (!s.refresh_token) { writeSession(null); return Promise.resolve(null); }
    return refreshSession(s).then(function (ns) { return ns.access_token; })
      .catch(function () { writeSession(null); return null; });
  }

  function loadProfile() {
    return getToken().then(function (tok) {
      if (!tok) { profile = null; return; }
      return fetch(API + '/auth/v1/user', { headers: { apikey: SUPABASE_KEY, Authorization: 'Bearer ' + tok } })
        .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)); })
        .then(function (u) {
          var m = u.user_metadata || {}, cc = m.custom_claims || {};
          var name = cc.global_name || m.full_name || m.name || m.user_name || m.preferred_username || 'Member';
          profile = { id: u.id, name: String(name).slice(0, 40), avatar: okAvatar(m.avatar_url || m.picture) };
        })
        .catch(function (err) {
          if (err && /HTTP 40[13]/.test(err.message)) writeSession(null);
          profile = null;
        });
    });
  }

  function login() {
    location.href = API + '/auth/v1/authorize?provider=discord&redirect_to=' + encodeURIComponent(SITE);
  }
  function logout() {
    var s = readSession();
    if (s && s.access_token) {
      fetch(API + '/auth/v1/logout', { method: 'POST', headers: { apikey: SUPABASE_KEY, Authorization: 'Bearer ' + s.access_token } }).catch(function () {});
    }
    writeSession(null);
    profile = null;
    if (nameInput) { nameInput.value = ''; nameInput.readOnly = false; }
    renderBar();
  }

  // ---------- Kotak login di atas form ----------
  var css = document.createElement('style');
  css.textContent =
    '.gv-auth{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:0 0 16px;padding:12px 14px;border:1px solid var(--panel-line);border-radius:12px;background:rgba(88,101,242,.12)}' +
    '.gv-auth p{margin:0;flex:1;min-width:150px;font-size:.88rem;color:var(--ink);line-height:1.45}' +
    '.gv-auth p b{color:var(--ink)}' +
    '.gv-auth-btn{min-height:44px;padding:0 18px;border:0;border-radius:999px;background:#5865f2;color:#fff;font-family:"Plus Jakarta Sans",sans-serif;font-weight:700;font-size:.9rem;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform .18s cubic-bezier(.2,.8,.2,1)}' +
    '.gv-auth-btn:active{transform:scale(.94)}' +
    '.gv-auth-out{min-height:36px;padding:0 14px;border:1px solid var(--panel-line);border-radius:999px;background:transparent;color:var(--ink);font-family:"Plus Jakarta Sans",sans-serif;font-weight:600;font-size:.8rem;cursor:pointer}' +
    '.gv-av{width:38px;height:38px;border-radius:50%;object-fit:cover;flex:0 0 auto}' +
    '.gv-av-i{display:flex;align-items:center;justify-content:center;background:var(--aqua);color:var(--btn-ink);font-weight:800}' +
    '.rv-av{position:relative;overflow:hidden}' +
    '.rv-av img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}' +
    '.features-group .voice + #ulasanDb{margin-top:22px;padding-top:24px;border-top:1px solid var(--panel-line)}';
  document.head.appendChild(css);

  function renderBar() {
    if (!form) return;
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'gv-auth';
      form.insertBefore(bar, form.firstChild);
      bar.addEventListener('click', function (e) {
        var b = e.target.closest ? e.target.closest('[data-auth]') : null;
        if (!b) return;
        if (b.getAttribute('data-auth') === 'in') login(); else logout();
      });
    }
    if (profile) {
      bar.innerHTML =
        (profile.avatar
          ? '<img class="gv-av" src="' + esc(profile.avatar) + '" alt="" referrerpolicy="no-referrer">'
          : '<span class="gv-av gv-av-i">' + esc(profile.name.charAt(0).toUpperCase()) + '</span>') +
        '<p>' + T('Masuk sebagai', 'Signed in as') + ' <b>' + esc(profile.name) + '</b></p>' +
        '<button type="button" class="gv-auth-out" data-auth="out">' + T('Keluar', 'Log out') + '</button>';
      if (nameInput) { nameInput.value = profile.name; nameInput.readOnly = true; }
    } else {
      bar.innerHTML =
        '<p>' + T('Login dengan Discord dulu supaya ulasanmu tampil dengan foto profilmu.',
                  'Log in with Discord first so your review shows with your profile picture.') + '</p>' +
        '<button type="button" class="gv-auth-btn" data-auth="in">' + T('Login dengan Discord', 'Log in with Discord') + '</button>';
      if (nameInput) nameInput.readOnly = false;
    }
  }

  // Belum login: form tidak dikirim (dicegat sebelum handler lama jalan)
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!enabled || !f || f.id !== 'feedbackForm' || profile) return;
    e.preventDefault();
    e.stopPropagation();
    var st = f.querySelector('.vstatus');
    if (st) {
      st.textContent = readSession()
        ? T('Sebentar, sedang memeriksa login kamu...', 'One moment, checking your login...')
        : T('Login dengan Discord dulu ya.', 'Please log in with Discord first.');
      st.className = 'vstatus err';
    }
  }, true);

  // ---------- Kirim masukan ke Supabase ----------
  // Form lama mengirim ke webhook Discord. Kita menumpang di request itu:
  // begitu form lolos validasi, datanya juga disimpan ke Supabase atas nama akun yang login.
  function saveToDb(embed) {
    if (!enabled || !embed || !embed.fields || !profile) return;
    var f = {};
    embed.fields.forEach(function (x) { f[x.name] = x.value; });
    var body = JSON.stringify({
      user_id: profile.id,
      name: profile.name,
      avatar_url: profile.avatar,
      category: f['Jenis'] || 'Kritik',
      rating: parseInt(f['Nilai'], 10) || null,
      message: f['Pesan'] && f['Pesan'] !== '(cuma kasih bintang)' ? String(f['Pesan']).slice(0, 800) : null
    });
    getToken().then(function (tok) {
      if (!tok) return;
      return fetch(base, {
        method: 'POST',
        headers: { apikey: SUPABASE_KEY, 'Content-Type': 'application/json', Authorization: 'Bearer ' + tok, Prefer: 'return=minimal' },
        body: body
      }).then(function (r) { if (r && r.ok) load(); });   // ulasan baru langsung tampil
    }).catch(function () { /* gagal simpan: Discord tetap menerima */ });
  }

  if (enabled) {
    var origFetch = window.fetch.bind(window);
    window.fetch = function (input, init) {
      try {
        var u = typeof input === 'string' ? input : (input && input.url) || '';
        if (u.indexOf('discord.com/api/webhooks/') !== -1 && init && typeof init.body === 'string') {
          var payload = JSON.parse(init.body);
          saveToDb(payload.embeds && payload.embeds[0]);
        }
      } catch (e) { /* abaikan */ }
      return origFetch(input, init);
    };
  }

  // ---------- Tampilan "Rating dan ulasan" (di bawah form) ----------
  var rows = [], expanded = false, box = null;

  function ensureBox() {
    if (box) return box;
    var anchor = document.getElementById('suara');
    if (!anchor || !anchor.parentNode) return null;
    var orig = document.getElementById('ulasan');           // kotak lama (di atas form), dibuang
    if (orig && orig.parentNode) orig.parentNode.removeChild(orig);
    box = document.createElement('div');
    box.className = 'sec reviews';
    box.id = 'ulasanDb';
    box.hidden = true;
    anchor.parentNode.insertBefore(box, anchor.nextSibling);
    box.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('.rv-more')) { expanded = true; render(); }
    });
    return box;
  }

  function stars(v, big) {
    var p = Math.max(0, Math.min(5, v)) / 5 * 100;
    return '<span class="rv-st' + (big ? ' big' : '') + '" style="--p:' + p + '%" aria-hidden="true">★★★★★</span>';
  }
  function hue(name) {
    var h = 0;
    String(name).split('').forEach(function (c) { h = (h * 31 + c.charCodeAt(0)) % 360; });
    return 'hsl(' + h + ',55%,42%)';
  }
  function fmtDate(iso) {
    try { return new Date(iso).toLocaleDateString(isEn() ? 'en-GB' : 'id-ID', { day: '2-digit', month: '2-digit', year: '2-digit' }); }
    catch (e) { return ''; }
  }

  function card(r) {
    var name = r.name || T('Member Game Verse', 'Game Verse member');
    var av = okAvatar(r.avatar_url);
    return '<article class="rv-card"><div class="rv-head">' +
      '<span class="rv-av" style="background:' + hue(name) + '"><i style="font-style:normal">' + esc(String(name).trim().charAt(0).toUpperCase()) + '</i>' +
      (av ? '<img src="' + esc(av) + '" alt="" loading="lazy" referrerpolicy="no-referrer">' : '') + '</span>' +
      '<b>' + esc(name) + '</b></div>' +
      '<div class="rv-meta">' + stars(r.rating) + '<span>' + esc(fmtDate(r.created_at)) + '</span></div>' +
      (r.message ? '<p>' + esc(r.message) + '</p>' : '') + '</article>';
  }

  function render() {
    var b = ensureBox();
    if (!b) return;
    if (!rows.length) { b.hidden = true; return; }
    var loc = isEn() ? 'en-US' : 'id-ID';
    var n = rows.length;
    var avg = rows.reduce(function (a, r) { return a + r.rating; }, 0) / n;
    var dist = [0, 0, 0, 0, 0, 0];
    rows.forEach(function (r) { dist[Math.round(r.rating)]++; });
    var shown = expanded ? rows : rows.slice(0, 5);

    b.innerHTML =
      '<h2>' + T('Rating dan ulasan', 'Ratings and reviews') + '</h2>' +
      '<div class="rv-top"><div class="rv-score"><b>' +
        avg.toLocaleString(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + '</b>' + stars(avg, true) +
        '<span>' + n.toLocaleString(loc) + T(' ulasan', n === 1 ? ' review' : ' reviews') + '</span></div>' +
        '<div class="rv-bars">' + [5, 4, 3, 2, 1].map(function (s) {
          return '<div class="rv-bar"><span>' + s + '</span><div><i style="width:' + (dist[s] / n * 100) + '%"></i></div></div>';
        }).join('') + '</div></div>' +
      '<div class="rv-list">' + shown.map(card).join('') +
        (n > 5 && !expanded ? '<button class="rv-more" type="button">' + T('Lihat semua ulasan', 'See all reviews') + '</button>' : '') +
      '</div>';
    b.querySelectorAll('.rv-av img').forEach(function (im) { im.addEventListener('error', function () { im.remove(); }); });
    b.hidden = false;
  }

  function load() {
    if (!enabled) return;
    var url = base + '?select=name,rating,message,created_at,avatar_url&approved=eq.true&rating=gte.1&order=created_at.desc&limit=100';
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, 8000);
    fetch(url, { headers: pubHeaders, signal: ctrl.signal })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)); })
      .then(function (data) { clearTimeout(timer); rows = data; render(); })
      .catch(function () { /* gagal ambil: biarkan kosong */ });
  }

  // ---------- Mulai ----------
  function init() {
    if (!enabled) return;
    form = document.getElementById('feedbackForm');
    nameInput = form ? form.querySelector('input[name="name"]') : null;
    if (form) form.addEventListener('reset', function () { setTimeout(renderBar, 0); });
    document.addEventListener('gv:lang', function () { renderBar(); render(); });

    if (!readSession()) renderBar();     // belum pernah login: langsung tampilkan tombol login
    load();
    loadProfile().then(function () {
      renderBar();
      try {
        var err = sessionStorage.getItem('gv_login_err');
        if (err) { sessionStorage.removeItem('gv_login_err'); toast(T('Login gagal. Coba lagi ya.', 'Login failed. Please try again.')); }
        if (sessionStorage.getItem('gv_just_login') === '1') {
          sessionStorage.removeItem('gv_just_login');
          if (profile) toast(T('Berhasil login sebagai ', 'Logged in as ') + profile.name);
          if (typeof gvGoTo === 'function') setTimeout(function () { gvGoTo(5, true); }, 700);
        }
      } catch (e) {}
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();