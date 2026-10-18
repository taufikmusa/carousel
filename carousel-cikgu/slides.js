// "5 Sebab Cikgu Golongan Paling Sesuai Simpan Emas" — carousel-ivory (maroon default), 7 slaid, 1080x1080.
var N = 7;
var THEME = 'maroon';
var DARK = [0, 6]; var NODOTS = [6];
var ASSETS = { produk: 'produk.jpg', me: 'peluk-tubuh.png' };
var D = { pgcode: 'PG00359605', wa: '60132740711', web: 'simpanemasfizikal.com' };

function sebab(i, n, l1, l2, text) {
  X.save(); X.globalAlpha = .14; T(String(n), 1030, 960, F.pf(900, 560), goldFill, 'right', -20); X.restore();
  eyebrow('Sebab ' + n + ' daripada 5', M, 96);
  headline([[[l1, 'ink']], [[l2, 'red']]], M, 225, { size: 106 });
  card(M, 430, 936, 290, { bar: 1 }); para(text, 118, 500, 840, 40, { lh: 1.42 });
  for (var k = 1; k <= 5; k++) {
    var x = M + (k - 1) * 88;
    if (k === n) numBox(x, 790, 70, String(k));
    else { rr(x, 790, 70, 70, 18); X.save(); X.strokeStyle = TH.line; X.lineWidth = 3; X.stroke(); X.restore(); T(String(k), x + 35, 790 + 48, F.ss(800, 36), TH.line, 'center'); }
  }
}

var SLIDES = [
  // 1 — hook (gelap)
  function (i) {
    eyebrow('Untuk para cikgu', M, 96, true);
    headline([[['5 sebab cikgu', 'white']], [['golongan paling', 'goldl']], [['sesuai simpan', 'white']], [['emas.', 'goldil']]], M, 238, { size: 112 });
    para('Cikgu mendidik anak bangsa setiap hari. Tapi ramai cikgu terlepas pandang *mendidik poket sendiri* untuk hari tua.', M, 700, 520, 31, { dark: true });
    medallion(IMG.produk, 800, 800, 330, .42, .5, 1.05);
  },
  function (i) { sebab(i, 1, 'Gaji pokok', 'tetap setiap bulan.', 'Kestabilan ini memberi anda *disiplin automatik* untuk menabung *tanpa culas.*'); },
  function (i) { sebab(i, 2, 'Faham kuasa', 'jangka panjang.', 'Mendidik murid perlukan *kesabaran bertahun-tahun*, begitu jugalah konsep *mengumpul gram emas sedikit demi sedikit.*'); },
  function (i) { sebab(i, 3, 'Pencen tidak', 'kebal inflasi.', 'Duit pencen bulanan mungkin tetap, tapi *harga barang dapur* di luar sana *terus meningkat.*'); },
  function (i) { sebab(i, 4, 'Suri teladan', 'kewangan.', 'Murid mencontohi tindakan kita. Cikgu yang *celik aset* memberi *inspirasi* kepada anak bangsa.'); },
  function (i) { sebab(i, 5, 'Manfaatkan cuti', 'sekolah panjang.', 'Gunakan *masa lapang penggal cuti* untuk menyusun semula *strategi kewangan keluarga* anda.'); },
  // 7 — CTA (gelap + potret)
  function (i) {
    eyebrow('Kukuhkan persaraan', M, 96, true);
    headline([[['Kini masanya', 'goldl']], [['cikgu bina masa', 'white']], [['depan sendiri.', 'goldil']]], M, 225, { size: 96, maxW: 590 });
    para('Cikgu membina masa depan murid setiap hari.', M, 480, 440, 30, { dark: true });
    T('Kukuhkan persaraan anda!', M, 610, F.pf(900, 40), goldFillL);
    cutoutBC(IMG.me, 850, SH, 730);
    T('Taufik Musa', M, 838, F.pf(900, 54), goldFillL); T('Dealer Public Gold', M, 874, F.ss(700, 25), '#FFFFFF', 'left', 1.5);
    [['PG CODE', D.pgcode, 916], ['WHATSAPP', D.wa, 946], ['LAMAN', D.web, 976]].forEach(function (r) { T(r[0], M, r[2], F.ss(700, 21), TH.eyeD, 'left', 2.5); T(r[1], M + 160, r[2], F.ss(800, 25), '#FFFFFF', 'left', 1); });
  },
];
