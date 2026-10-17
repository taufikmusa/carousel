// Carousel "hadiah ulang tahun perkahwinan" (carousel-ivory v2, 8 slaid, 1080x1080 = 1:1). Watak GENERIK (tiada nama/kisah rekaan).
// Tukar THEME (emerald navy maroon electric earth soft luxury fresh), D dan teks. Versi 3:4 / 4:5 + contoh kisah cincin: references/.
var N = 8;
var THEME = 'maroon';                    // DEFAULT = maroon (merah tua + emas). Tukar HANYA bila Taufik minta warna lain: emerald navy electric earth soft luxury fresh
var DARK = [0, 7]; var NODOTS = [7];     // slaid gelap (hook + CTA); CTA tanpa titik kemajuan
var ASSETS = { produk: 'produk.png', me: 'tunjuk-kamera.png' };   // img/produk.png = gambar produk (potong rapat); me = potret outline putih
var D = {
  tarikh: '18 Oktober 2026', gap: 592,                                   // harga GAP semasa RM/gram (Buy GAP)
  pgcode: 'PG00359605', wa: '60132740711', web: 'simpanemasfizikal.com',
  produk: '916 Gold Bangle', kod: 'PGJG180673', berat: '11.73g', tulen: '916', harga: 6933, upah: 329, upahTermasuk: true, pos: 10,   // harga app (Labour Fee Included RM329)
};
D.asas = D.upahTermasuk ? D.harga - D.upah : D.harga; D.jumlah = D.asas + D.upah + D.pos;
D.gram = Math.floor(D.jumlah / D.gap * 1e4) / 1e4;
var RM = function (n) { return 'RM' + n.toLocaleString('en-US'); };
var G = D.gram.toFixed(4), JUM = RM(D.jumlah), GAPS = RM(D.gap) + '/gram';

// senarai langkah bernombor (kad berbar; yang terakhir kotak berwarna). lines: [[baris...], ...]
function steps(list, y0) {
  list.forEach(function (lines, k) {
    var y = y0 + k * 150, h = 112, last = k === list.length - 1;
    if (!last) card(M, y, 936, h, { bar: 1 }); else box(M, y, 936, h, 'red', 22);
    numBox(104, y + 20, 72, String(k + 1));
    lines.forEach(function (l, j) { T(l, 206, y + (lines.length === 1 ? 68 : 48 + j * 38), F.ss(700, 30), last ? '#fff' : K.ink); });
    if (!last) arrowDown(540, y + h + 2, 32);
  });
}
function listCard(y, title, text) { card(M, y, 936, 82, { bar: 1 }); crossCircle(146, y + 41, 23); T(title, 190, y + 34, F.ss(800, 28), K.maroon); T(text, 190, y + 66, F.ss(500, 25), K.ink); }

var SLIDES = [
  // 1 — hook (gelap)
  function (i) {
    eyebrow('Hadiah ulang tahun', M, 96, true);
    headline([[['Hadiahkan', 'white']], [['bangle emas 916', 'goldl']], [['tanpa sentuh', 'white']], [['simpanan kecemasan.', 'goldil']]], M, 238, { size: 108 });
    para('Ramai suami buntu bila tiba tarikh ulang tahun perkahwinan sebab *bajet hadiah* selalu lesap ditelan komitmen.', M, 700, 520, 31, { dark: true });
    medallion(IMG.produk, 800, 800, 330, .5, .5, .8);
  },
  // 2 — dilema
  function (i) {
    eyebrow('Dilema sebelum ulang tahun', M, 96);
    headline([[['Hati mula', 'ink']], [['terasa berat.', 'red']]], M, 225, { size: 104 });
    para('Bayangkan harga seutas *bangle emas 916* idaman isteri: *' + JUM + '*, termasuk upah tukang dan pos berinsurans.', M, 408, 936, 31);
    fadePhoto(IMG.produk, 235, 575, 310, 55); priceTag(690, 575, 430, 160, JUM, -.05);
    listCard(700, 'Keluarkan tunai hampir RM' + (Math.ceil(D.jumlah / 1000) * 1000).toLocaleString('en-US') + ' sedebuk?', 'Bagi pekerja bergaji sederhana, hampir mustahil.');
    listCard(792, 'Pinjaman peribadi atau kad kredit?', 'Faedah menimbun dan jiwa tak tenang.');
    listCard(884, 'Tangguh lagi?', 'Entah bila impian membahagiakan isteri tercapai.');
  },
  // 3 — kunci lebihan
  function (i) {
    eyebrow('Kuncinya: tabiat belanja', M, 96);
    headline([[['Kunci lebihan', 'ink']], [['jadi gram emas.', 'red']]], M, 225, { size: 106 });
    para('Setiap kali ada duit lebihan, contohnya *kerja lebih masa (OT)* serendah *RM150 atau RM200*, terus tukar jadi gram dalam *Akaun Emas GAP Public Gold*.', M, 408, 936, 31);
    steps([['Dapat duit lebihan, contohnya', 'OT serendah RM150 atau RM200'], ['Terus tukar jadi gram dalam', 'Akaun Emas GAP Public Gold'], ['Duit tak sempat terperap dalam akaun', 'bank untuk dibelanjakan']], 575);
  },
  // 4 — tebus guna
  function (i) {
    eyebrow('Bila tiba masanya', M, 96);
    headline([[['Tebus guna', 'ink']], [['baki gram GAP.', 'red']]], M, 225, { size: 108 });
    para('Log masuk ke *portal PG Jewel*, pilih bangle emas 916 idaman, dan pilih kaedah *tebus guna baki gram GAP* pada harga belian semasa *' + GAPS + '* (' + D.tarikh + ').', M, 408, 936, 31);
    steps([['Log masuk ke portal PG Jewel'], ['Pilih bangle emas 916 idaman'], ['Pilih kaedah tebus guna baki gram GAP']], 575);
  },
  // 5 — simulasi
  function (i) {
    eyebrow('Simulasi kiraan', M, 96);
    headline([[['Bangle Emas ', 'ink'], ['916', 'red']]], M, 215, { size: 104 });
    T('Contoh kiraan · ' + D.produk + ' ' + D.kod + ' · ' + D.berat + ' · PG Jewel', M, 262, F.ss(600, 26), K.muted, 'left', .5);
    card(M, 292, 936, 540, { r: 26 });
    [['Harga emas ' + D.tulen, '(tanpa upah)', RM(D.asas) + '.00'], ['Kos upah tukang', '', RM(D.upah) + '.00'], ['Pengeposan berinsurans', '(GIT terus ke pintu rumah)', RM(D.pos) + '.00']].forEach(function (r, k) {
      var t = 322 + k * 110; T(r[0], 112, t + 38, F.ss(800, 32), K.ink); if (r[1]) T(r[1], 112, t + 72, F.ss(500, 25), K.muted); T(r[2], 968, t + 56, F.ss(800, 38), K.ink, 'right'); if (k < 2) dotted(112, 968, t + 98);
    });
    box(100, 690, 880, 120, 'red', 22); T('Jumlah keseluruhan belian', 136, 762, F.ss(700, 29), '#FFFFFF'); T(JUM + '.00', 946, 772, F.ss(800, 54), TH.gl[0], 'right');
    card(M, 858, 936, 118, { bar: 1 }); T('Harga GAP semasa (Buy GAP)', 112, 908, F.ss(800, 29), K.ink); T('(' + D.tarikh + ')', 112, 944, F.ss(500, 25), K.muted); box(640, 880, 330, 74, 'cream', 18); T(GAPS, 805, 930, F.ss(800, 38), K.maroon, 'center');
  },
  // 6 — kiraan gram
  function (i) {
    eyebrow('Berapa gram yang ditolak?', M, 96);
    headline([[[JUM + ' ÷ ' + RM(D.gap), 'ink']]], M, 205, { size: 88 });
    var gs = Math.min(230, fit(G, function (f) { return F.pf(900, f); }, 900, -.03)); T(G, SW / 2, 205 + 40 + gs * .8, F.pf(900, gs), goldFill, 'center', -gs * .03);
    T('gram sahaja!', SW / 2, 205 + 40 + gs * .8 + 82, F.ss(800, 56), K.maroon, 'center');
    para('Sistem automatik memotong *' + G + ' gram* daripada akaun GAP, mengeluarkan *Cash Voucher ' + JUM + '*, dan bangle emas 916 *dihantar berinsurans terus ke depan pintu rumah.*', M, 665, 936, 31);
    box(M, 832, 936, 142, 'red', 26); T('Gaji bulanan dan simpanan kecemasan', SW / 2, 892, F.ss(700, 34), '#FFFFFF', 'center'); T('langsung tidak terusik!', SW / 2, 942, F.pf(900, 44), goldFillL, 'center');
  },
  // 7 — tiga pengajaran
  function (i) {
    eyebrow('Tiga pengajaran penting', M, 96);
    headline([[['Apa yang kita', 'ink']], [['belajar?', 'red']]], M, 222, { size: 100 });
    var L = [['Penghargaan kepada insan tersayang bukan diukur pada kemewahan serentak, tetapi pada *perancangan senyap yang konsisten.*', 372], ['Duit tunai dalam akaun bank mudah bocor, tetapi *gram emas dalam GAP* selamat dikunci daripada nafsu belanja.', 580], ['Akaun Emas GAP beri *kebebasan menukar gram simpanan* kepada emas perhiasan bila-bila masa pada harga semasa yang telus, tanpa perlu berhutang.', 788]];
    L.forEach(function (r, k) { card(M, r[1], 936, 192, { bar: 1 }); numBox(108, r[1] + 22, 66, String(k + 1)); para(r[0], 204, r[1] + 52, 770, 27, { lh: 1.38 }); });
  },
  // 8 — CTA (gelap + potret)
  function (i) {
    eyebrow('Soalan untuk anda', M, 96, true);
    headline([[['Kumpul gram', 'goldl']], [['senyap-senyap', 'white']], [['untuk kejutan?', 'goldil']]], M, 225, { size: 96, maxW: 570 });
    para('Para suami, pernah terfikir nak *kumpul gram GAP senyap-senyap* untuk buat kejutan pada isteri?', M, 490, 450, 30, { dark: true });
    T('Komen di bawah', M, 668, F.ss(700, 27), TH.eyeD); arrowDown(M + 20, 688, 44, TH.eyeD);
    cutoutBC(IMG.me, 790, SH, 760);
    T('Moga perkongsian ini bermanfaat.', M, 780, F.ss(500, 26), TH.dkText);
    T('Taufik Musa', M, 838, F.pf(900, 54), goldFillL); T('Dealer Public Gold', M, 874, F.ss(700, 25), '#FFFFFF', 'left', 1.5);
    [['PG CODE', D.pgcode, 916], ['WHATSAPP', D.wa, 946], ['LAMAN', D.web, 976]].forEach(function (r) { T(r[0], M, r[2], F.ss(700, 21), TH.eyeD, 'left', 2.5); T(r[1], M + 160, r[2], F.ss(800, 25), '#FFFFFF', 'left', 1); });
  },
];
