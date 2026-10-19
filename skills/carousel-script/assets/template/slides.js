// carousel-script — "5 Tanda Gaji Naik Tapi Dompet Tetap Kering" (teks atas + foto bawah + latar foto kabur), 7 slaid, 1080x1080 (1:1).
// Gelap/cerah berselang; latar = foto slaid itu sendiri dikaburkan (tone sama dengan foto). Ganti teks, img/p1..p6, THEME. Potret CTA: img/me.png.
var NOFOOTER = true;
var N = 7;
var THEME = 'maroon';
var DARK = [0, 2, 4, 6];
var ASSETS = { p1: 'p1.jpg', p2: 'p2.jpg', p3: 'p3.jpg', p4: 'p4.jpg', p5: 'p5.jpg', p6: 'p6.jpg', me: 'me.png' };
var D = { handle: '@taufik.pg' };
// garis tepi + bayang pada tajuk supaya nampak timbul (gelap: putih/emas; cerah: hitam/merah)
var HSTROKE = { white: '#5A0416', goldl: '#4E2D04', ink: '#FFFFFF', red: '#FFFFFF' };
var BGK = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p1'];     // foto untuk latar kabur setiap slaid
window.BG = function (i, x0, dark) {
  var im = IMG[BGK[i]];
  if (dark) bgSatin(x0, i * 11 + 4);   // satin merah ceri (rujukan Taufik)
  else bgPhoto(x0, im, { zoom: 2.6, fx: .5, fy: .45, wash: '251,247,240', a: .72 });
};
var PH = 440, PY = 1080 - PH;   // kawasan foto bawah
function slide(i, dark, eye, l1, l2, text, img, o) {
  o = o || {}; scriptHead(i, N, dark); scriptEye(eye, 150, dark);
  headline([[[l1, dark ? 'white' : 'ink']], [[l2, dark ? 'goldl' : 'red']]], M, 262, { size: 104, maxW: 936, lh: .95 });
  para(text, M, 438, 800, 34, { band: true, dark: dark, lh: 1.4 });
  photoFade(IMG[img], PY + 30, PH - 30, { fx: o.fx, fy: o.fy, zoom: o.zoom, fade: .3, filter: dark ? 'saturate(1.15) contrast(1.05)' : undefined });
}
var SLIDES = [
  // 1 — cover (satin merah ceri, tajuk serif putih+emas, foto tajam)
  function (i) {
    scriptHead(i, N, true);
    var by = headline([[['Gaji Naik,', 'white']], [['Dompet', 'white']], [['tetap kering.', 'goldl']]], M, 200, { size: 132, maxW: 936, lh: .97 });
    swoosh(M - 10, M + 640, by + 22, 7);
    T('5 tanda yang anda patut kenal pasti.', M, by + 78, F.ss(500, 40), '#FFFFFF');
    photoFade(IMG.p1, 560, 520, { fade: .16, filter: 'saturate(1.15) contrast(1.05)' });
  },
  function (i) { slide(i, false, 'Tanda 01', 'GAJI NAIK,', 'BELANJA NAIK.', 'Setiap kenaikan gaji diikuti *kenaikan taraf belanja.* Gaji bertambah *RM500,* komitmen dan perbelanjaan baru turut melonjak dalam jumlah yang sama.', 'p2', { fy: .4 }); },
  function (i) { slide(i, true, 'Tanda 02', 'MEWAH JADI', 'KEPERLUAN.', 'Barangan mewah dahulu kini bertukar menjadi keperluan. Standard hidup yang terus dinaikkan *menelan setiap sen* kenaikan pendapatan anda.', 'p3'); },
  function (i) { slide(i, false, 'Tanda 03', 'SENTIASA', 'TAK CUKUP.', 'Rasa tidak cukup walau berpendapatan tinggi. Perbelanjaan membesar *lebih pantas* daripada kemampuan anda untuk menyimpan.', 'p4', { fy: .3 }); },
  function (i) { slide(i, true, 'Tanda 04', 'SIMPANAN', 'MENDATAR.', 'Kadar simpanan peribadi *kekal mendatar atau merosot.* Kenaikan gaji sepatutnya melonjakkan peratusan wang yang berjaya diselamatkan.', 'p5'); },
  function (i) { slide(i, false, 'Tanda 05', 'KUNCI KE', 'DALAM EMAS.', 'Kunci lebihan gaji ke dalam emas sebelum sempat dibelanjakan. Tukarkan kenaikan pendapatan kepada *aset kekal* sebelum nafsu berbelanja mengambil alih.', 'p6'); },
  // 7 — CTA
  function (i) {
    scriptHead(i, N, true);
    headline([[['KUNCI GAJI', 'white']], [['JADI ASET!', 'goldl']]], M, 215, { size: 118, maxW: 936, lh: .96 });
    para('Punca utama kegagalan kewangan *bukan kerana gaji kecil.* Tetapi *nafsu gaya hidup* yang tidak pernah kenyang.', M, 410, 560, 34, { band: true, dark: true, lh: 1.4 });
    X.save(); var g = X.createLinearGradient(0, 0, SW, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.3, '#E3BB55'); g.addColorStop(1, '#B27F17'); X.strokeStyle = g; X.lineWidth = 5; X.beginPath(); X.moveTo(0, 960); X.quadraticCurveTo(500, 890, SW, 800); X.stroke(); X.restore();
    cutoutBC(IMG.me, 810, SH, 640);
    T('Follow', M, 800, F.pf(900, 46), TH.gl[0]); T(D.handle, M, 856, F.pf(900, 46), TH.gl[0]);
  },
];
