// carousel-palette DEFAULT (biru lime). "5 Cara Pekerja Kontrak Bina Jaring Keselamatan Kewangan" (8 slaid, 1080x1350).
var N = 8;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', g: 'g.jpg', me: 'thumbs-up.png' };
var BL = '#3040FF', DK = '#10121B';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5',
      lines: [
        { p: [['Cara pekerja', DK]], size: 120 },
        { p: [['kontrak', BL]], size: 170, lh: .9 },
        { p: [['bina jaring', DK]], size: 120, lh: .95 },
        { p: [['keselamatan.', BL]], size: 112, lh: .95 },
      ],
      titleY: 440, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cabaran kontrak', title: [['BILA KONTRAK', DK], ['TAMAT?', BL]], tagline: 'Hari ini ada kerja, ada pendapatan. Tapi *belum tentu ada kontrak baharu* menyusul. Jangan bergantung sepenuhnya kepada majikan untuk masa depan kewangan: *bina benteng sendiri.*', im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Langkah 01', title: [['BINA DANA', DK], ['KECEMASAN', BL]], tagline: 'Usahakan simpanan *6 hingga 12 bulan perbelanjaan.* Kalau kontrak tak disambung atau berehat sementara cari kerja baharu, *masih ada wang* meneruskan kehidupan.', im: 'f' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Langkah 02', title: [['JANGAN HARAP', DK], ['FAEDAH MAJIKAN', BL]], tagline: 'Semak *perlindungan perubatan, caruman persaraan* dan manfaat pekerjaan. Kalau terhad, *ada perancangan sendiri.* Jangan tunggu kecemasan baru nak fikir.', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Langkah 03', title: [['SIMPAN LEBIH', DK], ['BILA GAJI MASUK', BL]], tagline: 'Waktu kontrak berjalan ialah *peluang terbaik* mengukuhkan kewangan. Jangan habiskan untuk gaya hidup: *asingkan sebahagian* untuk tabungan dan aset masa depan.', im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Langkah 04', title: [['BINA ASET', DK], ['TANPA MAJIKAN', BL]], tagline: 'Jangan hanya kumpul duit dalam bank. Belajar miliki aset seperti *emas fizikal.* Emas itu milik kita, *tak kira kerja tetap, kontrak, freelance* atau sedang cari kerja.', im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Langkah 05', title: [['EMAS: TABUNGAN', DK], ['JANGKA PANJANG', BL]], tagline: 'Akaun Emas GAP Public Gold bermula *serendah RM100,* tambah bila ada lebihan, *tiada potongan bulanan wajib.* Boleh dikeluarkan sebagai emas fizikal ikut syarat. Emas *bukan pengganti dana kecemasan tunai.*', im: 'g' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'KONTRAK ADA TAMAT,', l2: 'KEKAYAAN TIDAK.', col: BL, follow: 'Follow @taufik.pg', sub: 'Bekerjalah untuk *membina tabungan, mengumpul aset* dan menyediakan masa depan lebih terjamin, bukan sekadar mendapat gaji.', im: 'me', imH: 580, size: 84 }); },
];
