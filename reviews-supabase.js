// =====================================================================
// Game Verse: ulasan dari Supabase (berdiri sendiri, script.js TIDAK perlu diubah)
// - Masukan dari form otomatis disimpan juga ke tabel "feedback" di Supabase
// - Ulasan yang sudah disetujui (approved = true) tampil di bagian "Rating dan ulasan"
// Muat file ini SETELAH script.js
// =====================================================================
(function () {
  'use strict';

  // 1) Isi dengan Project URL Supabase kamu, contoh: https://abcdxyz.supabase.co
  var SUPABASE_URL = 'https://wwhaesewjsvaopoigupc.supabase.co';
  // 2) Publishable key (aman di web selama RLS aktif, lihat supabase.sql)
  var SUPABASE_KEY = 'sb_publishable_XKYGT9aqD_-oZa80iNrYYw_U8Q4e4xF';
  var TABLE = 'feedback';

  var enabled = !!SUPABASE_URL;
  var base = SUPABASE_URL.replace(/\/+$/, '') + '/rest/v1/' + TABLE;
  var headers = { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' };

  // ---------- Kirim masukan ke Supabase ----------
  // Form lama mengirim ke webhook Discord. Kita "menumpang" di request itu:
  // begitu form lolos validasi dan dikirim ke Discord, datanya juga disimpan ke Supabase.
  function saveToDb(embed) {
    if (!enabled || !embed || !embed.fields) return;
    var f = {};
    embed.fields.forEach(function (x) { f[x.name] = x.value; });
    var rating = parseInt(f['Nilai'], 10) || null;
    var message = f['Pesan'] && f['Pesan'] !== '(cuma kasih bintang)' ? String(f['Pesan']).slice(0, 800) : null;
    fetch(base, {
      method: 'POST',
      headers: Object.assign({ Prefer: 'return=minimal' }, headers),
      body: JSON.stringify({
        name: String(f['Dari'] || 'Anonim').slice(0, 40),
        category: f['Jenis'] || 'Kritik',
        rating: rating,
        message: message
      })
    }).then(function (r) { if (r && r.ok) load(); })   // ulasan baru langsung tampil
      .catch(function () { /* gagal simpan: Discord tetap menerima */ });
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

  // ---------- Ambil ulasan yang sudah disetujui ----------
  function fmtDate(iso) {
    try {
      var en = window.GV_LANG && window.GV_LANG.get() === 'en';
      return new Date(iso).toLocaleDateString(en ? 'en-GB' : 'id-ID', { day: '2-digit', month: '2-digit', year: '2-digit' });
    } catch (e) { return ''; }
  }

  function load() {
    if (!enabled || typeof GV_CONFIG === 'undefined') return;
    var manual = GV_CONFIG.__manualReviews || (GV_CONFIG.__manualReviews = (GV_CONFIG.reviews || []).slice());
    var url = base + '?select=name,rating,message,created_at&approved=eq.true&rating=gte.1&order=created_at.desc&limit=100';
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, 8000);
    fetch(url, { headers: headers, signal: ctrl.signal })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)); })
      .then(function (rows) {
        clearTimeout(timer);
        GV_CONFIG.reviews = rows.map(function (r) {
          return { name: r.name, rating: r.rating, date: fmtDate(r.created_at), text: r.message || '' };
        }).concat(manual);
        // script.js menggambar ulang daftar ulasan setiap kali event ini terpicu
        document.dispatchEvent(new CustomEvent('gv:lang', { detail: window.GV_LANG ? window.GV_LANG.get() : 'id' }));
      })
      .catch(function () { /* gagal ambil: biarkan ulasan manual saja */ });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load); else load();
})();