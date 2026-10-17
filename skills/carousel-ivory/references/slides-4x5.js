// VERSI 4:5 (1080x1350) — salin ke slides.js dan tambah `var SH_OVERRIDE = 1350;` jika perlukan 4:5 (Instagram). Default skill = 1:1.
var SH_OVERRIDE = 1350;
var N = 8;
var DARK = [0, 7]; var NODOTS = [7];                       // indeks slaid latar maroon (hook + CTA)
var ASSETS = { produk: 'produk.png', me: 'tunjuk-kamera.png' };
var D = {
  tarikh: '18 Oktober 2026', gap: 592,   // harga GAP semasa RM/gram
  produk: '999/24K Gold Ring', kod: 'PGJR181413', harga: 1653, upah: 137, upahTermasuk: true, pos: 10,
};
D.asas = D.upahTermasuk ? D.harga - D.upah : D.harga; D.jumlah = D.asas + D.upah + D.pos;
D.gram = Math.floor(D.jumlah / D.gap * 1e4) / 1e4;
var RM = function (n) { return 'RM' + n.toLocaleString('en-US'); };
var G = D.gram.toFixed(4), JUM = RM(D.jumlah), GAPS = RM(D.gap) + '/gram';

var SLIDES = [
  // 1 — hook (maroon)
  function (i) {
    eyebrow('Kisah sebenar', M, 120, true);
    headline([[['Miliki cincin', 'white']], [['emas 999', 'goldl']], [['tanpa sentuh', 'white']], [['gaji bersih.', 'goldil']]], M, 290, { size: 134 });
    para('Ramai sangka nak bawa balik cincin emas 999 rekaan moden kena keluar *duit tunai beribu ringgit* sekali gus.', M, 790, 900, 35, { dark: true });
    medallion(IMG.produk, 540, 1070, 400, .5, .52, 1.1);
  },
  // 2 — dilema
  function (i) {
    eyebrow('Dilema semua orang', M, 120);
    headline([[['Hati mula', 'ink']], [['berbelah bahagi.', 'red']]], M, 270, { size: 124 });
    para('Cincin emas 999 5D Hard Gold rekaan terkini memang memukau. *Berkilau, padu, dan tahan kemek.* Tengok tanda harga:', M, 480, 936, 35);
    fadePhoto(IMG.produk, 300, 800, 520, 70); priceTag(760, 800, 440, 190, RM(D.harga), -.06);
    card(M, 960, 936, 140, { bar: 1 }); crossCircle(150, 1030, 30); T('Bayar tunai sedebuk?', 205, 1020, F.ss(800, 34), K.maroon); T('Bajet dapur dan komitmen bulan ini pasti lari.', 205, 1064, F.ss(500, 30), K.ink);
    card(M, 1120, 936, 140, { bar: 1 }); crossCircle(150, 1190, 30); T('Tangguh lagi?', 205, 1180, F.ss(800, 34), K.maroon); T('Harga emas dunia makin hari makin mendaki.', 205, 1224, F.ss(500, 30), K.ink);
  },
  // 3 — penyelesaian
  function (i) {
    eyebrow('Tetapi ada cara lain', M, 120);
    headline([[['Satu ciri', 'ink']], [['yang ramai', 'ink']], [['belum perasan.', 'red']]], M, 265, { size: 116 });
    para('Dilema ini selesai sebaik sahaja beliau membuka *sistem Public Gold* dan menggunakan ciri tersebut.', M, 590, 936, 35);
    card(M, 730, 936, 100, { bar: 1 }); crossCircle(150, 780, 28); T('Bukan beli hutang.', 205, 792, F.ss(700, 36), K.muted);
    card(M, 850, 936, 100, { bar: 1 }); crossCircle(150, 900, 28); T('Bukan pinjaman kad kredit.', 205, 912, F.ss(700, 36), K.muted);
    X.save(); X.strokeStyle = 'rgba(122,15,26,.5)'; X.lineWidth = 3; [[205, 780, 'Bukan beli hutang.'], [205, 900, 'Bukan pinjaman kad kredit.']].forEach(function (r) { X.beginPath(); X.moveTo(r[0] - 4, r[1] + 1); X.lineTo(r[0] + tw(r[2], F.ss(700, 36)) + 4, r[1] + 1); X.stroke(); }); X.restore();
    box(M, 990, 936, 270, 'red', 26); checkCircle(150, 1065, 38);
    T('Tetapi penebusan barang kemas', 215, 1060, F.ss(700, 37), '#FFFFFF'); T('terus daripada baki gram', 215, 1108, F.ss(700, 37), '#FFFFFF'); T('Akaun Emas GAP', 215, 1156, F.pf(900, 44), goldFillL);
    T('GAP = Gold Accumulation Program', 215, 1212, F.ss(500, 27), '#F1D78A');
  },
  // 4 — bermula RM100
  function (i) {
    eyebrow('Bermula dari RM100', M, 120);
    headline([[['Simpanan kecil,', 'ink']], [['boleh jadi cincin.', 'red']]], M, 270, { size: 122 });
    para('Simpanan emas GAP serendah *RM100* yang dikumpul *secara konsisten* setiap bulan boleh terus ditukarkan menjadi barang kemas *916 mahupun 999!*', M, 470, 936, 35);
    var steps = [['Sistem kira jumlah nilai barang kemas secara automatik', 700], ['Tukar kepada gram GAP ikut harga semasa hari ini (' + GAPS + ')', 886], ['Jana Cash Voucher serta-merta', 1072]];
    steps.forEach(function (s, k) {
      var y = s[1]; if (k < 2) { card(M, y, 936, 140, { bar: 1 }); } else { box(M, y, 936, 140, 'red', 22); }
      numBox(110, y + 30, 80, String(k + 1));
      var lines = k === 2 ? ['Jana Cash Voucher serta-merta'] : (k === 0 ? ['Sistem kira jumlah nilai barang kemas', 'secara automatik'] : ['Tukar kepada gram GAP ikut harga', 'semasa hari ini (' + GAPS + ')']);
      lines.forEach(function (l, j) { T(l, 225, y + (lines.length === 1 ? 82 : 62 + j * 42), F.ss(700, 33), k === 2 ? '#fff' : K.ink); });
      if (k < 2) arrowDown(540, y + 140 + 4, 38);
    });
  },
  // 5 — simulasi
  function (i) {
    eyebrow('Simulasi kiraan sebenar', M, 120);
    headline([[['Gelombang', 'ink']], [['Cinta.', 'red']]], M, 262, { size: 118, maxW: 600 });
    T(D.produk + ' · ' + D.kod, M, 420, F.ss(600, 29), K.muted, 'left', .5); T('5D Hard Gold', M, 460, F.ss(600, 29), K.muted, 'left', .5);
    fadePhoto(IMG.produk, 840, 300, 400, 60);
    card(M, 520, 936, 520, { r: 26 });
    T('Harga cincin 999', 112, 612, F.ss(800, 35), K.ink); T('(termasuk upah ' + RM(D.upah) + ')', 112, 652, F.ss(500, 27), K.muted); T(RM(D.harga) + '.00', 968, 630, F.ss(800, 42), K.ink, 'right'); dotted(112, 968, 690);
    T('Caj pengeposan berinsurans', 112, 752, F.ss(800, 35), K.ink); T('(GIT terus ke pintu rumah)', 112, 792, F.ss(500, 27), K.muted); T(RM(D.pos) + '.00', 968, 770, F.ss(800, 42), K.ink, 'right');
    box(100, 850, 880, 160, 'red', 22); T('Jumlah keseluruhan belian', 136, 935, F.ss(700, 33), '#FFFFFF'); T(JUM + '.00', 944, 950, F.ss(800, 56), '#F8DE8E', 'right');
    card(M, 1075, 936, 130, { bar: 1 }); T('Harga GAP semasa', 112, 1132, F.ss(800, 33), K.ink); T('(' + D.tarikh + ')', 112, 1172, F.ss(500, 27), K.muted); box(640, 1100, 330, 80, 'cream', 18); T(GAPS, 805, 1155, F.ss(800, 42), K.maroon, 'center');
  },
  // 6 — kiraan gram
  function (i) {
    eyebrow('Berapa gram yang ditolak?', M, 120);
    headline([[[JUM + ' ÷ ' + RM(D.gap), 'ink']]], M, 250, { size: 96 });
        T(G, SW / 2, 610, F.pf(900, 270), goldFill, 'center', -8);
    T('gram sahaja!', SW / 2, 720, F.ss(800, 62), K.maroon, 'center');
    para('Sistem hanya memotong *' + G + ' gram* daripada akaun GAP beliau, mengeluarkan *Cash Voucher ' + JUM + '*, dan cincin emas 999 itu *diposkan terus ke depan pintu rumah.*', M, 830, 936, 35);
    box(M, 1085, 936, 150, 'red', 26); T('Gaji bersih bulan tersebut', SW / 2, 1150, F.ss(700, 38), '#FFFFFF', 'center'); T('langsung tidak terusik!', SW / 2, 1200, F.pf(900, 46), goldFillL, 'center');
  },
  // 7 — tiga pengajaran
  function (i) {
    eyebrow('Tiga pengajaran penting', M, 120);
    headline([[['Apa yang kita', 'ink']], [['belajar?', 'red']]], M, 265, { size: 118 });
    var L = [['Barang kemas bukan sekadar perhiasan belanja hangus, tetapi *peralihan bentuk simpanan* daripada tunai kepada *aset fizikal bernilai tinggi.*', 450], ['Menabung *kecil-kecilan tetapi konsisten* jauh lebih berkuasa daripada menunggu duit berkepuk yang jarang sekali kesampaian.', 715], ['Akaun Emas GAP beri *kebebasan penuh*: kumpul gram sedikit demi sedikit, lalu pilih jongkong emas 999, dinar syariah, atau emas perhiasan idaman.', 980]];
    L.forEach(function (r, k) { card(M, r[1], 936, 235, { bar: 1 }); numBox(112, r[1] + 28, 74, String(k + 1)); para(r[0], 215, r[1] + 62, 740, 31, { lh: 1.4 }); });
  },
  // 8 — CTA (maroon + potret)
  function (i) {
    eyebrow('Soalan untuk korang', M, 120, true);
    headline([[['Jongkong emas', 'goldl']], [['atau cincin', 'white']], [['perhiasan?', 'goldil']]], M, 280, { size: 104, maxW: 760 });
    para('Korang lebih suka tebus gram GAP jadi *jongkong emas* atau *cincin perhiasan* macam ni?', M, 600, 520, 34, { dark: true });
    T('Komen di bawah', M, 800, F.ss(700, 30), '#F1D78A'); arrowDown(M + 20, 825, 50, '#E3BB55');
    cutoutBC(IMG.me, 800, SH, 880);
    T('Moga perkongsian ini bermanfaat.', M, 1075, F.ss(500, 28), '#F6E9D0');
    T('Taufik Musa', M, 1150, F.pf(900, 60), goldFillL); T('Dealer Public Gold', M, 1194, F.ss(700, 28), '#FFFFFF', 'left', 1.5);
  },
];
