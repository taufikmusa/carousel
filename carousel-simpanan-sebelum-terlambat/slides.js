// carousel-script — "Jangan Tunggu Sampai Duit Tak Cukup" (teks atas + foto bawah + latar foto kabur), 7 slaid, 1080x1080 (1:1).
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
    headline([[['Jangan tunggu', 'white']], [['duit tak cukup', 'white']], [['baru belajar', 'goldl']], [['hargai simpanan.', 'goldl']]], M, 190, { size: 90, maxW: 936, lh: .97 });
    photoFade(IMG.p1, 660, 420, { fade: .2, filter: 'saturate(1.12) contrast(1.05)' });
  },
  function (i) { slide(i, false, 'Selagi masih stabil', 'GAJI MASUK,', 'RASA SELAMAT.', 'Selagi gaji masuk dan bisnes berjalan, kita jarang fikir tentang kehilangan semua itu. Tapi *hidup tak semestinya ikut rancangan.*', 'p2', { fy: .5 }); },
  function (i) { slide(i, true, 'Yang tak dijangka', 'KEHILANGAN KERJA,', 'BISNES MEROSOT.', 'Kesihatan terganggu. Atau tiba-tiba ada *kecemasan yang perlukan wang besar.* Ketika itulah kita rasa *betapa pentingnya simpanan.*', 'p3'); },
  function (i) { slide(i, false, 'Waktu terbaik', 'MENYIMPAN BILA', 'MASIH MAMPU.', 'Bukan ketika kita sedang susah, tapi ketika *masih ada kemampuan.* Fikir juga cara *mengurus dan melindungi* pendapatan yang sudah ada.', 'p4', { fy: .3 }); },
  function (i) { slide(i, true, 'Langkah 1', 'DANA KECEMASAN', 'TUNAI DULU.', 'Mulakan dengan *dana kecemasan tunai* yang mudah diakses. Kurangkan komitmen tak perlu, dan bina asas kewangan yang lebih kukuh.', 'p5'); },
  function (i) { slide(i, false, 'Langkah 2', 'EMAS, BUKAN', 'GANTI TUNAI.', 'Emas fizikal boleh mempelbagaikan simpanan, tapi *jangan jadikan ia pengganti dana kecemasan.* Emas perlu dijual untuk dapat tunai, dan harganya *turun naik.*', 'p6'); },
  function (i) { slide(i, true, 'Ketenangan', 'BUKAN MESTI', 'KAYA.', 'Ketenangan kewangan ialah bila sesuatu tak dijangka berlaku, kita masih ada *simpanan untuk bertahan* tanpa terlalu bergantung kepada orang lain.', 'p7'); },
  function (i) {
    scriptHead(i, N, true);
    headline([[['MULA APA YANG', 'white']], [['MAMPU HARI INI.', 'goldl']]], M, 205, { size: 92, maxW: 936, lh: .96 });
    para('Tak perlu tunggu sempurna. Mulakan simpanan emas dengan *Akaun GAP Public Gold,* serendah *RM100* ikut kemampuan.', M, 440, 520, 28, { band: true, dark: true, lh: 1.4 });
    X.save(); var g = X.createLinearGradient(0, 0, SW, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.3, '#E3BB55'); g.addColorStop(1, '#B27F17'); X.strokeStyle = g; X.lineWidth = 5; X.beginPath(); X.moveTo(0, 990); X.quadraticCurveTo(500, 930, SW, 830); X.stroke(); X.restore();
    cutoutBC(IMG.me, 830, SH, 700);
    T('Taufik Musa', M, 880, F.pf(900, 52), goldFillL); T('Dealer Public Gold', M, 918, F.ss(700, 26), '#FFFFFF', 'left', 1); T('Follow ' + D.handle, M, 990, F.pf(900, 40), TH.gl[0]);
  },
];
