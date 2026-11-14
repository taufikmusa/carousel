// carousel-script — "Dulu Ketagih Berbelanja, Sekarang Ketagih Menyimpan Emas" (teks atas + foto bawah + latar foto kabur), 7 slaid, 1080x1080 (1:1).
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
    headline([[['Dulu ketagih', 'white']], [['berbelanja.', 'white']], [['Sekarang ketagih', 'goldl']], [['menyimpan emas.', 'goldl']]], M, 190, { size: 90, maxW: 936, lh: .97 });
    T('Sedar-sedar, 100 gram emas = RM57,000!', M, 620, F.ss(700, 38), '#FFFFFF');
    photoFade(IMG.p1, 700, 380, { fade: .2, filter: 'saturate(1.12) contrast(1.05)' });
  },
  function (i) { slide(i, false, 'Ketagih yang baik', 'GAJI MASUK,', 'BELI EMAS.', 'Dapat gaji, beli emas. Dapat bonus, *tambah emas.* Ada duit lebihan, fikir nak tambah *berapa gram lagi.*', 'p2', { fy: .4 }); },
  function (i) { slide(i, true, 'Hasilnya', '100 GRAM', 'EMAS TERKUMPUL.', 'Lama-kelamaan, tanpa sedar sudah terkumpul *100 gram emas.* Nilainya kini sekitar *RM57,000.*', 'p3'); },
  function (i) { slide(i, false, 'Ketagih yang satu lagi', 'KETAGIH', 'BERBELANJA.', 'Nampak barang menarik, terus checkout. Kad kredit jadi penyelamat sementara. Bila penyata sampai, *hutang pula yang menimbun,* bukan harta.', 'p4', { fy: .3 }); },
  function (i) { slide(i, true, 'Tabiat', 'TABIAT BENTUK', 'KEWANGAN.', 'Tabiat yang kita ulang setiap hari *membentuk kedudukan kewangan.* Biasa berbelanja, duit berkurangan. Biasa menyimpan, *insya-Allah harta bertambah.*', 'p5'); },
  function (i) { slide(i, false, 'Pesan guru saya', 'SAYANG DENGAN', 'GRAM KUMPULAN.', 'Tn Mohd Zulkifli Shafie: bila sudah sayang dengan gram yang dikumpul, kita akan *fikir banyak kali* sebelum menjualnya untuk perkara yang tak penting.', 'p6'); },
  function (i) { slide(i, true, 'Ingat', 'JANGAN TAKUT', 'KETAGIH MENYIMPAN.', 'Takutlah kalau kita *ketagih berbelanja* sampai tak mampu menyimpan. Mula sedikit demi sedikit, *tak perlu tunggu kaya.*', 'p7'); },
  function (i) {
    scriptHead(i, N, true);
    headline([[['BINA TABIAT', 'white']], [['DAHULU.', 'goldl']], [['JOM SIMPAN!', 'goldl']]], M, 205, { size: 92, maxW: 936, lh: .96 });
    para('Yang penting, *bina tabiat dahulu.* Dulu ragu, kini tahu. Mula dengan jumlah kecil, konsisten tambah gram.', M, 520, 520, 28, { band: true, dark: true, lh: 1.4 });
    X.save(); var g = X.createLinearGradient(0, 0, SW, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.3, '#E3BB55'); g.addColorStop(1, '#B27F17'); X.strokeStyle = g; X.lineWidth = 5; X.beginPath(); X.moveTo(0, 990); X.quadraticCurveTo(500, 930, SW, 830); X.stroke(); X.restore();
    cutoutBC(IMG.me, 830, SH, 700);
    T('Taufik Musa', M, 880, F.pf(900, 52), goldFillL); T('Dealer Public Gold', M, 918, F.ss(700, 26), '#FFFFFF', 'left', 1); T('Follow ' + D.handle, M, 990, F.pf(900, 40), TH.gl[0]);
  },
];
