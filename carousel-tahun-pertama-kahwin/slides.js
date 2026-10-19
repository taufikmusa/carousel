// carousel-script — "5 Keputusan Kewangan Wajib Tahun Pertama Kahwin" (teks atas + foto bawah + latar foto kabur), 7 slaid, 1080x1080 (1:1).
// Gelap/cerah berselang; latar = foto slaid itu sendiri dikaburkan (tone sama dengan foto). Ganti teks, img/p1..p6, THEME. Potret CTA: img/me.png.
var NOFOOTER = true;
var N = 7;
var THEME = 'maroon';
var DARK = [0, 2, 4, 6];
var ASSETS = { p1: 'p1.jpg', p2: 'p2.jpg', p3: 'p3.jpg', p4: 'p4.jpg', p5: 'p5.jpg', p6: 'p6.jpg', me: 'me.png' };
var D = { handle: '@taufik.pg' };
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
  function (i) {
    scriptHead(i, N, true);
    var by = headline([[['5 Keputusan', 'white']], [['Kewangan Wajib', 'white']], [['Tahun Pertama', 'goldl']], [['Kahwin.', 'goldl']]], M, 190, { size: 122, maxW: 936, lh: .97 });
    swoosh(M - 10, M + 640, by + 18, 7);
    T('Silap urus duit tahun ini, kesannya panjang.', M, by + 72, F.ss(500, 36), '#FFFFFF');
    photoFade(IMG.p1, 640, 440, { fade: .16, filter: 'saturate(1.15) contrast(1.05)' });
  },
  function (i) { slide(i, false, 'Keputusan 01', 'SIMPANAN', 'KECEMASAN DULU.', 'Bina *simpanan kecemasan* sebelum tambah hutang besar. Jangan terburu-buru beli *perabot mewah* atau *kereta baru* tanpa tabung penampan.', 'p2', { fy: .4 }); },
  function (i) { slide(i, true, 'Keputusan 02', 'BINCANG DUIT', 'SECARA TELUS.', 'Tekanan duit adalah *punca utama pergaduhan* suami isteri. Ada *matlamat bersama* buat hati tenang.', 'p3'); },
  function (i) { slide(i, false, 'Keputusan 03', 'TABUNG ANAK', 'AWAL-AWAL.', 'Mula tabung pendidikan sebelum anak lahir. *RM100 sebulan* hari ini jauh lebih ringan berbanding cari *puluhan ribu* waktu anak nak masuk universiti.', 'p4', { fy: .3 }); },
  function (i) { slide(i, true, 'Keputusan 04', 'KUNCI NILAI', 'SIMPANAN.', 'Duit tunai yang duduk diam dalam bank *susut nilainya setiap tahun.* Kunci nilai simpanan daripada *dimakan inflasi.*', 'p5'); },
  function (i) { slide(i, false, 'Keputusan 05', 'SIMPAN EMAS,', 'RAPAT HUBUNGAN.', 'Menabung bersama setiap bulan membina *disiplin* dan *persefahaman* dalam rumah tangga.', 'p6'); },
  function (i) {
    scriptHead(i, N, true);
    headline([[['KUKUHKAN', 'white']], [['KEWANGAN', 'goldl']], [['BERSAMA!', 'goldl']]], M, 200, { size: 110, maxW: 936, lh: .96 });
    para('Perkahwinan bukan sekadar tentang cinta. Tapi tentang *membina masa depan yang stabil.*', M, 490, 520, 33, { band: true, dark: true, lh: 1.4 });
    X.save(); var g = X.createLinearGradient(0, 0, SW, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.3, '#E3BB55'); g.addColorStop(1, '#B27F17'); X.strokeStyle = g; X.lineWidth = 5; X.beginPath(); X.moveTo(0, 960); X.quadraticCurveTo(500, 890, SW, 800); X.stroke(); X.restore();
    cutoutBC(IMG.me, 810, SH, 640);
    T('Follow', M, 800, F.pf(900, 46), TH.gl[0]); T(D.handle, M, 856, F.pf(900, 46), TH.gl[0]);
  },
];
