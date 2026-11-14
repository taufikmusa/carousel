// carousel-gradient — "Graf Setahun vs Lima Tahun" (putih + gradien biru/ungu/oren, teks minimal, 8 slaid, 1080x1080 = 1:1).
// Rujukan gaya: references/rujukan (analisis industri "MetaNext"). Tag atas-kiri, lencana @taufik.pg atas-kanan, footer + "i/N" automatik.
// Potret Taufik (outline putih, img/me.png) HANYA slaid terakhir. Carta = ILUSTRASI (bukan data sebenar) — sentiasa letak nota.
var N = 8;
var ASSETS = { me: 'me.png', emas: 'emas.jpg' };
var D = { nama: 'Taufik Musa' };

var SLIDES = [
  // 1 — cover
  function (i) {
    photoFade(IMG.emas, 300, 520, 780, 560, { fade: .45, left: .4 });
    tag('ANALISIS HARGA EMAS');
    title(['KALAU TENGOK', 'GRAF EMAS...'], 290, 112);
    pill('SETAHUN vs 5 TAHUN', 430, 72, { x: M - 18 });
    sub(['Dua graf, dua cerita', 'yang berbeza.'], 650, 42);
  },
  // 2 — graf setahun
  function (i) {
    tag('GRAF 1: SETAHUN');
    title(['Emas Bukan', 'Sentiasa Naik'], 268, 90);
    pill('-4.72%', 400, 112); T('setahun', 560, 515, F.hi(40), INK);
    chart(M, 590, 600, 300, [[0, .15], [.18, .02], [.35, .2], [.55, .35], [.75, .62], [1, .85]], PNK, ORG); note('ILUSTRASI, bukan data sebenar', M + 24, 920);
    card(690, 590, 330, 140, {}); T('Tertinggi', 720, 640, F.b(24), MUTE); T('USD5,327', 720, 690, F.h(40), INK); T('seauns', 720, 716, F.b(22), MUTE);
    card(690, 750, 330, 140, {}); T('12 Nov 2026', 720, 800, F.b(24), MUTE); T('USD3,992', 720, 850, F.h(40), INK); T('seauns', 720, 876, F.b(22), MUTE);
  },
  // 3 — graf lima tahun
  function (i) {
    tag('GRAF 2: LIMA TAHUN');
    title(['Jangan Nilai Satu', 'Tahun Sahaja'], 268, 90);
    pill('+114.05%', 400, 112); T('5 tahun', 650, 515, F.hi(40), INK);
    chart(M, 590, 600, 300, [[0, .92], [.2, .8], [.4, .62], [.55, .66], [.75, .3], [1, .08]], BLU, PUR); note('ILUSTRASI, bukan data sebenar', M + 24, 920);
    card(690, 590, 330, 300, {}); tile(855, 680, 96, 'up', 'a'); T('Harga emas', 855, 770, F.b(26), MUTE, 'center'); T('lebih 2x', 855, 822, F.h(46), INK, 'center'); T('ganda', 855, 862, F.h(34), '#6B4A3F', 'center');
  },
  // 4 — DCA
  function (i) {
    tag('STRATEGI DCA');
    title(['Harga Turun,', 'Beli Lebih Banyak'], 268, 90);
    pill('RM100 / BULAN', 400, 78);
    card(M, 560, 462, 250, {}); tile(M + 90, 650, 100, 'down', 'b'); T('Harga turun', M + 170, 640, F.b(26), MUTE); T('Lebih gram', M + 170, 690, F.h(36), INK); T('untuk RM100 sama', M + 170, 722, F.b(24), MUTE);
    card(556, 560, 462, 250, {}); tile(556 + 90, 650, 100, 'up', 'a'); T('Harga naik', 556 + 170, 640, F.b(26), MUTE); T('Gram dah ada', 556 + 170, 690, F.h(34), INK); T('dikumpul awal', 556 + 170, 722, F.b(24), MUTE);
    sub(['“Harga emas turun kita beli', 'lebih banyak!”'], 880, 34); T('Tn Mohd Zulkifli Shafie', M + 52, 975, F.b(24), MUTE);
  },
  // 5 — mula
  function (i) {
    tag('BELUM PERNAH SIMPAN?');
    title(['Tak Perlu Tunggu', 'Harga Terendah'], 268, 90);
    pill('MULA RM100', 400, 100);
    [['target', 'a', 'Tetapkan', 'jumlah mampu'], ['coins', 'b', 'Mula', 'GAP Public Gold'], ['gold', 'c', 'Tambah gram', 'sebulan sekali']].forEach(function (r, k) { var x = M + k * 322; card(x, 590, 300, 330, {}); tile(x + 150, 695, 120, r[0], r[1]); T(r[2], x + 150, 810, F.h(32), INK, 'center'); T(r[3], x + 150, 852, F.b(24), MUTE, 'center'); });
  },
  // 6 — jangka panjang
  function (i) {
    tag('KESILAPAN BIASA');
    title(['Jangka Panjang,', 'Bukan Harian'], 268, 90);
    card(M, 440, 462, 400, {}); tile(M + 80, 540, 100, 'cross', 'b'); T('Semak harga', M + 40, 690, F.h(36), INK); T('tiap jam', M + 40, 734, F.h(36), INK); T('Emosi terganggu', M + 40, 790, F.b(26), MUTE);
    card(556, 440, 462, 400, { stroke: INK }); tile(556 + 80, 540, 100, 'check', 'a'); T('Tambah gram', 556 + 40, 690, F.h(36), INK); T('setiap bulan', 556 + 40, 734, F.h(36), INK); T('Simpanan bertambah', 556 + 40, 790, F.b(26), MUTE);
    sub(['Guna duit lebihan,', 'bukan duit kecemasan.'], 915, 38);
  },
  // 7 — kesimpulan
  function (i) {
    tag('KESIMPULAN');
    title(['Lihat Perjalanan', 'Yang Panjang'], 268, 90);
    pill('FOKUS TAMBAH GRAM', 400, 62, { x: M - 18 });
    card(M, 560, 956, 230, { fill: CR, stroke: INK }); T('“', M + 30, 690, F.h(120), '#8A6A55');
    para('Jangan bazirkan emosi memantau graf setiap 20 minit. Yang penting, *gram emas bertambah* setiap bulan.', M + 120, 630, 780, 32);
    T('Tn Mohd Zulkifli Shafie', M + 120, 770, F.b(22), MUTE);
    sub(['Prestasi lalu bukan jaminan', 'harga terus naik.'], 860, 32);
  },
  // 8 — CTA + potret
  function (i) {
    tag('JOM MULA');
    title(['Dulu Ragu,'], 268, 100); pill('KINI TAHU!', 310, 100);
    para('Orang yang menunggu harga sempurna mungkin terus menunggu. Mula bina disiplin.', M, 560, 560, 32);
    pill('JOM SIMPAN EMAS', 700, 54, { x: M - 18 });
    cutoutBC(IMG.me, 830, 1010, 640);
    T(D.nama, M, 860, F.h(40), INK); T('Dealer Public Gold', M, 898, F.b(26), MUTE);
  },
];
