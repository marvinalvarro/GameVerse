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

  // Di HP, bagian "Suara kamu penting" dimasukin ke dalam halaman slide.
  // 0 = halaman 1, 1 = halaman 2. Ganti angka ini kalau mau pindah halaman.
  const VOICE_PAGE = 1;
  const voiceSection = document.getElementById('suara');
  const voiceHome = voiceSection ? voiceSection.nextElementSibling : null;

  function placeVoice() {
    if (!voiceSection || !voiceHome) return;
    if (mq.matches) {
      if (voiceSection.parentElement !== groups[VOICE_PAGE]) groups[VOICE_PAGE].appendChild(voiceSection);
    } else if (voiceSection.parentElement !== voiceHome.parentElement) {
      voiceHome.parentElement.insertBefore(voiceSection, voiceHome);
    }
  }

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
  let startX = 0, startY = 0, ignoreSwipe = false;
  mobileViewport.addEventListener('touchstart', (e) => {
    ignoreSwipe = !!e.target.closest('.voice'); // jangan geser slide pas lagi ngisi form
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  mobileViewport.addEventListener('touchend', (e) => {
    if (ignoreSwipe) return;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      goTo(currentPage + (dx < 0 ? 1 : -1));
    }
  }, { passive: true });

  window.addEventListener('resize', () => renderPage(false));
  window.addEventListener('load', syncHeight);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncHeight);
  if (mq.addEventListener) mq.addEventListener('change', () => { placeVoice(); renderPage(false); });

  // Tinggi jendela ikut berubah kalau isi slide berubah (pesan status, textarea, dll)
  if (window.ResizeObserver) {
    const ro = new ResizeObserver(() => syncHeight());
    groups.forEach((g) => ro.observe(g));
  }

  placeVoice();
  renderPage(false);
}


// ===== Rating & Saran Fitur =====
// Kiriman masuk ke channel Discord lewat Webhook.
// CARA PASANG: Discord > Server Settings > Integrations > Webhooks > New Webhook
// > pilih channel (misal #masukan-web) > Copy Webhook URL > tempel di bawah.
// CATATAN: URL ini kelihatan di source web. Pakai webhook khusus channel masukan
// aja, dan kalau disalahgunakan tinggal hapus/ganti webhook-nya.
const FEEDBACK_WEBHOOK = 'https://discord.com/api/webhooks/1556138301516284015/r_SHW3y_olapcAcXuAsFud0W_VlqYpY1UxnHsmXsmtoHRvweN71Gldi8On0fGzwsPCq2';
const FEEDBACK_COOLDOWN_MS = 60 * 1000;

const starTexts = {
  1: 'Kurang banget',
  2: 'Kurang seru',
  3: 'Lumayan',
  4: 'Seru!',
  5: 'Mantap banget!'
};

(function initVoice() {
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  const status = form.querySelector('.vstatus');
  const submitBtn = form.querySelector('.btn-submit');
  const starHint = document.getElementById('starHint');
  const defaultLabel = submitBtn.textContent;

  form.querySelectorAll('input[name="rating"]').forEach((r) => {
    r.addEventListener('change', () => { starHint.textContent = starTexts[r.value]; });
  });

  function say(text, type) {
    status.textContent = text;
    status.className = 'vstatus ' + (type || '');
  }
  function lastSent() {
    try { return parseInt(localStorage.getItem('gv_feedback_ts') || '0', 10); } catch (e) { return 0; }
  }
  function markSent() {
    try { localStorage.setItem('gv_feedback_ts', String(Date.now())); } catch (e) {}
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    // honeypot: bot biasanya ngisi kolom tersembunyi ini
    if (data.get('website')) return;

    const rating = parseInt(data.get('rating') || '0', 10);
    const category = (data.get('category') || 'Kritik').toString();
    const name = (data.get('name') || '').toString().trim() || 'Anonim';
    const message = (data.get('message') || '').toString().trim();

    if (!rating && message.length < 10) {
      say('Pilih bintang dulu, atau tulis masukanmu minimal 10 huruf.', 'err');
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

    const fields = [
      { name: 'Dari', value: name, inline: true },
      { name: 'Jenis', value: category, inline: true }
    ];
    if (rating) fields.push({ name: 'Nilai', value: rating + ' / 5', inline: true });
    fields.push({ name: 'Pesan', value: message || '(cuma kasih bintang)' });

    const embed = {
      title: rating
        ? 'Masukan baru: ' + '★'.repeat(rating) + '☆'.repeat(5 - rating)
        : 'Masukan baru: ' + category,
      color: 0x50dcc5,
      fields: fields,
      timestamp: new Date().toISOString(),
      footer: { text: 'Dikirim dari web Game Verse' }
    };

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
      starHint.textContent = 'Pilih bintang dulu';
      say('Makasih! Masukan kamu sudah terkirim ke admin.', 'ok');
    } catch (err) {
      say('Gagal kirim. Cek koneksi kamu lalu coba lagi.', 'err');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = defaultLabel;
    }
  });
})();

// ===== Panduan langkah-demi-langkah (KTP, CV, Streak, Ultah) =====
const guideData = {
  ktp: {
    title: '🪪 Cara Bikin KTP Digital',
    link: 'https://discord.com/channels/1477885864771322069/1534281400826728448',
    steps: [
      { img: 'img/ktp-1.webp', title: 'Isi data diri (1/2)',
        text: 'Klik tombol Buat KTP di channel, lalu isi nama lengkap, tempat tanggal lahir, jenis kelamin, golongan darah, dan agama.' },
      { img: 'img/ktp-2.webp', title: 'Isi data diri (2/2)',
        text: 'Lanjut isi status perkawinan, pekerjaan, alamat, kel/desa, dan kecamatan. Kalau sudah semua, klik Submit.' },
      { img: 'img/ktp-3.webp', title: 'KTP kamu jadi',
        text: 'Bot langsung kirim KTP warga Game Verse lengkap dengan nomor KTP dan desain custom. Tinggal pamerin di server.' }
    ]
  },
  cv: {
    title: "💌 Cara Bikin CV Ta'aruf",
    link: 'https://discord.com/channels/1477885864771322069/1477885865832218710',
    steps: [
      { img: 'img/cv-1.webp', title: 'Isi data CV',
        text: 'Klik tombol Buat CV, lalu isi Asal (kota) dan Umur. Instagram, TikTok, dan Discord boleh dikosongin kalau tidak mau dicantumin.' },
      { img: 'img/cv-2.webp', title: 'CV kamu jadi',
        text: "Bot kirim kartu CV Ta'aruf kamu lengkap dengan kota asal, umur, dan akun sosial yang kamu isi." }
    ]
  },
  streak: {
    title: '🔥 Cara Main Streak Harian',
    link: 'https://discord.com/channels/1477885864771322069/1531194725854482544',
    steps: [
      { img: 'img/streak-1.webp', title: 'TikTok Streak, tapi di Discord!',
        text: 'Tag teman kamu di chat apa pun (teks, foto, atau video bebas), lalu temanmu harus balas dan tag balik kamu di hari yang sama.',
        points: [
          'Kalau kalian terus saling tag setiap hari, streak bertambah.',
          'Kalau kelewat sehari tanpa saling tag, streak reset ke 0.',
          'Bot akan mengumumkan streak terbaru kalian di channel.'
        ] }
    ]
  },
  ultah: {
    title: '🎂 Cara Daftar Ultah',
    link: 'https://discord.com/channels/1477885864771322069/1531332595336482917',
    steps: [
      { img: 'img/ultah-1.webp', title: 'Klik tombol daftar',
        text: 'Di channel Ultah, klik tombol Daftar Ulang Tahun yang ada di bawah poster.' },
      { img: 'img/ultah-2.webp', title: 'Isi tanggal lahir',
        text: 'Isi tanggal lahir kamu dengan format DD-MM-YYYY, contohnya 17-08-2005, lalu klik Submit. Cukup sekali aja.' },
      { img: 'img/ultah-3.webp', title: 'Bot ngucapin otomatis',
        text: 'Pas hari-H, bot kirim kartu ucapan ulang tahun buat kamu. Member lain bisa klik Ikut Rayain atau Kirim Ucapan Juga.' }
    ]
  }
};

let activeGuide = null;
let activeStep = 0;

function renderGuide(key, step) {
  const g = guideData[key];
  if (!g) return;
  activeGuide = key;
  activeStep = Math.max(0, Math.min(g.steps.length - 1, step));
  const s = g.steps[activeStep];
  const total = g.steps.length;
  const last = activeStep === total - 1;

  modalTitle.textContent = g.title;
  modalBody.innerHTML = `
    ${total > 1 ? `<div class="guide-count">Langkah ${activeStep + 1} dari ${total}</div>` : ''}
    <div class="guide-shot"><img src="${s.img}" alt="${s.title}"></div>
    <h4 class="guide-title">${s.title}</h4>
    <p class="guide-text">${s.text}</p>
    ${s.points ? `<ul class="guide-points">${s.points.map((p) => `<li>${p}</li>`).join('')}</ul>` : ''}
    ${total > 1 ? `<div class="guide-dots">${g.steps.map((_, i) =>
      `<button type="button" class="guide-dot${i === activeStep ? ' active' : ''}" data-step="${i}" aria-label="Langkah ${i + 1}"></button>`).join('')}</div>` : ''}
    <div class="guide-nav">
      ${activeStep > 0 ? '<button type="button" class="guide-btn ghost" data-go="prev">Sebelumnya</button>' : ''}
      ${last
        ? `<a class="guide-btn primary" href="${g.link}" target="_blank" rel="noopener">Buka Channel di Discord</a>`
        : '<button type="button" class="guide-btn primary" data-go="next">Lanjut</button>'}
    </div>
  `;

  modalBody.querySelectorAll('[data-go]').forEach((b) => {
    b.addEventListener('click', () => renderGuide(key, activeStep + (b.dataset.go === 'next' ? 1 : -1)));
  });
  modalBody.querySelectorAll('[data-step]').forEach((b) => {
    b.addEventListener('click', () => renderGuide(key, parseInt(b.dataset.step, 10)));
  });
  const box = modalBody.closest('.modal-box');
  if (box) box.scrollTop = 0;
}

document.querySelectorAll('[data-guide]').forEach((btn) => {
  btn.addEventListener('click', () => {
    renderGuide(btn.dataset.guide, 0);
    modalOverlay.classList.add('open');
  });
});

// Tombol panah kiri/kanan di keyboard buat pindah langkah
document.addEventListener('keydown', (e) => {
  if (!modalOverlay.classList.contains('open') || !activeGuide) return;
  if (e.key === 'ArrowRight') renderGuide(activeGuide, activeStep + 1);
  if (e.key === 'ArrowLeft') renderGuide(activeGuide, activeStep - 1);
});

// Modal info biasa (Voice/Economy/Event) gak lagi dianggap panduan
document.querySelectorAll('[data-modal]').forEach((btn) => {
  btn.addEventListener('click', () => { activeGuide = null; });
});

// Jaring pengaman: kalau kartu KTP/CV/Streak/Ultah di index.html masih berupa
// link ke Discord, klik-nya dialihkan ke panduan bergambar (bukan loncat ke Discord).
(function guardOldCards() {
  const channelToGuide = {
    '1534281400826728448': 'ktp',
    '1477885865832218710': 'cv',
    '1531194725854482544': 'streak',
    '1531332595336482917': 'ultah'
  };
  document.querySelectorAll('a.card[href*="discord.com/channels"]').forEach((a) => {
    const key = channelToGuide[a.getAttribute('href').split('/').pop()];
    if (!key) return;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      renderGuide(key, 0);
      modalOverlay.classList.add('open');
    });
  });
})();


// ===== Efek miring + naik (kursor di desktop, sentuhan jari di HP) =====
(function initFx() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const SEL = '.card, .voice-box, .guide-shot, .stat';
  const MAX_TILT = { card: 9, stat: 12, 'guide-shot': 5, 'voice-box': 2.5 };
  let active = null;
  let releaseTimer = null;

  function maxFor(el) {
    for (const k in MAX_TILT) if (el.classList.contains(k)) return MAX_TILT[k];
    return 8;
  }
  function setTilt(el, e) {
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const max = maxFor(el);
    el.style.setProperty('--ry', ((x - 0.5) * 2 * max).toFixed(2) + 'deg');
    el.style.setProperty('--rx', (-(y - 0.5) * 2 * max).toFixed(2) + 'deg');
  }
  function on(el, e) {
    clearTimeout(releaseTimer);
    if (active && active !== el) off(active);
    active = el;
    el.classList.add('fx-on');
    setTilt(el, e);
  }
  function off(el) {
    if (!el) return;
    el.classList.remove('fx-on');
    el.style.removeProperty('--rx');
    el.style.removeProperty('--ry');
    if (active === el) active = null;
  }

  document.addEventListener('pointermove', (e) => {
    const el = e.target.closest ? e.target.closest(SEL) : null;
    if (el) on(el, e);
    else if (active) off(active);
  }, { passive: true });

  document.addEventListener('pointerdown', (e) => {
    const el = e.target.closest ? e.target.closest(SEL) : null;
    if (el) on(el, e);
  }, { passive: true });

  // Jari diangkat / scroll mulai: efek dilepas pelan-pelan (biar tap cepat tetap kelihatan efeknya)
  function release(e) {
    if (e.pointerType === 'mouse') return;
    clearTimeout(releaseTimer);
    releaseTimer = setTimeout(() => off(active), 260);
  }
  document.addEventListener('pointerup', release, { passive: true });
  document.addEventListener('pointercancel', release, { passive: true });
  document.documentElement.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') off(active); });

  // iOS Safari butuh ini supaya :active (efek tekan tombol) jalan
  document.addEventListener('touchstart', () => {}, { passive: true });
})();