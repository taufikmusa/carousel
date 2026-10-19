// carousel-script — "5 Tanda Gaji Naik Tapi Dompet Tetap Kering" (foto bawah + teks atas), 7 slaid, 1080x1350 (4:5).
// Gelap/cerah berselang. Gantikan teks, gambar (img/p1..p6) dan THEME. Potret CTA: img/me.png.
var SH_OVERRIDE = 1350, NOFOOTER = true;
var N = 7;
var THEME = 'maroon';
var DARK = [0, 2, 4, 6];
var ASSETS = { p1: 'p1.jpg', p2: 'p2.jpg', p3: 'p3.jpg', p4: 'p4.jpg', p5: 'p5.jpg', p6: 'p6.jpg', me: 'me.png' };
var D = { handle: '@taufik.pg' };
window.BG = function (i, x0, dark) {
  if (dark) { bgVelvet(x0, i * 5 + 1); return; }
  X.fillStyle = K.bg; X.fillRect(x0, 0, SW, SH); var g = X.createRadialGradient(x0 + SW * .3, 300, 60, x0 + SW / 2, 500, SW); g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(1, TH.paperTint); X.fillStyle = g; X.fillRect(x0, 0, SW, SH);
};
var PH = 560, PY = 1350 - PH;   // kawasan foto bawah
function slide(i, dark, eye, l1, l2, text, img, o) {
  o = o || {}; scriptHead(i, N, dark); scriptEye(eye, 160, dark);
  headline([[[l1, dark ? 'sw' : 'si']], [[l2, dark ? 'sg' : 'sr']]], M, 300, { size: 128, maxW: 936, lh: .96 });
  para(text, M, 482, 760, 38, { band: true, dark: dark, lh: 1.42 });
  photoFade(IMG[img], PY, PH, { dark: dark, fx: o.fx, fy: o.fy, zoom: o.zoom });
}
var SLIDES = [
  // 1 — cover
  function (i) {
    scriptHead(i, N, true);
    headline([[['Gaji Naik,', 'sw']], [['Dompet', 'sw']], [['tetap kering.', 'sg']]], M, 235, { size: 150, maxW: 936, lh: .98 });
    T('5 tanda yang anda patut kenal pasti.', M, 640, F.ss(500, 42), '#F6E9D0');
    photoFade(IMG.p1, 690, 660, { dark: true, fade: .3 });
  },
  function (i) { slide(i, false, 'Tanda 01', 'GAJI NAIK,', 'BELANJA NAIK.', 'Setiap kenaikan gaji diikuti *kenaikan taraf belanja.* Gaji bertambah *RM500,* komitmen dan perbelanjaan baru turut melonjak dalam jumlah yang sama.', 'p2', { fy: .4 }); },
  function (i) { slide(i, true, 'Tanda 02', 'MEWAH JADI', 'KEPERLUAN.', 'Barangan mewah dahulu kini bertukar menjadi keperluan. Standard hidup yang terus dinaikkan *menelan setiap sen* kenaikan pendapatan anda.', 'p3'); },
  function (i) { slide(i, false, 'Tanda 03', 'SENTIASA', 'TAK CUKUP.', 'Rasa tidak cukup walau berpendapatan tinggi. Perbelanjaan membesar *lebih pantas* daripada kemampuan anda untuk menyimpan.', 'p4', { fy: .3 }); },
  function (i) { slide(i, true, 'Tanda 04', 'SIMPANAN', 'MENDATAR.', 'Kadar simpanan peribadi *kekal mendatar atau merosot.* Kenaikan gaji sepatutnya melonjakkan peratusan wang yang berjaya diselamatkan.', 'p5'); },
  function (i) { slide(i, false, 'Tanda 05', 'KUNCI KE', 'DALAM EMAS.', 'Kunci lebihan gaji ke dalam emas sebelum sempat dibelanjakan. Tukarkan kenaikan pendapatan kepada *aset kekal* sebelum nafsu berbelanja mengambil alih.', 'p6'); },
  // 7 — CTA
  function (i) {
    scriptHead(i, N, true);
    headline([[['KUNCI GAJI', 'sw']], [['JADI ASET!', 'sg']]], M, 235, { size: 128, maxW: 936, lh: .96 });
    para('Punca utama kegagalan kewangan *bukan kerana gaji kecil.* Tetapi *nafsu gaya hidup* yang tidak pernah kenyang.', M, 420, 600, 36, { band: true, dark: true, lh: 1.42 });
    X.save(); var g = X.createLinearGradient(0, 0, SW, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.3, '#E3BB55'); g.addColorStop(1, '#B27F17'); X.strokeStyle = g; X.lineWidth = 5; X.beginPath(); X.moveTo(0, 1180); X.quadraticCurveTo(500, 1090, SW, 1000); X.stroke(); X.restore();
    cutoutBC(IMG.me, 800, SH, 760);
    T('Follow', M, 940, F.pf(900, 50), TH.gl[0]); T(D.handle, M, 1000, F.pf(900, 50), TH.gl[0]);
  },
];
