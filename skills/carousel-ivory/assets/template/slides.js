// Carousel "Withdraw GAP → barang kemas" (gaya ivory premium, 7 slaid). Tukar data D + gambar img/produk.png.
var N = 7;
var ASSETS = { produk: 'produk.png' };
var D = {
  handle: '@taufik.pg',
  tarikh: '18 Oktober 2026', gap: 592,            // harga GAP semasa RM/gram
  tulen: '999',                                    // ketulenan: 999 / 916
  produk: '999/24K Gold Ring', harga: 1653,        // harga paparan app
  upah: 137, upahTermasuk: true,                    // upah sudah termasuk dalam harga paparan?
  pos: 10,                                         // pengeposan (jika pilih pos)
};
D.asas = D.upahTermasuk ? D.harga - D.upah : D.harga;           // harga emas tanpa upah
D.jumlah = D.asas + D.upah + D.pos;                              // jumlah keseluruhan
D.gram = Math.floor(D.jumlah / D.gap * 1e4) / 1e4;               // gram GAP dijual (4 tp, bundar bawah)
var RM = function (n) { return 'RM' + n.toLocaleString('en-US'); };
var G = D.gram.toFixed(4) + 'g', JUM = RM(D.jumlah), GAPS = RM(D.gap) + '/gram', GAPD = '(' + D.tarikh + ')';

function ink(s, size, wt) { return { t: s, f: F.ss(wt || 600, size), fill: K.ink }; }
function gold(s, size) { return { t: s, f: F.pf(900, size), fill: goldFill, size: size }; }

var SLIDES = [
  // 1 — cover
  function (i) {
    counter(i, N);
    head({ a: 'Kini withdraw', b: 'GAP boleh', wa: 600, wb: 790, y: 160, gap: 190 });
    mixed([ink('Tukar kepada emas perhiasan ', 50, 600), gold(D.tulen + '!', 96)], 540, 438);
    sparks(976, 392, 1);
    fadePhoto(IMG.produk, 540, 740, 700, 90);
    handle(D.handle);
  },
  // 2 — contoh kiraan
  function (i) {
    counter(i, N);
    head({ a: 'Contoh kiraan', b: 'withdraw GAP', wa: 650, wb: 860, y: 168, gap: 142 });
    mixed([ink('untuk barang kemas ', 62, 600), gold(D.tulen, 96)], 540, 408);
    card(39, 448, 449, 525); fadePhoto(IMG.produk, 263, 650, 440, 50, false);
    T(D.produk, 263, 864, F.ss(600, 30), K.ink, 'center'); pillText(95, 887, 340, 60, 'creamgold', RM(D.harga) + '.00', 38);
    card(499, 448, 544, 525);
    var rows = [[520, 'Harga emas ' + D.tulen, '(tanpa upah)', RM(D.asas)], [645, 'Upah', '', RM(D.upah)], [762, 'Pengeposan', '(jika pilih untuk pos)', RM(D.pos)]];
    rows.forEach(function (r) {
      var y = r[0], two = !!r[2];
      T(r[1], 528, two ? y - 8 : y + 12, F.ss(700, 34)); if (two) T(r[2], 528, y + 30, F.ss(500, 27));
      T('=', 806, y + 14, F.ss(700, 40)); T(r[3], 842, y + 16, F.ss(700, 44));
    });
    hair(515, 1027, 592); hair(515, 1027, 699); hair(515, 1027, 825);
    T('Jumlah', 528, 877, F.ss(700, 36), K.maroon); T('keseluruhan', 528, 918, F.ss(700, 36), K.maroon); T('=', 744, 902, F.ss(700, 40), K.maroon);
    pillText(786, 846, 240, 86, 'red', JUM, 50);
    handle(D.handle);
  },
  // 3 — langkah 1
  function (i) {
    counter(i, N);
    head({ a: 'Bagaimana', b: 'GAP ditolak?', wa: 600, wb: 754, y: 178, gap: 128 });
    pillText(379, 340, 324, 66, 'gold', 'Langkah 1', 46, 'ss', 600);
    T('Sistem akan kirakan jumlah keseluruhan', 540, 470, F.ss(500, 40), K.ink, 'center'); T('barang kemas ' + D.tulen + '.', 540, 516, F.ss(500, 40), K.ink, 'center');
    [[62, 'Harga emas ' + D.tulen, RM(D.asas), iconBars], [388, 'Upah', RM(D.upah), iconTools], [714, 'Pengeposan', RM(D.pos), iconBox]].forEach(function (c) {
      card(c[0], 548, 306, 274, 24); c[3](c[0] + 153, 636, 1.0); T(c[1], c[0] + 153, 728, F.ss(600, 31), K.ink, 'center'); pillText(c[0] + 20, 744, 266, 56, 'cream', c[2], 38);
    });
    card(60, 848, 960, 142, 26); T('Jumlah keseluruhan', 142, 934, F.ss(700, 40), K.maroon); T('=', 566, 934, F.ss(700, 44), K.ink);
    pillText(610, 868, 374, 102, 'red', JUM, 62);
    handle(D.handle);
  },
  // 4 — langkah 2
  function (i) {
    counter(i, N);
    head({ a: 'Bagaimana', b: 'GAP ditolak?', wa: 640, wb: 870, y: 170, gap: 170 });
    pillText(331, 396, 418, 92, 'gold', 'Langkah 2', 62, 'ss', 600);
    T('Nilai ini akan ditukarkan kepada jumlah', 540, 556, F.ss(600, 42), K.ink, 'center'); T('gram mengikut harga GAP semasa.', 540, 604, F.ss(600, 42), K.ink, 'center');
    card(39, 647, 1003, 152, 26); T('Harga GAP semasa', 86, 722, F.ss(700, 42)); T(GAPD, 86, 768, F.ss(500, 32)); T('=', 560, 740, F.ss(700, 44)); pillText(616, 672, 400, 100, 'red', GAPS, 54);
    card(39, 820, 1003, 150, 26); T('Gram GAP yang dijual', 66, 912, F.ss(700, 38)); T('=', 492, 912, F.ss(700, 40));
    fraction(JUM, RM(D.gap), 612, 893, 36, 150); T('=', 726, 912, F.ss(700, 40)); pillText(770, 846, 252, 92, 'red', G, 54);
    handle(D.handle);
  },
  // 5 — langkah 3
  function (i) {
    counter(i, N);
    head({ a: 'Bagaimana', b: 'GAP ditolak?', wa: 600, wb: 800, y: 172, gap: 160 });
    pillText(353, 405, 374, 86, 'gold', 'Langkah 3', 56, 'ss', 600);
    T('Kemudian mengeluarkan Cash Voucher', 540, 566, F.ss(600, 44), K.ink, 'center'); T('ikut nilai yang diperlukan.', 540, 616, F.ss(600, 44), K.ink, 'center');
    T('Cash Voucher =', 60, 782, F.ss(700, 60), K.ink); pillText(556, 672, 474, 148, 'red', JUM, 100, 'ss', 700);
    T('Voucher ini digunakan untuk', 540, 905, F.ss(600, 44), K.ink, 'center'); T('pembelian barang kemas ' + D.tulen + '.', 540, 954, F.ss(600, 44), K.ink, 'center');
    handle(D.handle);
  },
  // 6 — formula
  function (i) {
    counter(i, N);
    head({ top: 'red', a: 'Formula', b: 'pengiraan', wa: 470, wb: 600, y: 178, gap: 118 });
    card(96, 310, 886, 336, 30); T('GRAM GAP YANG DIJUAL =', 539, 392, F.ss(700, 44), K.ink, 'center');
    pillText(228, 418, 623, 82, 'cream', 'Jumlah keseluruhan', 44); hair(178, 900, 520);
    pill(195, 536, 689, 84, 'cream'); mixed([ink('Harga GAP semasa ', 44, 700), { t: '(Buy GAP)', f: F.pfi(400, 38), fill: K.ink }], 539, 592);
    card(93, 689, 893, 340, 30); pillText(121, 659, 413, 66, 'red', 'Nota penting', 44, 'pf', 800);
    [[769, ['Pengiraan adalah berdasarkan ', 'NILAI pembelian', ','], 'bukan berat barang kemas.'], [852, ['Lagi tinggi harga GAP semasa,'], 'lagi sedikit gram yang diperlukan.'], [934, ['Konsisten simpan, lebih banyak pilihan'], 'untuk masa depan anda!']].forEach(function (r) {
      checkCircle(176, r[0], 33); var p = r[1];
      if (p.length === 3) mixed([{ t: p[0], f: F.ss(500, 29), fill: K.ink }, { t: p[1], f: F.ss(800, 29), fill: K.maroon }, { t: p[2], f: F.ss(500, 29), fill: K.ink }], 238 + (tw(p[0] + p[1] + p[2], F.ss(500, 29)) + 20) / 2, r[0] - 6);
      else T(p[0], 238, r[0] - 6, F.ss(500, 29)); T(r[2], 238, r[0] + 30, F.ss(500, 29));
    });
    handle(D.handle);
  },
  // 7 — contoh pengiraan
  function (i) {
    counter(i, N);
    head({ a: 'Contoh', b: 'pengiraan', wa: 380, wb: 700, y: 172, gap: 136 });
    var ys = [[351, 470], [482, 604], [616, 736], [747, 868]];
    ys.forEach(function (r, k) { card(60, r[0], 960, r[1] - r[0], 24); numCircle(124, (r[0] + r[1]) / 2, 40, String(k + 1)); });
    T('Harga GAP semasa', 204, 404, F.ss(700, 36)); T(GAPD, 204, 442, F.ss(500, 29)); T('=', 580, 424, F.ss(700, 38)); pill(632, 370, 354, 80, 'cream'); T(GAPS, 809, 426, F.ss(800, 46), K.maroon, 'center');
    T('Gram GAP yang dijual =', 204, 556, F.ss(700, 30)); fraction(JUM, RM(D.gap), 636, 540, 30, 130); T('=', 722, 556, F.ss(700, 34)); pill(760, 508, 232, 70, 'cream'); T(G, 876, 556, F.ss(800, 42), K.maroon, 'center');
    var w3 = tw('Jadi, sistem akan memotong ', F.ss(600, 35)); T('Jadi, sistem akan memotong', 204, 664, F.ss(600, 35)); pill(204 + w3, 628, 232, 64, 'cream'); T(G, 204 + w3 + 116, 674, F.ss(800, 40), K.maroon, 'center'); T('daripada akaun GAP anda.', 204, 712, F.ss(600, 35));
    var w4 = tw('Dan mengeluarkan ', F.ss(600, 35)), cvw = tw('Cash Voucher ' + JUM, F.ss(800, 36)) + 44; T('Dan mengeluarkan', 204, 794, F.ss(600, 35)); pill(204 + w4, 756, cvw, 62, 'cream'); T('Cash Voucher ' + JUM, 204 + w4 + cvw / 2, 802, F.ss(800, 36), K.maroon, 'center'); T('untuk pembelian barang kemas ' + D.tulen + '.', 204, 842, F.ss(600, 35));
    X.save(); rr(60, 887, 960, 125, 34); X.fillStyle = gradY(887, 1012, [[0, '#A8101C'], [1, '#620411']]); X.fill(); X.strokeStyle = '#D9AE45'; X.lineWidth = 3.5; X.stroke(); X.restore();
    T('Belum ada akaun GAP?', 540, 945, F.pf(800, 52), goldFill(945, 52), 'center'); T('Daftar percuma dan mula menabung ikut kemampuan anda.', 540, 990, F.ss(500, 29), '#fff', 'center');
    handle(D.handle);
  },
];
