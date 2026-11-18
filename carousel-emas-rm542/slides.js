// carousel-palette VARIAN "Quiet Luxury". "Harga emas GAP RM542/g (18 Nov 2026)" guna tangkapan skrin Taufik (fit). 9 slaid, 1080x1350.
var PALETTE = { bg: '#F4EDE3', ink: '#222022', blue: '#630002', orange: '#BDA174', muted: '#3b3639' };
var N = 9;
var ASSETS = { cover: 'cover.jpg', harga: 'harga.jpg', g1: 'graf1.jpg', g5: 'graf5.jpg', goal: 'goal.jpg', a: 'a.jpg', cal: 'cal.jpg', b: 'b.jpg', me: 'thumbs-up.png' };
var RD = '#630002', GD = '#BDA174', DK = '#222022', HL = '#E4D7BE';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '542', numCol: '#E4D7BE', numSize: 560, numX: 80, numY: 1140,
      lines: [
        { p: [['Emas GAP turun', DK]], size: 112 },
        { p: [['RM542/g', RD]], size: 170, lh: .9 },
        { p: [['Antara terendah 2026.', DK]], size: 66, lh: 1.05 },
      ],
      titleY: 430, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Harga GAP, 18 Nov 2026', title: [['RM100 =', DK], ['0.1845 GRAM', RD]], tagline: 'Awal tahun harga GAP pernah *RM764/gram.* Hari ini *RM542 = 1 gram.*', hl: HL, im: 'harga', fit: true }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Graf 1 tahun (USD/oz)', title: [['TURUN 5.32%', DK], ['SETAHUN', RD]], tagline: 'Tertinggi *USD5,327.65,* terendah *USD3,849.66.* Sumber: goldprice.org, 17 Nov 2026.', hl: HL, im: 'g1', fit: true }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Graf 5 tahun (USD/oz)', title: [['NAIK 107.02%', DK], ['LIMA TAHUN', RD]], tagline: 'Dari terendah *USD1,626.86* ke penutup *USD3,849.66.* Prestasi lalu bukan jaminan masa depan.', hl: HL, im: 'g5', fit: true }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Soalan penting', title: [['APA MATLAMAT', DK], ['SIMPAN EMAS?', RD]], tagline: 'Tengok harga naik setiap hari, atau *capai matlamat kewangan?* Contoh: *50 gram* dana pendidikan anak, *100 gram* persaraan, *200 gram* simpanan masa depan keluarga.', hl: HL, im: 'goal' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Fikir dalam gram', title: [['GRAM TAK BERUBAH', DK], ['BILA HARGA TURUN', RD]], tagline: 'Ada *10 gram* hari ini, esok harga turun pun masih *10 gram.* Untuk simpanan lebih dua tahun, fokus utama ialah *menambah gram secara konsisten.*', hl: HL, im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'GAP Auto-Debit', title: [['DCA: WANG SAMA,', DK], ['GRAM LEBIH', RD]], tagline: 'Tetapkan jumlah bulanan ikut kemampuan, wang ditukar jadi gram *automatik.* Harga rendah, *lebih banyak gram;* harga tinggi, lebih sedikit. Tak perlu teka harga terendah.', hl: HL, im: 'cal' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pesan guru emas saya', title: [['JANGAN BAZIR', DK], ['EMOSI PANTAU GRAF', RD]], tagline: '“Yang penting, *gram emas bertambah setiap bulan.*” Kekayaan dibina dengan *ilmu, disiplin dan konsistensi,* bukan meneka harga paling tepat. Tn Mohd Zulkifli Shafie.', hl: HL, im: 'b' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'MATLAMAT DALAM', l2: 'GRAM.', col: RD, follow: 'Follow @taufik.pg', sub: 'Simpan secara konsisten, beri masa. Nak belajar mula melalui *GAP Auto-Debit?* PM saya, saya terangkan dari A sampai Z.', im: 'me', imH: 580, size: 100, strokes: [RD, GD, DK, '#E4D7BE', '#8a1a1c'] }); },
];
