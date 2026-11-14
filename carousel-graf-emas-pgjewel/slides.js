// pgjewel (gaya krim berpusat) — "Graf setahun vs graf lima tahun" 8 slaid, 1080x1080. Carta = ILUSTRASI. Potret hanya slaid 8.
var NOFOOTER = true;
var N = 8;
var THEME = 'maroon';
var DARK = [0, 7]; var NODOTS = [0, 7];
var ASSETS = { emas: 'emas.jpg', gap: 'gap.jpg', me: 'thumbs-up.png' };
var D = { pgcode: 'PG00359605', wa: '60132740711', web: 'simpanemasfizikal.com' };
window.BG = function (i, x0, dark) { if (dark) { bgSatin(x0, i * 11 + 4); return true; } return false; };

// carta ilustrasi dalam kad. pts [[x0..1,y0..1]]
function miniChart(x, y, w, h, pts) {
  card(x, y, w, h, { r: 26, bar: 1 });
  X.save(); X.strokeStyle = K.line; X.lineWidth = 2; for (var k = 1; k < 4; k++) { X.beginPath(); X.moveTo(x + 36, y + 30 + (h - 60) * k / 4); X.lineTo(x + w - 30, y + 30 + (h - 60) * k / 4); X.stroke(); }
  var P = pts.map(function (p) { return [x + 48 + (w - 96) * p[0], y + 34 + (h - 68) * p[1]]; });
  X.beginPath(); X.moveTo(P[0][0], P[0][1]); for (var j = 1; j < P.length; j++) { var mx = (P[j - 1][0] + P[j][0]) / 2; X.bezierCurveTo(mx, P[j - 1][1], mx, P[j][1], P[j][0], P[j][1]); }
  X.lineWidth = 9; X.lineCap = 'round'; X.strokeStyle = K.red1; X.stroke();
  var e = P[P.length - 1]; X.beginPath(); X.arc(e[0], e[1], 12, 0, 7); X.fillStyle = '#fff'; X.fill(); X.lineWidth = 6; X.strokeStyle = K.red1; X.stroke(); X.restore();
  T('ILUSTRASI, bukan data sebenar', x + 36, y + h - 12, F.ss(500, 20), K.muted);
}
function stat(x, y, w, h, label, val, unit) { card(x, y, w, h, { r: 22, bar: 1 }); T(label, x + 36, y + 44, F.ss(600, 24), K.muted); T(val, x + 36, y + 92, F.ss(800, 40), K.maroon); if (unit) T(unit, x + 36, y + 124, F.ss(500, 22), K.muted); }

var SLIDES = [
  // 1 — cover (gelap satin + potret, sama gaya slaid 8)
  function (i) {
    pill(i, N, true);
    headline([[['Kalau tengok', 'white']], [['graf emas', 'goldl']], [['setahun,', 'white']], [['risau?', 'goldil']]], M, 200, { size: 100, maxW: 600 });
    para('Tapi graf *lima tahun* cerita lain.', M, 700, 450, 32, { dark: true });
    cutoutBC(IMG.me, 850, SH, 730);
    T('Taufik Musa', M, 880, F.pf(900, 50), goldFillL); T('Dealer Public Gold', M, 916, F.ss(700, 25), '#FFFFFF', 'left', 1.5);
    foot(true);
  },
  // 2 — graf setahun
  function (i) {
    pill(i, N); goldItalic('Graf setahun', 175, 104, true); redTitle('-4.72%', 325, 170, 900);
    T('Emas bukan sentiasa naik.', SW / 2, 410, F.ss(700, 40), K.ink, 'center');
    miniChart(M, 470, 560, 380, [[0, .18], [.15, .05], [.35, .25], [.55, .4], [.78, .66], [1, .86]]);
    stat(660, 470, 348, 170, 'Tertinggi', 'USD5,327', 'seauns'); stat(660, 660, 348, 190, '12 Nov 2026', 'USD3,992', 'seauns');
    box(M, 880, 936, 100, 'red', 22); T('Turun ~15.01% dalam 6 bulan', SW / 2, 945, F.ss(800, 38), '#FFFFFF', 'center'); foot();
  },
  // 3 — graf lima tahun
  function (i) {
    pill(i, N); goldItalic('Graf lima tahun', 175, 104, true); redTitle('+114.05%', 325, 170, 900);
    T('Jangan nilai satu tahun sahaja.', SW / 2, 410, F.ss(700, 40), K.ink, 'center');
    miniChart(M, 470, 560, 380, [[0, .9], [.2, .78], [.4, .6], [.55, .64], [.78, .3], [1, .08]]);
    card(660, 470, 348, 380, { r: 22, bar: 1 }); T('Harga emas', 834, 560, F.ss(600, 28), K.muted, 'center'); T('lebih 2x', 834, 650, F.pf(900, 64), goldFill, 'center'); T('ganda', 834, 710, F.ss(800, 44), K.maroon, 'center'); T('dalam 5 tahun', 834, 780, F.ss(500, 26), K.muted, 'center');
    box(M, 880, 936, 100, 'red', 22); T('Lihat perjalanan yang panjang', SW / 2, 945, F.ss(800, 38), '#FFFFFF', 'center'); foot();
  },
  // 4 — DCA
  function (i) {
    pill(i, N); goldItalic('Strategi DCA', 175, 104, true); redTitle('RM100 sebulan', 325, 150, 900);
    T('Harga turun, beli lebih banyak.', SW / 2, 410, F.ss(700, 40), K.ink, 'center');
    card(M, 470, 456, 250, { r: 26, bar: 1 }); T('HARGA TURUN', 126, 535, F.ss(700, 24), K.muted, 'left', 2); T('Lebih gram', 126, 600, F.pf(900, 46), K.maroon); T('untuk RM100 yang sama', 126, 648, F.ss(500, 26), K.ink);
    card(552, 470, 456, 250, { r: 26, bar: 1 }); T('HARGA NAIK', 606, 535, F.ss(700, 24), K.muted, 'left', 2); T('Gram dah ada', 606, 600, F.pf(900, 46), K.maroon); T('dikumpul lebih awal', 606, 648, F.ss(500, 26), K.ink);
    box(M, 760, 936, 220, 'red', 28); T('PESAN GURU SAYA', 112, 815, F.ss(700, 24), TH.eyeD, 'left', 3);
    para('“Harga emas naik kita beli, harga emas turun kita beli *lebih banyak!*”', 112, 870, 856, 36, { dark: true, lh: 1.3 }); T('Tn Mohd Zulkifli Shafie', 112, 960, F.ss(600, 24), TH.eyeD); foot();
  },
  // 5 — mula
  function (i) {
    pill(i, N); goldItalic('Belum pernah simpan?', 175, 96, true); redTitle('Mula RM100', 325, 160, 900);
    T('Tak perlu tunggu harga terendah.', SW / 2, 410, F.ss(700, 40), K.ink, 'center');
    [['Tetapkan jumlah', 'yang tak bebankan keluarga'], ['Mula di GAP Public Gold', 'serendah RM100'], ['Tambah gram', 'sedikit demi sedikit']].forEach(function (r, k) {
      var y = 470 + k * 150; card(M, y, 936, 126, { r: 24, bar: 1 }); numCircle(150, y + 63, 38, String(k + 1)); T(r[0], 216, y + 58, F.ss(800, 32), K.maroon); T(r[1], 216, y + 98, F.ss(500, 26), K.ink);
    });
    box(M, 930, 936, 76, 'red', 20); T('Gram demi gram, konsisten.', SW / 2, 982, F.ss(800, 34), '#FFFFFF', 'center'); foot();
  },
  // 6 — jangka panjang
  function (i) {
    pill(i, N); goldItalic('Simpan jangka panjang', 175, 96, true); redTitle('Bukan harian', 325, 150, 900);
    T('Jangan fikir macam pelabur harian.', SW / 2, 410, F.ss(700, 40), K.ink, 'center');
    card(M, 470, 456, 330, { r: 26, bar: 1 }); crossCircle(150, 540, 30); T('Semak harga', 126, 640, F.ss(800, 34), K.maroon); T('tiap jam', 126, 682, F.ss(800, 34), K.maroon); T('Emosi terganggu', 126, 740, F.ss(500, 26), K.ink);
    card(552, 470, 456, 330, { r: 26, bar: 1 }); checkCircle(630, 540, 30); T('Tambah gram', 606, 640, F.ss(800, 34), K.maroon); T('setiap bulan', 606, 682, F.ss(800, 34), K.maroon); T('Simpanan bertambah', 606, 740, F.ss(500, 26), K.ink);
    box(M, 840, 936, 140, 'red', 24); T('Guna duit lebihan,', SW / 2, 905, F.ss(700, 36), '#FFFFFF', 'center'); T('bukan duit kecemasan.', SW / 2, 954, F.pf(900, 42), goldFillL, 'center'); foot();
  },
  // 7 — kesimpulan
  function (i) {
    pill(i, N); goldItalic('Kesimpulan', 175, 104, true); redTitle('Fokus tambah gram', 325, 130, 900);
    card(M, 400, 936, 330, { r: 28, bar: 1 }); T('“', 112, 520, F.pf(900, 130), goldFill);
    para('Jangan bazirkan emosi memantau graf setiap 20 minit. Yang penting, *gram emas bertambah* setiap bulan.', 186, 500, 770, 36, { lh: 1.35 }); T('Tn Mohd Zulkifli Shafie', 186, 690, F.ss(600, 24), K.muted);
    box(M, 770, 936, 200, 'red', 26); T('Prestasi lalu bukan jaminan', SW / 2, 850, F.ss(700, 36), '#FFFFFF', 'center'); T('harga terus naik.', SW / 2, 912, F.pf(900, 46), goldFillL, 'center'); foot();
  },
  // 8 — CTA
  function (i) {
    pill(i, N, true);
    headline([[['Dulu ragu,', 'goldl']], [['kini tahu!', 'white']], [['Jom simpan', 'goldl']], [['emas.', 'goldil']]], M, 200, { size: 96, maxW: 600 });
    para('Yang menunggu harga sempurna mungkin terus menunggu. *Mula bina disiplin.*', M, 560, 450, 28, { dark: true, lh: 1.3 });
    cutoutBC(IMG.me, 850, SH, 730);
    T('Moga perkongsian ini bermanfaat.', M, 790, F.ss(500, 26), TH.dkText);
    T('Taufik Musa', M, 838, F.pf(900, 54), goldFillL); T('Dealer Public Gold', M, 874, F.ss(700, 25), '#FFFFFF', 'left', 1.5);
    [['PG CODE', D.pgcode, 916], ['WHATSAPP', D.wa, 946], ['LAMAN', D.web, 976]].forEach(function (r) { T(r[0], M, r[2], F.ss(700, 21), TH.eyeD, 'left', 2.5); T(r[1], M + 160, r[2], F.ss(800, 25), '#FFFFFF', 'left', 1); });
    foot(true);
  },
];
