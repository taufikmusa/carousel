// pgjewel — kisah cincin merisik (foto produk sebagai latar), 7 slaid, 1080x1080. Watak generik; kiraan automatik.
var N = 7;
var THEME = 'maroon';
var DARK = [0, 2, 4, 6]; var NODOTS = [6];
var ASSETS = { produk: 'produk.jpg', me: 'thumbs-up.png' };
var D = {
  tarikh: '20 Oktober 2026', gap: 588, bundar: 'round',
  pgcode: 'PG00359605', wa: '60132740711', web: 'simpanemasfizikal.com',
  produk: '916/22K Gold Bracelet PGJB182376A 1C', berat: '8.18g', harga: 4668, upah: 95, pos: 10,   // app: RM1,345-RM4,668 (upah termasuk RM36-95)
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
  function (i) {
    topbar(i, N, 'Self-reward naik pangkat', true);
    headline([[['Raikan kenaikan', 'sw']], [['pangkat dengan', 'sw']], [['gelang emas 916.', 'sg']]], M, 235, { size: 100, maxW: 936 });
    putCut(CUT, 560, 700, 700, { rot: 0 });
  },
  function (i) {
    topbar(i, N, 'Dilema self-reward', false);
    headline([[['Ganjaran atau', 'si']], [['tambah ', 'si'], ['liabiliti?', 'sr']]], M, 225, { size: 108 });
    para('Selepas berhempas-pulas bekerja, *emas jadi ingatan fizikal* atas kejayaan anda.', M, 420, 936, 33);
    row(550, 'Beg jenama', 'Nilainya jatuh sebaik keluar kedai.', false);
    row(660, 'Barangan fesyen', 'Akhirnya terperap dalam almari.', false);
    row(770, 'Aset emas 916', 'Boleh dipandang dan bernilai kekal.', true);
  },
  function (i) {
    topbar(i, N, 'Tebus dari GAP', true);
    headline([[['Tahu ', 'sw'], ['tak?', 'sg']]], M, 235, { size: 170 });
    para('Anda kini boleh tebus *gelang emas 916* bernilai *' + JUM + '* terus dari akaun *GAP Public Gold.*', M, 330, 800, 33, { dark: true });
    putCut(CUT, 560, 735, 700, { rot: 0 }); priceTag(830, 520, 300, 112, JUM, -.06);
  },
  function (i) {
    topbar(i, N, 'Saya kongsikan detail pengiraan', false);
    headline([[['Gelang Emas ', 'si'], ['916', 'sr']]], M, 215, { size: 104 });
    T(D.produk + ' (' + D.berat + ')', M, 266, F.ss(600, 24), K.muted, 'left', .3);
    card(M, 300, 936, 440, Object.assign({ r: 26 }, GLASS));
    [['Harga Barang Kemas', '(termasuk upah ' + RM(D.upah) + '.00)', RM(D.harga) + '.00'], ['Pengeposan Berinsurans', '(GIT)', RM(D.pos) + '.00']].forEach(function (r, k) {
      var t = 330 + k * 105; T(r[0], 112, t + 42, F.ss(800, 34), K.ink); T(r[1], 112, t + 76, F.ss(500, 26), K.muted); T(r[2], 968, t + 58, F.ss(800, 42), K.ink, 'right'); if (k < 1) dotted(112, 968, t + 98);
    });
    box(100, 566, 880, 130, 'red', 22); T('Jumlah Nilai Keseluruhan', 136, 642, F.ss(700, 30), '#FFFFFF'); T(JUM + '.00', 946, 652, F.ss(800, 56), TH.gl[0], 'right');
    card(M, 780, 936, 160, Object.assign({ bar: 1 }, GLASS)); T('Harga Emas PG Sell Hari Ini', 112, 832, F.ss(800, 30), K.ink); T('(kadar Cash Voucher · ' + D.tarikh + ')', 112, 870, F.ss(500, 24), K.muted); box(630, 806, 340, 80, 'cream', 18); T(GAPS, 800, 861, F.ss(800, 38), K.maroon, 'center');
  },
  function (i) {
    topbar(i, N, 'Gram GAP yang ditolak', true);
    headline([[[JUM + ' ÷ ' + RM(D.gap), 'sw']]], M, 205, { size: 88 });
    var gs = Math.min(230, fit(G, function (f) { return F.ix(900, f); }, 900, -.03)); T(G, SW / 2, 205 + 40 + gs * .78, F.ix(900, gs), goldFillL, 'center', -gs * .03);
    T('gram sahaja!', SW / 2, 205 + 40 + gs * .78 + 78, F.ss(800, 54), '#FFFFFF', 'center');
    para('Sistem hanya menolak *' + GR + '* GAP pada harga ' + GAPS + '. *Tiada rasa bersalah* berbelanja, kerana tunai bertukar menjadi *emas fizikal* yang sentiasa bernilai.', M, 640, 936, 31, { dark: true });
    putCut(CUT, 800, 915, 390, { rot: -.05 });
  },
  function (i) {
    topbar(i, N, 'Tiga pengajaran dari perkongsian ini', false);
    headline([[['Apa yang kita ', 'si'], ['belajar?', 'sr']]], M, 222, { size: 96 });
    var L = [['Self-reward sebenar adalah *ganjaran yang membina kekayaan,* bukan menambah liabiliti.', 340], ['Emas perhiasan 916 memberi *kepuasan emosi pemakaian* sekaligus berfungsi sebagai *dana kecemasan.*', 560], ['Tukarkan *tabiat berbelanja* kepada *tabiat mengumpul aset emas* bersama Public Gold.', 780]];
    L.forEach(function (r, k) { card(M, r[1], 936, 190, Object.assign({ r: 24 }, GLASS)); numCircle(150, r[1] + 95, 38, String(k + 1)); para(r[0], 222, r[1] + 70, 740, 29, { lh: 1.4 }); });
  },
  function (i) {
    topbar(i, N, 'Soalan untuk anda', true);
    headline([[['Naik pangkat,', 'sg']], [['reward diri', 'sw']], [['dengan apa?', 'sg']]], M, 225, { size: 92, maxW: 590 });
    para('Anda kalau dapat *bonus atau naik pangkat,* reward diri dengan apa selalunya?', M, 490, 450, 30, { dark: true });
    T('Komen di bawah', M, 668, F.ss(700, 27), TH.eyeD); arrowDown(M + 20, 688, 44, TH.eyeD);
    cutoutBC(IMG.me, 850, SH, 730);
    T('Moga perkongsian ini bermanfaat.', M, 780, F.ss(500, 26), TH.dkText);
    T('Taufik Musa', M, 838, F.pf(900, 54), goldFillL); T('Dealer Public Gold | G100 Network', M, 874, F.ss(700, 24), '#FFFFFF', 'left', 1);
    [['PG CODE', D.pgcode, 916], ['WHATSAPP', D.wa, 946], ['LAMAN', D.web, 976]].forEach(function (r) { T(r[0], M, r[2], F.ss(700, 21), TH.eyeD, 'left', 2.5); T(r[1], M + 160, r[2], F.ss(800, 25), '#FFFFFF', 'left', 1); });
  },
];
