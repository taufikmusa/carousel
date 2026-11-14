// carousel-script — "Saya Tak Nak Kerja Impian" (teks atas + foto bawah + latar foto kabur), 7 slaid, 1080x1080 (1:1).
// Gelap/cerah berselang; latar = foto slaid itu sendiri dikaburkan (tone sama dengan foto). Ganti teks, img/p1..p6, THEME. Potret CTA: img/me.png.
var NOFOOTER = true;
var N = 8;
var THEME = 'maroon';
var DARK = [0, 2, 4, 6, 7];
var ASSETS = { p1: 'p1.jpg', p2: 'p2.jpg', p3: 'p3.jpg', p4: 'p4.jpg', p5: 'p5.jpg', p6: 'p6.jpg', p7: 'p7.jpg', me: 'me.png' };
var D = { handle: '@taufik.pg' };
var BGK = ['p1','p2','p3','p4','p5','p6','p7','p1'];     // foto untuk latar kabur setiap slaid
window.BG = function (i, x0, dark) {
  var im = IMG[BGK[i]];
  if (dark) bgSatin(x0, i * 11 + 4);   // satin merah ceri (rujukan Taufik)
  else bgPhoto(x0, im, { zoom: 2.6, fx: .5, fy: .45, wash: '251,247,240', a: .72 });
};
var PH = 440, PY = 1080 - PH;   // kawasan foto bawah
function slide(i, dark, eye, l1, l2, text, img, o) {
  o = o || {}; scriptHead(i, N, dark); scriptEye(eye, 150, dark);
  headline([[[l1, dark ? 'white' : 'ink']], [[l2, dark ? 'goldl' : 'red']]], M, 262, { size: 92, maxW: 936, lh: .95 });
  para(text, M, 430, 936, 30, { band: true, dark: dark, lh: 1.4 });
  photoFade(IMG[img], PY + 30, PH - 30, { fx: o.fx, fy: o.fy, zoom: o.zoom, fade: .3, filter: dark ? 'saturate(1.15) contrast(1.05)' : undefined });
}
var SLIDES = [
  function (i) {
    scriptHead(i, N, true);
    var by = headline([[['Saya tak nak', 'white']], [['kerja impian.', 'white']], [['Cuma nak kerja', 'goldl']], [['yang tak muncul', 'goldl']], [['dalam mimpi.', 'goldl']]], M, 190, { size: 84, maxW: 936, lh: .97 });
    photoFade(IMG.p1, 620, 460, { fade: .22, fy: .62, filter: 'saturate(1.12) contrast(1.05)' });
  },
  function (i) { slide(i, false, 'Satire', 'KERJA YANG', 'TAK MENGHANTUI.', '\u201CI don\u2019t want a dream job. I want a job that *doesn\u2019t appear in my dreams.*\u201D Bukan jawatan tinggi atau pejabat mewah, cuma kerja yang *tak menghantui* hidup selepas waktu pejabat.', 'p2', { fy: .34 }); },
  function (i) { slide(i, true, 'Rutin harian', 'JAM 9 PAGI', 'SAMPAI 5 PETANG.', 'Mesyuarat berturut-turut. Email tak habis-habis. Semua deadline dianggap *urgent.* Badan dah keluar pejabat, tapi *fikiran tertinggal di meja kerja.*', 'p3', { fy: .6 }); },
  function (i) { slide(i, false, 'Selepas waktu kerja', 'KERJA IKUT', 'BALIK RUMAH.', 'Waktu makan malam, terfikir email belum dibalas. Sebelum tidur, *periksa mesej bos.* Tengah malam pun boleh *termimpi sedang meeting!*', 'p4', { fy: .34 }); },
  function (i) { slide(i, true, 'Soalan', 'BEKERJA UNTUK', 'HIDUP, ATAU?', 'Kita bekerja untuk cari *kehidupan yang lebih baik,* atau kehidupan kita dah *habis digunakan untuk bekerja?*', 'p5', { fy: .2 }); },
  function (i) { slide(i, false, 'Bezanya', 'BINA HIDUP,', 'BUKAN HABISKAN.', 'Bukan bermaksud tak perlu kerja keras. Bezanya antara *bekerja untuk membina kehidupan* dengan *menghabiskan seluruh kehidupan untuk bekerja.*', 'p6', { fy: .34 }); },
  function (i) { slide(i, true, 'Yang bernilai', 'KESIHATAN, KELUARGA,', 'KETENANGAN.', 'Kerjaya dan pendapatan memang penting. Tapi *kesihatan, masa bersama orang tersayang* dan *ketenangan fikiran* pun ada nilainya.', 'p7', { fy: .42 }); },
  function (i) {
    scriptHead(i, N, true);
    headline([[['KERJA ITU', 'white']], [['SEBAHAGIAN,', 'goldl']], [['BUKAN SEMUA.', 'goldl']]], M, 205, { size: 92, maxW: 936, lh: .96 });
    para('Kerja sepatutnya jadi *sebahagian* hidup kita, bukan *ambil alih* seluruhnya. Semoga mimpi malam hanya yang menggembirakan, bukan email bos: *\u201CCan we have a quick meeting tomorrow morning?\u201D*', M, 520, 520, 27, { band: true, dark: true, lh: 1.4 });
    X.save(); var g = X.createLinearGradient(0, 0, SW, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.3, '#E3BB55'); g.addColorStop(1, '#B27F17'); X.strokeStyle = g; X.lineWidth = 5; X.beginPath(); X.moveTo(0, 990); X.quadraticCurveTo(500, 930, SW, 830); X.stroke(); X.restore();
    cutoutBC(IMG.me, 830, SH, 700);
    T('Taufik Musa', M, 880, F.pf(900, 52), goldFillL); T('Dealer Public Gold', M, 918, F.ss(700, 26), '#FFFFFF', 'left', 1); T('Follow ' + D.handle, M, 990, F.pf(900, 40), TH.gl[0]);
  },
];
