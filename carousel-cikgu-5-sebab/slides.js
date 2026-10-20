// carousel-script — "5 Sebab Cikgu Mudah Berjaya Simpan Emas" (teks atas + foto bawah + latar foto kabur), 7 slaid, 1080x1080 (1:1).
// Gelap/cerah berselang; latar cerah = foto slaid itu sendiri dikaburkan; gelap = satin merah ceri. Potret CTA: img/me.png.
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
  headline([[[l1, dark ? 'white' : 'ink']], [[l2, dark ? 'goldl' : 'red']]], M, 262, { size: 96, maxW: 936, lh: .95 });
  para(text, M, 430, 936, 30, { band: true, dark: dark, lh: 1.4 });
  photoFade(IMG[img], PY + 30, PH - 30, { fx: o.fx, fy: o.fy, zoom: o.zoom, fade: .3, filter: dark ? 'saturate(1.15) contrast(1.05)' : undefined });
}
var SLIDES = [
  // 1 — cover: pesan guru
  function (i) {
    scriptHead(i, N, true);
    var by = headline([[['Duit jatuh nilai,', 'white']], [['jadi kertas.', 'white']], [['Emas jatuh harga,', 'goldl']], [['tetap emas.', 'goldl']]], M, 195, { size: 98, maxW: 936, lh: .97 });
    T('Pesan guru saya, Tn Mohd Zulkifli Shafie', M, by + 52, F.ss(500, 32), '#FFFFFF');
    photoFade(IMG.p1, 690, 390, { fade: .2, filter: 'saturate(1.15) contrast(1.05)' });
  },
  function (i) { slide(i, false, 'Sebab 01', 'GAJI POKOK', 'TETAP SETIAP BULAN.', 'Kestabilan gaji beri cikgu kelebihan membina *disiplin automatik.* Pesan mentor saya, buat *simpanan paksa* dengan potongan terus gaji ke *akaun GAP Auto-Debit.* Cara ini menutup kebocoran wang akibat nafsu tangan gatal berbelanja.', 'p2', { fy: .4 }); },
  function (i) { slide(i, true, 'Sebab 02', 'FAHAM KUASA', 'JANGKA PANJANG.', 'Mendidik murid perlukan *kesabaran bertahun-tahun* untuk melihat hasilnya. Kefahaman ini memudahkan mengumpul gram emas *sedikit demi sedikit.* Kekayaan sebenar diukur pada *jumlah gram emas di tangan* penyimpan.', 'p3'); },
  function (i) { slide(i, false, 'Sebab 03', 'PENCEN TIDAK', 'KEBAL INFLASI.', 'Nilai pencen bulanan dijamin kerajaan, namun *harga barang dapur terus meningkat.* Pesan mentor saya, orang kaya sentiasa *menyimpan nilai.* Emas fizikal jadi *life boat* (bot penyelamat) untuk pertahankan kuasa beli cikgu pada hari tua.', 'p4', { fy: .3 }); },
  function (i) { slide(i, true, 'Sebab 04', 'SURI TELADAN', 'CELIK KEWANGAN.', 'Cikgu sentiasa jadi *ejen perubahan* kepada masyarakat. Tindakan cikgu menyelamatkan sebahagian wang ke dalam *aset fizikal* pasti memberi inspirasi, dan mendidik anak bangsa mengurus kewangan peribadi.', 'p5'); },
  function (i) { slide(i, false, 'Sebab 05', 'MANFAATKAN CUTI', 'SEKOLAH PANJANG.', 'Cuti penggal beri masa bertenang untuk menyusun semula aliran tunai keluarga. Sasarkan pertukaran *10% tunai* kepada aset fizikal, dan jadikan *1 kilogram emas pertama* sebagai benteng kewangan keluarga.', 'p6'); },
  // 7 — CTA
  function (i) {
    scriptHead(i, N, true);
    headline([[['KUKUHKAN', 'white']], [['PERSARAAN', 'goldl']], [['ANDA!', 'goldl']]], M, 205, { size: 104, maxW: 936, lh: .96 });
    para('Cikgu membina masa depan murid setiap hari. Kini masanya *bina benteng kewangan sendiri.* Mulakan simpanan emas serendah *RM100* melalui Akaun GAP, atau *PM saya* untuk bimbingan percuma.', M, 520, 500, 28, { band: true, dark: true, lh: 1.4 });
    X.save(); var g = X.createLinearGradient(0, 0, SW, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.3, '#E3BB55'); g.addColorStop(1, '#B27F17'); X.strokeStyle = g; X.lineWidth = 5; X.beginPath(); X.moveTo(0, 990); X.quadraticCurveTo(500, 930, SW, 830); X.stroke(); X.restore();
    cutoutBC(IMG.me, 830, SH, 700);
    T('Taufik Musa', M, 880, F.pf(900, 52), goldFillL); T('Dealer Public Gold', M, 918, F.ss(700, 26), '#FFFFFF', 'left', 1); T('Follow ' + D.handle, M, 990, F.pf(900, 40), TH.gl[0]);
  },
];
