// =====================================================================
// PENGATURAN SITUS: edit bagian ini kalau mau ganti isi tanpa nyentuh kode lain
// =====================================================================
const GV_CONFIG = {
  // Kode undangan Discord (bagian setelah discord.gg/). Dipakai buat ngambil jumlah member asli.
  inviteCode: 'N8Wg9Zv3z5',

  // Jadwal event buat hitung mundur (zona waktu WIB).
  //   weekday: 0=Minggu, 1=Senin, ... 5=Jumat, 6=Sabtu   |   monthDay: tanggal tiap bulan
  //   time: 'HH:MM' (opsional). Kalau diisi, hitung mundur sampai jam/menit. Kalau kosong, per hari.
  events: [
    { name: 'Trivia',           weekday: 5 },
    { name: 'Mabar Night',      weekday: 6 },
    { name: 'Giveaway Bulanan', monthDay: 1 }
  ],

  // Daftar role per level (opsional). Kosong = bagian ini disembunyiin.
  // Contoh: { level: 10, role: 'Nama Role' }
  roleTiers: [],

  // Testimoni member (opsional). Kosong = section "Kata mereka" disembunyiin.
  // Contoh: { text: 'Servernya seru banget!', name: 'marvin.', rating: 5 }
  testimonials: [],

  // Admin / moderator (opsional). Kosong = section "Tim" disembunyiin.
  // Contoh: { name: 'Marvin', role: 'Owner', avatar: 'img/marvin.webp' }  (avatar boleh dikosongin)
  team: [],

  // ID server Discord + ID thread untuk Aturan, Panduan Awal, dan Template.
  // (Klik kanan thread di Discord > Copy Link, angka paling belakang itulah ID thread-nya.)
  guildId: '1477885864771322069',
  threads: {
    rules:    '1544284081477394432',
    start:    '1544283690404679750',
    template: '1546845430380503110'
  },

  // Alamat web (dipakai tombol "Ajak teman")
  siteUrl: 'https://marvinalvarro.github.io/GameVerse/',

  // Pengumuman di paling atas web (opsional). Kosongkan text = disembunyiin.
  // Ganti `id` setiap bikin pengumuman baru, supaya yang sudah ditutup pengunjung muncul lagi.
  // Contoh: { id: 's2', text: 'Season 2 dimulai!', link: 'https://discord.gg/...', linkText: 'Gabung sekarang' }
  announcement: { id: '', text: '', link: '', linkText: '' },

  // Member of the Month (opsional). Kosongkan name = section disembunyiin.
  // Contoh: { title: 'Member of the Month', name: 'marvin.', note: 'Paling aktif bulan ini!', avatar: '' }
  spotlight: { title: 'Member of the Month', name: '', note: '', avatar: '' },

  // Papan peringkat yang tampil di kartu "Voice & Chat Leveling".
  // Ganti isinya kalau ganti season (title, footnote, rows).
  season: {
    title: '🏆 Leaderboard Juara Season 1 — Voice',
    group: 'Top Voice',
    footnote: 'Hasil akhir Season 1 — cek <code>.rank</code> di server buat lihat posisi kamu di season sekarang.',
    rows: [
      { name: 'NawNagaLiar', level: 75, xp: 3675 },
      { name: 'Marvin.', level: 68, xp: 2425 },
      { name: 'airaa', level: 62, xp: 2760 },
      { name: 'UdinNagaLiar', level: 52, xp: 635 },
      { name: 'AxellNagaliar', level: 44, xp: 1190 },
      { name: 'rea', level: 39, xp: 1360 },
      { name: 'v', level: 39, xp: 220 },
      { name: 'Piuw', level: 29, xp: 1000 },
      { name: 'KebabNagaLiar', level: 29, xp: 930 },
      { name: 'Leviathan Baby Marvin', level: 23, xp: 335 }
    ]
  },

  // Daftar command bot (bisa dicari & di-tap buat disalin). Tambah/ubah sesuai bot kamu.
  // group: bebas, nanti otomatis jadi tombol filter.
  commands: [
    { cmd: '.balance',    desc: 'Cek saldo coin kamu',                    group: 'Ekonomi' },
    { cmd: '.slot',       desc: 'Main slot, adu untung',                  group: 'Game' },
    { cmd: '.blackjack',  desc: 'Main blackjack lawan bot',               group: 'Game' },
    { cmd: '.tebakangka', desc: 'Tebak angka, menang dapat coin',         group: 'Game' },
    { cmd: '.tictactoe',  desc: 'Tantang temen main tic-tac-toe',         group: 'Game' },
    { cmd: '.trivia',     desc: 'Jawab trivia, dapat hadiah coin',        group: 'Game' },
    { cmd: '.rank',       desc: 'Cek level dan posisimu di leaderboard',  group: 'Level' },
    { cmd: '.help',       desc: 'Lihat semua command lengkap',            group: 'Umum' }
  ],

  // Jam default buat tombol "Ingatkan aku" (kalender HP), format 24 jam WIB.
  // Kalau event punya `time` sendiri di atas, itu yang dipakai.
  reminderTime: '20:00',

  // Statistik pengunjung tanpa cookie (opsional). Daftar gratis di goatcounter.com,
  // lalu isi kode situsmu di sini. Contoh: 'gameverse' (dari gameverse.goatcounter.com). Kosong = mati.
  goatcounter: ''
};

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
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

// ---- toast kecil ("Disalin!") ----
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2000);
}
function copyText(text) {
  const done = () => showToast('Disalin: ' + text);
  const fallback = () => {
    const ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { showToast('Gagal menyalin'); }
    document.body.removeChild(ta);
  };
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback);
  else fallback();
}

// ---- Panduan & Aturan (isi popup). Edit teks di sini kalau ada perubahan. ----
const threadUrl = (id) => 'https://discord.com/channels/' + GV_CONFIG.guildId + '/' + id;

const GV_DOCS = {
  rules: {
    title: '📜 Aturan Server',
    cta: 'Buka Thread Aturan di Discord',
    url: () => threadUrl(GV_CONFIG.threads.rules),
    html: () => {
      const R = [
        ['Hormati Sesama', ['Bersikap sopan kepada seluruh member.', 'Dilarang toxic, menghina, melecehkan, atau memprovokasi.']],
        ['Dilarang Spam', ['Jangan spam chat, emoji, sticker, GIF, atau mention.']],
        ['Gunakan Channel dengan Benar', ['Kirim pesan sesuai dengan topik channel yang tersedia.']],
        ['Dilarang Promosi', ['Dilarang mempromosikan server, media sosial, atau produk tanpa izin Staff.']],
        ['Konten Terlarang', ['Dilarang mengirim konten NSFW, gore, scam, phishing, malware, atau konten berbahaya lainnya.']],
        ['Voice Chat', ['Jangan earrape, menggunakan soundboard berlebihan, atau mengganggu pengguna lain di Voice Channel.']],
        ['Marketplace', ['Seluruh transaksi menjadi tanggung jawab masing-masing.', 'Gunakan Middleman resmi jika tersedia.']],
        ['Event', ['Ikuti aturan yang diumumkan pada setiap event.', 'Dilarang melakukan kecurangan, menggunakan akun lain, atau mengganggu jalannya event.', 'Keputusan Host atau Staff selama event bersifat final.']],
        ['Hormati Staff', ['Ikuti arahan Staff.', 'Gunakan Ticket apabila ingin mengajukan banding atau melaporkan masalah.']],
        ['Multi Account', ['Dilarang menggunakan akun lain untuk menghindari hukuman atau memperoleh keuntungan yang tidak adil.']],
        ['Sanksi', ['Warn \u2192 Timeout \u2192 Kick \u2192 Ban.', 'Jenis hukuman disesuaikan dengan tingkat pelanggaran.']]
      ];
      return '<p class="doc-intro">Dengan bergabung di <b>Game Verse</b>, kamu dianggap telah menyetujui seluruh peraturan berikut.</p>' +
        R.map((r, i) => '<div class="rule-item"><b><span class="rn">' + (i + 1) + '</span>' + esc(r[0]) + '</b><ul>' +
          r[1].map((p) => '<li>' + esc(p) + '</li>').join('') + '</ul></div>').join('') +
        '<div class="rule-note"><b>\uD83D\uDCE2 Catatan</b><p>Staff berhak mengambil tindakan terhadap pelanggaran yang tidak tercantum di atas demi menjaga keamanan, kenyamanan, dan ketertiban server.</p></div>' +
        '<p class="doc-thanks">Terima kasih telah bergabung di Game Verse! Selamat bermain dan semoga betah!</p>';
    }
  },

  start: {
    title: '🧭 Panduan Awal Bermain',
    cta: 'Buka Panduan di Discord',
    url: () => threadUrl(GV_CONFIG.threads.start),
    html: () =>
      '<p class="doc-intro">Di Discord itu intinya cuma dua: <b>ngetik</b> (text channel) atau <b>ngomong</b> (voice channel). Kamu bebas nongkrong di mana aja sesuai mood.</p>' +

      '<h4 class="doc-h">1. Area umum (wajib cek dulu)</h4>' +
      '<ul class="doc-list">' +
        '<li><code>#welcome</code> Tempat di-welcome pas baru join. Boleh pamer diri kalau mau kenalan.</li>' +
        '<li><code>#info-server</code> Baca dulu sebelum aktif, biar gak kena banned.</li>' +
        '<li><code>#caravoice</code> <b>Penting!</b> Klik role game yang kamu mainin biar channel khusus game itu muncul (GTA V, Valorant, Minecraft, dll). Kalau di-skip, channel game favoritmu bakal invisible.</li>' +
        '<li><code>#yapping</code> Alun-alun utama, bebas bahas apa aja, asbun juga boleh.</li>' +
      '</ul>' +

      '<h4 class="doc-h">2. Area ngetik per game</h4>' +
      '<p class="doc-p">Setelah ambil role di <code>#caravoice</code>, kategori game yang kamu pilih bakal kebuka.</p>' +

      '<h4 class="doc-h">3. Area ngomong (voice)</h4>' +
      '<p class="doc-p">Bosen ngetik dan pengen mabar pakai suara asli? Langsung aja masuk ke <b>General Voice</b>. Tinggal klik dan masuk. Awal-awal malu boleh diem dulu, gapapa kok!</p>' +

      '<h4 class="doc-h">Aturan singkat (wajib baca)</h4>' +
      '<ul class="doc-list">' +
        '<li><b>No SARA &amp; politik.</b> Kita di sini nyari temen mabar dan tempat santai, bukan buat debat.</li>' +
        '<li><b>No NSFW / porno.</b> Hargai warga lain. Salah kirim link atau kata terlarang bisa kena kick atau banned.</li>' +
        '<li><b>Respect the staff.</b> Kalau ditegur moderator, tolong diturutin biar tongkrongan tetap asik.</li>' +
      '</ul>' +

      '<h4 class="doc-h">Masih bingung?</h4>' +
      '<p class="doc-p">Kalau ada yang belum kamu ngerti, mau lapor orang rusuh, atau butuh bantuan, langsung aja bikin tiket di <code>#ticket</code>. Admin bakal turun tangan bantuin.</p>' +
      '<p class="doc-thanks">Have fun and see you in-game!</p>'
  },

  template: {
    title: '🧩 Template Server Gratis',
    cta: 'Buka Thread Template di Discord',
    url: () => threadUrl(GV_CONFIG.threads.template),
    html: () =>
      '<p class="doc-intro">Mau bikin server sendiri tapi males ngedit channel dan role satu-satu? Ambil <b>template server Discord</b> yang sudah jadi, <b>gratis</b>.</p>' +
      '<h4 class="doc-h">Cara pakainya</h4>' +
      '<ol class="doc-steps">' +
        '<li>Buka thread template di Discord (tombol di bawah).</li>' +
        '<li>Pilih template yang kamu suka, lalu klik <b>View Template</b>.</li>' +
        '<li>Beri nama servermu, klik <b>Create</b>. Channel dan role-nya langsung tertata.</li>' +
      '</ol>' +
      '<h4 class="doc-h">Pilihan yang tersedia</h4>' +
      '<div class="doc-chips">' +
        ['Advance Server', 'Fruit Simple Template', 'Cute Community', 'Minimal Aesthetic', 'Good Template'].map((n) => '<span>' + esc(n) + '</span>').join('') +
      '</div>' +
      '<p class="doc-p">Daftar template bisa bertambah, jadi cek thread-nya buat yang terbaru.</p>'
  }
};

function renderDoc(key) {
  const d = GV_DOCS[key];
  if (!d) return;
  activeGuide = null;
  modalTitle.textContent = d.title;
  modalBody.innerHTML = d.html() +
    '<div class="guide-nav doc-nav"><a class="guide-btn primary" href="' + esc(d.url()) + '" target="_blank" rel="noopener">' + esc(d.cta) + '</a></div>';
  const box = modalBody.closest('.modal-box');
  if (box) box.scrollTop = 0;
  modalOverlay.classList.add('open');
}

// ---- papan peringkat (dari GV_CONFIG.season) ----
function renderSeason() {
  const S = GV_CONFIG.season;
  const medal = ['🥇', '🥈', '🥉'];
  return '<div class="rank-group-title">' + esc(S.group) + '</div>' +
    S.rows.map((r, i) =>
      '<div class="rank-row"><span class="num">' + (medal[i] || (i + 1)) + '</span>' +
      '<span class="avatar">' + esc((r.name || '?').trim().charAt(0).toUpperCase()) + '</span>' +
      '<span class="name">' + esc(r.name) + '</span>' +
      '<span class="lvl">Lv. ' + esc(r.level) + ' · ' + esc(r.xp) + ' XP</span></div>').join('') +
    '<p style="margin-top:14px;font-size:0.8rem;color:var(--muted)">' + S.footnote + '</p>';
}

// ---- daftar command (cari + filter + tap buat salin) ----
function renderCommands() {
  const groups = Array.from(new Set(GV_CONFIG.commands.map((c) => c.group || 'Lainnya')));
  return '<input class="cmd-search" id="cmdSearch" type="search" placeholder="Cari command..." autocomplete="off" aria-label="Cari command">' +
    '<div class="cmd-filters" id="cmdFilters"><button type="button" class="cmd-chip active" data-group="">Semua</button>' +
    groups.map((g) => '<button type="button" class="cmd-chip" data-group="' + esc(g) + '">' + esc(g) + '</button>').join('') + '</div>' +
    '<div class="cmd-list" id="cmdList">' +
    GV_CONFIG.commands.map((c) =>
      '<button type="button" class="cmd-item" data-cmd="' + esc(c.cmd) + '" data-group="' + esc(c.group || 'Lainnya') + '">' +
      '<code>' + esc(c.cmd) + '</code><span>' + esc(c.desc) + '</span><em>Salin</em></button>').join('') +
    '</div><p class="cmd-empty" id="cmdEmpty" hidden>Gak ada yang cocok. Coba kata lain.</p>' +
    '<p style="margin-top:14px;font-size:0.8rem;color:var(--muted)">Tap command buat menyalinnya, lalu tempel di Discord. Ketik <code>.help</code> di server buat lihat yang lengkap.</p>';
}
function initCommandUI() {
  const search = document.getElementById('cmdSearch');
  const list = document.getElementById('cmdList');
  const filters = document.getElementById('cmdFilters');
  const empty = document.getElementById('cmdEmpty');
  if (!search || !list || !filters) return;
  let group = '';
  function apply() {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    list.querySelectorAll('.cmd-item').forEach((it) => {
      const ok = (!group || it.dataset.group === group) && (!q || it.textContent.toLowerCase().indexOf(q) !== -1);
      it.hidden = !ok;
      if (ok) shown++;
    });
    empty.hidden = shown !== 0;
  }
  search.addEventListener('input', apply);
  filters.querySelectorAll('.cmd-chip').forEach((b) => b.addEventListener('click', () => {
    group = b.dataset.group;
    filters.querySelectorAll('.cmd-chip').forEach((x) => x.classList.toggle('active', x === b));
    apply();
  }));
  list.querySelectorAll('.cmd-item').forEach((it) => it.addEventListener('click', () => copyText(it.dataset.cmd)));
}

// ---- jadwal event + tombol "Ingatkan aku" (file kalender .ics) ----
function buildICS(ev) {
  // Jam acara dalam WIB (UTC+7). Dikonversi ke UTC supaya jalan di semua aplikasi kalender.
  const tm = (ev.time || GV_CONFIG.reminderTime || '20:00').split(':').map(Number);
  const wib = new Date(Date.now() + 7 * 3600 * 1000);
  const y = wib.getUTCFullYear(), mo = wib.getUTCMonth(), d = wib.getUTCDate(), wd = wib.getUTCDay();
  const nowMin = wib.getUTCHours() * 60 + wib.getUTCMinutes();
  const evMin = tm[0] * 60 + tm[1];
  let startWib; // timestamp "WIB sebagai UTC"
  if (typeof ev.weekday === 'number') {
    let delta = (ev.weekday - wd + 7) % 7;
    if (delta === 0 && nowMin >= evMin) delta = 7;
    startWib = Date.UTC(y, mo, d + delta, tm[0], tm[1]);
  } else {
    startWib = Date.UTC(y, mo, ev.monthDay, tm[0], tm[1]);
    if (startWib - 7 * 3600 * 1000 <= Date.now()) startWib = Date.UTC(y, mo + 1, ev.monthDay, tm[0], tm[1]);
  }
  const start = new Date(startWib - 7 * 3600 * 1000);       // UTC sebenarnya
  const end = new Date(start.getTime() + 60 * 60 * 1000);   // durasi 1 jam
  const p2 = (n) => String(n).padStart(2, '0');
  const fmt = (dt) => dt.getUTCFullYear() + p2(dt.getUTCMonth() + 1) + p2(dt.getUTCDate()) + 'T' + p2(dt.getUTCHours()) + p2(dt.getUTCMinutes()) + '00Z';
  const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  const rule = typeof ev.weekday === 'number'
    ? 'FREQ=WEEKLY;BYDAY=' + days[start.getUTCDay()]
    : 'FREQ=MONTHLY;BYMONTHDAY=' + start.getUTCDate();
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Game Verse//Event//ID', 'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    'UID:gv-' + ev.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '@gameverse',
    'DTSTAMP:' + fmt(new Date()),
    'DTSTART:' + fmt(start), 'DTEND:' + fmt(end),
    'RRULE:' + rule,
    'SUMMARY:' + ev.name + ' - Game Verse',
    'DESCRIPTION:Event rutin di server Discord Game Verse. Gabung: https://discord.gg/' + GV_CONFIG.inviteCode,
    'URL:https://discord.gg/' + GV_CONFIG.inviteCode,
    'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:' + ev.name + ' mulai 30 menit lagi', 'TRIGGER:-PT30M', 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR'
  ].join('\r\n');
}
function downloadICS(ev) {
  const blob = new Blob([buildICS(ev)], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = ev.name.replace(/\s+/g, '-') + '.ics';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  showToast('Pengingat siap. Buka file-nya buat masuk kalender.');
}
function initEventModal() {
  const rows = modalBody.querySelectorAll('.event-row');
  GV_CONFIG.events.forEach((ev, i) => {
    const row = rows[i];
    if (!row) return;
    const holder = row.querySelector('div');
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'ics-btn'; btn.textContent = '📅 Ingatkan aku';
    btn.addEventListener('click', () => downloadICS(ev));
    holder.appendChild(btn);
  });
  const note = document.createElement('p');
  note.className = 'ics-note';
  note.textContent = 'Jam acara: ' + (GV_CONFIG.reminderTime || '20:00') + ' WIB (kalau beda, ikuti pengumuman di server).';
  modalBody.appendChild(note);
}

const modalData = {
  voice: { title: GV_CONFIG.season.title, build: renderSeason },
  economy: { title: '🎲 Daftar Command Economy & Game', build: renderCommands, after: initCommandUI },
  event: {
    title: '🎉 Jadwal Event Rutin',
    body: `
      <div class="event-row"><span class="day">JUMAT</span><div><h4>Trivia Setiap Hari</h4><p>Jawab trivia bareng, hadiah coin & role spesial.</p></div></div>
      <div class="event-row"><span class="day">SABTU</span><div><h4>Mabar Night</h4><p>Nongkrong & mabar bareng di voice channel.</p></div></div>
      <div class="event-row"><span class="day">AWAL BULAN</span><div><h4>Giveaway Bulanan</h4><p>Giveaway buat member aktif, cek pengumuman.</p></div></div>
      <div class="event-row"><span class="day">TIAP HARI</span><div><h4>Streak Harian</h4><p>Jaga api streak kamu biar gak padam.</p></div></div>
    `,
    after: initEventModal
  }
};

document.querySelectorAll('[data-modal]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const data = modalData[btn.dataset.modal];
    if (!data) return;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.build ? data.build() : data.body;
    if (typeof data.after === 'function') data.after();
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

// Halaman ini ke-scroll di dalam <body> (bukan window), jadi "ke atas" harus menggulung keduanya.
function scrollToTop() {
  const opt = { top: 0, behavior: 'smooth' };
  window.scrollTo(opt);
  if (document.body.scrollTo) document.body.scrollTo(opt);
  if (document.documentElement.scrollTo) document.documentElement.scrollTo(opt);
}

// ===== Jelajah: tab + slide (semua ukuran layar) =====
// 5 halaman: Fitur | Coba Langsung | Level & Galeri | FAQ | Masukan
const mobileViewport = document.getElementById('mobileViewport');
const mobileTrack = document.getElementById('mobileTrack');
const mobileDotsWrap = document.getElementById('mobileDots');
const mobileNextBtn = document.getElementById('mobileNext');
const featuresSection = document.getElementById('fitur');
const tabbar = document.getElementById('tabbar');

// Isi pemilih "Lihat Fitur" (urutannya sama dengan urutan halaman)
const PAGE_INFO = [
  { icon: '🧩', title: 'Fitur Server',     desc: 'Voice leveling, economy & mini game, event rutin' },
  { icon: '🎮', title: 'Coba Langsung',    desc: "KTP digital, CV Ta'aruf, streak harian, ultah" },
  { icon: '🧭', title: 'Panduan & Aturan', desc: 'Aturan server, panduan awal, template gratis' },
  { icon: '🏆', title: 'Level & Galeri',   desc: 'Cara naik level dan sekilas isi server' },
  { icon: '❓', title: 'FAQ',              desc: 'Jawaban cepat buat pertanyaan yang sering muncul' },
  { icon: '💬', title: 'Kasih Masukan',    desc: 'Rating, kritik, dan saran fitur' }
];
// Link langsung ke bagian tertentu, mis. .../GameVerse/#faq
const HASH_PAGE = {
  'fitur-server': 0, 'coba-langsung': 1,
  panduan: 2, aturan: 2, rules: 2, template: 2,
  level: 3, galeri: 3, spotlight: 3, testimoni: 3, tim: 3,
  faq: 4, suara: 5, masukan: 5
};

let gvGoTo = () => {};

if (mobileViewport && mobileTrack && mobileDotsWrap && mobileNextBtn) {
  const groups = Array.from(mobileTrack.querySelectorAll('.features-group'));
  const dots = Array.from(mobileDotsWrap.querySelectorAll('.dot'));
  const tabs = tabbar ? Array.from(tabbar.querySelectorAll('.tab-pill')) : [];
  const totalPages = groups.length;
  let currentPage = 0;

  // Tinggi jendela ngikutin tinggi halaman yang aktif -> gak ada ruang kosong di bawah.
  function syncHeight() {
    mobileViewport.style.height = groups[currentPage].offsetHeight + 'px';
  }

  function renderPage() {
    mobileTrack.style.setProperty('--page', currentPage);
    dots.forEach((d, i) => d.classList.toggle('active', i === currentPage));
    tabs.forEach((t, i) => {
      const on = i === currentPage;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });

    // Tab aktif digeser ke tengah (tanpa ikut menggeser halaman)
    const at = tabs[currentPage];
    if (at && tabbar && tabbar.scrollWidth > tabbar.clientWidth) {
      tabbar.scrollTo({ left: at.offsetLeft - (tabbar.clientWidth - at.offsetWidth) / 2, behavior: 'smooth' });
    }

    mobileNextBtn.textContent = currentPage === totalPages - 1 ? 'Ke Halaman Utama' : 'Lanjut';

    // Halaman yang gak aktif gak bisa difokus / diklik lewat keyboard
    groups.forEach((g, i) => {
      if (i === currentPage) g.removeAttribute('inert'); else g.setAttribute('inert', '');
      g.setAttribute('aria-hidden', i === currentPage ? 'false' : 'true');
    });

    syncHeight();
  }

  function goTo(page, force) {
    currentPage = Math.max(0, Math.min(totalPages - 1, page));
    renderPage();
    // Kalau lagi di bawah (atau dipaksa), bawa pandangan ke awal bagian ini
    if (force || featuresSection.getBoundingClientRect().top < 0) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  gvGoTo = goTo;

  mobileNextBtn.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      goTo(currentPage + 1);
    } else {
      // Halaman terakhir -> balik ke halaman utama (paling atas)
      scrollToTop();
      setTimeout(() => goTo(0), 500);
    }
  });

  dots.forEach((dot) => dot.addEventListener('click', () => goTo(parseInt(dot.dataset.page, 10))));
  tabs.forEach((t) => t.addEventListener('click', () => goTo(parseInt(t.dataset.page, 10))));

  // Panah kiri/kanan di keyboard pas fokus di tab
  if (tabbar) {
    tabbar.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      goTo(currentPage + (e.key === 'ArrowRight' ? 1 : -1));
      if (tabs[currentPage]) tabs[currentPage].focus();
    });
  }

  // Geser kiri/kanan
  let startX = 0, startY = 0, ignoreSwipe = false;
  mobileViewport.addEventListener('touchstart', (e) => {
    // jangan geser halaman pas lagi ngisi form atau geser galeri
    ignoreSwipe = !!e.target.closest('.voice, .gallery-track');
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

  // Jaga-jaga: kalau jendela kegeser sendiri (mis. lewat link #faq), kembalikan
  mobileViewport.addEventListener('scroll', () => { mobileViewport.scrollLeft = 0; });

  window.addEventListener('resize', syncHeight);
  window.addEventListener('load', syncHeight);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncHeight);

  // Tinggi jendela ikut berubah kalau isi halaman berubah (FAQ dibuka, pesan status, gambar kemuat)
  if (window.ResizeObserver) {
    const ro = new ResizeObserver(() => syncHeight());
    groups.forEach((g) => ro.observe(g));
  }

  // Buka halaman dari link #faq, #level, dst
  function openFromHash() {
    const k = decodeURIComponent((location.hash || '').slice(1));
    if (Object.prototype.hasOwnProperty.call(HASH_PAGE, k)) goTo(HASH_PAGE[k], true);
  }
  window.addEventListener('hashchange', openFromHash);
  if (location.hash) window.addEventListener('load', () => setTimeout(openFromHash, 350));

  renderPage();
}

// Tombol "Lihat Fitur" di bagian atas: tampilkan pilihan halaman, lalu loncat langsung ke sana
(function initPicker() {
  const btn = document.getElementById('seeFeatures');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    activeGuide = null;
    modalTitle.textContent = 'Mau lihat apa?';
    modalBody.innerHTML = '<div class="pick-grid">' + PAGE_INFO.map((p, i) =>
      '<button type="button" class="pick" data-pick="' + i + '"><span class="pi" aria-hidden="true">' + p.icon + '</span>' +
      '<span><b>' + p.title + '</b><small>' + p.desc + '</small></span></button>').join('') + '</div>';
    modalOverlay.classList.add('open');
    modalBody.querySelectorAll('[data-pick]').forEach((b) => {
      b.addEventListener('click', () => {
        closeModal();
        gvGoTo(parseInt(b.dataset.pick, 10), true);
      });
    });
  });
})();


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

  const SEL = '.card, .voice-box, .guide-shot, .stat, .shot';
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


// =====================================================================
// FITUR TAMBAHAN: tema, event berikutnya, angka live, galeri, data opsional, dll
// =====================================================================
function esc(str) {
  return String(str == null ? '' : str).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ===== Tema terang / gelap (saklar di header desktop + saklar di dalam menu HP) =====
(function initTheme() {
  const root = document.documentElement;
  const btns = Array.from(document.querySelectorAll('[data-theme-toggle]'));
  const labels = Array.from(document.querySelectorAll('[data-theme-label]'));
  const meta = document.getElementById('themeColor');

  function apply(t) {
    root.setAttribute('data-theme', t);
    if (meta) meta.setAttribute('content', t === 'dark' ? '#0b1f1d' : '#50dcc5');
    btns.forEach((b) => b.setAttribute('aria-checked', t === 'dark' ? 'true' : 'false'));
    labels.forEach((l) => { l.textContent = t === 'dark' ? 'Mode gelap' : 'Mode terang'; });
  }
  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  btns.forEach((b) => b.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('gv_theme', next); } catch (e) {}
  }));
})();

// ===== Menu garis tiga (HP): daftar bagian + saklar tema =====
(function initMenu() {
  const burger = document.getElementById('menuToggle');
  const drawer = document.getElementById('menuDrawer');
  const overlay = document.getElementById('menuOverlay');
  const closeBtn = document.getElementById('menuClose');
  if (!burger || !drawer || !overlay) return;
  const mq = window.matchMedia('(max-width: 640px)');

  function setOpen(open, returnFocus) {
    drawer.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) drawer.removeAttribute('inert'); else drawer.setAttribute('inert', '');
    document.body.style.overflow = open ? 'hidden' : '';
    if (open && closeBtn) closeBtn.focus({ preventScroll: true });
    if (!open && returnFocus) burger.focus({ preventScroll: true });
  }

  burger.addEventListener('click', () => setOpen(!drawer.classList.contains('open')));
  overlay.addEventListener('click', () => setOpen(false));
  if (closeBtn) closeBtn.addEventListener('click', () => setOpen(false, true));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) setOpen(false, true);
  });
  // kalau layar dilebarkan (mis. HP diputar), tutup menunya
  const onChange = () => { if (!mq.matches) setOpen(false); };
  if (mq.addEventListener) mq.addEventListener('change', onChange);

  // Pilih bagian -> menu nutup, lalu langsung loncat ke bagian itu
  drawer.querySelectorAll('[data-go]').forEach((el) => {
    el.addEventListener('click', () => {
      const go = el.dataset.go;
      setOpen(false);
      setTimeout(() => {
        if (go === 'top') { scrollToTop(); gvGoTo(0); }
        else gvGoTo(parseInt(go, 10), true);
      }, 160);
    });
  });
})();

// ===== Event berikutnya (hitung mundur, WIB) =====
(function initNextEvent() {
  const nameEl = document.getElementById('evName');
  const whenEl = document.getElementById('evWhen');
  if (!nameEl || !whenEl || !GV_CONFIG.events || !GV_CONFIG.events.length) return;

  const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

  function compute() {
    // WIB = UTC+7 (tanpa DST), jadi cukup geser 7 jam lalu baca field UTC
    const j = new Date(Date.now() + 7 * 3600 * 1000);
    const y = j.getUTCFullYear(), mo = j.getUTCMonth(), d = j.getUTCDate(), wd = j.getUTCDay();
    const nowMin = j.getUTCHours() * 60 + j.getUTCMinutes();
    let best = null;

    GV_CONFIG.events.forEach((ev) => {
      const t = ev.time ? ev.time.split(':').map(Number) : null;
      const evMin = t ? t[0] * 60 + t[1] : null;
      let delta;
      if (typeof ev.weekday === 'number') {
        delta = (ev.weekday - wd + 7) % 7;
        if (delta === 0 && evMin !== null && nowMin >= evMin) delta = 7;
      } else if (typeof ev.monthDay === 'number') {
        const today = Date.UTC(y, mo, d);
        let target = Date.UTC(y, mo, ev.monthDay);
        if (target < today || (target === today && evMin !== null && nowMin >= evMin)) {
          target = Date.UTC(y, mo + 1, ev.monthDay);
        }
        delta = Math.round((target - today) / 86400000);
      } else {
        return;
      }
      if (!best || delta < best.delta) best = { ev, delta, evMin, nowMin };
    });
    return best;
  }

  function render() {
    const b = compute();
    if (!b) return;
    const { ev, delta, evMin, nowMin } = b;
    const label = typeof ev.weekday === 'number' ? HARI[ev.weekday] : 'Tanggal ' + ev.monthDay;

    let text;
    if (delta === 0) {
      if (evMin !== null && evMin > nowMin) {
        const left = evMin - nowMin;
        const h = Math.floor(left / 60), m = left % 60;
        text = (h ? h + ' jam ' : '') + m + ' menit lagi';
      } else {
        text = 'Hari ini!';
      }
    } else if (delta === 1) {
      text = 'Besok';
    } else {
      text = delta + ' hari lagi';
    }

    nameEl.textContent = ev.name;
    whenEl.textContent = label + ' · ' + text;
    whenEl.classList.toggle('today', delta === 0);
  }

  render();
  setInterval(render, 60 * 1000);
})();

// ===== Angka member & online asli dari Discord (ada angka cadangan kalau gagal) =====
(function initLiveStats() {
  const mEl = document.getElementById('statMembers');
  const oEl = document.getElementById('statOnline');
  const oLabel = document.getElementById('statOnlineLabel');
  const code = GV_CONFIG.inviteCode;
  if (!mEl || !oEl || !code) return;

  function countUp(el, to) {
    const fmt = (n) => Math.round(n).toLocaleString('id-ID');
    if (reduceMotion) { el.textContent = fmt(to); return; }
    const start = performance.now(), dur = 900;
    (function tick(now) {
      const k = Math.min(1, (now - start) / dur);
      el.textContent = fmt(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick);
    })(start);
  }
  function show(members, online) {
    if (members > 0) countUp(mEl, members);
    if (online > 0) {
      countUp(oEl, online);
      if (oLabel) { oLabel.textContent = 'Online sekarang'; oLabel.classList.add('live'); }
    }
  }

  try {
    const c = JSON.parse(sessionStorage.getItem('gv_stats') || 'null');
    if (c && Date.now() - c.t < 5 * 60 * 1000) { show(c.m, c.o); return; }
  } catch (e) {}

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 6000);
  fetch('https://discord.com/api/v9/invites/' + encodeURIComponent(code) + '?with_counts=true', { signal: ctrl.signal })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status))))
    .then((j) => {
      clearTimeout(timer);
      const m = j.approximate_member_count, o = j.approximate_presence_count;
      if (!(m > 0)) return;
      try { sessionStorage.setItem('gv_stats', JSON.stringify({ t: Date.now(), m: m, o: o })); } catch (e) {}
      show(m, o);
    })
    .catch(() => { /* gagal ambil: biarin angka cadangan di HTML */ });
})();

// ===== Section opsional dari GV_CONFIG: role per level, testimoni, tim =====
(function initOptionalData() {
  const C = GV_CONFIG;

  const tiers = document.getElementById('tiers');
  if (tiers && C.roleTiers && C.roleTiers.length) {
    tiers.innerHTML = '<h3 class="sub-h">Role yang bisa kamu dapat</h3><div class="tier-list">' +
      C.roleTiers.map((t) => '<div class="tier"><b>Lv. ' + esc(t.level) + '</b><span>' + esc(t.role) + '</span></div>').join('') +
      '</div>';
    tiers.hidden = false;
  }

  const testi = document.getElementById('testimoni');
  const testiGrid = document.getElementById('testiGrid');
  if (testi && testiGrid && C.testimonials && C.testimonials.length) {
    testiGrid.innerHTML = C.testimonials.map((t) => {
      const r = Math.max(0, Math.min(5, parseInt(t.rating || 0, 10)));
      return '<figure class="tcard">' +
        (r ? '<div class="tstars" aria-label="' + r + ' dari 5 bintang">' + '★'.repeat(r) + '<span>' + '★'.repeat(5 - r) + '</span></div>' : '') +
        '<blockquote>' + esc(t.text) + '</blockquote>' +
        '<figcaption>' + esc(t.name || 'Member Game Verse') + '</figcaption></figure>';
    }).join('');
    testi.hidden = false;
  }

  const team = document.getElementById('tim');
  const teamGrid = document.getElementById('teamGrid');
  if (team && teamGrid && C.team && C.team.length) {
    teamGrid.innerHTML = C.team.map((m) => {
      const initial = esc((m.name || '?').trim().charAt(0).toUpperCase());
      const av = m.avatar ? '<img src="' + esc(m.avatar) + '" alt="' + esc(m.name) + '" loading="lazy">' : initial;
      return '<div class="member"><div class="avatar-lg">' + av + '</div><b>' + esc(m.name) + '</b><span>' + esc(m.role || '') + '</span></div>';
    }).join('');
    team.hidden = false;
  }
})();

// ===== Galeri: geser pakai mouse + klik buat memperbesar =====
(function initGallery() {
  const track = document.getElementById('galleryTrack');
  if (!track) return;

  let down = false, startX = 0, startLeft = 0, moved = 0;

  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return; // di HP udah bisa digeser bawaan
    down = true; moved = 0; startX = e.clientX; startLeft = track.scrollLeft;
    track.classList.add('dragging');
  });
  window.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    moved = Math.max(moved, Math.abs(dx));
    track.scrollLeft = startLeft - dx;
  });
  window.addEventListener('pointerup', () => { down = false; track.classList.remove('dragging'); });

  track.addEventListener('click', (e) => {
    if (moved > 6) { moved = 0; return; } // habis geser, jangan dianggap klik
    const b = e.target.closest('.shot');
    if (!b) return;
    activeGuide = null;
    modalTitle.textContent = b.dataset.cap || 'Galeri';
    modalBody.innerHTML = '<div class="lightbox"><img src="' + esc(b.dataset.full) + '" alt="' + esc(b.dataset.cap) + '"></div>';
    modalOverlay.classList.add('open');
  });
})();

// ===== Tombol Join melayang (HP) =====
// Muncul pas kamu scroll di luar bagian atas, fitur, dan ajakan gabung (biar gak nutupin tombol lain).
(function initFloatJoin() {
  const fj = document.getElementById('floatJoin');
  if (!fj || !('IntersectionObserver' in window)) return;
  const targets = ['.hero', '.cta-band', '.tabbar', '.mobile-pager', '.voice-box'].map((q) => document.querySelector(q)).filter(Boolean);
  const seen = new Map(targets.map((t) => [t, true]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => seen.set(en.target, en.isIntersecting));
    fj.classList.toggle('show', !Array.from(seen.values()).some(Boolean));
  });
  targets.forEach((t) => io.observe(t));
})();

// ===== Muncul halus pas di-scroll =====
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length || reduceMotion || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
  els.forEach((el) => io.observe(el));
})();


// =====================================================================
// FITUR TAMBAHAN 2: bagikan, pasang di HP, pengumuman, spotlight, statistik
// =====================================================================

// ===== Tombol "Ajak teman" (menu share bawaan HP; di desktop salin link) =====
(function initShare() {
  const url = GV_CONFIG.siteUrl;
  document.querySelectorAll('[data-share]').forEach((b) => b.addEventListener('click', async () => {
    const data = {
      title: 'Game Verse',
      text: 'Gabung komunitas Discord Game Verse: mabar, ngobrol santai, dan naik level bareng!',
      url: url
    };
    if (navigator.share) {
      try { await navigator.share(data); } catch (e) { /* dibatalkan */ }
    } else {
      copyText(url);
    }
  }));
})();

// ===== Pasang di layar utama (muncul hanya kalau browser mengizinkan) =====
(function initInstall() {
  const btns = Array.from(document.querySelectorAll('[data-install]'));
  if (!btns.length) return;
  let deferred = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferred = e;
    btns.forEach((b) => { b.hidden = false; });
  });
  btns.forEach((b) => b.addEventListener('click', async () => {
    if (!deferred) return;
    deferred.prompt();
    try { await deferred.userChoice; } catch (e) {}
    deferred = null;
    btns.forEach((x) => { x.hidden = true; });
  }));
  window.addEventListener('appinstalled', () => btns.forEach((x) => { x.hidden = true; }));
})();

// ===== Pengumuman di paling atas =====
(function initAnnouncement() {
  const A = GV_CONFIG.announcement;
  const box = document.getElementById('announce');
  if (!box || !A || !A.text) return;
  const key = 'gv_ann_' + (A.id || 'x');
  try { if (localStorage.getItem(key) === '1') return; } catch (e) {}

  document.getElementById('annText').textContent = A.text;
  const link = document.getElementById('annLink');
  if (A.link) {
    link.href = A.link;
    link.textContent = A.linkText || 'Selengkapnya';
    link.hidden = false;
  }
  box.hidden = false;
  document.getElementById('annClose').addEventListener('click', () => {
    box.hidden = true;
    try { localStorage.setItem(key, '1'); } catch (e) {}
  });
})();

// ===== Member of the Month =====
(function initSpotlight() {
  const S = GV_CONFIG.spotlight;
  const sec = document.getElementById('spotlight');
  const card = document.getElementById('spotCard');
  if (!sec || !card || !S || !S.name) return;
  document.getElementById('spotTitle').textContent = S.title || 'Member of the Month';
  const initial = esc((S.name || '?').trim().charAt(0).toUpperCase());
  const av = S.avatar ? '<img src="' + esc(S.avatar) + '" alt="' + esc(S.name) + '" loading="lazy">' : initial;
  card.innerHTML = '<div class="avatar-lg spot-av">' + av + '</div>' +
    '<div class="spot-body"><span class="spot-crown" aria-hidden="true">👑</span><b>' + esc(S.name) + '</b>' +
    (S.note ? '<p>' + esc(S.note) + '</p>' : '') + '</div>';
  sec.hidden = false;
})();

// ===== Statistik pengunjung tanpa cookie (GoatCounter, opsional) =====
(function initAnalytics() {
  const code = (GV_CONFIG.goatcounter || '').trim();
  if (!code || location.protocol === 'file:') return;
  window.goatcounter = { no_onload: false };
  const sc = document.createElement('script');
  sc.async = true;
  sc.src = 'https://gc.zgo.at/count.js';
  sc.setAttribute('data-goatcounter', 'https://' + code + '.goatcounter.com/count');
  document.head.appendChild(sc);

  // Hitung klik tombol Join & buka panduan, biar kelihatan apa yang paling diminati
  function track(name) {
    try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: name, title: name, event: true }); } catch (e) {}
  }
  document.addEventListener('click', (e) => {
    const a = e.target.closest ? e.target.closest('a[href*="discord.gg"]') : null;
    if (a) track('klik-join-discord');
    const g = e.target.closest ? e.target.closest('[data-guide]') : null;
    if (g) track('buka-panduan-' + g.dataset.guide);
    const tab = e.target.closest ? e.target.closest('.tab-pill') : null;
    if (tab) track('tab-' + (tab.textContent || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-'));
  }, { passive: true });
})();


// ===== Kartu Panduan & Aturan + link internal =====
(function initDocs() {
  document.querySelectorAll('[data-doc]').forEach((btn) => {
    btn.addEventListener('click', () => renderDoc(btn.dataset.doc));
  });
  // Link seperti "tab Panduan" di FAQ: pindah halaman tanpa loncat/refresh
  document.querySelectorAll('a[data-gopage]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      gvGoTo(parseInt(a.dataset.gopage, 10), true);
    });
  });
})();
