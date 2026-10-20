// pgjewel v2 — gaya krim berpusat (rujukan: "Kini withdraw GAP boleh", 7 slaid penerangan) + slaid 8 CTA Taufik. 1080x1080 (1:1).
// 1 cover (produk besar) · 2 contoh kiraan (kad produk + jadual) · 3-5 "Bagaimana GAP ditolak?" Langkah 1/2/3 · 6 formula + nota · 7 contoh pengiraan + "Belum ada akaun GAP?" · 8 CTA (gelap satin merah ceri + potret)
// Edit D (kiraan automatik) + teks. img/produk.jpg = gambar produk latar krim/putih (dipotong automatik), img/thumbs-up.png = potret outline putih.
var NOFOOTER = true;
var N = 8;
var THEME = 'maroon';
var DARK = [7]; var NODOTS = [7];
var ASSETS = { produk: 'produk.jpg', me: 'thumbs-up.png' };
var D = {
  tarikh: '20 Oktober 2026', gap: 588, bundar: 'round',      // gap = Harga Emas PG Sell hari ini (kadar Cash Voucher) RM/gram
  pgcode: 'PG00359605', wa: '60132740711', web: 'simpanemasfizikal.com',
  nama: '916/22K Gold Bracelet', kod: 'PGJB182376A 1C', berat: '8.18g', tulen: '916', jenis: 'gelang emas',
  harga: 4668, upah: 95, pos: 10,                             // harga app (upah termasuk) · upah · pos berinsurans (GIT)
};
D.asas = D.harga - D.upah; D.jumlah = D.harga + D.pos;
D.gram = (D.bundar === 'round' ? Math.round : Math.floor)(D.jumlah / D.gap * 1e4) / 1e4;
var RM = function (n) { return 'RM' + n.toLocaleString('en-US'); };
var G = D.gram.toFixed(4), GR = G + 'g', JUM = RM(D.jumlah), GAPS = RM(D.gap) + '/gram', BRG = D.jenis + ' ' + D.tulen;
var CUT;
window.BG = function (i, x0, dark) { CUT = CUT || makeCut(IMG.produk); if (dark) { bgSatin(x0, i * 11 + 4); return true; } return false; };

function head2(i, g, r, rsize) { pill(i, N); goldItalic(g, 175, 104, true); redTitle(r, 325, rsize || 150, 900); }
function stepHead(i, n, l1, l2) {
  pill(i, N); goldItalic('Bagaimana', 175, 104, true); redTitle('GAP ditolak?', 325, 150, 900); goldPill('Langkah ' + n, 438, 340);
  T(l1, SW / 2, 548, F.ss(700, 38), K.ink, 'center'); T(l2, SW / 2, 598, F.ss(700, 38), K.ink, 'center');
}
function row3(y, ic, label, val, x) { card(x, y, 306, 276, { r: 26 }); ic(x + 153, y + 100); T(label, x + 153, y + 190, F.ss(700, 30), K.ink, 'center'); box(x + 20, y + 208, 266, 54, 'cream', 16); T(val, x + 153, y + 247, F.ss(800, 36), K.ink, 'center'); }

var SLIDES = [
  // 1 — cover: produk besar & penuh
  function (i) {
    pill(i, N); goldItalic('Raikan kenaikan pangkat', 180, 80);
    redTitle('dengan emas ' + D.tulen, 322, 150, 900);
    T('Nilainya makin naik di masa depan.', SW / 2, 410, F.ss(700, 40), K.ink, 'center');
    putCut(CUT, 540, 735, 680, { rot: -.02 }); foot();
  },
  // 2 — contoh kiraan
  function (i) {
    pill(i, N); goldItalic('Tahu tak?', 180, 112, true); redTitle('boleh tebus GAP', 325, 150, 900);
    var a = 'untuk ' + D.jenis + ' ', fa = F.ss(700, 46), wa = tw(a, fa) + tw(D.tulen, F.pf(900, 84)) + 10, x0 = SW / 2 - wa / 2; T(a, x0, 410, fa, K.ink); T(D.tulen, x0 + tw(a, fa) + 10, 418, F.pf(900, 84), goldFill);
    card(40, 448, 448, 524, { r: 28 }); putCut(CUT, 264, 640, 430, { rot: -.02 }); T(D.nama, 264, 858, F.ss(700, 27), K.ink, 'center'); box(100, 884, 328, 62, 'cream', 20); T(RM(D.harga) + '.00', 264, 928, F.ss(800, 38), K.ink, 'center');
    card(500, 448, 542, 524, { r: 28 });
    [['Harga emas ' + D.tulen, '(tanpa upah)', RM(D.asas)], ['Upah', '', RM(D.upah)], ['Pengeposan', '(jika pilih untuk pos)', RM(D.pos)]].forEach(function (r, k) {
      var t = 468 + k * 124; T(r[0], 526, t + 46, F.ss(800, 32), K.ink); if (r[1]) T(r[1], 526, t + 82, F.ss(500, 24), K.muted); T('=', 786, t + 60, F.ss(800, 40), K.ink); T(r[2], 1020, t + 62, F.ss(800, 44), K.ink, 'right'); dotted(520, 1022, t + 106);
    });
    T('Jumlah', 526, 862, F.ss(800, 31), K.maroon); T('keseluruhan', 526, 898, F.ss(800, 31), K.maroon); T('=', 770, 902, F.ss(800, 38), K.maroon); redBox(804, 846, 214, 100, JUM, 38);
    foot();
  },
  // 3 — langkah 1
  function (i) {
    stepHead(i, 1, 'Sistem akan kirakan jumlah keseluruhan', BRG + '.');
    row3(630, iconBars, 'Harga emas ' + D.tulen, RM(D.asas), 60); row3(630, iconTools, 'Upah', RM(D.upah), 387); row3(630, iconBox, 'Pengeposan', RM(D.pos), 714);
    card(60, 924, 960, 108, { r: 26 }); T('Jumlah keseluruhan', 100, 990, F.ss(800, 38), K.maroon); T('=', 520, 988, F.ss(800, 40), K.ink); redBox(580, 936, 420, 84, JUM, 56);
    foot();
  },
  // 4 — langkah 2
  function (i) {
    stepHead(i, 2, 'Nilai ini akan ditukarkan kepada jumlah', 'gram mengikut harga emas semasa.');
    card(40, 648, 1000, 150, { r: 28 }); T('Harga Emas PG Sell Hari Ini', 80, 712, F.ss(800, 34), K.ink); T('(kadar Cash Voucher · ' + D.tarikh + ')', 80, 752, F.ss(500, 25), K.muted); T('=', 690, 735, F.ss(800, 40), K.ink); redBox(730, 668, 280, 110, GAPS, 36);
    card(40, 818, 1000, 150, { r: 28 }); T('Gram GAP yang ditolak', 80, 902, F.ss(800, 33), K.ink); T('=', 468, 898, F.ss(800, 38), K.ink); frac(580, 888, JUM, RM(D.gap), 34); T('=', 726, 898, F.ss(800, 38), K.ink); redBox(760, 840, 250, 110, GR, 50);
    foot();
  },
  // 5 — langkah 3
  function (i) {
    stepHead(i, 3, 'Kemudian mengeluarkan Cash Voucher', 'ikut nilai yang diperlukan.');
    T('Cash Voucher =', 70, 790, F.ss(800, 52), K.ink); redBox(530, 700, 500, 150, JUM, 84);
    T('Voucher ini digunakan untuk', SW / 2, 930, F.ss(700, 38), K.ink, 'center'); T('pembelian ' + BRG + '.', SW / 2, 980, F.ss(700, 38), K.ink, 'center');
    foot();
  },
  // 6 — formula + nota
  function (i) {
    pill(i, N); redTitle('Formula', 205, 140, 700); goldItalic('pengiraan', 330, 140);
    card(100, 372, 880, 262, { r: 28 }); T('GRAM GAP YANG DITOLAK =', SW / 2, 432, F.ss(800, 34), K.ink, 'center');
    box(190, 452, 700, 58, 'cream', 16); T('Jumlah Keseluruhan', SW / 2, 493, F.ss(700, 30), K.ink, 'center'); dotted(170, 910, 530);
    box(190, 550, 700, 58, 'cream', 16); T('Harga Emas PG Sell (Cash Voucher)', SW / 2, 591, F.ss(700, 30), K.ink, 'center');
    card(M, 690, 936, 330, { r: 28 }); box(100, 662, 330, 60, 'red', 30); T('Nota penting', 265, 703, F.pf(900, 34), '#FFFFFF', 'center');
    [['Pengiraan adalah berdasarkan *NILAI pembelian*, bukan berat barang kemas.', 806], ['Self-reward sebenar *membina kekayaan*, bukan menambah liabiliti.', 892], ['Emas ' + D.tulen + ' beri *kepuasan memakai* sekaligus *dana kecemasan.*', 978]].forEach(function (r) { checkCircle(135, r[1] - 8, 28); para(r[0], 190, r[1] - 36, 780, 28, { lh: 1.3 }); });
    foot();
  },
  // 7 — contoh pengiraan + belum ada akaun
  function (i) {
    pill(i, N); goldItalic('Contoh', 165, 104, true); redTitle('pengiraan', 310, 150, 700);
    var Y = [352, 474, 596, 718], H = 110;
    Y.forEach(function (y, k) { card(M, y, 936, H, { r: 24 }); numCircle(130, y + H / 2, 40, String(k + 1)); });
    T('Harga Emas PG Sell Hari Ini', 200, Y[0] + 48, F.ss(800, 28), K.ink); T('(' + D.tarikh + ')', 200, Y[0] + 88, F.ss(500, 24), K.muted); T('=', 612, Y[0] + 70, F.ss(800, 38), K.ink); box(640, Y[0] + 22, 330, 68, 'cream', 18); T(GAPS, 805, Y[0] + 70, F.ss(800, 38), K.maroon, 'center');
    T('Gram GAP ditolak =', 200, Y[1] + 66, F.ss(800, 28), K.ink); frac(520, Y[1] + 50, JUM, RM(D.gap), 26); T('=', 640, Y[1] + 66, F.ss(800, 36), K.ink); box(740, Y[1] + 22, 230, 68, 'cream', 18); T(GR, 855, Y[1] + 70, F.ss(800, 38), K.maroon, 'center');
    T('Jadi, sistem akan memotong', 200, Y[2] + 50, F.ss(700, 30), K.ink); T('daripada akaun GAP anda.', 200, Y[2] + 90, F.ss(700, 30), K.ink); box(640, Y[2] + 22, 330, 68, 'cream', 18); T(GR, 805, Y[2] + 70, F.ss(800, 38), K.maroon, 'center');
    T('Dan mengeluarkan', 200, Y[3] + 50, F.ss(700, 30), K.ink); T('untuk pembelian ' + BRG + '.', 200, Y[3] + 90, F.ss(700, 30), K.ink); box(540, Y[3] + 10, 430, 54, 'cream', 16); T('Cash Voucher ' + JUM, 755, Y[3] + 48, F.ss(800, 30), K.maroon, 'center');
    box(M, 850, 936, 156, 'red', 28); T('Belum ada akaun GAP?', SW / 2, 924, F.pf(900, 54), goldFillL, 'center'); T('Daftar percuma dan mula menabung ikut kemampuan anda.', SW / 2, 974, F.ss(500, 27), '#FFFFFF', 'center');
    foot();
  },
  // 8 — CTA (satin merah ceri + potret)
  function (i) {
    pill(i, N, true);
    headline([[['Naik pangkat,', 'goldl']], [['reward diri', 'white']], [['dengan apa?', 'goldil']]], M, 190, { size: 100, maxW: 600 });
    para('Anda kalau dapat *bonus atau naik pangkat,* reward diri dengan apa selalunya?', M, 490, 450, 30, { dark: true });
    T('Komen di bawah', M, 668, F.ss(700, 27), TH.eyeD); arrowDown(M + 20, 688, 44, TH.eyeD);
    cutoutBC(IMG.me, 850, SH, 730);
    T('Moga perkongsian ini bermanfaat.', M, 780, F.ss(500, 26), TH.dkText);
    T('Taufik Musa', M, 838, F.pf(900, 54), goldFillL); T('Dealer Public Gold | G100 Network', M, 874, F.ss(700, 24), '#FFFFFF', 'left', 1);
    [['PG CODE', D.pgcode, 916], ['WHATSAPP', D.wa, 946], ['LAMAN', D.web, 976]].forEach(function (r) { T(r[0], M, r[2], F.ss(700, 21), TH.eyeD, 'left', 2.5); T(r[1], M + 160, r[2], F.ss(800, 25), '#FFFFFF', 'left', 1); });
    foot(true);
  },
];
