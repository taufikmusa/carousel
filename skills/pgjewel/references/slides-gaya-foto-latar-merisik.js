// pgjewel — kisah cincin merisik (foto produk sebagai latar), 7 slaid, 1080x1080. Watak generik; kiraan automatik.
var N = 7;
var THEME = 'maroon';
var DARK = [0, 2, 4, 6]; var NODOTS = [6];
var ASSETS = { produk: 'produk.jpg', me: 'thumbs-up.png' };
var D = {
  tarikh: '19 Oktober 2026', gap: 592, bundar: 'round',
  pgcode: 'PG00359605', wa: '60132740711', web: 'simpanemasfizikal.com',
  produk: '916/22K Gold Ring KLCC PGJR181317 1C', harga: 1498, pos: 10,   // app: RM802-RM1,498 (upah termasuk RM36-67)
};
D.jumlah = D.harga + D.pos;
D.gram = (D.bundar === 'round' ? Math.round : Math.floor)(D.jumlah / D.gap * 1e4) / 1e4;
var RM = function (n) { return 'RM' + n.toLocaleString('en-US'); };
var G = D.gram.toFixed(4), GR = G + ' gram', JUM = RM(D.jumlah), GAPS = RM(D.gap) + '/gram';
var CUT;
window.BG = function (i, x0, dark) { CUT = CUT || makeCut(IMG.produk); if (dark) bgVelvet(x0, i * 7 + 3); else bgPhoto(x0, IMG.produk, { zoom: 2.4, fx: .3 + (i % 3) * .2, a: .6 }); };
var GLASS = { fill: 'rgba(255,255,255,.80)', edge: 'rgba(231,210,160,.9)' };

function row(y, title, text, ok) { card(M, y, 936, 96, Object.assign({ bar: 1 }, GLASS)); if (ok) checkCircle(146, y + 48, 26); else crossCircle(146, y + 48, 26); T(title, 192, y + 40, F.ss(800, 30), K.maroon); T(text, 192, y + 76, F.ss(500, 26), K.ink); }

var SLIDES = [
  // 1 — hook
  function (i) {
    topbar(i, N, 'Duit hantaran kahwin', true);
    headline([[['Cincin merisik', 'sw']], [['emas 916 tulen', 'sg']], [['tolak 2.5 gram', 'sw']], [['simpanan GAP.', 'sg']]], M, 232, { size: 104 });
    para('Kerap kali duit hantaran kahwin bocor hanya disebabkan *kos cincin merisik* yang melambung.', M, 640, 560, 31, { dark: true });
    putCut(CUT, 560, 810, 820, { rot: -.04 });
  },
  // 2 — dilema
  function (i) {
    topbar(i, N, 'Dilema bakal pengantin', false);
    headline([[['Harga cincin', 'si']], [['cecah ', 'si'], ['RM1,500.', 'sr']]], M, 225, { size: 108 });
    para('Melihat harga cincin di kedai luar yang *cecah RM1,500* dengan *upah tinggi* merisaukan beliau.', M, 420, 936, 33);
    row(570, 'Duit simpanan kenduri', 'Tidak boleh diusik.', false);
    row(682, 'Mujur sejak mula bekerja', 'Beliau sudah menabung emas dalam GAP setiap kali dapat gaji.', true);
    priceTag(560, 905, 440, 150, 'RM1,500+', -.05);
  },
  // 3 — pilihan
  function (i) {
    topbar(i, N, 'Pilihan beliau', true);
    headline([[['Cincin emas 916', 'sw']], [['pilihan beliau.', 'sg']]], M, 225, { size: 108 });
    para('Beliau memilih *cincin emas 916/22K* berharga *' + JUM + '*, termasuk upah dan pos berinsurans.', M, 410, 800, 33, { dark: true });
    putCut(CUT, 540, 760, 940, { rot: .03 }); priceTag(840, 560, 300, 112, JUM, -.06);
  },
  // 4 — perincian
  function (i) {
    topbar(i, N, 'Perincian pengiraan', false);
    headline([[['Cincin Emas ', 'si'], ['KLCC', 'sr']]], M, 215, { size: 104 });
    T(D.produk, M, 266, F.ss(600, 25), K.muted, 'left', .5);
    card(M, 300, 936, 440, Object.assign({ r: 26 }, GLASS));
    [['Harga Barang Kemas', '(upah termasuk)', RM(D.harga) + '.00'], ['Pengeposan Berinsurans', '(GIT)', RM(D.pos) + '.00']].forEach(function (r, k) {
      var t = 330 + k * 105; T(r[0], 112, t + 42, F.ss(800, 34), K.ink); T(r[1], 112, t + 76, F.ss(500, 26), K.muted); T(r[2], 968, t + 58, F.ss(800, 42), K.ink, 'right'); if (k < 1) dotted(112, 968, t + 98);
    });
    box(100, 566, 880, 130, 'red', 22); T('Jumlah Nilai Keseluruhan', 136, 642, F.ss(700, 30), '#FFFFFF'); T(JUM + '.00', 946, 652, F.ss(800, 56), TH.gl[0], 'right');
    card(M, 780, 936, 140, Object.assign({ bar: 1 }, GLASS)); T('Harga Semasa Buy GAP', 112, 838, F.ss(800, 31), K.ink); T('(' + D.tarikh + ')', 112, 876, F.ss(500, 25), K.muted); box(630, 806, 340, 80, 'cream', 18); T(GAPS, 800, 861, F.ss(800, 38), K.maroon, 'center');
  },
  // 5 — gram
  function (i) {
    topbar(i, N, 'Gram GAP yang ditolak', true);
    headline([[[JUM + ' ÷ ' + RM(D.gap), 'sw']]], M, 205, { size: 88 });
    var gs = Math.min(230, fit(G, function (f) { return F.ix(900, f); }, 900, -.03)); T(G, SW / 2, 205 + 40 + gs * .78, F.ix(900, gs), goldFillL, 'center', -gs * .03);
    T('gram sahaja!', SW / 2, 205 + 40 + gs * .78 + 78, F.ss(800, 54), '#FFFFFF', 'center');
    para('Pada harga GAP ' + GAPS + ', sistem hanya memotong *' + GR + '* GAP. Cincin emas tulen berkilau *selamat berada di tangan* tanpa menjejaskan *wang hantaran.*', M, 640, 936, 31, { dark: true });
    putCut(CUT, 790, 880, 440, { rot: -.05 });
  },
  // 6 — tiga pengajaran
  function (i) {
    topbar(i, N, 'Tiga pengajaran penting', false);
    headline([[['Apa yang kita ', 'si'], ['belajar?', 'sr']]], M, 222, { size: 96 });
    var L = [['Langkah perkahwinan yang berkat bermula dengan *pengurusan kewangan yang bijak* tanpa hutang.', 340], ['Emas 916 memberi *rupa mewah* dan *ketahanan padu* pada berat yang jimat.', 560], ['*Mulakan tabungan emas seawal hari pertama bekerja* supaya anda bersedia menghadapi fasa besar kehidupan.', 780]];
    L.forEach(function (r, k) { card(M, r[1], 936, 190, Object.assign({ r: 24 }, GLASS)); numCircle(150, r[1] + 95, 38, String(k + 1)); para(r[0], 222, r[1] + 70, 740, 29, { lh: 1.4 }); });
  },
  // 7 — CTA
  function (i) {
    topbar(i, N, 'Soalan untuk anda', true);
    headline([[['Simpan emas GAP', 'sg']], [['sebelum fikir', 'sw']], [['nak kahwin?', 'sg']]], M, 225, { size: 92, maxW: 590 });
    para('Anda rasa *wajar tak* anak muda mula simpan emas GAP sebelum fikir nak kahwin?', M, 490, 450, 30, { dark: true });
    T('Komen di bawah', M, 668, F.ss(700, 27), TH.eyeD); arrowDown(M + 20, 688, 44, TH.eyeD);
    cutoutBC(IMG.me, 850, SH, 730);
    T('Moga perkongsian ini bermanfaat.', M, 780, F.ss(500, 26), TH.dkText);
    T('Taufik Musa', M, 838, F.pf(900, 54), goldFillL); T('Dealer Public Gold | G100 Network', M, 874, F.ss(700, 24), '#FFFFFF', 'left', 1);
    [['PG CODE', D.pgcode, 916], ['WHATSAPP', D.wa, 946], ['LAMAN', D.web, 976]].forEach(function (r) { T(r[0], M, r[2], F.ss(700, 21), TH.eyeD, 'left', 2.5); T(r[1], M + 160, r[2], F.ss(800, 25), '#FFFFFF', 'left', 1); });
  },
];
