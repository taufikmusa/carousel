// Carousel kisah "cincin emas 999 tanpa sentuh gaji" (carousel-ivory v2, 8 slaid, 1080x1080 = 1:1 Facebook/IG).
// Versi 3:4 / 4:5: lihat references/. Tukar D + teks.
var N = 8;
var THEME = 'emerald';                   // 'emerald' | 'navy' | 'maroon' — gaya sama, warna berbeza
var DARK = [0, 7]; var NODOTS = [7];     // slaid maroon (hook + CTA); CTA tanpa titik kemajuan
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
  // 1 — hook (maroon)
  function (i) {
    eyebrow('Tahu tak anda?', M, 96, true);
    headline([[['Miliki cincin', 'white']], [['emas 999', 'goldl']], [['tanpa sentuh', 'white']], [['gaji bersih.', 'goldil']]], M, 238, { size: 114 });
    para('Ramai sangka nak bawa balik cincin emas 999 rekaan moden kena keluar *duit tunai beribu ringgit* sekali gus.', M, 690, 520, 31, { dark: true });
    medallion(IMG.produk, 800, 800, 330, .5, .52, 1.1);
  },
  // 2 — dilema
  function (i) {
    eyebrow('Dilema semua orang', M, 96);
    headline([[['Hati mula', 'ink']], [['berbelah bahagi.', 'red']]], M, 225, { size: 104 });
    para('Cincin emas 999 5D Hard Gold rekaan terkini memang memukau. *Berkilau, padu, dan tahan kemek.* Tengok tanda harga:', M, 408, 936, 31);
    fadePhoto(IMG.produk, 285, 620, 420, 60); priceTag(760, 625, 400, 165, RM(D.harga), -.06);
    card(M, 770, 936, 100, { bar: 1 }); crossCircle(146, 820, 25); T('Bayar tunai sedebuk?', 192, 812, F.ss(800, 30), K.maroon); T('Bajet dapur dan komitmen bulan ini pasti lari.', 192, 850, F.ss(500, 27), K.ink);
    card(M, 888, 936, 100, { bar: 1 }); crossCircle(146, 938, 25); T('Tangguh lagi?', 192, 930, F.ss(800, 30), K.maroon); T('Harga emas dunia makin hari makin mendaki.', 192, 968, F.ss(500, 27), K.ink);
  },
  // 3 — penyelesaian
  function (i) {
    eyebrow('Tetapi ada cara lain', M, 96);
    headline([[['Satu ciri', 'ink']], [['yang ramai', 'ink']], [['belum perasan.', 'red']]], M, 218, { size: 98 });
    para('Dilema ini selesai sebaik sahaja beliau membuka *sistem Public Gold* dan menggunakan ciri tersebut.', M, 480, 936, 31);
    card(M, 565, 936, 82, { bar: 1 }); crossCircle(146, 606, 24); T('Bukan beli hutang.', 192, 618, F.ss(700, 32), K.muted);
    card(M, 663, 936, 82, { bar: 1 }); crossCircle(146, 704, 24); T('Bukan pinjaman kad kredit.', 192, 716, F.ss(700, 32), K.muted);
    X.save(); X.strokeStyle = 'rgba(' + TH.rgb + ',.5)'; X.lineWidth = 3; [[192, 606, 'Bukan beli hutang.'], [192, 704, 'Bukan pinjaman kad kredit.']].forEach(function (r) { X.beginPath(); X.moveTo(r[0] - 4, r[1] + 1); X.lineTo(r[0] + tw(r[2], F.ss(700, 32)) + 4, r[1] + 1); X.stroke(); }); X.restore();
    box(M, 775, 936, 215, 'red', 26); checkCircle(146, 850, 34);
    T('Tetapi penebusan barang kemas', 200, 845, F.ss(700, 33), '#FFFFFF'); T('terus daripada baki gram', 200, 886, F.ss(700, 33), '#FFFFFF'); T('Akaun Emas GAP', 200, 934, F.pf(900, 42), goldFillL);
    T('GAP = Gold Accumulation Program', 200, 968, F.ss(500, 24), '#F1D78A');
  },
  // 4 — bermula RM100
  function (i) {
    eyebrow('Bermula dari RM100', M, 96);
    headline([[['Simpanan kecil,', 'ink']], [['boleh jadi cincin.', 'red']]], M, 225, { size: 106 });
    para('Simpanan emas GAP serendah *RM100* yang dikumpul *secara konsisten* setiap bulan boleh terus ditukarkan menjadi barang kemas *916 mahupun 999!*', M, 406, 936, 31);
    [['Sistem kira jumlah nilai barang kemas', 'secara automatik'], ['Tukar kepada gram GAP ikut harga', 'semasa hari ini (' + GAPS + ')'], ['Jana Cash Voucher serta-merta']].forEach(function (lines, k) {
      var y = 548 + k * 150, h = 112;
      if (k < 2) card(M, y, 936, h, { bar: 1 }); else box(M, y, 936, h, 'red', 22);
      numBox(104, y + 20, 72, String(k + 1));
      lines.forEach(function (l, j) { T(l, 206, y + (lines.length === 1 ? 68 : 48 + j * 38), F.ss(700, 30), k === 2 ? '#fff' : K.ink); });
      if (k < 2) arrowDown(540, y + h + 2, 32);
    });
  },
  // 5 — simulasi
  function (i) {
    eyebrow('Simulasi kiraan sebenar', M, 96);
    headline([[['Gelombang', 'ink']], [['Cinta.', 'red']]], M, 215, { size: 100, maxW: 560 });
    T(D.produk + ' · ' + D.kod, M, 362, F.ss(600, 26), K.muted, 'left', .5); T('5D Hard Gold', M, 396, F.ss(600, 26), K.muted, 'left', .5);
    fadePhoto(IMG.produk, 830, 230, 340, 55);
    card(M, 420, 936, 420, { r: 26 });
    T('Harga cincin 999', 112, 490, F.ss(800, 32), K.ink); T('(termasuk upah ' + RM(D.upah) + ')', 112, 525, F.ss(500, 25), K.muted); T(RM(D.harga) + '.00', 968, 505, F.ss(800, 38), K.ink, 'right'); dotted(112, 968, 557);
    T('Caj pengeposan berinsurans', 112, 610, F.ss(800, 32), K.ink); T('(GIT terus ke pintu rumah)', 112, 645, F.ss(500, 25), K.muted); T(RM(D.pos) + '.00', 968, 625, F.ss(800, 38), K.ink, 'right');
    box(100, 685, 880, 128, 'red', 22); T('Jumlah keseluruhan belian', 134, 758, F.ss(700, 30), '#FFFFFF'); T(JUM + '.00', 946, 768, F.ss(800, 52), '#F8DE8E', 'right');
    card(M, 862, 936, 118, { bar: 1 }); T('Harga GAP semasa', 112, 913, F.ss(800, 30), K.ink); T('(' + D.tarikh + ')', 112, 948, F.ss(500, 25), K.muted); box(630, 884, 340, 74, 'cream', 18); T(GAPS, 800, 934, F.ss(800, 38), K.maroon, 'center');
  },
  // 6 — kiraan gram
  function (i) {
    eyebrow('Berapa gram yang ditolak?', M, 96);
    headline([[[JUM + ' ÷ ' + RM(D.gap), 'ink']]], M, 205, { size: 88 });
    T(G, SW / 2, 475, F.pf(900, 230), goldFill, 'center', -7);
    T('gram sahaja!', SW / 2, 560, F.ss(800, 56), K.maroon, 'center');
    para('Sistem hanya memotong *' + G + ' gram* daripada akaun GAP beliau, mengeluarkan *Cash Voucher ' + JUM + '*, dan cincin emas 999 itu *diposkan terus ke depan pintu rumah.*', M, 645, 936, 31);
    box(M, 832, 936, 142, 'red', 26); T('Gaji bersih bulan tersebut', SW / 2, 894, F.ss(700, 36), '#FFFFFF', 'center'); T('langsung tidak terusik!', SW / 2, 942, F.pf(900, 44), goldFillL, 'center');
  },
  // 7 — tiga pengajaran
  function (i) {
    eyebrow('Tiga pengajaran penting', M, 96);
    headline([[['Apa yang kita', 'ink']], [['belajar?', 'red']]], M, 222, { size: 100 });
    var L = [['Barang kemas bukan sekadar perhiasan belanja hangus, tetapi *peralihan bentuk simpanan* daripada tunai kepada *aset fizikal bernilai tinggi.*', 372], ['Menabung *kecil-kecilan tetapi konsisten* jauh lebih berkuasa daripada menunggu duit berkepuk yang jarang sekali kesampaian.', 580], ['Akaun Emas GAP beri *kebebasan penuh*: kumpul gram sedikit demi sedikit, lalu pilih jongkong emas 999, dinar syariah, atau emas perhiasan idaman.', 788]];
    L.forEach(function (r, k) { card(M, r[1], 936, 192, { bar: 1 }); numBox(108, r[1] + 22, 66, String(k + 1)); para(r[0], 204, r[1] + 52, 770, 27, { lh: 1.38 }); });
  },
  // 8 — CTA (maroon + potret)
  function (i) {
    eyebrow('Soalan untuk anda', M, 96, true);
    headline([[['Jongkong emas', 'goldl']], [['atau cincin', 'white']], [['perhiasan?', 'goldil']]], M, 225, { size: 96, maxW: 620 });
    para('Anda lebih suka tebus gram GAP jadi *jongkong emas* atau *cincin perhiasan* macam ni?', M, 500, 450, 30, { dark: true });
    T('Komen di bawah', M, 668, F.ss(700, 27), '#F1D78A'); arrowDown(M + 20, 690, 44, '#E3BB55');
    cutoutBC(IMG.me, 790, SH, 760);
    T('Moga perkongsian ini bermanfaat.', M, 786, F.ss(500, 26), '#F6E9D0');
    T('Taufik Musa', M, 848, F.pf(900, 54), goldFillL); T('Dealer Public Gold', M, 886, F.ss(700, 25), '#FFFFFF', 'left', 1.5);
    [['PG CODE', D.pgcode, 930], ['WHATSAPP', D.wa, 962]].forEach(function (r) { T(r[0], M, r[2], F.ss(700, 21), '#E3BB55', 'left', 2.5); T(r[1], M + 160, r[2], F.ss(800, 25), '#FFFFFF', 'left', 1); });
  },
];
