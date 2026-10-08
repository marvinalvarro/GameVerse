// Fungsi tr('indonesia','english') berasal dari i18n.js. Ini cadangan kalau file itu gagal termuat.
if (typeof window.tr !== 'function') { window.tr = function (id) { return id; }; window.GV_LANG = { get: function () { return 'id'; }, set: function () {} }; }

// =====================================================================
// PENGATURAN SITUS: edit bagian ini kalau mau ganti isi tanpa nyentuh kode lain
// =====================================================================
const GV_CONFIG = {
  // Kode undangan Discord (bagian setelah discord.gg/). Dipakai buat ngambil jumlah member asli.
  inviteCode: 'N8Wg9Zv3z5',

  // Jadwal event buat hitung mundur (zona waktu WIB).
  //   weekday: 0=Minggu, 1=Senin, ... 5=Jumat, 6=Sabtu   |   monthDay: tanggal tiap bulan   |   daily: true = tiap hari
  //   time: 'HH:MM' (opsional). Kalau diisi, hitung mundur sampai jam/menit. Kalau kosong, per hari.
  events: [
    { name: 'Mabar Night',      nameEn: 'Mabar Night (Game Night)', weekday: 6 },
    { name: 'Giveaway Bulanan', nameEn: 'Monthly Giveaway',         monthDay: 1 },
    { name: 'Trivia',           nameEn: 'Trivia',                   daily: true }   // tiap hari: gak masuk hitung mundur, tapi tetap bisa "Ingatkan aku"
  ],

  // Daftar role per level (opsional). Kosong = bagian ini disembunyiin.
  // Contoh: { level: 10, role: 'Nama Role' }   (versi Inggris opsional: roleEn)
  roleTiers: [],

  // Testimoni member (opsional). Kosong = section "Kata mereka" disembunyiin.
  // Contoh: { text: 'Servernya seru banget!', textEn: 'The server is so fun!', name: 'marvin.', rating: 5 }   (textEn opsional)
  testimonials: [],

  // Admin / moderator (opsional). Kosong = section "Tim" disembunyiin.
  // Contoh: { name: 'Marvin', role: 'Owner', roleEn: 'Owner', avatar: 'img/marvin.webp' }  (avatar & roleEn boleh dikosongin)
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
  // Contoh: { id: 's2', text: 'Season 2 dimulai!', textEn: 'Season 2 has started!', link: 'https://discord.gg/...', linkText: 'Gabung sekarang', linkTextEn: 'Join now' }
  announcement: { id: '', text: '', textEn: '', link: '', linkText: '', linkTextEn: '' },

  // Member of the Month (opsional). Kosongkan name = section disembunyiin.
  // Contoh: { title: 'Member of the Month', name: 'marvin.', note: 'Paling aktif bulan ini!', noteEn: 'Most active this month!', avatar: '' }
  spotlight: { title: 'Member of the Month', name: '', note: '', noteEn: '', avatar: '' },

  // Papan peringkat yang tampil di kartu "Voice & Chat Leveling".
  // Ganti isinya kalau ganti season (title, footnote, rows).
  season: {
    title: '🏆 Leaderboard Juara Season 1 — Voice',
    titleEn: '🏆 Season 1 Champions Leaderboard — Voice',
    group: 'Top Voice',
    groupEn: 'Top Voice',
    footnote: 'Hasil akhir Season 1 — cek <code>.rank</code> di server buat lihat posisi kamu di season sekarang.',
    footnoteEn: 'Final results of Season 1. Use <code>.rank</code> in the server to see your position this season.',
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
  // group: bebas, nanti otomatis jadi tombol filter.  descEn = deskripsi versi Inggris.
  commands: [
    { cmd: '.balance',           group: 'Ekonomi', desc: 'Cek saldo coin kamu',                              descEn: 'Check your coin balance' },
    { cmd: '.slot',              group: 'Game',    desc: 'Main slot, adu untung',                            descEn: 'Play slots and test your luck' },
    { cmd: '.blackjack',         group: 'Game',    desc: 'Main blackjack lawan bot',                         descEn: 'Play blackjack against the bot' },
    { cmd: '.tebakangka',        group: 'Game',    desc: 'Tebak angka, menang dapat coin',                   descEn: 'Guess the number and win coins' },
    { cmd: '.tictactoe',         group: 'Game',    desc: 'Tantang temen main tic-tac-toe',                   descEn: 'Challenge a friend to tic-tac-toe' },
    { cmd: '.trivia',            group: 'Game',    desc: 'Jawab trivia, dapat hadiah coin',                  descEn: 'Answer trivia and earn coin rewards' },
    { cmd: '.rank',              group: 'Level',   desc: 'Cek level dan posisimu di leaderboard',            descEn: 'Check your level and leaderboard position' },
    { cmd: '.rankchat',          group: 'Level',   desc: 'Lihat progres level chat kamu',                    descEn: 'See your chat level progress' },
    { cmd: '.voiceleaderboard',  group: 'Level',   desc: 'Lihat posisi rank dan level voice kamu',           descEn: 'See your voice rank and level position' },
    { cmd: '.help',              group: 'Umum',    desc: 'Lihat semua command lengkap',                      descEn: 'See the full list of commands' },
    { cmd: '.season 1',          group: 'Umum',    desc: 'Lihat leaderboard voice dari season yang sudah lewat', descEn: 'See the voice leaderboard from a past season' },
    { cmd: '.streak',            group: 'Umum',    desc: 'Lihat progres streak api kamu',                    descEn: 'Check your streak flame progress' },
    { cmd: '.streakleaderboard', group: 'Umum',    desc: 'Lihat posisi kamu di leaderboard streak',          descEn: 'See your position on the streak leaderboard' }
  ],

  // Member online (dari Widget Discord). Butuh: Pengaturan Server > Engagement > aktifkan "Server Widget".
  // Kalau Widget mati, bagian ini otomatis tersembunyi.
  //   showNames: true = nama muncul saat kursor diarahkan ke foto  |  maxAvatars: jumlah foto yang ditampilkan
  //   hideNames: nama akun BOT yang mau disembunyikan dari daftar online (tulis persis seperti namanya di Discord).
  //   Contoh: hideNames: ['Nova Verse', 'Nama Bot Lain']  (widget Discord tidak bisa membedakan bot otomatis)
  online: {
    enabled: true, showNames: true, maxAvatars: 10,
    // Akun BOT yang disembunyikan dari daftar online. Tanda * di akhir = semua nama yang diawali itu.
    hideNames: [
      'Nova Verse',
      'Lofy',
      'Music',
      '[ m!p ] *',          // Jock Owie 1, 2, 3, 4
      'GAME VERSE BOT'
    ]
  },

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

// ===== Layar loading: logo, bar kemajuan yang ikut kesiapan halaman, dan tips acak =====
const SPLASH_TIPS = [
  ['Ketik .rank di server buat cek levelmu', 'Type .rank in the server to check your level'],
  ['Nongkrong di voice biar XP-mu nambah', 'Hang out in voice to earn XP'],
  ['Jaga streak apimu, jangan kelewat sehari!', "Keep your streak alive, don't skip a day!"],
  ['Mabar Night tiap Sabtu, jangan lupa mampir', 'Mabar Night every Saturday, drop by!'],
  ['Ketik .help buat lihat semua command', 'Type .help to see all commands'],
  ['Bikin KTP digital-mu sendiri di server', 'Make your own digital ID in the server']
];
(function runSplash() {
  const fill = document.getElementById('spFill');
  const pctEl = document.getElementById('spPct');
  const tipEl = document.getElementById('spTip');

  if (reduceMotion || !fill || !pctEl || !tipEl) {
    splash.style.display = 'none';
    main.classList.add('show');
    return;
  }

  // kunjungan berikutnya di sesi yang sama dibuat lebih singkat
  let revisit = false;
  try { revisit = sessionStorage.getItem('gv_splash') === '1'; sessionStorage.setItem('gv_splash', '1'); } catch (e) {}
  const MIN = revisit ? 900 : 1700;   // tampil minimal (ms)
  const MAX = 4500;                   // jangan menahan lebih lama dari ini

  let ready = document.readyState === 'complete';
  if (!ready) window.addEventListener('load', () => { ready = true; });
  let finished = false;
  function finish() {
    if (finished) return;
    finished = true;
    clearInterval(tipTimer);
    splash.classList.add('hide');
    main.classList.add('show');
    setTimeout(() => { splash.style.display = 'none'; }, 1200);
  }

  // tips bergantian
  let ti = Math.floor(Math.random() * SPLASH_TIPS.length);
  function showTip() {
    const t = SPLASH_TIPS[ti % SPLASH_TIPS.length];
    ti++;
    tipEl.classList.remove('in');
    setTimeout(() => { tipEl.textContent = tr(t[0], t[1]); tipEl.classList.add('in'); }, 180);
  }
  showTip();
  const tipTimer = setInterval(showTip, 1500);

  // bar maju halus sampai 90%, lalu penuh begitu halaman siap dan waktu minimal lewat
  const t0 = performance.now();
  let shown = 0;
  (function frame(now) {
    if (finished) return;
    const t = now - t0;
    let target = Math.min(90, (t / MIN) * 90);
    if ((ready && t >= MIN) || t >= MAX) target = 100;
    shown += (target - shown) * 0.12 + (target > shown ? 0.2 : 0);
    if (shown > target) shown = target;
    const p = Math.min(100, shown);
    fill.style.width = p + '%';
    pctEl.textContent = Math.round(p) + '%';
    if (p >= 99.5) {
      fill.style.width = '100%';
      pctEl.textContent = '100%';
      setTimeout(finish, 350);
      return;
    }
    requestAnimationFrame(frame);
  })(t0);

  // jaga-jaga kalau tab di latar belakang (animasi berhenti)
  setTimeout(finish, MAX + 1500);
})();

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
  const done = () => showToast(tr('Disalin: ', 'Copied: ') + text);
  const fallback = () => {
    const ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { showToast(tr('Gagal menyalin', 'Copy failed')); }
    document.body.removeChild(ta);
  };
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback);
  else fallback();
}

// ---- Panduan & Aturan (isi popup). Edit teks di sini kalau ada perubahan. ----
// Pola penulisan: tr('teks Indonesia', 'English text')
const threadUrl = (id) => 'https://discord.com/channels/' + GV_CONFIG.guildId + '/' + id;

const GV_DOCS = {
  rules: {
    title: () => tr('📜 Aturan Server', '📜 Server Rules'),
    cta: () => tr('Buka Thread Aturan di Discord', 'Open Rules Thread on Discord'),
    url: () => threadUrl(GV_CONFIG.threads.rules),
    html: () => {
      const R = [
        ['Hormati Sesama', 'Respect Everyone', [
          ['Bersikap sopan kepada seluruh member.', 'Be polite to all members.'],
          ['Dilarang toxic, menghina, melecehkan, atau memprovokasi.', 'No toxicity, insults, harassment, or provocation.']]],
        ['Dilarang Spam', 'No Spam', [
          ['Jangan spam chat, emoji, sticker, GIF, atau mention.', 'Do not spam chat, emojis, stickers, GIFs, or mentions.']]],
        ['Gunakan Channel dengan Benar', 'Use Channels Properly', [
          ['Kirim pesan sesuai dengan topik channel yang tersedia.', "Post messages that match each channel's topic."]]],
        ['Dilarang Promosi', 'No Promotion', [
          ['Dilarang mempromosikan server, media sosial, atau produk tanpa izin Staff.', 'Do not promote servers, social media, or products without Staff permission.']]],
        ['Konten Terlarang', 'Prohibited Content', [
          ['Dilarang mengirim konten NSFW, gore, scam, phishing, malware, atau konten berbahaya lainnya.', 'Do not post NSFW, gore, scam, phishing, malware, or other harmful content.']]],
        ['Voice Chat', 'Voice Chat', [
          ['Jangan earrape, menggunakan soundboard berlebihan, atau mengganggu pengguna lain di Voice Channel.', 'No earrape, excessive soundboard use, or disturbing other users in Voice Channels.']]],
        ['Marketplace', 'Marketplace', [
          ['Seluruh transaksi menjadi tanggung jawab masing-masing.', "All transactions are each party's own responsibility."],
          ['Gunakan Middleman resmi jika tersedia.', 'Use an official Middleman if one is available.']]],
        ['Event', 'Events', [
          ['Ikuti aturan yang diumumkan pada setiap event.', 'Follow the rules announced for each event.'],
          ['Dilarang melakukan kecurangan, menggunakan akun lain, atau mengganggu jalannya event.', 'No cheating, using other accounts, or disrupting the event.'],
          ['Keputusan Host atau Staff selama event bersifat final.', 'Decisions by the Host or Staff during an event are final.']]],
        ['Hormati Staff', 'Respect Staff', [
          ['Ikuti arahan Staff.', 'Follow Staff instructions.'],
          ['Gunakan Ticket apabila ingin mengajukan banding atau melaporkan masalah.', 'Use a Ticket if you want to appeal or report a problem.']]],
        ['Multi Account', 'Multiple Accounts', [
          ['Dilarang menggunakan akun lain untuk menghindari hukuman atau memperoleh keuntungan yang tidak adil.', 'Do not use another account to avoid punishment or gain an unfair advantage.']]],
        ['Sanksi', 'Sanctions', [
          ['Warn \u2192 Timeout \u2192 Kick \u2192 Ban.', 'Warn \u2192 Timeout \u2192 Kick \u2192 Ban.'],
          ['Jenis hukuman disesuaikan dengan tingkat pelanggaran.', 'The punishment depends on how serious the violation is.']]]
      ];
      return '<p class="doc-intro">' + tr(
          'Dengan bergabung di <b>Game Verse</b>, kamu dianggap telah menyetujui seluruh peraturan berikut.',
          'By joining <b>Game Verse</b>, you are considered to have agreed to all of the following rules.') + '</p>' +
        R.map((r, i) => '<div class="rule-item"><b><span class="rn">' + (i + 1) + '</span>' + esc(tr(r[0], r[1])) + '</b><ul>' +
          r[2].map((p) => '<li>' + esc(tr(p[0], p[1])) + '</li>').join('') + '</ul></div>').join('') +
        '<div class="rule-note"><b>\uD83D\uDCE2 ' + tr('Catatan', 'Note') + '</b><p>' + tr(
          'Staff berhak mengambil tindakan terhadap pelanggaran yang tidak tercantum di atas demi menjaga keamanan, kenyamanan, dan ketertiban server.',
          'Staff may take action against violations not listed above to keep the server safe, comfortable, and orderly.') + '</p></div>' +
        '<p class="doc-thanks">' + tr(
          'Terima kasih telah bergabung di Game Verse! Selamat bermain dan semoga betah!',
          'Thank you for joining Game Verse! Have fun and we hope you enjoy your stay!') + '</p>';
    }
  },

  start: {
    title: () => tr('🧭 Panduan Awal Bermain', '🧭 Beginner Guide'),
    cta: () => tr('Buka Panduan di Discord', 'Open Guide on Discord'),
    url: () => threadUrl(GV_CONFIG.threads.start),
    html: () =>
      '<p class="doc-intro">' + tr(
        'Di Discord itu intinya cuma dua: <b>ngetik</b> (text channel) atau <b>ngomong</b> (voice channel). Kamu bebas nongkrong di mana aja sesuai mood.',
        'On Discord it really comes down to two things: <b>typing</b> (text channels) or <b>talking</b> (voice channels). Hang out wherever fits your mood.') + '</p>' +

      '<h4 class="doc-h">' + tr('1. Area umum (wajib cek dulu)', '1. General areas (check these first)') + '</h4>' +
      '<ul class="doc-list">' +
        '<li><code>#welcome</code> ' + tr('Tempat di-welcome pas baru join. Boleh pamer diri kalau mau kenalan.', 'Where you get welcomed when you join. Feel free to introduce yourself.') + '</li>' +
        '<li><code>#info-server</code> ' + tr('Baca dulu sebelum aktif, biar gak kena banned.', 'Read this before getting active so you do not get banned.') + '</li>' +
        '<li><code>#caravoice</code> ' + tr(
          '<b>Penting!</b> Klik role game yang kamu mainin biar channel khusus game itu muncul (GTA V, Valorant, Minecraft, dll). Kalau di-skip, channel game favoritmu bakal invisible.',
          '<b>Important!</b> Click the role of the game you play so its dedicated channels appear (GTA V, Valorant, Minecraft, etc.). If you skip this, your favorite game\'s channels stay invisible.') + '</li>' +
        '<li><code>#yapping</code> ' + tr('Alun-alun utama, bebas bahas apa aja, asbun juga boleh.', 'The main square. Talk about anything, random chatter is welcome.') + '</li>' +
      '</ul>' +

      '<h4 class="doc-h">' + tr('2. Area ngetik per game', '2. Text areas per game') + '</h4>' +
      '<p class="doc-p">' + tr('Setelah ambil role di <code>#caravoice</code>, kategori game yang kamu pilih bakal kebuka.', 'After picking a role in <code>#caravoice</code>, the game category you chose will open up.') + '</p>' +

      '<h4 class="doc-h">' + tr('3. Area ngomong (voice)', '3. Voice areas') + '</h4>' +
      '<p class="doc-p">' + tr(
        'Bosen ngetik dan pengen mabar pakai suara asli? Langsung aja masuk ke <b>General Voice</b>. Tinggal klik dan masuk. Awal-awal malu boleh diem dulu, gapapa kok!',
        'Tired of typing and want to play with real voices? Jump into <b>General Voice</b>. Just click and join. Feel free to stay quiet at first, that is totally fine!') + '</p>' +

      '<h4 class="doc-h">' + tr('Aturan singkat (wajib baca)', 'Quick rules (must read)') + '</h4>' +
      '<ul class="doc-list">' +
        '<li>' + tr(
          '<b>No SARA &amp; politik.</b> Kita di sini nyari temen mabar dan tempat santai, bukan buat debat.',
          '<b>No SARA &amp; politics.</b> (SARA = ethnic, religious, racial, and inter-group topics.) We are here to find gaming buddies and relax, not to debate.') + '</li>' +
        '<li>' + tr(
          '<b>No NSFW / porno.</b> Hargai warga lain. Salah kirim link atau kata terlarang bisa kena kick atau banned.',
          '<b>No NSFW / porn.</b> Respect other members. Sending a forbidden link or word by mistake can still get you kicked or banned.') + '</li>' +
        '<li>' + tr(
          '<b>Respect the staff.</b> Kalau ditegur moderator, tolong diturutin biar tongkrongan tetap asik.',
          '<b>Respect the staff.</b> If a moderator warns you, please follow it so the community stays fun.') + '</li>' +
      '</ul>' +

      '<h4 class="doc-h">' + tr('Masih bingung?', 'Still confused?') + '</h4>' +
      '<p class="doc-p">' + tr(
        'Kalau ada yang belum kamu ngerti, mau lapor orang rusuh, atau butuh bantuan, langsung aja bikin tiket di <code>#ticket</code>. Admin bakal turun tangan bantuin.',
        'If there is something you do not understand, want to report a troublemaker, or need help, just open a ticket in <code>#ticket</code>. The admins will step in to help.') + '</p>' +
      '<p class="doc-thanks">' + tr('Have fun and see you in-game!', 'Have fun and see you in-game!') + '</p>'
  },

  template: {
    title: () => tr('🧩 Template Server Gratis', '🧩 Free Server Templates'),
    cta: () => tr('Buka Thread Template di Discord', 'Open Template Thread on Discord'),
    url: () => threadUrl(GV_CONFIG.threads.template),
    html: () =>
      '<p class="doc-intro">' + tr(
        'Mau bikin server sendiri tapi males ngedit channel dan role satu-satu? Ambil <b>template server Discord</b> yang sudah jadi, <b>gratis</b>.',
        'Want to build your own server but hate editing channels and roles one by one? Grab a ready-made <b>Discord server template</b>, <b>free</b>.') + '</p>' +
      '<h4 class="doc-h">' + tr('Cara pakainya', 'How to use it') + '</h4>' +
      '<ol class="doc-steps">' +
        '<li>' + tr('Buka thread template di Discord (tombol di bawah).', 'Open the template thread on Discord (button below).') + '</li>' +
        '<li>' + tr('Pilih template yang kamu suka, lalu klik <b>View Template</b>.', 'Pick a template you like, then click <b>View Template</b>.') + '</li>' +
        '<li>' + tr('Beri nama servermu, klik <b>Create</b>. Channel dan role-nya langsung tertata.', 'Name your server and click <b>Create</b>. Channels and roles are set up instantly.') + '</li>' +
      '</ol>' +
      '<h4 class="doc-h">' + tr('Pilihan yang tersedia', 'Available options') + '</h4>' +
      '<div class="doc-chips">' +
        ['Advance Server', 'Fruit Simple Template', 'Cute Community', 'Minimal Aesthetic', 'Good Template'].map((n) => '<span>' + esc(n) + '</span>').join('') +
      '</div>' +
      '<p class="doc-p">' + tr('Daftar template bisa bertambah, jadi cek thread-nya buat yang terbaru.', 'The list may grow, so check the thread for the latest ones.') + '</p>'
  }
};

function renderDoc(key) {
  const d = GV_DOCS[key];
  if (!d) return;
  activeGuide = null;
  modalTitle.textContent = d.title();
  modalBody.innerHTML = d.html() +
    '<div class="guide-nav doc-nav"><a class="guide-btn primary" href="' + esc(d.url()) + '" target="_blank" rel="noopener">' + esc(d.cta()) + '</a></div>';
  const box = modalBody.closest('.modal-box');
  if (box) box.scrollTop = 0;
  modalOverlay.classList.add('open');
}

// ---- papan peringkat (dari GV_CONFIG.season) ----
function renderSeason() {
  const S = GV_CONFIG.season;
  const medal = ['🥇', '🥈', '🥉'];
  return '<div class="rank-group-title">' + esc(tr(S.group, S.groupEn || S.group)) + '</div>' +
    S.rows.map((r, i) =>
      '<div class="rank-row"><span class="num">' + (medal[i] || (i + 1)) + '</span>' +
      '<span class="avatar">' + esc((r.name || '?').trim().charAt(0).toUpperCase()) + '</span>' +
      '<span class="name">' + esc(r.name) + '</span>' +
      '<span class="lvl">Lv. ' + esc(r.level) + ' · ' + esc(r.xp) + ' XP</span></div>').join('') +
    '<p style="margin-top:14px;font-size:0.8rem;color:var(--muted)">' + tr(S.footnote, S.footnoteEn || S.footnote) + '</p>';
}

// ---- daftar command (cari + filter + tap buat salin) ----
const GROUP_EN = { Ekonomi: 'Economy', Game: 'Games', Level: 'Level', Umum: 'General', Lainnya: 'Other' };
const groupLabel = (g) => tr(g, GROUP_EN[g] || g);

function renderCommands() {
  const groups = Array.from(new Set(GV_CONFIG.commands.map((c) => c.group || 'Lainnya')));
  return '<input class="cmd-search" id="cmdSearch" type="search" placeholder="' + esc(tr('Cari command...', 'Search commands...')) + '" autocomplete="off" aria-label="' + esc(tr('Cari command', 'Search commands')) + '">' +
    '<div class="cmd-filters" id="cmdFilters"><button type="button" class="cmd-chip active" data-group="">' + tr('Semua', 'All') + '</button>' +
    groups.map((g) => '<button type="button" class="cmd-chip" data-group="' + esc(g) + '">' + esc(groupLabel(g)) + '</button>').join('') + '</div>' +
    '<div class="cmd-list" id="cmdList">' +
    GV_CONFIG.commands.map((c) =>
      '<button type="button" class="cmd-item" data-cmd="' + esc(c.cmd) + '" data-group="' + esc(c.group || 'Lainnya') + '">' +
      '<code>' + esc(c.cmd) + '</code><span>' + esc(tr(c.desc, c.descEn || c.desc)) + '</span><em>' + tr('Salin', 'Copy') + '</em></button>').join('') +
    '</div><p class="cmd-empty" id="cmdEmpty" hidden>' + tr('Gak ada yang cocok. Coba kata lain.', 'No matches. Try another word.') + '</p>' +
    '<p style="margin-top:14px;font-size:0.8rem;color:var(--muted)">' + tr(
      'Tap command buat menyalinnya, lalu tempel di Discord. Ketik <code>.help</code> di server buat lihat yang lengkap.',
      'Tap a command to copy it, then paste it in Discord. Type <code>.help</code> in the server to see the full list.') + '</p>';
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
const evLabel = (ev) => tr(ev.name, ev.nameEn || ev.name);

function buildICS(ev) {
  // Jam acara dalam WIB (UTC+7). Dikonversi ke UTC supaya jalan di semua aplikasi kalender.
  const tm = (ev.time || GV_CONFIG.reminderTime || '20:00').split(':').map(Number);
  const wib = new Date(Date.now() + 7 * 3600 * 1000);
  const y = wib.getUTCFullYear(), mo = wib.getUTCMonth(), d = wib.getUTCDate(), wd = wib.getUTCDay();
  const nowMin = wib.getUTCHours() * 60 + wib.getUTCMinutes();
  const evMin = tm[0] * 60 + tm[1];
  let startWib; // timestamp "WIB sebagai UTC"
  if (ev.daily) {
    startWib = Date.UTC(y, mo, d + (nowMin >= evMin ? 1 : 0), tm[0], tm[1]);
  } else if (typeof ev.weekday === 'number') {
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
  const rule = ev.daily
    ? 'FREQ=DAILY'
    : typeof ev.weekday === 'number'
      ? 'FREQ=WEEKLY;BYDAY=' + days[start.getUTCDay()]
      : 'FREQ=MONTHLY;BYMONTHDAY=' + start.getUTCDate();
  const nm = evLabel(ev);
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Game Verse//Event//ID', 'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    'UID:gv-' + ev.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '@gameverse',
    'DTSTAMP:' + fmt(new Date()),
    'DTSTART:' + fmt(start), 'DTEND:' + fmt(end),
    'RRULE:' + rule,
    'SUMMARY:' + nm + ' - Game Verse',
    'DESCRIPTION:' + tr('Event rutin di server Discord Game Verse. Gabung: ', 'Regular event on the Game Verse Discord server. Join: ') + 'https://discord.gg/' + GV_CONFIG.inviteCode,
    'URL:https://discord.gg/' + GV_CONFIG.inviteCode,
    'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:' + nm + tr(' mulai 30 menit lagi', ' starts in 30 minutes'), 'TRIGGER:-PT30M', 'END:VALARM',
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
  showToast(tr('Pengingat siap. Buka file-nya buat masuk kalender.', 'Reminder ready. Open the file to add it to your calendar.'));
}
function renderEventBody() {
  return '' +
    '<div class="event-row"><span class="day">' + tr('SABTU', 'SATURDAY') + '</span><div><h4>Mabar Night</h4><p>' + tr('Nongkrong & mabar bareng di voice channel.', 'Hang out and play together in the voice channel.') + '</p></div></div>' +
    '<div class="event-row"><span class="day">' + tr('AWAL BULAN', 'MONTHLY') + '</span><div><h4>' + tr('Giveaway Bulanan', 'Monthly Giveaway') + '</h4><p>' + tr('Giveaway buat member aktif, cek pengumuman.', 'A giveaway for active members, check the announcements.') + '</p></div></div>' +
    '<div class="event-row"><span class="day">' + tr('TIAP HARI', 'DAILY') + '</span><div><h4>' + tr('Trivia Setiap Hari', 'Daily Trivia') + '</h4><p>' + tr('Jawab trivia bareng, hadiah coin & role spesial.', 'Answer trivia together for coins and special roles.') + '</p></div></div>' +
    '<div class="event-row"><span class="day">' + tr('TIAP HARI', 'DAILY') + '</span><div><h4>' + tr('Streak Harian', 'Daily Streak') + '</h4><p>' + tr('Jaga api streak kamu biar gak padam.', 'Keep your streak flame from going out.') + '</p></div></div>';
}
function initEventModal() {
  const rows = modalBody.querySelectorAll('.event-row');
  GV_CONFIG.events.forEach((ev, i) => {
    const row = rows[i];
    if (!row) return;
    const holder = row.querySelector('div');
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'ics-btn'; btn.textContent = tr('📅 Ingatkan aku', '📅 Remind me');
    btn.addEventListener('click', () => downloadICS(ev));
    holder.appendChild(btn);
  });
  const note = document.createElement('p');
  note.className = 'ics-note';
  const t = GV_CONFIG.reminderTime || '20:00';
  note.textContent = tr('Jam acara: ' + t + ' WIB (kalau beda, ikuti pengumuman di server).', 'Event time: ' + t + ' WIB (if it differs, follow the announcements in the server).');
  modalBody.appendChild(note);
}

const modalData = {
  voice:   { title: () => tr(GV_CONFIG.season.title, GV_CONFIG.season.titleEn || GV_CONFIG.season.title), build: renderSeason },
  economy: { title: () => tr('🎲 Daftar Command Economy & Game', '🎲 Economy & Game Commands'), build: renderCommands, after: initCommandUI },
  event:   { title: () => tr('🎉 Jadwal Event Rutin', '🎉 Regular Event Schedule'), build: renderEventBody, after: initEventModal }
};

document.querySelectorAll('[data-modal]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const data = modalData[btn.dataset.modal];
    if (!data) return;
    modalTitle.textContent = data.title();
    modalBody.innerHTML = data.build();
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
  { icon: '🧩', title: 'Fitur Server',     titleEn: 'Server Features',   desc: 'Voice leveling, economy & mini game, event rutin',        descEn: 'Voice leveling, economy & mini games, regular events' },
  { icon: '🎮', title: 'Coba Langsung',    titleEn: 'Try It Live',       desc: "KTP digital, CV Ta'aruf, streak harian, ultah",           descEn: "Digital ID, Ta'aruf CV, daily streak, birthdays" },
  { icon: '🧭', title: 'Panduan & Aturan', titleEn: 'Guides & Rules',    desc: 'Aturan server, panduan awal, template gratis',            descEn: 'Server rules, beginner guide, free templates' },
  { icon: '🏆', title: 'Level & Galeri',   titleEn: 'Levels & Gallery',  desc: 'Cara naik level dan sekilas isi server',                  descEn: 'How to level up and a glimpse of the server' },
  { icon: '❓', title: 'FAQ',              titleEn: 'FAQ',               desc: 'Jawaban cepat buat pertanyaan yang sering muncul',        descEn: 'Quick answers to common questions' },
  { icon: '💬', title: 'Kasih Masukan',    titleEn: 'Give Feedback',     desc: 'Rating, kritik, dan saran fitur',                         descEn: 'Ratings, criticism, and feature ideas' }
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
    document.querySelectorAll('.top-nav [data-nav]').forEach((n) => {
      n.classList.toggle('active', parseInt(n.dataset.nav, 10) === currentPage);
    });

    // Tab aktif digeser ke tengah (tanpa ikut menggeser halaman)
    const at = tabs[currentPage];
    if (at && tabbar && tabbar.scrollWidth > tabbar.clientWidth) {
      tabbar.scrollTo({ left: at.offsetLeft - (tabbar.clientWidth - at.offsetWidth) / 2, behavior: 'smooth' });
    }

    mobileNextBtn.textContent = currentPage === totalPages - 1 ? tr('Ke Halaman Utama', 'Back to Top') : tr('Lanjut', 'Next');

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

  document.addEventListener('gv:lang', renderPage);
  renderPage();
}

// Tombol "Lihat Fitur" di bagian atas: tampilkan pilihan halaman, lalu loncat langsung ke sana
(function initPicker() {
  const btn = document.getElementById('seeFeatures');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    activeGuide = null;
    modalTitle.textContent = tr('Mau lihat apa?', 'What would you like to see?');
    modalBody.innerHTML = '<div class="pick-grid">' + PAGE_INFO.map((p, i) =>
      '<button type="button" class="pick" data-pick="' + i + '"><span class="pi" aria-hidden="true">' + p.icon + '</span>' +
      '<span><b>' + esc(tr(p.title, p.titleEn)) + '</b><small>' + esc(tr(p.desc, p.descEn)) + '</small></span></button>').join('') + '</div>';
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

const starTextsId = { 1: 'Kurang banget', 2: 'Kurang seru', 3: 'Lumayan', 4: 'Seru!', 5: 'Mantap banget!' };
const starTextsEn = { 1: 'Not good at all', 2: 'Not that fun', 3: 'Decent', 4: 'Fun!', 5: 'Awesome!' };
const starText = (n) => tr(starTextsId[n], starTextsEn[n]);

(function initVoice() {
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  const status = form.querySelector('.vstatus');
  const submitBtn = form.querySelector('.btn-submit');
  const starHint = document.getElementById('starHint');
  const defaultLabel = submitBtn.textContent;

  function refreshHint() {
    const c = form.querySelector('input[name="rating"]:checked');
    starHint.textContent = c ? starText(c.value) : tr('Pilih bintang dulu', 'Pick your stars first');
  }
  form.querySelectorAll('input[name="rating"]').forEach((r) => r.addEventListener('change', refreshHint));
  document.addEventListener('gv:lang', refreshHint);
  refreshHint();

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
      say(tr('Pilih bintang dulu, atau tulis masukanmu minimal 10 huruf.', 'Pick your stars first, or write at least 10 characters of feedback.'), 'err');
      return;
    }
    const wait = FEEDBACK_COOLDOWN_MS - (Date.now() - lastSent());
    if (wait > 0) {
      say(tr('Tunggu ' + Math.ceil(wait / 1000) + ' detik lagi sebelum kirim berikutnya.', 'Please wait ' + Math.ceil(wait / 1000) + ' more seconds before sending again.'), 'err');
      return;
    }
    if (!FEEDBACK_WEBHOOK) {
      console.warn('FEEDBACK_WEBHOOK di script.js masih kosong.');
      say(tr('Form belum diaktifkan admin. Coba lagi nanti ya.', 'The form has not been activated by the admin yet. Please try again later.'), 'err');
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
    submitBtn.textContent = tr('Mengirim...', 'Sending...');
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
      refreshHint();
      say(tr('Makasih! Masukan kamu sudah terkirim ke admin.', 'Thank you! Your feedback has been sent to the admins.'), 'ok');
    } catch (err) {
      say(tr('Gagal kirim. Cek koneksi kamu lalu coba lagi.', 'Failed to send. Check your connection and try again.'), 'err');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = tr('Kirim Masukan', 'Send Feedback');
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

// Terjemahan Inggris panduan (urutan langkah sama persis dengan guideData di atas)
const GUIDE_EN = {
  ktp: { title: '🪪 How to Make a Digital ID', steps: [
    { title: 'Fill in your details (1/2)', text: 'Click the "Buat KTP" button in the channel, then fill in your full name, place and date of birth, gender, blood type, and religion.' },
    { title: 'Fill in your details (2/2)', text: 'Continue with marital status, occupation, address, village, and district. When everything is filled in, click Submit.' },
    { title: 'Your ID is ready', text: 'The bot immediately sends your Game Verse resident ID with an ID number and a custom design. Show it off in the server.' }
  ] },
  cv: { title: "💌 How to Make a Ta'aruf CV", steps: [
    { title: 'Fill in your CV details', text: 'Click the "Buat CV" button, then fill in your Origin (city) and Age. Instagram, TikTok, and Discord can be left blank if you do not want them shown.' },
    { title: 'Your CV is ready', text: "The bot sends your Ta'aruf CV card with your home city, age, and the social accounts you filled in." }
  ] },
  streak: { title: '🔥 How to Play Daily Streak', steps: [
    { title: 'TikTok Streak, but on Discord!', text: 'Tag a friend in any chat (text, photo, or video, anything goes), then your friend must reply and tag you back on the same day.',
      points: [
        'If you keep tagging each other every day, your streak grows.',
        'If you skip a day without tagging each other, the streak resets to 0.',
        'The bot announces your latest streak in the channel.'
      ] }
  ] },
  ultah: { title: '🎂 How to Register Your Birthday', steps: [
    { title: 'Click the sign-up button', text: 'In the Birthday channel, click the "Daftar Ulang Tahun" button under the poster.' },
    { title: 'Enter your birth date', text: 'Enter your birth date in the DD-MM-YYYY format, for example 17-08-2005, then click Submit. You only need to do this once.' },
    { title: 'The bot greets you automatically', text: 'On the day itself, the bot sends you a birthday greeting card. Other members can click "Ikut Rayain" or "Kirim Ucapan Juga".' }
  ] }
};

// Ambil panduan sesuai bahasa yang dipilih
function guideLang(key) {
  const base = guideData[key];
  const en = GUIDE_EN[key];
  if (!base) return null;
  if (!en || tr('id', 'en') !== 'en') return base;
  return Object.assign({}, base, {
    title: en.title,
    steps: base.steps.map((st, i) => Object.assign({}, st, en.steps[i] || {}))
  });
}

let activeGuide = null;
let activeStep = 0;

function renderGuide(key, step) {
  const g = guideLang(key);
  if (!g) return;
  activeGuide = key;
  activeStep = Math.max(0, Math.min(g.steps.length - 1, step));
  const s = g.steps[activeStep];
  const total = g.steps.length;
  const last = activeStep === total - 1;

  modalTitle.textContent = g.title;
  modalBody.innerHTML = `
    ${total > 1 ? `<div class="guide-count">${tr('Langkah ' + (activeStep + 1) + ' dari ' + total, 'Step ' + (activeStep + 1) + ' of ' + total)}</div>` : ''}
    <div class="guide-shot"><img src="${s.img}" alt="${s.title}"></div>
    <h4 class="guide-title">${s.title}</h4>
    <p class="guide-text">${s.text}</p>
    ${s.points ? `<ul class="guide-points">${s.points.map((p) => `<li>${p}</li>`).join('')}</ul>` : ''}
    ${total > 1 ? `<div class="guide-dots">${g.steps.map((_, i) =>
      `<button type="button" class="guide-dot${i === activeStep ? ' active' : ''}" data-step="${i}" aria-label="${tr('Langkah ', 'Step ')}${i + 1}"></button>`).join('')}</div>` : ''}
    <div class="guide-nav">
      ${activeStep > 0 ? '<button type="button" class="guide-btn ghost" data-go="prev">' + tr('Sebelumnya', 'Previous') + '</button>' : ''}
      ${last
        ? `<a class="guide-btn primary" href="${g.link}" target="_blank" rel="noopener">${tr('Buka Channel di Discord', 'Open Channel on Discord')}</a>`
        : '<button type="button" class="guide-btn primary" data-go="next">' + tr('Lanjut', 'Next') + '</button>'}
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
    labels.forEach((l) => { l.textContent = t === 'dark' ? tr('Mode gelap', 'Dark mode') : tr('Mode terang', 'Light mode'); });
  }
  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  document.addEventListener('gv:lang', () => apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'));

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
  const refreshLabel = () => burger.setAttribute('aria-label', burger.getAttribute('aria-expanded') === 'true' ? tr('Tutup menu', 'Close menu') : tr('Buka menu', 'Open menu'));
  document.addEventListener('gv:lang', refreshLabel);
  refreshLabel();

  function setOpen(open, returnFocus) {
    drawer.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? tr('Tutup menu', 'Close menu') : tr('Buka menu', 'Open menu'));
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
  const HARI_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function compute() {
    // WIB = UTC+7 (tanpa DST), jadi cukup geser 7 jam lalu baca field UTC
    const j = new Date(Date.now() + 7 * 3600 * 1000);
    const y = j.getUTCFullYear(), mo = j.getUTCMonth(), d = j.getUTCDate(), wd = j.getUTCDay();
    const nowMin = j.getUTCHours() * 60 + j.getUTCMinutes();
    let best = null;

    GV_CONFIG.events.forEach((ev) => {
      if (ev.daily) return; // tiap hari: bukan "event berikutnya"
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
    const label = typeof ev.weekday === 'number'
      ? tr(HARI[ev.weekday], HARI_EN[ev.weekday])
      : tr('Tanggal ' + ev.monthDay, 'Day ' + ev.monthDay + ' of the month');

    let text;
    if (delta === 0) {
      if (evMin !== null && evMin > nowMin) {
        const left = evMin - nowMin;
        const h = Math.floor(left / 60), m = left % 60;
        text = tr((h ? h + ' jam ' : '') + m + ' menit lagi', 'in ' + (h ? h + ' h ' : '') + m + ' min');
      } else {
        text = tr('Hari ini!', 'Today!');
      }
    } else if (delta === 1) {
      text = tr('Besok', 'Tomorrow');
    } else {
      text = tr(delta + ' hari lagi', 'in ' + delta + (delta === 1 ? ' day' : ' days'));
    }

    nameEl.textContent = evLabel(ev);
    whenEl.textContent = label + ' · ' + text;
    whenEl.classList.toggle('today', delta === 0);
  }

  render();
  document.addEventListener('gv:lang', render);
  setInterval(render, 60 * 1000);
})();

// ===== Angka member & online asli dari Discord (ada angka cadangan kalau gagal) =====
(function initLiveStats() {
  const mEl = document.getElementById('statMembers');
  const oEl = document.getElementById('statOnline');
  const oLabel = document.getElementById('statOnlineLabel');
  const code = GV_CONFIG.inviteCode;
  if (!mEl || !oEl || !code) return;

  let live = false;
  function setLabel() {
    if (!oLabel) return;
    oLabel.textContent = live ? tr('Online sekarang', 'Online now') : tr('Aktif Ngobrol', 'Always chatting');
  }
  document.addEventListener('gv:lang', setLabel);
  setLabel();

  function countUp(el, to, done) {
    const fmt = (n) => Math.round(n).toLocaleString('id-ID');
    if (reduceMotion) { el.textContent = fmt(to); if (done) done(); return; }
    const start = performance.now(), dur = 900;
    (function tick(now) {
      const k = Math.min(1, (now - start) / dur);
      el.textContent = fmt(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick); else if (done) done();
    })(start);
  }
  // jumlah online dikurangi bot yang disembunyikan (diisi oleh kartu "online sekarang")
  let onlineBase = 0;
  window.gvRefreshOnline = function () {
    if (onlineBase > 0) oEl.textContent = Math.max(0, onlineBase - (window.__gvBots || 0)).toLocaleString('id-ID');
  };
  function show(members, online) {
    if (members > 0) { countUp(mEl, members); setScale(members); }
    if (online > 0) {
      onlineBase = online;
      countUp(oEl, Math.max(0, online - (window.__gvBots || 0)), window.gvRefreshOnline);
      live = true; setLabel();
      if (oLabel) oLabel.classList.add('live');
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

  function render() {
    const tiers = document.getElementById('tiers');
    if (tiers && C.roleTiers && C.roleTiers.length) {
      tiers.innerHTML = '<h3 class="sub-h">' + tr('Role yang bisa kamu dapat', 'Roles you can earn') + '</h3><div class="tier-list">' +
        C.roleTiers.map((t) => '<div class="tier"><b>Lv. ' + esc(t.level) + '</b><span>' + esc(tr(t.role, t.roleEn || t.role)) + '</span></div>').join('') +
        '</div>';
      tiers.hidden = false;
    }

    const testi = document.getElementById('testimoni');
    const testiGrid = document.getElementById('testiGrid');
    if (testi && testiGrid && C.testimonials && C.testimonials.length) {
      testiGrid.innerHTML = C.testimonials.map((t) => {
        const r = Math.max(0, Math.min(5, parseInt(t.rating || 0, 10)));
        return '<figure class="tcard">' +
          (r ? '<div class="tstars" aria-label="' + esc(tr(r + ' dari 5 bintang', r + ' out of 5 stars')) + '">' + '★'.repeat(r) + '<span>' + '★'.repeat(5 - r) + '</span></div>' : '') +
          '<blockquote>' + esc(tr(t.text, t.textEn || t.text)) + '</blockquote>' +
          '<figcaption>' + esc(t.name || tr('Member Game Verse', 'Game Verse member')) + '</figcaption></figure>';
      }).join('');
      testi.hidden = false;
    }

    const team = document.getElementById('tim');
    const teamGrid = document.getElementById('teamGrid');
    if (team && teamGrid && C.team && C.team.length) {
      teamGrid.innerHTML = C.team.map((m) => {
        const initial = esc((m.name || '?').trim().charAt(0).toUpperCase());
        const av = m.avatar ? '<img src="' + esc(m.avatar) + '" alt="' + esc(m.name) + '" loading="lazy">' : initial;
        return '<div class="member"><div class="avatar-lg">' + av + '</div><b>' + esc(m.name) + '</b><span>' + esc(tr(m.role || '', m.roleEn || m.role || '')) + '</span></div>';
      }).join('');
      team.hidden = false;
    }
  }
  render();
  document.addEventListener('gv:lang', render);
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
      text: tr('Gabung komunitas Discord Game Verse: mabar, ngobrol santai, dan naik level bareng!', 'Join the Game Verse Discord community: play together, chat, and level up!'),
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

  const link = document.getElementById('annLink');
  function fill() {
    document.getElementById('annText').textContent = tr(A.text, A.textEn || A.text);
    if (A.link) {
      link.href = A.link;
      link.textContent = tr(A.linkText || 'Selengkapnya', A.linkTextEn || A.linkText || 'Read more');
      link.hidden = false;
    }
  }
  fill();
  document.addEventListener('gv:lang', fill);
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

  function render() {
    document.getElementById('spotTitle').textContent = S.title || 'Member of the Month';
    const initial = esc((S.name || '?').trim().charAt(0).toUpperCase());
    const av = S.avatar ? '<img src="' + esc(S.avatar) + '" alt="' + esc(S.name) + '" loading="lazy">' : initial;
    const note = tr(S.note || '', S.noteEn || S.note || '');
    card.innerHTML = '<div class="avatar-lg spot-av">' + av + '</div>' +
      '<div class="spot-body"><span class="spot-crown" aria-hidden="true">👑</span><b>' + esc(S.name) + '</b>' +
      (note ? '<p>' + esc(note) + '</p>' : '') + '</div>';
    sec.hidden = false;
  }
  render();
  document.addEventListener('gv:lang', render);
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


// ===== Menu navigasi di header (layar lebar): loncat langsung ke halaman =====
(function initTopNav() {
  document.querySelectorAll('.top-nav [data-nav]').forEach((b) => {
    b.addEventListener('click', () => gvGoTo(parseInt(b.dataset.nav, 10), true));
  });
})();


// ===== Kata "ratusan / ribuan" di ajakan gabung mengikuti jumlah member asli =====
let memberTotal = 0;
function applyScale() {
  const el = document.getElementById('ctaScale');
  if (!el) return;
  const big = memberTotal >= 1000;
  el.textContent = tr(big ? 'ribuan' : 'ratusan', big ? 'thousands of' : 'hundreds of');
}
function setScale(n) { memberTotal = n; applyScale(); }
document.addEventListener('gv:lang', applyScale);

// ===== Member online sekarang (Widget Discord, tanpa bot & tanpa API key) =====
(function initOnline() {
  const box = document.getElementById('onlineNow');
  const O = GV_CONFIG.online || {};
  if (!box || O.enabled === false || !GV_CONFIG.guildId) return;
  let data = null;

  function render() {
    if (!data) return;
    const all = Array.isArray(data.members) ? data.members : [];
    const clean = (x) => String(x == null ? '' : x).trim().toLowerCase().replace(/\s+/g, ' ');
    const hide = (O.hideNames || []).map(clean);
    const isHidden = (name) => {
      const n = clean(name);
      return hide.some((p) => (p.slice(-1) === '*' ? n.indexOf(p.slice(0, -1)) === 0 : n === p));
    };
    const members = all.filter((m) => !isHidden(m.username));
    const hiddenCount = all.length - members.length;      // bot yang disembunyikan
    window.__gvBots = hiddenCount;
    if (window.gvRefreshOnline) window.gvRefreshOnline();   // angka "Online sekarang" di atas ikut dikurangi
    const total = Math.max((data.presence_count || 0) - hiddenCount, members.length);
    if (!total) { box.hidden = true; return; }

    const shown = members.slice(0, O.maxAvatars || 10);
    const rest = Math.max(0, total - shown.length);

    // siapa lagi di voice channel mana
    const names = {};
    (data.channels || []).forEach((c) => { names[c.id] = c.name; });
    const perCh = {};
    members.forEach((m) => { if (m.channel_id) perCh[m.channel_id] = (perCh[m.channel_id] || 0) + 1; });
    const chips = Object.keys(perCh).sort((a, b) => perCh[b] - perCh[a]).slice(0, 3).map((id) =>
      '<span class="on-chip">\uD83D\uDD0A ' + esc(names[id] || tr('Voice', 'Voice')) + ' \u00B7 ' + perCh[id] + '</span>').join('');

    const avatars = shown.map((m) => {
      const nm = (m.username || '?').trim();
      const title = O.showNames ? ' data-name="' + esc(nm) + '" tabindex="0" aria-label="' + esc(nm) + '"' : '';
      const img = m.avatar_url ? '<img src="' + esc(m.avatar_url) + '" alt="" loading="lazy" referrerpolicy="no-referrer">' : '';
      return '<span class="on-av"' + title + '><i>' + esc(nm.charAt(0).toUpperCase()) + '</i>' + img + '</span>';
    }).join('');

    box.setAttribute('aria-label', tr('Member yang sedang online', 'Members online now'));
    box.innerHTML =
      '<div class="on-head"><span class="on-dot" aria-hidden="true"></span><b>' + total + '</b> ' +
        tr('member online sekarang', 'members online now') + '</div>' +
      '<div class="on-row"><div class="on-stack">' + avatars + '</div>' +
        (rest ? '<span class="on-more">+' + rest + ' ' + tr('lainnya', 'more') + '</span>' : '') + '</div>' +
      (chips ? '<div class="on-voice">' + chips + '</div>' : '');
    // foto gagal dimuat -> tampil huruf awal saja
    box.querySelectorAll('.on-av img').forEach((im) => im.addEventListener('error', () => im.remove()));
    box.hidden = false;
  }

  function load() {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 7000);
    fetch('https://discord.com/api/guilds/' + encodeURIComponent(GV_CONFIG.guildId) + '/widget.json', { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status))))
      .then((j) => { clearTimeout(timer); data = j; render(); })
      .catch(() => { box.hidden = true; }); // Widget belum aktif / gagal: sembunyikan
  }

  load();
  setInterval(() => { if (!document.hidden) load(); }, 2 * 60 * 1000);
  document.addEventListener('gv:lang', render);
})();
