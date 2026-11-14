// carousel-palette VARIAN WARNA "Quiet Luxury": merah tua #630002 + krim #F4EDE3 + emas #BDA174 + gelap #222022. "Auto Debit Emas — tips Tuan Syukor Hashim" (8 slaid, 1080x1350).
var PALETTE = { bg: '#F4EDE3', ink: '#222022', blue: '#630002', orange: '#BDA174', muted: '#3b3639' };
var N = 8;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var DK = '#222022', RD = '#630002', GD = '#BDA174';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '12', numCol: '#E4D7BE', numSize: 1100, numX: 120, numY: 1050,
      lines: [
        { p: [['Tips simpan', DK]], size: 140 },
        { p: [['emas dari', DK]], size: 140, lh: .9 },
        { p: [['Mahaguru', RD]], size: 140, lh: .9 },
        { p: [['Syukor Hashim.', RD]], size: 104, lh: .98 },
      ],
      titleY: 520, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tip 01', title: [['SIMPANAN', DK], ['JANGKA PANJANG', RD]], tagline: 'Jangan simpan emas dengan harapan *untung dalam masa singkat.* Emas lebih sesuai untuk *tempoh yang panjang.*', hl: GD, im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tip 02', title: [['TURUN NAIK', DK], ['SEDIAKAN MENTAL', RD]], tagline: 'Ada masa naik, turun, dan *sideway.* Jangan terlalu gembira bila naik, *jangan panik* bila turun.', hl: GD, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tip 03', title: [['BERDISIPLIN', DK], ['SETIAP BULAN', RD]], tagline: 'Tetapkan sasaran beli emas setiap bulan atau minggu. *Konsisten lebih penting* daripada cari masa paling sesuai.', hl: GD, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tip 04', title: [['AUTOMASIKAN', DK], ['SIMPANAN', RD]], tagline: 'Disiplin + sistem automasi = strategi lebih kuat. Caranya: *Auto Debit* untuk akaun emas GAP Public Gold.', hl: GD, im: 'f', fy: .35 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tip 05', title: [['KENALI', DK], ['KELEMAHAN DIRI', RD]], tagline: 'Emosi, lupa, letih, tergoda guna duit simpanan. Bila automatik, *tak perlu bergantung pada mood* setiap bulan.', hl: GD, im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tip 06', title: [['AUTO DEBIT', DK], ['MINIMUM RM100', RD]], tagline: '*Tiada had maksimum,* tempoh 1 hingga 5 tahun. Saya sendiri tetapkan Auto Debit *selama lima tahun.* Gram bertambah, sedikit demi sedikit.', hl: GD, im: 'd', fy: .6 }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'DISIPLIN +', l2: 'AUTOMASI.', col: RD, follow: 'Follow @taufik.pg', sub: 'Masalah kita bukan tak tahu pentingnya menyimpan, tapi tak ada sistem. *Bina sistem,* jangan bergantung semangat. Terima kasih Tuan Syukor Hashim.', im: 'me', imH: 560, size: 118, strokes: [RD, GD, DK, '#E4D7BE', '#8a1a1c'] }); },
];
