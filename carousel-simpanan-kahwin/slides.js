// carousel-maroon: "5 Sebab Kita Patut Rancang Simpanan Kahwin 3 Tahun Lebih Awal" (8 slaid, 1080x1350). Potret Taufik hanya slaid terakhir.
var N = 8;
var ASSETS = { taufik: 'thumbs-up.png', set: 'set-jongkong-bertingkat-bungamas.jpg', hand: 'kad-taifook-4-saiz-tangan.jpg', standing: 'jongkong-berdiri-meja-hitam.jpg', wallet: 'dompet-wealthcard-safari.jpg',
  ipad: 'kad-dinar-dan-app-gap-ipad.jpg', bar100: 'jongkong-100g-kad-bungamas-meja.jpg', kg: 'jongkong-1kg-tapak-tangan.jpg', balloon: 'dinar-10-atas-hutan-belon.jpg', dulang: 'koleksi-dulang-1kg.jpg' };

const icon = {
  house: () => { X.beginPath(); X.moveTo(-32, 0); X.lineTo(0, -30); X.lineTo(32, 0); X.stroke(); X.strokeRect(-22, 0, 44, 30); },
  book: () => { X.strokeRect(-30, -22, 28, 44); X.strokeRect(2, -22, 28, 44); },
  clock: () => { X.beginPath(); X.arc(0, 0, 30, 0, 7); X.stroke(); X.beginPath(); X.moveTo(0, 0); X.lineTo(0, -18); X.moveTo(0, 0); X.lineTo(14, 8); X.stroke(); },
  split: () => { X.strokeRect(-34, -22, 30, 44); X.strokeRect(4, -22, 30, 44); },
  zero: () => { txt('RM', 0, 12, F.hh(34), K.gold, 'center'); },
};

var SLIDES = [
  // COVER
  function (x) {
    bgPhoto(x, IMG.set, 14, .42);
    headline('5 Sebab Kita Patut', x + 540, 190, 80);
    headline('Rancang', x + 540, 290, 92);
    pillTitle(['Simpanan Kahwin'], x + 540, 420, 92);
    strokes(x + 100, 400, 1, -.9); strokes(x + 980, 400, 1, .9);
    headline('3 Tahun Lebih Awal', x + 540, 590, 76, K.gold);
    underline(x + 300, x + 780, 625);
    sub('Majlis cuma sehari. Kehidupan selepas itu bertahun-tahun.', x + 540, 720, 820, 38);
    photoCard(IMG.hand, x + 540, 1010, 560, 360, -.03, .5, .5);
    sparkle(x + 200, 840, 30); sparkle(x + 880, 1210, 24); curlyArrow(x + 900, 780, x + 790, 880);
  },
  // PESAN GURU
  function (x) {
    bgPhoto(x, IMG.standing, 16, .45);
    pillTitle(['Pesan Guru Emas Saya'], x + 540, 190, 62);
    sub('Tn. Mohd Zulkifli Shafie', x + 540, 300, 860, 38, K.gold);
    whiteCard(x + 100, 400, 880, ['Dalam membina kekayaan,', 'bezakan antara apa yang kita', '*BELANJAKAN', 'dengan apa yang kita', '*SIMPAN.'], 46);
    sub('Prinsip penting untuk anak muda yang merancang perkahwinan. Kita nak majlis cantik dan bahagiakan ibu bapa, tapi jangan berhabis-habisan sehari, lepas tu menanggung hutang bertahun-tahun.', x + 540, 940, 880, 34);
    sparkle(x + 130, 360, 26);
  },
  // 1
  function (x) {
    bgPhoto(x, IMG.dulang, 16, .45);
    pillTitle(['1- Mula Awal,', 'Kos Terkawal'], x + 540, 180, 68);
    sub('Katering, dewan, pelamin, pakaian... semua perlukan duit. Mula awal, kita tak terburu-buru.', x + 540, 420, 860, 34);
    tierCard(x + 110, 560, 400, 400, 'SASARAN', '50g', 'emas dalam 3 tahun');
    tierCard(x + 570, 560, 400, 400, 'PURATA', '1.5g', 'sebulan sebagai panduan');
    strokes(x + 540, 580, .9, 0);
    whiteCard(x + 110, 1030, 860, ['Tak perlu tunggu duit banyak.', '*Bina sedikit demi sedikit.'], 40);
  },
  // 2
  function (x) {
    bgPhoto(x, IMG.wallet, 16, .45);
    pillTitle(['2- Asingkan Simpanan', 'Daripada Duit Belanja'], x + 540, 180, 58);
    sub('Niat nak simpan, tapi bila teringin sesuatu atau ada promosi, simpanan juga yang diambil. Matlamat pun tertangguh.', x + 540, 420, 860, 34);
    tierCard(x + 110, 580, 400, 380, 'BELANJA', 'BANK', 'untuk guna harian');
    tierCard(x + 570, 580, 400, 380, 'SIMPAN', 'EMAS', 'melalui akaun GAP');
    badge(x + 540, 770, 54, icon.split);
    whiteCard(x + 110, 1020, 860, ['Duit dah jadi emas, ada', '*satu lagi pertimbangan', 'sebelum menjualnya semula.'], 38);
  },
  // 3
  function (x) {
    bgPhoto(x, IMG.balloon, 16, .42);
    pillTitle(['3- Elak Hutang', 'Majlis Berlebihan'], x + 540, 180, 66);
    sub('Tak salah meraikan hari bahagia, tapi tahu batas kemampuan. Selepas kahwin, tanggungan baru bermula:', x + 540, 420, 860, 34);
    rowPill(x + 110, 580, 860, 'Ansuran pinjaman', 'TETAP', 'bayar');
    rowPill(x + 110, 700, 860, 'Sewa rumah', 'TETAP', 'bayar');
    rowPill(x + 110, 820, 860, 'Kereta & harian', 'TETAP', 'bayar');
    whiteCard(x + 110, 970, 860, ['Biar majlis sederhana,', '*asalkan kehidupan selepas', '*kahwin lebih tenang.'], 42);
  },
  // 4
  function (x) {
    bgPhoto(x, IMG.ipad, 16, .45);
    pillTitle(['4- Kumpul Emas GAP', 'Ikut Kemampuan'], x + 540, 180, 64);
    sub('50 gram nampak besar kalau fikir kena beli sekaligus. Tak perlu begitu.', x + 540, 420, 860, 34);
    tierCard(x + 110, 540, 400, 380, 'SERENDAH', 'RM100', 'melalui Akaun Emas GAP');
    tierCard(x + 570, 540, 400, 380, 'SASARAN', '50g', 'dalam 3 tahun');
    strokes(x + 540, 560, .9, 0);
    whiteCard(x + 110, 990, 860, ['Gram sebulan bergantung pada', '*harga emas dan jumlah wang.', 'Harga boleh turun naik, simpan', 'ikut matlamat dan tempoh.'], 32);
  },
  // 5
  function (x) {
    bgPhoto(x, IMG.kg, 16, .45);
    pillTitle(['5- Simpanan untuk', 'Hidup Selepas Kahwin'], x + 540, 180, 60);
    sub('Matlamat bukan sekadar cukup duit kenduri. Kalau emas tak perlu untuk majlis, teruskan simpanan:', x + 540, 420, 860, 34);
    [['house', 'Deposit rumah'], ['book', 'Pendidikan anak'], ['clock', 'Masa depan']].forEach(([k, l], i) => { const cx = x + 220 + i * 320; badge(cx, 640, 80, icon[k]); txt(l, cx, 770, F.b(30), K.white, 'center'); });
    whiteCard(x + 110, 860, 860, ['Tetap sediakan', '*dana kecemasan tunai.', 'Emas bukan pengganti wang', 'untuk perbelanjaan segera.'], 38);
  },
  // CTA (selfie di sini sahaja)
  function (x) {
    bgPhoto(x, IMG.bar100, 16, .45);
    headline('Dulu Ragu,', x + 540, 180, 84);
    pillTitle(['Kini Tahu!'], x + 540, 310, 100);
    strokes(x + 110, 340, 1, -.9); strokes(x + 970, 340, 1, .9);
    sub('Rancang dari sekarang. Bina simpanan, bina masa depan.', x + 540, 470, 760, 36);
    cutout(IMG.taufik, x + 760, SH - 40, 700);
    shadow(() => { rr(x + 60, 790, 520, 330, 30); X.fillStyle = 'rgba(20,8,6,.75)'; X.fill(); }, 20, .4, 8);
    txt('Tetapkan sasaran.', x + 90, 862, F.b(30), K.white); txt('Asingkan duit simpanan.', x + 90, 904, F.b(30), K.white);
    txt('Mula serendah', x + 90, 970, F.b(32), K.gold); txt('RM100 melalui', x + 90, 1018, F.b(32), K.gold); txt('Akaun Emas GAP.', x + 90, 1066, F.b(32), K.gold); txt('Taufik Musa | Dealer Public Gold', x + 90, 1104, F.b(24), K.white);
    shadow(() => { rr(x + 60, 1150, 520, 90, 45); X.fillStyle = K.maroon; X.fill(); }, 20, .4, 8);
    txt('Nak mula? DM saya!', x + 320, 1210, F.h(36), K.white, 'center');
  },
];
