// VERSI 3:4 (1080x1440) — salin ke slides.js untuk guna. Default skill = 1:1 (1080x1080).
var SH_OVERRIDE = 1440;
var N = 8;
var THEME = 'emerald';                   // 'emerald' | 'navy' | 'maroon' — gaya sama, warna berbeza
var DARK = [0, 7]; var NODOTS = [7];     // slaid gelap (hook + CTA); CTA tanpa titik kemajuan
var ASSETS = { produk: 'produk.png', me: 'tunjuk-kamera.png' };
var D = {
  tarikh: '18 Oktober 2026', gap: 592, pgcode: 'PG00359605', wa: '60132740711',   // harga GAP semasa RM/gram
  produk: '999/24K Gold Ring', kod: 'PGJR181413', harga: 1653, upah: 137, upahTermasuk: true, pos: 10,
};
D.asas = D.upahTermasuk ? D.harga - D.upah : D.harga; D.jumlah = D.asas + D.upah + D.pos;
D.gram = Math.floor(D.jumlah / D.gap * 1e4) / 1e4;
var RM = function (n) { return 'RM' + n.toLocaleString('en-US'); };
var G = D.gram.toFixed(4), JUM = RM(D.jumlah), GAPS = RM(D.gap) + '/gram';

var SLIDES = [
  // 1 — hook (gelap)
  function (i) {
    eyebrow('Tahu tak anda?', M, 120, true);
    headline([[['Miliki cincin', 'white']], [['emas 999', 'goldl']], [['tanpa sentuh', 'white']], [['gaji bersih.', 'goldil']]], M, 295, { size: 138 });
    para('Ramai sangka nak bawa balik cincin emas 999 rekaan moden kena keluar *duit tunai beribu ringgit* sekali gus.', M, 815, 936, 36, { dark: true });
    medallion(IMG.produk, 540, 1125, 420, .5, .52, 1.1);
  },
  // 2 — dilema
  function (i) {
    eyebrow('Dilema semua orang', M, 120);
    headline([[['Hati mula', 'ink']], [['berbelah bahagi.', 'red']]], M, 300, { size: 134 });
    para('Cincin emas 999 5D Hard Gold rekaan terkini memang memukau. *Berkilau, padu, dan tahan kemek.* Tengok tanda harga:', M, 545, 936, 36);
    fadePhoto(IMG.produk, 300, 880, 540, 80); priceTag(770, 885, 460, 195, RM(D.harga), -.06);
    card(M, 1040, 936, 140, { bar: 1 }); crossCircle(150, 1110, 30); T('Bayar tunai sedebuk?', 205, 1100, F.ss(800, 34), K.maroon); T('Bajet dapur dan komitmen bulan ini pasti lari.', 205, 1146, F.ss(500, 30), K.ink);
    card(M, 1200, 936, 140, { bar: 1 }); crossCircle(150, 1270, 30); T('Tangguh lagi?', 205, 1260, F.ss(800, 34), K.maroon); T('Harga emas dunia makin hari makin mendaki.', 205, 1306, F.ss(500, 30), K.ink);
  },
  // 3 — penyelesaian
  function (i) {
    eyebrow('Tetapi ada cara lain', M, 120);
    headline([[['Satu ciri', 'ink']], [['yang ramai', 'ink']], [['belum perasan.', 'red']]], M, 290, { size: 126 });
    para('Dilema ini selesai sebaik sahaja beliau membuka *sistem Public Gold* dan menggunakan ciri tersebut.', M, 650, 936, 36);
    card(M, 790, 936, 104, { bar: 1 }); crossCircle(150, 842, 29); T('Bukan beli hutang.', 205, 855, F.ss(700, 37), K.muted);
    card(M, 912, 936, 104, { bar: 1 }); crossCircle(150, 964, 29); T('Bukan pinjaman kad kredit.', 205, 977, F.ss(700, 37), K.muted);
    X.save(); X.strokeStyle = 'rgba(' + TH.rgb + ',.5)'; X.lineWidth = 3; [[205, 842, 'Bukan beli hutang.'], [205, 964, 'Bukan pinjaman kad kredit.']].forEach(function (r) { X.beginPath(); X.moveTo(r[0] - 4, r[1] + 2); X.lineTo(r[0] + tw(r[2], F.ss(700, 37)) + 4, r[1] + 2); X.stroke(); }); X.restore();
    box(M, 1060, 936, 280, 'red', 26); checkCircle(150, 1140, 38);
    T('Tetapi penebusan barang kemas', 215, 1135, F.ss(700, 38), '#FFFFFF'); T('terus daripada baki gram', 215, 1184, F.ss(700, 38), '#FFFFFF'); T('Akaun Emas GAP', 215, 1240, F.pf(900, 50), goldFillL);
    T('GAP = Gold Accumulation Program', 215, 1292, F.ss(500, 27), '#F1D78A');
  },
  // 4 — bermula RM100
  function (i) {
    eyebrow('Bermula dari RM100', M, 120);
    headline([[['Simpanan kecil,', 'ink']], [['boleh jadi cincin.', 'red']]], M, 298, { size: 132 });
    para('Simpanan emas GAP serendah *RM100* yang dikumpul *secara konsisten* setiap bulan boleh terus ditukarkan menjadi barang kemas *916 mahupun 999!*', M, 545, 936, 36);
    [['Sistem kira jumlah nilai barang kemas', 'secara automatik'], ['Tukar kepada gram GAP ikut harga', 'semasa hari ini (' + GAPS + ')'], ['Jana Cash Voucher serta-merta']].forEach(function (lines, k) {
      var y = 780 + k * 200, h = 150;
      if (k < 2) card(M, y, 936, h, { bar: 1 }); else box(M, y, 936, h, 'red', 22);
      numBox(108, y + 30, 90, String(k + 1));
      lines.forEach(function (l, j) { T(l, 230, y + (lines.length === 1 ? 90 : 64 + j * 46), F.ss(700, 35), k === 2 ? '#fff' : K.ink); });
      if (k < 2) arrowDown(540, y + h + 4, 38);
    });
  },
  // 5 — simulasi
  function (i) {
    eyebrow('Simulasi kiraan sebenar', M, 120);
    headline([[['Gelombang', 'ink']], [['Cinta.', 'red']]], M, 290, { size: 124, maxW: 600 });
    T(D.produk + ' · ' + D.kod, M, 478, F.ss(600, 29), K.muted, 'left', .5); T('5D Hard Gold', M, 518, F.ss(600, 29), K.muted, 'left', .5);
    fadePhoto(IMG.produk, 830, 330, 400, 70);
    card(M, 580, 936, 560, { r: 26 });
    T('Harga cincin 999', 112, 672, F.ss(800, 36), K.ink); T('(termasuk upah ' + RM(D.upah) + ')', 112, 714, F.ss(500, 28), K.muted); T(RM(D.harga) + '.00', 968, 692, F.ss(800, 44), K.ink, 'right'); dotted(112, 968, 756);
    T('Caj pengeposan berinsurans', 112, 828, F.ss(800, 36), K.ink); T('(GIT terus ke pintu rumah)', 112, 870, F.ss(500, 28), K.muted); T(RM(D.pos) + '.00', 968, 848, F.ss(800, 44), K.ink, 'right');
    box(100, 930, 880, 170, 'red', 22); T('Jumlah keseluruhan belian', 136, 1020, F.ss(700, 29), '#FFFFFF'); T(JUM + '.00', 944, 1036, F.ss(800, 60), '#F8DE8E', 'right');
    card(M, 1190, 936, 150, { bar: 1 }); T('Harga GAP semasa', 112, 1252, F.ss(800, 35), K.ink); T('(' + D.tarikh + ')', 112, 1294, F.ss(500, 28), K.muted); box(630, 1214, 340, 86, 'cream', 18); T(GAPS, 800, 1272, F.ss(800, 44), K.maroon, 'center');
  },
  // 6 — kiraan gram
  function (i) {
    eyebrow('Berapa gram yang ditolak?', M, 120);
    headline([[[JUM + ' ÷ ' + RM(D.gap), 'ink']]], M, 285, { size: 104 });
    T(G, SW / 2, 700, F.pf(900, 295), goldFill, 'center', -9);
    T('gram sahaja!', SW / 2, 800, F.ss(800, 68), K.maroon, 'center');
    para('Sistem hanya memotong *' + G + ' gram* daripada akaun GAP beliau, mengeluarkan *Cash Voucher ' + JUM + '*, dan cincin emas 999 itu *diposkan terus ke depan pintu rumah.*', M, 930, 936, 36);
    box(M, 1150, 936, 180, 'red', 26); T('Gaji bersih bulan tersebut', SW / 2, 1228, F.ss(700, 42), '#FFFFFF', 'center'); T('langsung tidak terusik!', SW / 2, 1288, F.pf(900, 52), goldFillL, 'center');
  },
  // 7 — tiga pengajaran
  function (i) {
    eyebrow('Tiga pengajaran penting', M, 120);
    headline([[['Apa yang kita', 'ink']], [['belajar?', 'red']]], M, 295, { size: 128 });
    var L = [['Barang kemas bukan sekadar perhiasan belanja hangus, tetapi *peralihan bentuk simpanan* daripada tunai kepada *aset fizikal bernilai tinggi.*', 520], ['Menabung *kecil-kecilan tetapi konsisten* jauh lebih berkuasa daripada menunggu duit berkepuk yang jarang sekali kesampaian.', 800], ['Akaun Emas GAP beri *kebebasan penuh*: kumpul gram sedikit demi sedikit, lalu pilih jongkong emas 999, dinar syariah, atau emas perhiasan idaman.', 1080]];
    L.forEach(function (r, k) { card(M, r[1], 936, 250, { bar: 1 }); numBox(110, r[1] + 32, 80, String(k + 1)); para(r[0], 222, r[1] + 66, 755, 31, { lh: 1.42 }); });
  },
  // 8 — CTA (gelap + potret)
  function (i) {
    eyebrow('Soalan untuk anda', M, 120, true);
    headline([[['Jongkong emas', 'goldl']], [['atau cincin', 'white']], [['perhiasan?', 'goldil']]], M, 295, { size: 112, maxW: 660 });
    para('Anda lebih suka tebus gram GAP jadi *jongkong emas* atau *cincin perhiasan* macam ni?', M, 660, 480, 34, { dark: true });
    T('Komen di bawah', M, 880, F.ss(700, 29), '#F1D78A'); arrowDown(M + 22, 904, 52, '#E3BB55');
    cutoutBC(IMG.me, 795, SH, 980);
    T('Moga perkongsian ini bermanfaat.', M, 1100, F.ss(500, 28), '#F6E9D0');
    T('Taufik Musa', M, 1175, F.pf(900, 62), goldFillL); T('Dealer Public Gold', M, 1218, F.ss(700, 27), '#FFFFFF', 'left', 1.5);
    [['PG CODE', D.pgcode, 1270], ['WHATSAPP', D.wa, 1310]].forEach(function (r) { T(r[0], M, r[2], F.ss(700, 22), '#E3BB55', 'left', 2.5); T(r[1], M + 170, r[2], F.ss(800, 27), '#FFFFFF', 'left', 1); });
  },
];
