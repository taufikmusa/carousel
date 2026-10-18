// CONTOH STRUKTUR "PENERANGAN" (bukan kisah): cover cincin besar -> ramai ingat -> contoh kiraan -> 3 langkah -> gram -> formula+nota -> belum ada akaun -> CTA. 1:1, maroon.
var N = 8;
var THEME = 'maroon';
var DARK = [7]; var NODOTS = [7];
var ASSETS = { produk: 'produk.png', me: 'pegang-jongkong.png' };
var D = {
  tarikh: '18 Oktober 2026', gap: 592, pgcode: 'PG00359605', wa: '60132740711', web: 'simpanemasfizikal.com',
  produk: '999/24K Gold Ring', tulen: '999', harga: 1653, upah: 137, upahTermasuk: true, pos: 10,
};
D.asas = D.upahTermasuk ? D.harga - D.upah : D.harga; D.jumlah = D.asas + D.upah + D.pos;
D.gram = Math.floor(D.jumlah / D.gap * 1e4) / 1e4;
var RM = function (n) { return 'RM' + n.toLocaleString('en-US'); };
var G = D.gram.toFixed(4), GR = G + 'g', JUM = RM(D.jumlah), GAPS = RM(D.gap) + '/gram';

function steps(list, y0) {
  list.forEach(function (lines, k) {
    var y = y0 + k * 150, h = 112, last = k === list.length - 1;
    if (!last) card(M, y, 936, h, { bar: 1 }); else box(M, y, 936, h, 'red', 22);
    numBox(104, y + 20, 72, String(k + 1));
    lines.forEach(function (l, j) { T(l, 206, y + (lines.length === 1 ? 68 : 48 + j * 38), F.ss(700, 30), last ? '#fff' : K.ink); });
    if (!last) arrowDown(540, y + h + 2, 32);
  });
}

var SLIDES = [
  // 1 — cover: cincin besar & jelas
  function (i) {
    eyebrow('Akaun Emas GAP', M, 96);
    headline([[['Kini withdraw', 'ink']], [['GAP boleh', 'red']]], M, 215, { size: 116 });
    var a = 'Tukar kepada emas perhiasan ', fa = F.ss(700, 40); T(a, M, 392, fa, K.ink); T(D.tulen + '!', M + tw(a, fa) + 12, 400, F.pf(900, 74), goldFill);
    fadePhoto(IMG.produk, 540, 760, 880, 100);
  },
  // 2 — ramai ingat
  function (i) {
    eyebrow('Ramai ingat', M, 96);
    headline([[['Hanya untuk', 'ink']], [['gold bar & dinar?', 'red']]], M, 225, { size: 106 });
    para('Ramai ingat Akaun Emas GAP (Gold Accumulation Program) terhad untuk pengeluaran *gold bar atau dinar* sahaja.', M, 410, 936, 31);
    box(M, 560, 936, 250, 'red', 26); checkCircle(146, 640, 34);
    T('Kini anda boleh guna baki gram', 205, 628, F.ss(700, 33), '#FFFFFF'); T('dalam akaun GAP untuk tebus', 205, 670, F.ss(700, 33), '#FFFFFF'); T('barang kemas ' + D.tulen + ' idaman', 205, 722, F.pf(900, 42), goldFillL); T('tanpa keluarkan duit poket tambahan.', 205, 770, F.ss(600, 27), TH.eyeD);
    card(M, 840, 936, 130, { bar: 1 }); medallion(IMG.produk, 190, 905, 86, .5, .5, .9);
    T('Contoh kiraan sebenar: Cincin Emas ' + D.tulen, 262, 893, F.ss(800, 29), K.ink); T('(' + D.produk + ') bernilai ' + RM(D.harga), 262, 934, F.ss(600, 27), K.maroon);
  },
  // 3 — contoh kiraan
  function (i) {
    eyebrow('Contoh kiraan sebenar', M, 96);
    headline([[['Cincin Emas ' + D.tulen, 'ink']], [['bernilai ' + RM(D.harga), 'red']]], M, 215, { size: 100 });
    T(D.produk, M, 356, F.ss(600, 26), K.muted, 'left', .5);
    card(M, 384, 936, 540, { r: 26 });
    [['Harga Emas ' + D.tulen, '(tanpa upah)', RM(D.asas)], ['Upah', '', RM(D.upah)], ['Pengeposan', '(jika pilih untuk pos)', RM(D.pos)]].forEach(function (r, k) {
      var t = 408 + k * 108; T(r[0], 112, t + 40, F.ss(800, 34), K.ink); if (r[1]) T(r[1], 112, t + 76, F.ss(500, 26), K.muted); T(r[2], 968, t + 58, F.ss(800, 42), K.ink, 'right'); if (k < 2) dotted(112, 968, t + 100);
    });
    box(100, 764, 880, 140, 'red', 22); T('Jumlah Keseluruhan', 136, 844, F.ss(700, 32), '#FFFFFF'); T(JUM, 946, 854, F.ss(800, 60), TH.gl[0], 'right');
  },
  // 4 — 3 langkah
  function (i) {
    eyebrow('Sistem tolak gram GAP', M, 96);
    headline([[['3 langkah mudah', 'ink']], [['tolak gram GAP anda.', 'red']]], M, 225, { size: 104 });
    steps([['Sistem kira jumlah keseluruhan', 'barang kemas ' + D.tulen + ' (' + JUM + ')'], ['Tukar kepada gram ikut harga GAP semasa', '(' + JUM + ' ÷ ' + RM(D.gap) + ' = ' + GR + ')'], ['Potong ' + GR + ' daripada akaun GAP', 'dan keluarkan Cash Voucher ' + JUM]], 395);
    card(M, 860, 936, 116, { bar: 1 }); T('Harga GAP semasa', 112, 910, F.ss(800, 29), K.ink); T('(' + D.tarikh + ')', 112, 946, F.ss(500, 25), K.muted); box(640, 880, 330, 76, 'cream', 18); T(GAPS, 805, 931, F.ss(800, 38), K.maroon, 'center');
  },
  // 5 — gram
  function (i) {
    eyebrow('Langkah 2: tukar kepada gram', M, 96);
    headline([[[JUM + ' ÷ ' + RM(D.gap), 'ink']]], M, 205, { size: 88 });
    var gs = Math.min(230, fit(G, function (f) { return F.pf(900, f); }, 900, -.03)); T(G, SW / 2, 205 + 40 + gs * .8, F.pf(900, gs), goldFill, 'center', -gs * .03);
    T('gram GAP yang dijual', SW / 2, 205 + 40 + gs * .8 + 78, F.ss(800, 50), K.maroon, 'center');
    para('Jika harga GAP pada *' + D.tarikh + '* ialah *' + GAPS + '*, sistem bahagikan ' + JUM + ' dengan ' + RM(D.gap) + ', menjadikan gram GAP yang dijual berjumlah *' + GR + '*.', M, 640, 936, 31);
    box(M, 810, 936, 160, 'red', 26); T('Sistem potong ' + GR + ' daripada akaun GAP', SW / 2, 878, F.ss(700, 34), '#FFFFFF', 'center'); T('dan keluarkan Cash Voucher ' + JUM, SW / 2, 932, F.pf(900, 42), goldFillL, 'center');
  },
  // 6 — formula + nota
  function (i) {
    eyebrow('Formula asas', M, 96);
    card(M, 140, 936, 250, { r: 28 }); T('Gram GAP Yang Dijual =', SW / 2, 200, F.ss(800, 36), K.ink, 'center');
    box(190, 222, 700, 62, 'cream', 16); T('Jumlah Keseluruhan', SW / 2, 264, F.ss(700, 30), K.ink, 'center'); dotted(160, 920, 308);
    box(190, 324, 700, 62, 'cream', 16); T('Harga GAP Semasa (Buy GAP)', SW / 2, 366, F.ss(700, 30), K.ink, 'center');
    card(M, 470, 936, 500, { r: 28 }); box(100, 440, 330, 62, 'red', 31); T('Nota penting', 265, 483, F.pf(900, 34), '#FFFFFF', 'center');
    [['Pengiraan adalah berdasarkan *NILAI pembelian*, bukan berat barang kemas.', 590], ['Lagi tinggi harga GAP semasa, *lagi sedikit gram* yang diperlukan.', 723], ['*Konsisten simpan*, lebih banyak pilihan untuk masa depan anda!', 856]].forEach(function (r) { checkCircle(135, r[1] - 12, 30); para(r[0], 190, r[1] - 22, 770, 29, { lh: 1.4 }); });
  },
  // 7 — belum ada akaun
  function (i) {
    eyebrow('Mula hari ini', M, 96);
    headline([[['Belum ada', 'ink']], [['akaun GAP?', 'red']]], M, 225, { size: 118 });
    para('*Daftar percuma* dan mula menabung *ikut kemampuan anda.*', M, 420, 936, 34);
    fadePhoto(IMG.produk, 540, 760, 800, 100); priceTag(830, 610, 300, 112, RM(D.harga), -.06);
    T(D.produk, M, 960, F.ss(700, 26), K.muted, 'left', .5);
  },
  // 8 — CTA (gelap + potret)
  function (i) {
    eyebrow('Kongsikan di komen', M, 96, true);
    headline([[['Simpan gold bar', 'goldl']], [['atau kumpul gram?', 'white']]], M, 225, { size: 96, maxW: 590 });
    para('Anda lebih suka *simpan gold bar* atau *kumpul gram* untuk tebus barang kemas ' + D.tulen + '?', M, 440, 440, 30, { dark: true });
    T('Komen di bawah', M, 640, F.ss(700, 27), TH.eyeD); arrowDown(M + 20, 660, 44, TH.eyeD);
    cutoutBC(IMG.me, 850, SH, 730);
    T('Taufik Musa', M, 838, F.pf(900, 54), goldFillL); T('Dealer Public Gold', M, 874, F.ss(700, 25), '#FFFFFF', 'left', 1.5);
    [['PG CODE', D.pgcode, 916], ['WHATSAPP', D.wa, 946], ['LAMAN', D.web, 976]].forEach(function (r) { T(r[0], M, r[2], F.ss(700, 21), TH.eyeD, 'left', 2.5); T(r[1], M + 160, r[2], F.ss(800, 25), '#FFFFFF', 'left', 1); });
  },
];
