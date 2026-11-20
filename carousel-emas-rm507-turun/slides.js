// carousel-palette VARIAN WARNA "Quiet Luxury": merah tua + emas. "Harga emas turun RM507" (7 slaid, 1080x1350). Data: harga GAP 20 Nov 2026.
var PALETTE = { bg: '#F4EDE3', ink: '#222022', blue: '#630002', orange: '#BDA174', muted: '#3b3639' };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var DK = '#222022', RD = '#630002', GD = '#BDA174';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5', numCol: '#E4D7BE',
      lines: [
        { p: [['Harga emas turun', DK]], size: 100 },
        { p: [['RM507', RD]], size: 215, lh: .86 },
        { p: [['segram. Takut, atau', DK]], size: 92, lh: .95 },
        { p: [['tersenyum?', RD]], size: 92, lh: .92 },
      ],
      titleY: 450, im: 'cover', imH: 460,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 01', title: [['PENYIMPAN EMAS', DK], ['BUKAN PELABUR', RD]], tagline: 'Pelabur cari harga terendah untuk untung. *Penyimpan mahu kumpul gram* sebanyak mungkin. Bila harga turun, *peluang tambah koleksi,* bukan panik.', hl: GD, im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 02', title: [['GUNA STRATEGI', DK], ['DCA', RD]], tagline: 'Tetapkan *bajet bulanan,* RM100, RM300 atau RM500. Harga rendah dapat lebih gram. Contoh harga GAP 20 Nov 2026: *RM100 = 0.1972 gram.*', hl: GD, im: 'b', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 03', title: [['JANGAN TUNGGU', DK], ['HARGA TERENDAH', RD]], tagline: 'Guru: *"Harga emas naik kita beli, harga turun kita beli lebih banyak!"* Tiada siapa tahu dasar sebenar. Terlalu menunggu, *akhirnya tak mula langsung.*', hl: GD, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 04', title: [['SIMPAN EMAS', DK], ['MESTI ADA MATLAMAT', RD]], size: 120, tagline: 'Contohnya *10 gram* simpanan pertama, *50 gram* dana keluarga, *100 gram* persediaan masa depan, dana pendidikan anak atau persaraan.', hl: GD, im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 05', title: [['INGAT TUJUAN', DK], ['AKHIR MENYIMPAN', RD]], tagline: 'Bila gram sudah cukup, boleh dicairkan untuk *beli tanah, bina rumah sewa, langsai hutang* atau biaya pendidikan anak. Yang penting *apa yang kita bina.*', hl: GD, im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'KURA-KURA YANG', l2: 'TAK BERHENTI.', col: RD, follow: 'Follow @taufik.pg', sub: 'Jangan sibuk meneka harga emas, *sibukkan diri membina tabungan.* GAP Public Gold bermula *RM100.* Dulu ragu kini tahu, *jom simpan emas!*', im: 'me', imH: 560, size: 84, strokes: [RD, GD, DK, '#E4D7BE', '#8a1a1c'] }); },
];
