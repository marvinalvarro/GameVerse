/* =====================================================================
   Game Verse - bahasa (Indonesia / English)
   - Teks Indonesia ada di index.html (bahasa utama).
   - Terjemahan Inggris untuk teks statis ada di kamus EN di bawah.
   - Teks yang dibuat lewat script.js memakai tr('indonesia', 'english').
   ===================================================================== */
(function () {
  'use strict';
  var KEY = 'gv_lang';
  var cur = 'id';
  try { var s = localStorage.getItem(KEY); if (s === 'en' || s === 'id') cur = s; } catch (e) {}

  var EN = /*DICT*/{
 "komunitas game &amp; ngobrol santai": "gaming community &amp; casual chat",
 "Tempat nongkrong, mabar, dan <em>naik level</em> bareng.": "A place to hang out, play together, and <em>level up</em> together.",
 "Game Verse itu komunitas Discord buat siapa aja yang suka main game, ngobrol santai, atau sekadar cari temen baru. Ada voice leveling, event rutin, sampai economy game—semua dalam satu server.": "Game Verse is a Discord community for anyone who loves gaming, casual chatting, or just wants to find new friends. It has voice leveling, regular events, and an economy game, all in one server.",
 "Gabung Sekarang": "Join Now",
 "Lihat Fitur": "See Features",
 "Member": "Members",
 "Channel &amp; Voice": "Channels &amp; Voice",
 "Event berikutnya": "Next event",
 "Jadwal ⌄": "Schedule ⌄",
 "Yang bisa kamu temuin di sini": "What you can find here",
 "Pilih bagian yang mau kamu lihat, atau geser ke samping.": "Pick a section you want to see, or swipe sideways.",
 "<span aria-hidden=\"true\">🧩</span>Fitur": "<span aria-hidden=\"true\">🧩</span>Features",
 "<span aria-hidden=\"true\">🎮</span>Coba Langsung": "<span aria-hidden=\"true\">🎮</span>Try It Live",
 "<span aria-hidden=\"true\">🧭</span>Panduan": "<span aria-hidden=\"true\">🧭</span>Guides",
 "<span aria-hidden=\"true\">🏆</span>Level &amp; Galeri": "<span aria-hidden=\"true\">🏆</span>Levels &amp; Gallery",
 "<span aria-hidden=\"true\">💬</span>Masukan": "<span aria-hidden=\"true\">💬</span>Feedback",
 "Fitur Server (klik buat lihat contoh)": "Server Features (click to see examples)",
 "Makin aktif ngobrol atau nongkrong di voice, makin cepat naik level dan dapat role eksklusif.": "The more you chat or hang out in voice, the faster you level up and unlock exclusive roles.",
 "Lihat Leaderboard ⌄": "See Leaderboard ⌄",
 "Economy &amp; Mini Game": "Economy &amp; Mini Games",
 "Main slot, blackjack, tebak angka, sampai kumpulin coin buat ditukar reward server.": "Play slots, blackjack, number guessing, and collect coins to exchange for server rewards.",
 "Lihat Daftar Command ⌄": "See Command List ⌄",
 "Event Rutin": "Regular Events",
 "Trivia, giveaway, sampai aktivitas seru rutin—selalu ada alasan buat mampir.": "Trivia, giveaways, and other fun activities, always a reason to drop by.",
 "Lihat Jadwal ⌄": "See Schedule ⌄",
 "Coba Langsung (klik buat lihat cara pakainya)": "Try It Live (click to see how to use it)",
 "KTP Digital": "Digital ID Card",
 "Bikin KTP warga Game Verse kamu sendiri, lengkap dengan desain custom.": "Make your own Game Verse resident ID card, complete with a custom design.",
 "Lihat Cara Bikin": "See How to Make One",
 "CV Ta'aruf": "Ta'aruf CV",
 "Bikin CV ta'aruf buat yang lagi niat serius cari jodoh.": "Make a ta'aruf CV if you are seriously looking for a life partner.",
 "Streak Harian": "Daily Streak",
 "TikTok Streak tapi di Discord! Saling tag teman tiap hari biar api streak kalian gak padam.": "TikTok Streak, but on Discord! Tag a friend every day to keep your streak flame alive.",
 "Lihat Cara Main": "See How to Play",
 "Ultah": "Birthdays",
 "Daftarin tanggal lahir kamu, bot bakal otomatis ngucapin pas hari-H.": "Register your birthday and the bot will automatically greet you on the day.",
 "Lihat Cara Daftar": "See How to Register",
 "Panduan &amp; Aturan (klik buat baca)": "Guides &amp; Rules (click to read)",
 "Aturan Server": "Server Rules",
 "11 aturan biar server tetap nyaman buat semua orang. Baca dulu sebelum ikut ngobrol.": "11 rules to keep the server comfortable for everyone. Read them before you start chatting.",
 "Baca Aturan": "Read Rules",
 "Panduan Awal Bermain": "Beginner Guide",
 "Baru main Discord? Ini cara ngobrol, ambil role game, sampai minta bantuan admin.": "New to Discord? Here is how to chat, pick game roles, and ask the admins for help.",
 "Baca Panduan": "Read Guide",
 "Template Server Gratis": "Free Server Templates",
 "Mau bikin server sendiri tapi males ngatur channel dan role? Ambil yang sudah jadi.": "Want to build your own server but hate setting up channels and roles? Grab a ready-made one.",
 "Lihat Template": "See Templates",
 "Cara naik level": "How to level up",
 "Makin aktif, makin tinggi levelmu. Gak perlu diatur manual, semuanya otomatis.": "The more active you are, the higher your level. No manual setup, everything is automatic.",
 "Ngobrol &amp; nongkrong": "Chat &amp; hang out",
 "Aktif di chat dan duduk di voice channel bareng member lain.": "Be active in chat and sit in voice channels with other members.",
 "Kumpulin XP": "Collect XP",
 "Makin sering aktif, makin banyak XP yang kamu dapat.": "The more often you are active, the more XP you earn.",
 "Naik level": "Level up",
 "Pantau posisimu kapan aja lewat command <code>.rank</code> di server.": "Check your position anytime with the <code>.rank</code> command in the server.",
 "Dapat role eksklusif": "Get exclusive roles",
 "Level tertentu membuka role spesial yang gak dimiliki semua orang.": "Certain levels unlock special roles that not everyone has.",
 "Sekilas isi server": "A glimpse of the server",
 "Geser buat lihat lebih banyak. Klik gambarnya buat memperbesar.": "Swipe to see more. Click an image to enlarge it.",
 "KTP warga": "Resident ID",
 "Ucapan ultah": "Birthday greeting",
 "Daftar ultah": "Birthday sign-up",
 "Streak harian": "Daily streak",
 "Kata mereka": "What they say",
 "Cerita dari member Game Verse.": "Stories from Game Verse members.",
 "Tim di balik layar": "Behind the scenes",
 "Admin dan moderator yang jagain server.": "The admins and moderators who look after the server.",
 "Tanya jawab &amp; aturan": "Questions &amp; answers",
 "Jawaban cepat buat pertanyaan yang sering muncul.": "Quick answers to questions we get a lot.",
 "Gimana cara gabung?": "How do I join?",
 "Klik tombol <b>Join Server</b> di atas, nanti kamu diarahkan ke Discord. Gratis, tinggal klik dan masuk.": "Click the <b>Join Server</b> button above and you will be taken to Discord. It is free, just click and join.",
 "Apa saja aturan servernya?": "What are the server rules?",
 "Singkatnya: saling menghormati, tanpa spam, tanpa promosi, dan tanpa konten terlarang. Aturan lengkapnya ada 11 poin, baca di <a href=\"#panduan\" data-gopage=\"2\">tab Panduan</a>.": "In short: respect each other, no spam, no promotion, and no prohibited content. The full rules have 11 points, read them in the <a href=\"#panduan\" data-gopage=\"2\">Guides tab</a>.",
 "Gimana cara naik level?": "How do I level up?",
 "Aktif ngobrol di chat dan nongkrong di voice channel. XP terkumpul otomatis. Ketik <code>.rank</code> di server buat cek posisimu.": "Be active in chat and hang out in voice channels. XP is collected automatically. Type <code>.rank</code> in the server to check your position.",
 "Gimana cek coin dan main game?": "How do I check my coins and play games?",
 "Ketik <code>.balance</code> buat cek saldo coin. Game yang tersedia antara lain slot, blackjack, tebak angka, tic-tac-toe, dan trivia. Ketik <code>.help</code> buat lihat semua command.": "Type <code>.balance</code> to check your coin balance. Available games include slots, blackjack, number guessing, tic-tac-toe, and trivia. Type <code>.help</code> to see all commands.",
 "Gimana bikin KTP atau CV Ta'aruf?": "How do I make a digital ID or a Ta'aruf CV?",
 "Buka kartunya di bagian <b>Coba Langsung</b>, ikuti langkah bergambarnya, lalu klik tombol Buat KTP atau Buat CV di channel-nya.": "Open the card in the <b>Try It Live</b> section, follow the illustrated steps, then click the \"Buat KTP\" or \"Buat CV\" button in that channel.",
 "Kenapa streak aku reset ke 0?": "Why was my streak reset to 0?",
 "Streak reset kalau kelewat sehari tanpa saling tag dengan temanmu. Kalian berdua harus saling tag setiap hari biar apinya terus nyala.": "Your streak resets if you skip a day without tagging each other. Both of you must tag each other every day to keep the flame going.",
 "Ultahku kok gak diucapin bot?": "Why didn't the bot wish me a happy birthday?",
 "Pastikan kamu sudah daftar lewat tombol <b>Daftar Ulang Tahun</b> di channel Ultah, dengan format tanggal <code>DD-MM-YYYY</code>, contoh 17-08-2005.": "Make sure you registered with the <b>Daftar Ulang Tahun</b> button in the Birthday channel, using the date format <code>DD-MM-YYYY</code>, for example 17-08-2005.",
 "Bisa dipasang di layar HP?": "Can I install this on my phone?",
 "Bisa. Di Chrome Android: menu titik tiga lalu <b>Tambahkan ke layar utama</b>. Di iPhone (Safari): tombol bagikan lalu <b>Tambah ke Layar Utama</b>. Setelah itu web ini terbuka seperti aplikasi.": "Yes. On Chrome Android: three-dot menu, then <b>Add to Home screen</b>. On iPhone (Safari): the share button, then <b>Add to Home Screen</b>. After that this site opens like an app.",
 "Ini server resmi Discord?": "Is this an official Discord server?",
 "Bukan. Game Verse adalah komunitas independen dan tidak berafiliasi dengan Discord.": "No. Game Verse is an independent community and is not affiliated with Discord.",
 "Suara kamu penting": "Your voice matters",
 "Kasih rating, kritik, atau usul fitur. Semua masuk langsung ke admin.": "Leave a rating, a criticism, or a feature idea. Everything goes straight to the admins.",
 "Seberapa seru Game Verse buat kamu?": "How fun is Game Verse for you?",
 "<span class=\"sr-only\">5 bintang</span>★": "<span class=\"sr-only\">5 stars</span>★",
 "<span class=\"sr-only\">4 bintang</span>★": "<span class=\"sr-only\">4 stars</span>★",
 "<span class=\"sr-only\">3 bintang</span>★": "<span class=\"sr-only\">3 stars</span>★",
 "<span class=\"sr-only\">2 bintang</span>★": "<span class=\"sr-only\">2 stars</span>★",
 "<span class=\"sr-only\">1 bintang</span>★": "<span class=\"sr-only\">1 star</span>★",
 "Mau ngasih apa?": "What would you like to share?",
 "Kritik": "Criticism",
 "Saran fitur": "Feature idea",
 "Laporan masalah": "Problem report",
 "Lainnya": "Other",
 "Nama Discord <em>(boleh dikosongin)</em>": "Discord name <em>(optional)</em>",
 "Ceritain di sini <em>(opsional kalau sudah kasih bintang)</em>": "Tell us here <em>(optional if you gave stars)</em>",
 "Kirim Masukan": "Send Feedback",
 "Siap gabung?": "Ready to join?",
 "Satu klik doang, langsung bisa mabar dan ngobrol bareng ribuan member lain.": "Just one click and you can play and chat with thousands of other members.",
 "Ajak teman": "Invite friends",
 "Pasang di HP": "Install on phone",
 "© 2026 Game Verse. Bukan server resmi Discord, komunitas independen.": "© 2026 Game Verse. Not an official Discord server, an independent community.",
 "Beranda": "Home",
 "Kembali ke bagian paling atas": "Back to the very top",
 "Fitur Server": "Server Features",
 "Voice leveling, economy, event rutin": "Voice leveling, economy, regular events",
 "Coba Langsung": "Try It Live",
 "KTP digital, CV Ta'aruf, streak, ultah": "Digital ID, Ta'aruf CV, streaks, birthdays",
 "Panduan &amp; Aturan": "Guides &amp; Rules",
 "Aturan server, panduan awal, template": "Server rules, beginner guide, templates",
 "Level &amp; Galeri": "Levels &amp; Gallery",
 "Cara naik level dan sekilas isi server": "How to level up and a glimpse of the server",
 "Jawaban cepat buat pertanyaan umum": "Quick answers to common questions",
 "Kasih Masukan": "Give Feedback",
 "Rating, kritik, dan saran fitur": "Ratings, criticism, and feature ideas",
 "Bahasa": "Language",
 "Pilih bahasa tampilan": "Choose display language",
 "Tampilan": "Appearance",
 "Pasang di layar utama": "Install on home screen",
 "Tutup pengumuman": "Close announcement",
 "Mode gelap": "Dark mode",
 "Ganti tema terang / gelap": "Switch light / dark theme",
 "Bagian situs": "Site sections",
 "KTP warga Game Verse": "Game Verse resident ID",
 "Contoh KTP warga Game Verse": "Example Game Verse resident ID",
 "Kartu ucapan ulang tahun": "Birthday greeting card",
 "Kartu ucapan ulang tahun dari bot": "Birthday greeting card from the bot",
 "Contoh CV Ta'aruf": "Example Ta'aruf CV",
 "Poster daftar ulang tahun": "Birthday sign-up poster",
 "Streak harian di channel": "Daily streak in the channel",
 "Channel streak harian": "Daily streak channel",
 "5 bintang": "5 stars",
 "4 bintang": "4 stars",
 "3 bintang": "3 stars",
 "2 bintang": "2 stars",
 "1 bintang": "1 star",
 "contoh: marvin.": "e.g. marvin.",
 "Apa yang kamu suka, kurang nyaman, atau pengen ditambah?": "What do you like, find uncomfortable, or want added?",
 "Halaman 1": "Page 1",
 "Halaman 2": "Page 2",
 "Halaman 3": "Page 3",
 "Halaman 4": "Page 4",
 "Halaman 5": "Page 5",
 "Halaman 6": "Page 6",
 "Menu navigasi": "Navigation menu",
 "Tutup menu": "Close menu",
 "Tutup": "Close",
 "Game Verse | Komunitas Discord: Mabar, Ngobrol, Naik Level": "Game Verse | Discord Community: Play Together, Chat, Level Up",
 "Komunitas Discord buat mabar, ngobrol santai, dan naik level bareng. Ada voice leveling, event rutin, economy game, KTP digital, dan banyak lagi.": "A Discord community to play together, chat casually, and level up. Voice leveling, regular events, an economy game, digital ID cards, and more.",
 "Fitur": "Features",
 "Panduan": "Guides",
 "Masukan": "Feedback",
 "Navigasi utama": "Main navigation"
}/*END*/;

  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt', 'data-cap'];
  var INLINE = { B: 1, I: 1, EM: 1, STRONG: 1, CODE: 1, SMALL: 1, SPAN: 1, A: 1, BR: 1, MARK: 1, U: 1 };
  // Bagian yang diisi/diganti oleh script.js (jangan diterjemahkan otomatis di sini)
  var DYNAMIC = '#statMembers, #statOnline, #statOnlineLabel, #evName, #evWhen, #annText, #annLink, #starHint, ' +
    '#mobileNext, #modalTitle, #modalBody, #toast, #spotTitle, #spotCard, #testiGrid, #teamGrid, #tiers, ' +
    '#menuToggle, .vstatus, [data-theme-label], [data-no-i18n], svg, script, style';

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  function hasLetters(s) { return /[A-Za-z]/.test(String(s).replace(/<[^>]*>/g, '')); }

  var UNITS = [], ATTR_UNITS = [], META = [];

  function collect() {
    var set = new Set();
    document.body.querySelectorAll('*').forEach(function (el) {
      if (el.closest(DYNAMIC)) return;
      for (var p = el.parentElement; p; p = p.parentElement) if (set.has(p)) return;
      var hasText = false;
      for (var n = el.firstChild; n; n = n.nextSibling) {
        if (n.nodeType === 3 && n.nodeValue.trim()) { hasText = true; break; }
      }
      if (!hasText) return;
      for (var c = el.firstElementChild; c; c = c.nextElementSibling) if (!INLINE[c.tagName]) return;
      var key = norm(el.innerHTML);
      if (!hasLetters(key)) return;
      set.add(el);
      UNITS.push({ el: el, key: key, html: el.innerHTML });
    });

    document.body.querySelectorAll('[placeholder],[aria-label],[title],[alt],[data-cap]').forEach(function (el) {
      if (el.closest(DYNAMIC)) return;
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        var v = el.getAttribute(a);
        if (hasLetters(v)) ATTR_UNITS.push({ el: el, attr: a, key: v, val: v });
      });
    });

    var d = document.querySelector('meta[name="description"]');
    META.push({ kind: 'title', key: document.title, val: document.title });
    if (d) META.push({ kind: 'desc', el: d, key: d.getAttribute('content'), val: d.getAttribute('content') });
  }

  function apply(lang) {
    var en = lang === 'en';
    UNITS.forEach(function (u) {
      var t = EN[u.key];
      u.el.innerHTML = (en && t != null) ? t : u.html;
    });
    ATTR_UNITS.forEach(function (u) {
      var t = EN[u.key];
      u.el.setAttribute(u.attr, (en && t != null) ? t : u.val);
    });
    META.forEach(function (m) {
      var t = EN[m.key];
      var v = (en && t != null) ? t : m.val;
      if (m.kind === 'title') document.title = v; else m.el.setAttribute('content', v);
    });
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function set(lang) {
    if (lang !== 'en' && lang !== 'id') return;
    cur = lang;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply(lang);
    document.dispatchEvent(new CustomEvent('gv:lang', { detail: lang }));
  }

  window.GV_LANG = { get: function () { return cur; }, set: set };
  window.tr = function (id, en) { return cur === 'en' && en != null ? en : id; };

  collect();
  // untuk pengembangan: daftar teks yang bisa diterjemahkan
  window.__gvKeys = {
    units: UNITS.map(function (u) { return u.key; }),
    attrs: ATTR_UNITS.map(function (u) { return u.key; }),
    meta: META.map(function (m) { return m.key; })
  };
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { set(b.getAttribute('data-lang')); });
  });
  apply(cur);
})();
