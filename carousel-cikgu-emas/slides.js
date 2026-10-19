// carousel-script — "5 Sebab Cikgu Golongan Paling Sesuai Simpan Emas" (teks atas + foto bawah + latar foto kabur), 7 slaid, 1080x1080 (1:1).
// Gelap/cerah berselang; latar = foto slaid itu sendiri dikaburkan (tone sama dengan foto). Ganti teks, img/p1..p6, THEME. Potret CTA: img/me.png.
var NOFOOTER = true;
var N = 7;
var THEME = 'maroon';
var DARK = [0, 2, 4, 6];
var ASSETS = { p1:"p1.jpg",p2:"p2.jpg",p3:"p3.jpg",p4:"p4.jpg",p5:"p5.jpg",p6:"p6.jpg",m1:"m1.png",m2:"m2.png",m3:"m3.png",m4:"m4.png",m5:"m5.png",m6:"m6.png",m7:"m7.png" };
var D = { handle: '@taufik.pg' };
var BGK = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p1'];     // foto untuk latar kabur setiap slaid
window.BG = function (i, x0, dark) {
  var im = IMG[BGK[i]];
  if (dark) bgSatin(x0, i * 11 + 4);   // satin merah ceri (rujukan Taufik)
  else bgPhoto(x0, im, { zoom: 2.6, fx: .5, fy: .45, wash: '251,247,240', a: .72 });
};
// slaid isi: teks atas-kiri, foto emas bawah (kabur ke atas), potret Taufik besar di kanan
function slide(i, dark, eye, l1, l2, text, img, me, o) {
  o = o || {}; scriptHead(i, N, dark); scriptEye(eye, 150, dark);
  headline([[[l1, dark ? 'white' : 'ink']], [[l2, dark ? 'goldl' : 'red']]], M, 262, { size: 100, maxW: 936, lh: .95 });
  photoFade(IMG[img], 760, 320, { fx: o.fx, fy: o.fy, zoom: o.zoom, fade: .4, filter: dark ? 'saturate(1.15) contrast(1.05)' : undefined });
  cutoutBC(IMG[me], 800, SH, o.mh || 560);
  para(text, M, 445, 560, 33, { band: true, dark: dark, lh: 1.4 });
}
var SLIDES = [
  function (i) {
    scriptHead(i, N, true);
    var by = headline([[['5 Sebab', 'white']], [['Cikgu Golongan', 'white']], [['Paling Sesuai', 'goldl']], [['Simpan Emas.', 'goldl']]], M, 190, { size: 94, maxW: 936, lh: .97 });
    para('Cikgu mendidik anak bangsa setiap hari di sekolah. Tapi ramai cikgu terlepas pandang *mendidik poket sendiri* untuk hari tua.', M, by + 40, 520, 31, { band: true, dark: true, lh: 1.4 });
    photoFade(IMG.p1, 760, 320, { fade: .3, filter: 'saturate(1.15) contrast(1.05)' });
    cutoutBC(IMG.m1, 860, SH, 700);
  },
  function (i) { slide(i, false, 'Sebab 01', 'GAJI POKOK', 'TETAP SETIAP BULAN.', 'Kestabilan ini memberi anda *disiplin automatik* untuk menabung *tanpa culas.*', 'p2', 'm2', { fy: .4 }); },
  function (i) { slide(i, true, 'Sebab 02', 'FAHAM KUASA', 'JANGKA PANJANG.', 'Mendidik murid perlukan *kesabaran bertahun-tahun,* begitu jugalah konsep mengumpul gram emas *sedikit demi sedikit.*', 'p3', 'm3'); },
  function (i) { slide(i, false, 'Sebab 03', 'PENCEN GURU', 'TIDAK KEBAL INFLASI.', 'Duit pencen bulanan mungkin tetap, tapi harga barang dapur di luar sana *terus meningkat.*', 'p4', 'm4'); },
  function (i) { slide(i, true, 'Sebab 04', 'SURI TELADAN', 'KEWANGAN.', 'Murid mencontohi tindakan kita, cikgu yang celik aset *memberi inspirasi kepada anak bangsa.*', 'p5', 'm5'); },
  function (i) { slide(i, false, 'Sebab 05', 'MANFAATKAN CUTI', 'SEKOLAH PANJANG.', 'Gunakan masa lapang penggal cuti untuk menyusun semula *strategi kewangan keluarga anda.*', 'p6', 'm6'); },
  function (i) {
    scriptHead(i, N, true);
    headline([[['KUKUHKAN', 'white']], [['PERSARAAN', 'goldl']], [['ANDA!', 'goldl']]], M, 200, { size: 112, maxW: 936, lh: .96 });
    para('Cikgu membina masa depan murid setiap hari. Kini masanya *cikgu membina masa depan sendiri.*', M, 490, 520, 33, { band: true, dark: true, lh: 1.4 });
    X.save(); var g = X.createLinearGradient(0, 0, SW, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.3, '#E3BB55'); g.addColorStop(1, '#B27F17'); X.strokeStyle = g; X.lineWidth = 5; X.beginPath(); X.moveTo(0, 960); X.quadraticCurveTo(500, 890, SW, 800); X.stroke(); X.restore();
    cutoutBC(IMG.m7, 810, SH, 640);
    T('Follow', M, 800, F.pf(900, 46), TH.gl[0]); T(D.handle, M, 856, F.pf(900, 46), TH.gl[0]);
  },
];
