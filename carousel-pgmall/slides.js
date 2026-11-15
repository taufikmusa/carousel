// carousel-maroon: "Kenapa Berbelanja di PGMall?" (8 slaid). Potret hanya slaid terakhir.
// carousel-maroon: "5 Kesilapan Fresh Grad" (9 slaid). Selfie Taufik hanya slaid terakhir.
var N = 8;
var ASSETS = { taufik: 'thumbs-up.png', bags: 'bags.jpg', parcel: 'parcel.jpg', phone: 'phone.jpg', basket: 'basket.jpg', bangle: 'bangle.jpg', cincin: 'cincin.png', tiers: 'tiers.jpg', standing: 'standing.jpg' };

const icon = {
  cart: () => { X.beginPath(); X.moveTo(-32, -22); X.lineTo(-20, -22); X.lineTo(-10, 12); X.lineTo(22, 12); X.lineTo(30, -12); X.lineTo(-17, -12); X.stroke(); X.beginPath(); X.arc(-6, 26, 5, 0, 7); X.arc(18, 26, 5, 0, 7); X.fill(); },
  share: () => { [[-18, 0], [16, -20], [16, 20]].forEach(p => { X.beginPath(); X.arc(p[0], p[1], 8, 0, 7); X.fill(); }); X.beginPath(); X.moveTo(-18, 0); X.lineTo(16, -20); X.moveTo(-18, 0); X.lineTo(16, 20); X.stroke(); },
  coin: () => { X.beginPath(); X.arc(0, 0, 28, 0, 7); X.stroke(); txt('RM', 0, 9, F.hh(26), K.gold, 'center'); },
  car: () => { X.beginPath(); X.moveTo(-30, 8); X.lineTo(-22, -12); X.lineTo(22, -12); X.lineTo(30, 8); X.stroke(); X.strokeRect(-36, 8, 72, 20); X.beginPath(); X.arc(-20, 30, 7, 0, 7); X.arc(20, 30, 7, 0, 7); X.fill(); },
  phone: () => { rr(-18, -32, 36, 64, 8); X.stroke(); X.beginPath(); X.arc(0, 22, 3, 0, 7); X.fill(); },
  zero: () => { txt('0', 0, 18, F.hh(52), K.gold, 'center'); },
  clock: () => { X.beginPath(); X.arc(0, 0, 30, 0, 7); X.stroke(); X.beginPath(); X.moveTo(0, 0); X.lineTo(0, -18); X.moveTo(0, 0); X.lineTo(14, 8); X.stroke(); },
  repeat: () => { X.beginPath(); X.arc(0, 0, 26, .5, 5.5); X.stroke(); X.beginPath(); X.moveTo(22, -26); X.lineTo(24, -12); X.lineTo(10, -12); X.stroke(); },
  split: () => { X.strokeRect(-34, -22, 30, 44); X.strokeRect(4, -22, 30, 44); },
};

var SLIDES = [
  // COVER
  function (x) {
    bgPhoto(x, IMG.bags, 14, .5);
    headline('Kenapa Saya Galakkan', x + 540, 180, 66);
    headline('Kita Berbelanja di', x + 540, 270, 66);
    pillTitle(['PGMall?'], x + 540, 400, 130);
    strokes(x + 120, 340, 1, -.9); strokes(x + 960, 340, 1, .9);
    sub('Kita bukan sekadar boleh membeli. Kita juga boleh menjana pulangan daripada aktiviti shopping!', x + 540, 560, 840, 38);
    underline(x + 330, x + 750, 700);
    photoCard(IMG.phone, x + 540, 1000, 440, 400, -.04, .5, .4);
    sparkle(x + 250, 820, 30); sparkle(x + 850, 1190, 24); curlyArrow(x + 880, 800, x + 770, 880);
  },
  // 1
  function (x) {
    bgPhoto(x, IMG.basket, 16, .5);
    pillTitle(['1- Macam-Macam', 'Barang Ada'], x + 540, 190, 78);
    sub('PGMall ialah platform e-commerce tempatan dengan pelbagai kategori, macam marketplace biasa.', x + 540, 440, 860, 36);
    ['Elektronik & fesyen', 'Barangan rumah & makanan', 'Kecantikan & kesihatan', 'Buku & keperluan harian'].forEach(function (s, k) {
      const y = 640 + k * 100; shadow(() => { rr(x + 130, y, 820, 82, 22); X.fillStyle = K.cream; X.fill(); }, 16, .4, 6);
      X.beginPath(); X.arc(x + 178, y + 41, 26, 0, 7); X.fillStyle = K.maroon; X.fill(); txt(String(k + 1), x + 178, y + 53, F.hh(30), K.gold, 'center'); txt(s, x + 230, y + 53, F.b(32), K.ink);
    });
    whiteCard(x + 110, 1080, 860, ['Bukan beli emas sahaja.', '*Boleh shopping pelbagai keperluan.'], 38);
  },
  // 2
  function (x) {
    bgPhoto(x, IMG.parcel, 16, .5);
    pillTitle(['2- Konsep', 'ConsuMerchant'], x + 540, 190, 84);
    sub('Gabungan perkataan Consumer dan Merchant.', x + 540, 440, 860, 38);
    tierCard(x + 110, 520, 400, 400, 'CONSUMER', 'BELI', 'guna produk seperti biasa');
    tierCard(x + 570, 520, 400, 400, 'MERCHANT', 'SERTAI', 'sebahagian ekosistem PGMall');
    badge(x + 540, 720, 54, icon.share);
    whiteCard(x + 110, 980, 860, ['Bukan sekadar pembeli,', '*tapi sebahagian ekosistem perniagaan.'], 38);
  },
  // 3
  function (x) {
    bgPhoto(x, IMG.phone, 16, .5);
    pillTitle(['3- Ada Program', 'Cashback'], x + 540, 190, 84);
    sub('Melalui ConsuMerchant, ganjaran cashback tersedia melalui pembelian sendiri dan referral.', x + 540, 440, 860, 36);
    badge(x + 540, 680, 90, icon.coin);
    rowPill(x + 110, 810, 860, 'Pembelian', 'SENDIRI', '');
    rowPill(x + 110, 930, 860, 'Kongsi', 'REFERRAL', '');
    whiteCard(x + 110, 1070, 860, ['Ganjaran mengikut kelayakan', '*dan terma program.'], 36);
  },
  // 4
  function (x) {
    bgPhoto(x, IMG.bags, 16, .5);
    pillTitle(['4- Shop, Share', '& Earn'], x + 540, 190, 84);
    sub('Peluang cashback melalui referral tanpa perlu jadi penjual produk sendiri.', x + 540, 440, 860, 36);
    [['cart', 'SHOP', 'Beli dan guna sendiri'], ['share', 'SHARE', 'Kongsi referral link'], ['coin', 'EARN', 'Cashback pembelian layak']].forEach(function (r, k) { const cx = x + 190 + k * 350; badge(cx, 640, 80, icon[r[0]]); txt(r[1], cx, 780, F.hh(40), K.gold, 'center'); sub(r[2], cx, 830, 280, 26); });
    whiteCard(x + 110, 1000, 860, ['*Cashback bukan pendapatan tetap,', '*bukan keuntungan dijamin.', 'Ikut transaksi, kelayakan & polisi.'], 34);
  },
  // 5
  function (x) {
    bgPhoto(x, IMG.tiers, 16, .5);
    pillTitle(['5- Produk', 'Public Gold Juga'], x + 540, 190, 78);
    sub('Dapatkan produk jenama ekosistem Public Gold seperti PG Jewel dan produk berkaitan emas.', x + 540, 440, 860, 36);
    photoCard(IMG.bangle, x + 330, 800, 380, 340, -.05, .5, .5);
    photoCard(IMG.cincin, x + 760, 820, 360, 340, .05, .5, .5);
    whiteCard(x + 110, 1060, 860, ['Satu platform:', '*shopping + ekosistem Public Gold.'], 36);
  },
  // PESANAN
  function (x) {
    bgPhoto(x, IMG.basket, 18, .55);
    pillTitle(['Satu Pesanan...'], x + 540, 190, 84);
    sub('Kita tak perlu cipta keperluan semata-mata untuk ganjaran. Kita memang dah ada keperluan membeli.', x + 540, 330, 860, 36);
    whiteCard(x + 110, 560, 860, ['Jangan beli barang', '*yang tak perlu', 'semata-mata kerana cashback.'], 46);
    rowPill(x + 110, 860, 860, 'Belanja', 'BIJAK', '');
    rowPill(x + 110, 980, 860, 'Ganjaran', 'BONUS', '');
    sub('Biar setiap ringgit memberi nilai lebih baik.', x + 540, 1160, 860, 34);
  },
  // CTA
  function (x) {
    bgPhoto(x, IMG.standing, 16, .45);
    headline('Belanja Bijak,', x + 540, 180, 82);
    headline('Manfaatkan', x + 540, 280, 82);
    pillTitle(['Nilai Tambah!'], x + 540, 400, 100);
    strokes(x + 110, 450, 1, -.9); strokes(x + 970, 450, 1, .9);
    cutout(IMG.taufik, x + 760, SH - 40, 700);
    shadow(() => { rr(x + 60, 820, 520, 260, 30); X.fillStyle = 'rgba(20,8,6,.75)'; X.fill(); }, 20, .4, 8);
    txt('Nak kenal PGMall dan', x + 90, 880, F.b(30), K.white);
    txt('Public Gold lebih dekat?', x + 90, 925, F.b(30), K.white);
    txt('Mula dengan belajar,', x + 90, 985, F.b(32), K.gold); txt('baru buat keputusan.', x + 90, 1035, F.b(32), K.gold);
    shadow(() => { rr(x + 60, 1110, 520, 110, 55); X.fillStyle = K.maroon; X.fill(); }, 20, .4, 8);
    txt('Nak tahu? DM saya!', x + 320, 1180, F.h(40), K.white, 'center');
  },
];
