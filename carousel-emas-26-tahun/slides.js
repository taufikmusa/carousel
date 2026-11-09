// carousel-maroon: "Harga Emas Naik 17 Kali Ganda dalam 26 Tahun" (8 slaid, 1080x1350). Potret Taufik hanya slaid terakhir.
var N = 8;
var ASSETS = { taufik: 'thumbs-up.png', buku: 'jongkong-1kg-250g-100g-50g-buku-guru.jpg', dulang: 'dulang-merah-1kg-koleksi-penuh.jpg', standing: 'jongkong-berdiri-meja-hitam.jpg', binder: 'koleksi-binder-kad.jpg',
  set: 'set-jongkong-bertingkat-bungamas.jpg', kg: 'jongkong-1kg-tapak-tangan.jpg', ipad: 'kad-dinar-dan-app-gap-ipad.jpg', wallet: 'dompet-wealthcard-safari.jpg' };

const icon = {
  clock: () => { X.beginPath(); X.arc(0, 0, 30, 0, 7); X.stroke(); X.beginPath(); X.moveTo(0, 0); X.lineTo(0, -18); X.moveTo(0, 0); X.lineTo(14, 8); X.stroke(); },
  trend: () => { X.beginPath(); X.moveTo(-32, 22); X.lineTo(-8, -2); X.lineTo(6, 12); X.lineTo(32, -22); X.stroke(); X.beginPath(); X.moveTo(14, -24); X.lineTo(34, -24); X.lineTo(34, -4); X.stroke(); },
  gram: () => { txt('g', 0, 16, F.hh(50), K.gold, 'center'); },
};

var SLIDES = [
  // 1 — cover
  function (x) {
    bgPhoto(x, IMG.buku, 14, .42);
    headline('Harga Emas Naik', x + 540, 190, 80);
    pillTitle(['17 Kali Ganda'], x + 540, 320, 100);
    strokes(x + 90, 300, 1, -.9); strokes(x + 990, 300, 1, .9);
    headline('dalam 26 Tahun', x + 540, 470, 72, K.gold); underline(x + 280, x + 800, 505);
    sub('Tapi sebenarnya, apa yang berlaku kepada nilai duit kita?', x + 540, 610, 820, 38);
    photoCard(IMG.dulang, x + 540, 960, 600, 380, -.03, .5, .5);
    sparkle(x + 180, 760, 28); sparkle(x + 900, 1190, 24); curlyArrow(x + 910, 720, x + 800, 820);
  },
  // 2 — RM34 → RM600
  function (x) {
    bgPhoto(x, IMG.standing, 16, .45);
    pillTitle(['Dari RM34', 'Kepada RM600'], x + 540, 180, 76);
    sub('Sekitar tahun 2000, RM34 sudah boleh memiliki 1 gram emas. Hari ini sekitar RM500 hingga RM600.', x + 540, 420, 860, 34);
    tierCard(x + 110, 580, 400, 400, 'TAHUN 2000', 'RM34', 'untuk 1 gram emas');
    tierCard(x + 570, 580, 400, 400, 'HARI INI', 'RM600', 'hampir, segram');
    badge(x + 540, 790, 54, icon.trend);
    whiteCard(x + 110, 1040, 860, ['Kenaikan kira-kira', '*17 KALI GANDA!'], 46);
  },
  // 3 — lima fasa
  function (x) {
    bgPhoto(x, IMG.set, 16, .48);
    pillTitle(['5 Fasa Emas'], x + 540, 180, 80);
    sub('Perjalanan 26 tahun ini tak lurus ke atas. Ada naik mendadak, ada jatuh, ada mendatar bertahun-tahun.', x + 540, 330, 880, 32);
    [['2000–2005', 'MURAH'], ['2006–2012', 'MENDAKI'], ['2013–2018', 'SABAR'], ['2019–2023', 'DIPERHATI'], ['2024–2026', 'LONJAKAN']].forEach(function (r, k) { rowPill(x + 110, 500 + k * 115, 860, r[0], r[1], ''); });
    whiteCard(x + 110, 1085, 860, ['Trend jangka panjang naik,', '*bukan untung jangka pendek.'], 32);
  },
  // 4 — pesan guru
  function (x) {
    bgPhoto(x, IMG.kg, 16, .45);
    pillTitle(['Pesan Guru Emas Saya'], x + 540, 190, 62);
    sub('Tn. Mohd Zulkifli Shafie', x + 540, 300, 860, 38, K.gold);
    whiteCard(x + 100, 400, 880, ['Harga emas tidak pernah', 'dianggap murah pada', 'mana-mana zaman.', '*Jangan tunggu harga murah', '*baru nak mula.'], 46);
    sub('Sebab itu kita tengok sejarahnya, bukan sekadar harga hari ini.', x + 540, 1000, 860, 36);
    sparkle(x + 130, 360, 26); strokes(x + 940, 400, .8, .9);
  },
  // 5 — pengajaran 1
  function (x) {
    bgPhoto(x, IMG.wallet, 16, .45);
    pillTitle(['1- Lihat Kuasa Beli'], x + 540, 190, 72);
    sub('Jangan hanya lihat harga. RM100 hari ini mungkin masih tertulis RM100 sepuluh tahun lagi.', x + 540, 330, 860, 34);
    tierCard(x + 110, 500, 400, 400, 'HARI INI', 'RM100', 'beli sekian barang');
    tierCard(x + 570, 500, 400, 400, '10 THN LAGI', 'RM100', 'berapa barang lagi?');
    strokes(x + 540, 520, .9, 0); badge(x + 540, 700, 54, icon.clock);
    whiteCard(x + 110, 970, 860, ['Angka dalam akaun mungkin sama,', '*tetapi kuasa beli boleh berubah.'], 38);
  },
  // 6 — pengajaran 2
  function (x) {
    bgPhoto(x, IMG.binder, 16, .45);
    pillTitle(['2- Jangan Teka', 'Harga Terendah'], x + 540, 180, 72);
    sub('Tiada siapa tahu bila harga paling rendah. Kalau terlalu lama menunggu, peluang bina simpanan konsisten terlepas.', x + 540, 440, 860, 34);
    badge(x + 540, 660, 80, icon.gram);
    rowPill(x + 110, 770, 860, 'Bukan fokus', 'HARGA HARIAN', '');
    rowPill(x + 110, 890, 860, 'Fokus utama', 'TAMBAH GRAM', '');
    whiteCard(x + 110, 1020, 860, ['Penyimpan emas pastikan', '*berapa gram terkumpul', '*setiap bulan.'], 36);
  },
  // 7 — pengajaran 3
  function (x) {
    bgPhoto(x, IMG.ipad, 16, .45);
    pillTitle(['3- Simpan Untuk', 'Masa Depan'], x + 540, 180, 72);
    sub('Bukan untuk spekulasi. Fikir tempoh sekurang-kurangnya 2 tahun dan lebih lama, guna duit lebihan.', x + 540, 440, 860, 34);
    ['Bukan duit belanja dapur', 'Bukan duit kecemasan', 'Bukan duit pinjaman'].forEach(function (s, k) { var y = 600 + k * 110; shadow(function () { rr(x + 130, y, 820, 90, 24); X.fillStyle = K.cream; X.fill(); }, 16, .4, 6); X.beginPath(); X.arc(x + 185, y + 45, 30, 0, 7); X.fillStyle = K.maroon; X.fill(); txt('✕', x + 185, y + 58, F.hh(34), K.gold, 'center'); txt(s, x + 245, y + 58, F.b(34), K.ink); });
    whiteCard(x + 110, 960, 860, ['Akaun Emas GAP Public Gold:', '*mula serendah RM100,', 'ikut harga emas semasa.'], 38);
  },
  // 8 — CTA
  function (x) {
    bgPhoto(x, IMG.dulang, 16, .45);
    headline('Dulu Ragu,', x + 540, 180, 84);
    pillTitle(['Kini Tahu!'], x + 540, 310, 100);
    strokes(x + 110, 340, 1, -.9); strokes(x + 970, 340, 1, .9);
    sub('Gram demi gram, bina tabungan untuk masa hadapan.', x + 540, 470, 760, 36);
    cutout(IMG.taufik, x + 760, SH - 40, 700);
    shadow(function () { rr(x + 60, 790, 520, 330, 30); X.fillStyle = 'rgba(20,8,6,.75)'; X.fill(); }, 20, .4, 8);
    txt('Jangan tunggu harga', x + 90, 852, F.b(30), K.white); txt('jadi terlalu mahal.', x + 90, 894, F.b(30), K.white);
    txt('Mula serendah', x + 90, 960, F.b(32), K.gold); txt('RM100 melalui', x + 90, 1008, F.b(32), K.gold); txt('Akaun Emas GAP.', x + 90, 1056, F.b(32), K.gold); txt('Taufik Musa | Dealer Public Gold', x + 90, 1094, F.b(24), K.white);
    shadow(function () { rr(x + 60, 1150, 520, 90, 45); X.fillStyle = K.maroon; X.fill(); }, 20, .4, 8);
    txt('Nak mula? DM saya!', x + 320, 1210, F.h(36), K.white, 'center');
  },
];
