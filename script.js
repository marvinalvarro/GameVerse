// bubble halus di splash
const splash = document.getElementById('splash');
for (let i = 0; i < 14; i++) {
  const b = document.createElement('div');
  b.className = 'bubble';
  const size = Math.random() * 40 + 14;
  b.style.width = b.style.height = size + 'px';
  b.style.left = Math.random() * 100 + '%';
  b.style.top = Math.random() * 100 + '%';
  b.style.animationDelay = (Math.random() * 4) + 's';
  b.style.animationDuration = (Math.random() * 3 + 5) + 's';
  splash.appendChild(b);
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const main = document.getElementById('main');

if (reduceMotion) {
  splash.style.display = 'none';
  main.classList.add('show');
} else {
  setTimeout(() => {
    splash.classList.add('hide');
    main.classList.add('show');
  }, 2200);
}

// ===== Modal fitur server =====
const modalData = {
  voice: {
    title: '🏆 Leaderboard Juara Season 1 — Voice',
    body: `
      <div class="rank-group-title">Top Voice</div>
      <div class="rank-row"><span class="num">🥇</span><span class="avatar">N</span><span class="name">NawNagaLiar</span><span class="lvl">Lv. 75 · 3675 XP</span></div>
      <div class="rank-row"><span class="num">🥈</span><span class="avatar">M</span><span class="name">Marvin.</span><span class="lvl">Lv. 68 · 2425 XP</span></div>
      <div class="rank-row"><span class="num">🥉</span><span class="avatar">A</span><span class="name">airaa</span><span class="lvl">Lv. 62 · 2760 XP</span></div>
      <div class="rank-row"><span class="num">4</span><span class="avatar">U</span><span class="name">UdinNagaLiar</span><span class="lvl">Lv. 52 · 635 XP</span></div>
      <div class="rank-row"><span class="num">5</span><span class="avatar">A</span><span class="name">AxellNagaliar</span><span class="lvl">Lv. 44 · 1190 XP</span></div>
      <div class="rank-row"><span class="num">6</span><span class="avatar">R</span><span class="name">rea</span><span class="lvl">Lv. 39 · 1360 XP</span></div>
      <div class="rank-row"><span class="num">7</span><span class="avatar">V</span><span class="name">v</span><span class="lvl">Lv. 39 · 220 XP</span></div>
      <div class="rank-row"><span class="num">8</span><span class="avatar">P</span><span class="name">Piuw</span><span class="lvl">Lv. 29 · 1000 XP</span></div>
      <div class="rank-row"><span class="num">9</span><span class="avatar">K</span><span class="name">KebabNagaLiar</span><span class="lvl">Lv. 29 · 930 XP</span></div>
      <div class="rank-row"><span class="num">10</span><span class="avatar">L</span><span class="name">Leviathan Baby Marvin</span><span class="lvl">Lv. 23 · 335 XP</span></div>
      <p style="margin-top:14px;font-size:0.8rem;color:var(--muted)">Hasil akhir Season 1 — cek <code>.rank</code> di server buat lihat posisi kamu di season sekarang.</p>
    `
  },
  economy: {
    title: '🎲 Daftar Command Economy & Game',
    body: `
      <div class="cmd-row"><code>.balance</code><span>Cek saldo coin kamu</span></div>
      <div class="cmd-row"><code>.slot</code><span>Main slot, adu untung</span></div>
      <div class="cmd-row"><code>.blackjack</code><span>Main blackjack lawan bot</span></div>
      <div class="cmd-row"><code>.tebakangka</code><span>Tebak angka, menang dapat coin</span></div>
      <div class="cmd-row"><code>.tictactoe</code><span>Tantang temen main tic-tac-toe</span></div>
      <div class="cmd-row"><code>.trivia</code><span>Jawab trivia, dapat hadiah coin</span></div>
      <p style="margin-top:14px;font-size:0.8rem;color:var(--muted)">Ketik <code>.help</code> di server buat lihat semua command lengkap.</p>
    `
  },
  event: {
    title: '🎉 Jadwal Event Rutin',
    body: `
      <div class="event-row"><span class="day">JUMAT</span><div><h4>Trivia Setiap Hari</h4><p>Jawab trivia bareng, hadiah coin & role spesial.</p></div></div>
      <div class="event-row"><span class="day">SABTU</span><div><h4>Mabar Night</h4><p>Nongkrong & mabar bareng di voice channel.</p></div></div>
      <div class="event-row"><span class="day">AWAL BULAN</span><div><h4>Giveaway Bulanan</h4><p>Giveaway buat member aktif, cek pengumuman.</p></div></div>
      <div class="event-row"><span class="day">TIAP HARI</span><div><h4>Streak Harian</h4><p>Jaga api streak kamu biar gak padam.</p></div></div>
    `
  }
};

const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

document.querySelectorAll('[data-modal]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const data = modalData[btn.dataset.modal];
    if (!data) return;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.body;
    modalOverlay.classList.add('open');
  });
});

function closeModal() { modalOverlay.classList.remove('open'); }

document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== Mobile onboarding pagination =====
// Mode slide cuma aktif di layar <= 640px (HP). Di desktop semuanya tampil biasa.
const mobileViewport = document.getElementById('mobileViewport');
const mobileTrack = document.getElementById('mobileTrack');
const mobileDotsWrap = document.getElementById('mobileDots');
const mobileNextBtn = document.getElementById('mobileNext');
const featuresSection = document.getElementById('fitur');

if (mobileViewport && mobileTrack && mobileDotsWrap && mobileNextBtn) {
  const groups = Array.from(mobileTrack.querySelectorAll('.features-group'));
  const dots = Array.from(mobileDotsWrap.querySelectorAll('.dot'));
  const totalPages = groups.length;
  const mq = window.matchMedia('(max-width: 640px)');
  let currentPage = 0;

  // Tinggi jendela ngikutin tinggi slide yang aktif -> gak ada ruang kosong
  // di bawah kartu, jadi jarak ke "Siap gabung?" selalu pas.
  function syncHeight() {
    if (!mq.matches) {
      mobileViewport.style.height = '';
      return;
    }
    mobileViewport.style.height = groups[currentPage].offsetHeight + 'px';
  }

  function renderPage(scrollToTop) {
    mobileTrack.style.setProperty('--page', currentPage);
    dots.forEach((d, i) => d.classList.toggle('active', i === currentPage));

    const isLast = currentPage === totalPages - 1;
    mobileNextBtn.textContent = isLast ? 'Ke Halaman Utama' : 'Lanjut';

    // Slide yang gak aktif gak bisa difokus / diklik lewat keyboard
    groups.forEach((g, i) => {
      const active = i === currentPage || !mq.matches;
      if (active) g.removeAttribute('inert'); else g.setAttribute('inert', '');
      g.setAttribute('aria-hidden', active ? 'false' : 'true');
    });

    syncHeight();

    if (scrollToTop && mq.matches) {
      const top = featuresSection.getBoundingClientRect().top;
      if (top < 0) featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function goTo(page) {
    currentPage = Math.max(0, Math.min(totalPages - 1, page));
    renderPage(true);
  }

  mobileNextBtn.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      goTo(currentPage + 1);
    } else {
      // Slide terakhir -> balik ke halaman utama (paling atas)
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => goTo(0), 500);
    }
  });

  dots.forEach((dot) => dot.addEventListener('click', () => goTo(parseInt(dot.dataset.page, 10))));

  // Geser kiri/kanan
  let startX = 0, startY = 0;
  mobileViewport.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  mobileViewport.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      goTo(currentPage + (dx < 0 ? 1 : -1));
    }
  }, { passive: true });

  window.addEventListener('resize', () => renderPage(false));
  window.addEventListener('load', syncHeight);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncHeight);
  if (mq.addEventListener) mq.addEventListener('change', () => renderPage(false));

  renderPage(false);
}


// ===== Rating & Saran Fitur =====
// Kiriman masuk ke channel Discord lewat Webhook.
// CARA PASANG: Discord > Server Settings > Integrations > Webhooks > New Webhook
// > pilih channel (misal #masukan-web) > Copy Webhook URL > tempel di bawah.
// CATATAN: URL ini kelihatan di source web. Pakai webhook khusus channel masukan
// aja, dan kalau disalahgunakan tinggal hapus/ganti webhook-nya.
const FEEDBACK_WEBHOOK = '';
const FEEDBACK_COOLDOWN_MS = 60 * 1000;

const starTexts = {
  1: 'Kurang banget',
  2: 'Kurang seru',
  3: 'Lumayan',
  4: 'Seru!',
  5: 'Mantap banget!'
};

(function initVoice() {
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const panels = Array.from(document.querySelectorAll('.vform'));
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      panels.forEach((p) => { p.hidden = p.dataset.kind !== tab.dataset.tab; });
    });
  });

  // teks di bawah bintang
  const starHint = document.getElementById('starHint');
  document.querySelectorAll('input[name="rating"]').forEach((r) => {
    r.addEventListener('change', () => { starHint.textContent = starTexts[r.value]; });
  });

  function lastSent() {
    try { return parseInt(localStorage.getItem('gv_feedback_ts') || '0', 10); } catch (e) { return 0; }
  }
  function markSent() {
    try { localStorage.setItem('gv_feedback_ts', String(Date.now())); } catch (e) {}
  }

  panels.forEach((form) => {
    const status = form.querySelector('.vstatus');
    const submitBtn = form.querySelector('.btn-submit');
    const defaultLabel = submitBtn.textContent;

    function say(text, type) {
      status.textContent = text;
      status.className = 'vstatus ' + (type || '');
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);

      // honeypot: bot biasanya ngisi kolom tersembunyi ini
      if (data.get('website')) return;

      const kind = form.dataset.kind;
      const name = (data.get('name') || '').toString().trim() || 'Anonim';
      const message = (data.get('message') || '').toString().trim();

      if (kind === 'rating' && !data.get('rating')) {
        say('Pilih jumlah bintang dulu ya.', 'err');
        return;
      }
      if (kind === 'saran' && message.length < 10) {
        say('Ceritain usulmu minimal 10 huruf ya, biar admin paham.', 'err');
        return;
      }
      const wait = FEEDBACK_COOLDOWN_MS - (Date.now() - lastSent());
      if (wait > 0) {
        say('Tunggu ' + Math.ceil(wait / 1000) + ' detik lagi sebelum kirim berikutnya.', 'err');
        return;
      }
      if (!FEEDBACK_WEBHOOK) {
        console.warn('FEEDBACK_WEBHOOK di script.js masih kosong.');
        say('Form belum diaktifkan admin. Coba lagi nanti ya.', 'err');
        return;
      }

      const embed = kind === 'rating'
        ? {
            title: 'Rating baru: ' + '★'.repeat(+data.get('rating')) + '☆'.repeat(5 - +data.get('rating')),
            color: 0x50dcc5,
            fields: [
              { name: 'Dari', value: name, inline: true },
              { name: 'Nilai', value: data.get('rating') + ' / 5', inline: true },
              { name: 'Kritik / komentar', value: message || '(kosong)' }
            ]
          }
        : {
            title: 'Saran baru: ' + data.get('category'),
            color: 0xbfe8c2,
            fields: [
              { name: 'Dari', value: name, inline: true },
              { name: 'Isi saran', value: message }
            ]
          };
      embed.timestamp = new Date().toISOString();
      embed.footer = { text: 'Dikirim dari web Game Verse' };

      submitBtn.disabled = true;
      submitBtn.textContent = 'Mengirim...';
      say('');

      try {
        const res = await fetch(FEEDBACK_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: 'Game Verse Web',
            allowed_mentions: { parse: [] },
            embeds: [embed]
          })
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        markSent();
        form.reset();
        if (starHint) starHint.textContent = 'Pilih bintang dulu';
        say('Makasih! Masukan kamu sudah terkirim ke admin.', 'ok');
      } catch (err) {
        say('Gagal kirim. Cek koneksi kamu lalu coba lagi.', 'err');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = defaultLabel;
      }
    });
  });
})();