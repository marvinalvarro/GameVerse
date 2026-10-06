// =====================================================================
// i18n.js: terjemahan ID <-> EN dengan satu tombol (#langToggle)
// Pasang SETELAH script.js:  <script src="i18n.js?v=12"></script>
// Cara kerja: teks Indonesia di halaman dicocokkan dengan kamus D / H di bawah,
// termasuk isi popup yang dibuat lewat JS (dipantau MutationObserver).
// Mau tambah teks baru? Cukup tambah satu baris  'teks indonesia': 'English text'.
// =====================================================================
(function () {
  // ---- Kamus teks biasa (kunci = teks Indonesia persis, tanpa spasi berlebih) ----
  const D = {
    // header & hero
    'Tempat nongkrong, mabar, dan': 'Hang out, play together, and',
    'naik level': 'level up',
    'bareng.': 'together.',
    'Game Verse itu komunitas Discord buat siapa aja yang suka main game, ngobrol santai, atau sekadar cari temen baru. Ada voice leveling, event rutin, sampai economy game—semua dalam satu server.':
      'Game Verse is a Discord community for anyone who loves gaming, chilling out, or just making new friends. Voice leveling, regular events, even an economy game, all in one server.',
    'Gabung Sekarang': 'Join Now',
    'Lihat Fitur': 'See Features',
    'Member': 'Members',
    'Channel & Voice': 'Channels & Voice',
    'Aktif Ngobrol': 'Always Chatting',
    'Online sekarang': 'Online now',
    // event berikutnya
    'Event berikutnya': 'Next event',
    'Cek jadwal lengkapnya': 'See the full schedule',
    'Jadwal ⌄': 'Schedule ⌄',
    'Mabar Night': 'Game Night',
    'Giveaway Bulanan': 'Monthly Giveaway',
    'Minggu': 'Sunday', 'Senin': 'Monday', 'Selasa': 'Tuesday', 'Rabu': 'Wednesday',
    'Kamis': 'Thursday', 'Jumat': 'Friday', 'Sabtu': 'Saturday',
    'Besok': 'Tomorrow', 'Hari ini!': 'Today!',
    // bagian fitur + tab
    'Yang bisa kamu temuin di sini': 'What you can find here',
    'Pilih bagian yang mau kamu lihat, atau geser ke samping.': 'Pick a section, or swipe sideways.',
    'Fitur': 'Features', 'Coba Langsung': 'Try It', 'Panduan': 'Guides',
    'Level & Galeri': 'Levels & Gallery', 'Masukan': 'Feedback',
    'Lanjut': 'Next', 'Ke Halaman Utama': 'Back to Home',
    'Fitur Server (klik buat lihat contoh)': 'Server Features (tap for a preview)',
    'Coba Langsung (klik buat lihat cara pakainya)': 'Try It Out (tap to see how)',
    'Panduan & Aturan (klik buat baca)': 'Guides & Rules (tap to read)',
    // kartu fitur
    'Voice & Chat Leveling': 'Voice & Chat Leveling',
    'Makin aktif ngobrol atau nongkrong di voice, makin cepat naik level dan dapat role eksklusif.': 'The more you chat or hang out in voice, the faster you level up and unlock exclusive roles.',
    'Lihat Leaderboard ⌄': 'View Leaderboard ⌄',
    'Economy & Mini Game': 'Economy & Mini Games',
    'Main slot, blackjack, tebak angka, sampai kumpulin coin buat ditukar reward server.': 'Play slots, blackjack, number guessing, and collect coins to trade for server rewards.',
    'Lihat Daftar Command ⌄': 'View Command List ⌄',
    'Event Rutin': 'Regular Events',
    'Trivia, giveaway, sampai aktivitas seru rutin—selalu ada alasan buat mampir.': 'Trivia, giveaways, and fun recurring activities, always a reason to drop by.',
    'Lihat Jadwal ⌄': 'View Schedule ⌄',
    'KTP Digital': 'Digital ID Card',
    'Bikin KTP warga Game Verse kamu sendiri, lengkap dengan desain custom.': 'Make your own Game Verse citizen ID card, with a custom design.',
    "CV Ta'aruf": 'Ta’aruf CV',
    "Bikin CV ta'aruf buat yang lagi niat serius cari jodoh.": 'Make a ta’aruf CV if you’re seriously looking for a partner.',
    'Streak Harian': 'Daily Streak',
    'TikTok Streak tapi di Discord! Saling tag teman tiap hari biar api streak kalian gak padam.': 'TikTok-style streaks, but on Discord! Tag a friend every day to keep your streak fire alive.',
    'Ultah': 'Birthday',
    'Daftarin tanggal lahir kamu, bot bakal otomatis ngucapin pas hari-H.': 'Register your birthday and the bot will greet you automatically on the day.',
    'Lihat Cara Bikin': 'See How to Make One', 'Lihat Cara Main': 'See How to Play', 'Lihat Cara Daftar': 'See How to Register',
    'Aturan Server': 'Server Rules',
    '11 aturan biar server tetap nyaman buat semua orang. Baca dulu sebelum ikut ngobrol.': '11 rules to keep the server comfy for everyone. Read them before you start chatting.',
    'Baca Aturan': 'Read Rules',
    'Panduan Awal Bermain': 'Getting Started Guide',
    'Baru main Discord? Ini cara ngobrol, ambil role game, sampai minta bantuan admin.': 'New to Discord? Learn how to chat, pick game roles, and ask admins for help.',
    'Baca Panduan': 'Read Guide',
    'Template Server Gratis': 'Free Server Templates',
    'Mau bikin server sendiri tapi males ngatur channel dan role? Ambil yang sudah jadi.': 'Want your own server but don’t feel like setting up channels and roles? Grab a ready-made one.',
    'Lihat Template': 'View Templates',
    // level & galeri
    'Cara naik level': 'How to level up',
    'Makin aktif, makin tinggi levelmu. Gak perlu diatur manual, semuanya otomatis.': 'The more active you are, the higher your level. No manual setup, it’s all automatic.',
    'Ngobrol & nongkrong': 'Chat & hang out',
    'Aktif di chat dan duduk di voice channel bareng member lain.': 'Be active in chat and join voice channels with other members.',
    'Kumpulin XP': 'Collect XP',
    'Makin sering aktif, makin banyak XP yang kamu dapat.': 'The more often you’re active, the more XP you earn.',
    'Naik level': 'Level up',
    'Dapat role eksklusif': 'Get exclusive roles',
    'Level tertentu membuka role spesial yang gak dimiliki semua orang.': 'Certain levels unlock special roles not everyone has.',
    'Sekilas isi server': 'A peek inside the server',
    'Geser buat lihat lebih banyak. Klik gambarnya buat memperbesar.': 'Swipe to see more. Tap an image to enlarge it.',
    'KTP warga': 'Citizen ID', 'Ucapan ultah': 'Birthday card', 'Daftar ultah': 'Birthday signup', 'Streak harian': 'Daily streak',
    // FAQ (teks tanpa markup)
    'Tanya jawab & aturan': 'FAQ & rules',
    'Jawaban cepat buat pertanyaan yang sering muncul.': 'Quick answers to common questions.',
    'Gimana cara gabung?': 'How do I join?',
    'Apa saja aturan servernya?': 'What are the server rules?',
    'Gimana cara naik level?': 'How do I level up?',
    'Gimana cek coin dan main game?': 'How do I check coins and play games?',
    "Gimana bikin KTP atau CV Ta'aruf?": 'How do I make an ID card or ta’aruf CV?',
    'Kenapa streak aku reset ke 0?': 'Why did my streak reset to 0?',
    'Ultahku kok gak diucapin bot?': 'Why didn’t the bot greet my birthday?',
    'Bisa dipasang di layar HP?': 'Can I add this to my phone’s home screen?',
    'Ini server resmi Discord?': 'Is this an official Discord server?',
    'Streak reset kalau kelewat sehari tanpa saling tag dengan temanmu. Kalian berdua harus saling tag setiap hari biar apinya terus nyala.': 'Your streak resets if you skip a day without tagging each other. You both need to tag each other every day to keep the fire going.',
    'Bukan. Game Verse adalah komunitas independen dan tidak berafiliasi dengan Discord.': 'No. Game Verse is an independent community and is not affiliated with Discord.',
    // masukan
    'Suara kamu penting': 'Your voice matters',
    'Kasih rating, kritik, atau usul fitur. Semua masuk langsung ke admin.': 'Leave a rating, feedback, or feature ideas. It all goes straight to the admins.',
    'Seberapa seru Game Verse buat kamu?': 'How fun is Game Verse for you?',
    'Pilih bintang dulu': 'Pick a star rating first',
    'Kurang banget': 'Very poor', 'Kurang seru': 'Not fun', 'Lumayan': 'Decent', 'Seru!': 'Fun!', 'Mantap banget!': 'Awesome!',
    'Mau ngasih apa?': 'What would you like to share?',
    'Kritik': 'Criticism', 'Saran fitur': 'Feature idea', 'Laporan masalah': 'Bug report', 'Lainnya': 'Other',
    'Nama Discord': 'Discord name', '(boleh dikosongin)': '(optional)',
    'Ceritain di sini': 'Tell us more', '(opsional kalau sudah kasih bintang)': '(optional if you gave stars)',
    'contoh: marvin.': 'e.g. marvin.',
    'Apa yang kamu suka, kurang nyaman, atau pengen ditambah?': 'What do you like, what feels off, or what should we add?',
    'Kirim Masukan': 'Send Feedback', 'Mengirim...': 'Sending...',
    'Makasih! Masukan kamu sudah terkirim ke admin.': 'Thanks! Your feedback was sent to the admins.',
    'Gagal kirim. Cek koneksi kamu lalu coba lagi.': 'Failed to send. Check your connection and try again.',
    'Pilih bintang dulu, atau tulis masukanmu minimal 10 huruf.': 'Pick a star rating first, or write at least 10 characters.',
    // cta, footer, menu
    'Siap gabung?': 'Ready to join?',
    'Satu klik doang, langsung bisa mabar dan ngobrol bareng ribuan member lain.': 'One click and you can play and chat with thousands of other members.',
    'Ajak teman': 'Invite friends', 'Pasang di HP': 'Install on phone', 'Pasang di layar utama': 'Add to home screen',
    '© 2026 Game Verse. Bukan server resmi Discord, komunitas independen.': '© 2026 Game Verse. Not an official Discord server, an independent community.',
    'Beranda': 'Home', 'Kembali ke bagian paling atas': 'Back to the very top',
    'Fitur Server': 'Server Features',
    'Voice leveling, economy, event rutin': 'Voice leveling, economy, regular events',
    'Voice leveling, economy & mini game, event rutin': 'Voice leveling, economy & mini games, regular events',
    "KTP digital, CV Ta'aruf, streak, ultah": 'Digital ID, ta’aruf CV, streaks, birthdays',
    "KTP digital, CV Ta'aruf, streak harian, ultah": 'Digital ID, ta’aruf CV, daily streaks, birthdays',
    'Panduan & Aturan': 'Guides & Rules',
    'Aturan server, panduan awal, template': 'Server rules, getting started, templates',
    'Aturan server, panduan awal, template gratis': 'Server rules, getting started, free templates',
    'Cara naik level dan sekilas isi server': 'How to level up and a peek inside',
    'Jawaban cepat buat pertanyaan umum': 'Quick answers to common questions',
    'Jawaban cepat buat pertanyaan yang sering muncul': 'Quick answers to common questions',
    'Kasih Masukan': 'Give Feedback', 'Rating, kritik, dan saran fitur': 'Ratings, feedback, and feature ideas',
    'Tampilan': 'Appearance', 'Mode terang': 'Light mode', 'Mode gelap': 'Dark mode',
    'Mau lihat apa?': 'What do you want to see?',
    // popup: command & event & leaderboard
    '🎲 Daftar Command Economy & Game': '🎲 Economy & Game Commands',
    '🎉 Jadwal Event Rutin': '🎉 Regular Event Schedule',
    '🏆 Leaderboard Juara Season 1 — Voice': '🏆 Season 1 Champions Leaderboard — Voice',
    'Cari command...': 'Search commands...',
    'Semua': 'All', 'Ekonomi': 'Economy', 'Umum': 'General', 'Salin': 'Copy',
    'Gak ada yang cocok. Coba kata lain.': 'No matches. Try another word.',
    'Cek saldo coin kamu': 'Check your coin balance',
    'Main slot, adu untung': 'Spin the slots and test your luck',
    'Main blackjack lawan bot': 'Play blackjack against the bot',
    'Tebak angka, menang dapat coin': 'Guess the number and win coins',
    'Tantang temen main tic-tac-toe': 'Challenge a friend to tic-tac-toe',
    'Jawab trivia, dapat hadiah coin': 'Answer trivia and win coins',
    'Cek level dan posisimu di leaderboard': 'Check your level and leaderboard position',
    'Lihat semua command lengkap': 'See the full command list',
    'Lihat posisi rank & level voice kamu di leaderboard': 'See your voice rank and level on the leaderboard',
    'Pantau progres level chat kamu': 'Track your chat level progress',
    'Lihat leaderboard voice dari season yang sudah lewat': 'View the voice leaderboard from past seasons',
    'Cek progres api streak kamu': 'Check your streak fire progress',
    'Lihat posisi streak kamu di leaderboard': 'See your streak position on the leaderboard',
    'JUMAT': 'FRIDAY', 'SABTU': 'SATURDAY', 'AWAL BULAN': 'START OF MONTH', 'TIAP HARI': 'EVERY DAY',
    'Trivia Setiap Hari': 'Trivia Day',
    'Jawab trivia bareng, hadiah coin & role spesial.': 'Answer trivia together, win coins & special roles.',
    'Nongkrong & mabar bareng di voice channel.': 'Hang out and play together in voice channels.',
    'Giveaway buat member aktif, cek pengumuman.': 'Giveaways for active members, watch the announcements.',
    'Jaga api streak kamu biar gak padam.': 'Keep your streak fire burning.',
    '📅 Ingatkan aku': '📅 Remind me',
    'Pengingat siap. Buka file-nya buat masuk kalender.': 'Reminder ready. Open the file to add it to your calendar.',
    'Gagal menyalin': 'Copy failed'
  };

  // ---- Kamus untuk elemen yang isinya campur markup (kunci = innerHTML) ----
  const H = {
    'Pantau posisimu kapan aja lewat command <code>.rank</code> di server.': 'Check your position anytime with the <code>.rank</code> command in the server.',
    'Klik tombol <b>Join Server</b> di atas, nanti kamu diarahkan ke Discord. Gratis, tinggal klik dan masuk.': 'Click <b>Join Server</b> above and you’ll be taken to Discord. It’s free, just click and you’re in.',
    'Singkatnya: saling menghormati, tanpa spam, tanpa promosi, dan tanpa konten terlarang. Aturan lengkapnya ada 11 poin, baca di <a href="#panduan" data-gopage="2">tab Panduan</a>.': 'In short: respect each other, no spam, no promotion, no prohibited content. The full rules have 11 points, read them in the <a href="#panduan" data-gopage="2">Guides tab</a>.',
    'Aktif ngobrol di chat dan nongkrong di voice channel. XP terkumpul otomatis. Ketik <code>.rank</code> di server buat cek posisimu.': 'Be active in chat and hang out in voice channels. XP is collected automatically. Type <code>.rank</code> in the server to check your position.',
    'Ketik <code>.balance</code> buat cek saldo coin. Game yang tersedia antara lain slot, blackjack, tebak angka, tic-tac-toe, dan trivia. Ketik <code>.help</code> buat lihat semua command.': 'Type <code>.balance</code> to check your coins. Available games include slots, blackjack, number guessing, tic-tac-toe, and trivia. Type <code>.help</code> to see all commands.',
    'Buka kartunya di bagian <b>Coba Langsung</b>, ikuti langkah bergambarnya, lalu klik tombol Buat KTP atau Buat CV di channel-nya.': 'Open the card in <b>Try It</b>, follow the illustrated steps, then click Create ID or Create CV in the channel.',
    'Pastikan kamu sudah daftar lewat tombol <b>Daftar Ulang Tahun</b> di channel Ultah, dengan format tanggal <code>DD-MM-YYYY</code>, contoh 17-08-2005.': 'Make sure you registered with the <b>Register Birthday</b> button in the Birthday channel, using the date format <code>DD-MM-YYYY</code>, e.g. 17-08-2005.',
    'Bisa. Di Chrome Android: menu titik tiga lalu <b>Tambahkan ke layar utama</b>. Di iPhone (Safari): tombol bagikan lalu <b>Tambah ke Layar Utama</b>. Setelah itu web ini terbuka seperti aplikasi.': 'Yes. On Chrome Android: three-dot menu, then <b>Add to Home screen</b>. On iPhone (Safari): Share button, then <b>Add to Home Screen</b>. After that this site opens like an app.',
    'Tap command buat menyalinnya, lalu tempel di Discord. Ketik <code>.help</code> di server buat lihat yang lengkap.': 'Tap a command to copy it, then paste it in Discord. Type <code>.help</code> in the server to see the full list.',
    'Hasil akhir Season 1 — cek <code>.rank</code> di server buat lihat posisi kamu di season sekarang.': 'Final Season 1 results. Use <code>.rank</code> in the server to see your position this season.'
  };

  // ---- Pola dinamis (angka, hitung mundur, dll) ----
  const RX = [
    [/^Disalin: (.+)$/, 'Copied: $1'],
    [/^Tanggal (\d+)$/, 'Day $1'],
    [/^(\d+) hari lagi$/, '$1 days left'],
    [/^(?:(\d+) jam )?(\d+) menit lagi$/, (m, h, mn) => (h ? h + ' h ' : '') + mn + ' min left'],
    [/^Langkah (\d+) dari (\d+)$/, 'Step $1 of $2'],
    [/^Tunggu (\d+) detik lagi sebelum kirim berikutnya\.$/, 'Wait $1 more seconds before sending again.'],
    [/^Jam acara: (.+) WIB \(kalau beda, ikuti pengumuman di server\)\.$/, 'Event time: $1 WIB (if it differs, follow the server announcements).']
  ];

  const SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };
  const ATTRS = ['placeholder', 'aria-label', 'title'];
  const norm = (s) => s.replace(/\s+/g, ' ').trim();
  const orig = new Map();      // node/elemen -> teks asli
  const origAttr = new Map();  // elemen -> {attr: asli}
  let lang = 'id';

  function tr(s) {
    const k = norm(s);
    if (!k) return null;
    if (Object.prototype.hasOwnProperty.call(D, k)) return D[k];
    if (k.indexOf(' · ') > 0) {
      let changed = false;
      const out = k.split(' · ').map((p) => { const t = tr(p); if (t != null) changed = true; return t != null ? t : p; });
      if (changed) return out.join(' · ');
    }
    for (const [re, to] of RX) if (re.test(k)) return k.replace(re, to);
    return null;
  }

  function walk(n) {
    if (n.nodeType === 3) {
      const o = n.nodeValue, t = tr(o);
      if (t != null) {
        if (!orig.has(n)) orig.set(n, o);
        n.nodeValue = o.match(/^\s*/)[0] + t + o.match(/\s*$/)[0];
      }
      return;
    }
    if (n.nodeType !== 1 || SKIP[n.tagName]) return;
    if (n.children.length && n.textContent.length < 600) {
      const h = H[norm(n.innerHTML)];
      if (h) {
        if (!orig.has(n)) orig.set(n, { h: n.innerHTML });
        n.innerHTML = h;
        return;
      }
    }
    ATTRS.forEach((a) => {
      const v = n.getAttribute(a), t = v && tr(v);
      if (t) {
        const rec = origAttr.get(n) || {};
        if (!(a in rec)) rec[a] = v;
        origAttr.set(n, rec);
        n.setAttribute(a, t);
      }
    });
    Array.from(n.childNodes).forEach(walk);
  }

  function restore() {
    orig.forEach((o, n) => { if (typeof o === 'string') n.nodeValue = o; else n.innerHTML = o.h; });
    origAttr.forEach((rec, el) => Object.keys(rec).forEach((a) => el.setAttribute(a, rec[a])));
    orig.clear(); origAttr.clear();
  }

  // Popup & teks yang dibuat JS ikut diterjemahkan otomatis
  const mo = new MutationObserver((ms) => {
    if (lang !== 'en') return;
    mo.disconnect();
    ms.forEach((m) => m.addedNodes.forEach(walk));
    mo.observe(document.body, { childList: true, subtree: true });
  });

  const btn = document.getElementById('langToggle');
  function setLang(l, save) {
    lang = l;
    document.documentElement.lang = l;
    if (save) { try { localStorage.setItem('gv_lang', l); } catch (e) {} }
    mo.disconnect();
    if (l === 'en') walk(document.body); else restore();
    mo.observe(document.body, { childList: true, subtree: true });
    if (btn) {
      btn.textContent = l === 'en' ? 'ID' : 'EN';
      btn.setAttribute('aria-label', l === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English');
      btn.title = btn.getAttribute('aria-label');
    }
  }

  if (btn) btn.addEventListener('click', () => setLang(lang === 'en' ? 'id' : 'en', true));

  // Link "tab Panduan" di FAQ kehilangan listener-nya saat teks diganti, jadi pakai delegasi
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[data-gopage]');
    if (a && typeof gvGoTo === 'function') { e.preventDefault(); gvGoTo(parseInt(a.dataset.gopage, 10), true); }
  });

  let saved = null;
  try { saved = localStorage.getItem('gv_lang'); } catch (e) {}
  const initial = saved === 'en' || saved === 'id' ? saved : ((navigator.language || 'id').toLowerCase().indexOf('id') === 0 ? 'id' : 'en');
  setLang(initial, false);
})();