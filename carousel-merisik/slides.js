// Kisah cincin merisik (carousel-ivory, maroon default), 7 slaid, 1080x1080. Watak generik; kiraan automatik.
var N = 7;
var THEME = 'maroon';
var DARK = [0, 6]; var NODOTS = [6];
var ASSETS = { produk: 'produk.jpg', me: 'thumbs-up.png' };
var D = {
  tarikh: '19 Oktober 2026', gap: 592, bundar: 'round',           // bundar: 'round' (ikut copywriting 2.5473) | 'floor'
  pgcode: 'PG00359605', wa: '60132740711', web: 'simpanemasfizikal.com',
  produk: '916/22K Gold Ring KLCC PGJR181317 1C', harga: 1498, upah: 0, upahTermasuk: false, pos: 10,
};
D.asas = D.harga; D.jumlah = D.harga + D.pos;
D.gram = (D.bundar === 'round' ? Math.round : Math.floor)(D.jumlah / D.gap * 1e4) / 1e4;
var RM = function (n) { return 'RM' + n.toLocaleString('en-US'); };
var G = D.gram.toFixed(4), GR = G + ' gram', JUM = RM(D.jumlah), GAPS = RM(D.gap) + '/gram';

function listCard(y, title, text, ok) { card(M, y, 936, 96, { bar: 1 }); if (ok) checkCircle(146, y + 48, 26); else crossCircle(146, y + 48, 26); T(title, 192, y + 40, F.ss(800, 30), K.maroon); T(text, 192, y + 76, F.ss(500, 26), K.ink); }

var SLIDES = [
  // 1 — hook (gelap)
  function (i) {
    eyebrow('Duit hantaran kahwin', M, 96, true);
    headline([[['Cincin merisik', 'white']], [['emas 999 tulen', 'goldl']], [['tolak 2 gram', 'white']], [['simpanan GAP.', 'goldil']]], M, 238, { size: 108 });
    para('Kerap kali duit hantaran kahwin bocor hanya disebabkan *kos cincin merisik* yang melambung.', M, 700, 520, 31, { dark: true });
    medallion(IMG.produk, 800, 800, 330, .5, .5, .8);
  },
  // 2 — dilema
  function (i) {
    eyebrow('Dilema bakal pengantin', M, 96);
    headline([[['Harga cincin', 'ink']], [['cecah RM1,500.', 'red']]], M, 225, { size: 108 });
    para('Melihat harga cincin di kedai luar yang *cecah RM1,500* dengan *upah tinggi* merisaukan beliau.', M, 410, 936, 33);
    listCard(560, 'Duit simpanan kenduri', 'Tidak boleh diusik.', false);
    listCard(672, 'Mujur sejak mula bekerja', 'Beliau sudah menabung emas dalam GAP setiap kali dapat gaji.', true);
    fadePhoto(IMG.produk, 540, 880, 700, 90);
  },
  // 3 — pilihan
  function (i) {
    eyebrow('Pilihan beliau', M, 96);
    headline([[['Cincin 999', 'ink']], [['5D Hard Gold.', 'red']]], M, 225, { size: 112 });
    para('Beliau memilih cincin *999 5D Hard Gold* berharga *' + JUM + '*, termasuk upah dan pos berinsurans.', M, 410, 936, 33);
    fadePhoto(IMG.produk, 540, 740, 900, 100); priceTag(840, 560, 300, 112, JUM, -.06);
  },
  // 4 — perincian
  function (i) {
    eyebrow('Perincian pengiraan', M, 96);
    headline([[['Cincin Emas ', 'ink'], ['KLCC', 'red']]], M, 215, { size: 112 });
    T(D.produk, M, 266, F.ss(600, 25), K.muted, 'left', .5);
    card(M, 300, 936, 420, { r: 26 });
    [['Harga Barang Kemas', '', RM(D.harga) + '.00'], ['Pengeposan Berinsurans', '(GIT)', RM(D.pos) + '.00']].forEach(function (r, k) {
      var t = 330 + k * 105; T(r[0], 112, t + 42, F.ss(800, 34), K.ink); if (r[1]) T(r[1], 112, t + 76, F.ss(500, 26), K.muted); T(r[2], 968, t + 58, F.ss(800, 42), K.ink, 'right'); if (k < 1) dotted(112, 968, t + 98);
    });
    box(100, 560, 880, 130, 'red', 22); T('Jumlah Nilai Keseluruhan', 136, 636, F.ss(700, 30), '#FFFFFF'); T(JUM + '.00', 946, 646, F.ss(800, 56), TH.gl[0], 'right');
    card(M, 760, 936, 130, { bar: 1 }); T('Harga Semasa Buy GAP', 112, 818, F.ss(800, 31), K.ink); T('(' + D.tarikh + ')', 112, 856, F.ss(500, 25), K.muted); box(630, 785, 340, 80, 'cream', 18); T(GAPS, 800, 840, F.ss(800, 38), K.maroon, 'center');
  },
  // 5 — gram
  function (i) {
    eyebrow('Gram GAP yang ditolak', M, 96);
    headline([[[JUM + ' ÷ ' + RM(D.gap), 'ink']]], M, 205, { size: 88 });
    var gs = Math.min(230, fit(G, function (f) { return F.pf(900, f); }, 900, -.03)); T(G, SW / 2, 205 + 40 + gs * .8, F.pf(900, gs), goldFill, 'center', -gs * .03);
    T('gram sahaja!', SW / 2, 205 + 40 + gs * .8 + 82, F.ss(800, 56), K.maroon, 'center');
    para('Pada harga GAP ' + GAPS + ', sistem hanya memotong *' + GR + '* GAP. Cincin emas tulen berkilau *selamat berada di tangan* tanpa menjejaskan *wang hantaran.*', M, 640, 936, 31);
    box(M, 832, 936, 142, 'red', 26); T('Cincin selamat di tangan,', SW / 2, 892, F.ss(700, 34), '#FFFFFF', 'center'); T('wang hantaran tak terusik!', SW / 2, 942, F.pf(900, 44), goldFillL, 'center');
  },
  // 6 — tiga pengajaran
  function (i) {
    eyebrow('Tiga pengajaran penting', M, 96);
    headline([[['Apa yang kita', 'ink']], [['belajar?', 'red']]], M, 222, { size: 100 });
    var L = [['Langkah perkahwinan yang berkat bermula dengan *pengurusan kewangan yang bijak* tanpa hutang.', 372], ['Emas 999 *5D Hard Gold* memberi rupa mewah dan *ketahanan padu* pada berat yang jimat.', 580], ['*Mulakan tabungan emas seawal hari pertama bekerja* supaya anda bersedia menghadapi fasa besar kehidupan.', 788]];
    L.forEach(function (r, k) { card(M, r[1], 936, 192, { bar: 1 }); numBox(108, r[1] + 22, 66, String(k + 1)); para(r[0], 204, r[1] + 52, 770, 28, { lh: 1.4 }); });
  },
  // 7 — CTA (gelap + potret)
  function (i) {
    eyebrow('Soalan untuk anda', M, 96, true);
    headline([[['Simpan emas GAP', 'goldl']], [['sebelum fikir', 'white']], [['nak kahwin?', 'goldil']]], M, 225, { size: 96, maxW: 590 });
    para('Anda rasa *wajar tak* anak muda mula simpan emas GAP sebelum fikir nak kahwin?', M, 490, 450, 30, { dark: true });
    T('Komen di bawah', M, 668, F.ss(700, 27), TH.eyeD); arrowDown(M + 20, 688, 44, TH.eyeD);
    cutoutBC(IMG.me, 850, SH, 730);
    T('Moga perkongsian ini bermanfaat.', M, 780, F.ss(500, 26), TH.dkText);
    T('Taufik Musa', M, 838, F.pf(900, 54), goldFillL); T('Dealer Public Gold | G100 Network', M, 874, F.ss(700, 24), '#FFFFFF', 'left', 1);
    [['PG CODE', D.pgcode, 916], ['WHATSAPP', D.wa, 946], ['LAMAN', D.web, 976]].forEach(function (r) { T(r[0], M, r[2], F.ss(700, 21), TH.eyeD, 'left', 2.5); T(r[1], M + 160, r[2], F.ss(800, 25), '#FFFFFF', 'left', 1); });
  },
];
