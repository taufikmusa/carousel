// carousel-palette VARIAN WARNA "Gold Shining" (krim hangat + kuning emas terang + coklat gelap). "3 Posisi Dunia Emas" (7 slaid, 1080x1350).
var PALETTE = { bg: '#FFF8DC', ink: '#2A1D00', blue: '#C98A00', orange: '#FFD84D', hl: '#FFE680', ghost: '#FFE98A', muted: '#4a3a10', brush: ['#E8A900', '#FFD84D', '#2A1D00', '#FFEFA0', '#B87A00'] };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var DK = '#2A1D00', GD = '#C98A00';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '3',
      lines: [
        { p: [['Naik semangat,', DK]], size: 112 },
        { p: [['jatuh menyesal.', DK]], size: 112, lh: .92 },
        { p: [['Di mana', DK], [' silapnya?', GD]], size: 112, lh: .92 },
      ],
      titleY: 470, im: 'cover', imH: 400,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Punca', title: [['TAK FAHAM', DK], ['TUJUAN', GD]], tagline: 'Ada yang beli untuk *kumpul aset jangka panjang.* Ada yang beli sebab berharap *harga naik cepat* untuk dijual. Nampak sama, tapi *dua strategi berbeza.*', im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Posisi 01', title: [['PENYIMPAN', DK], ['EMAS', GD]], tagline: 'Matlamat: *kumpul gram* jangka panjang. Harga naik beli ikut kemampuan, harga turun dapat *lebih banyak gram.* Fokus pada *pertambahan gram,* bukan untung segera.', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Posisi 02', title: [['PELABUR', DK], ['EMAS', GD]], tagline: 'Beli rendah, jual tinggi. Perlu faham *pergerakan pasaran,* ada *strategi keluar* dan sedia tanggung risiko. Tersalah jangka masa, *mungkin rugi bila menjual.*', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Posisi 03', title: [['PENGEDAR', DK], ['EMAS', GD]], tagline: 'Bukan sekadar kumpul emas, tapi *bina perniagaan* dalam industri emas. Sebelah kaki penyimpan atau pelabur, sebelah lagi *bina pendapatan melalui pengedaran.*', im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Dah terbeli masa harga tinggi?', title: [['JANGAN PANIK,', DK], ['SEMAK TUJUAN', GD]], size: 124, tagline: 'Pastikan *bukan duit kecemasan* atau duit komitmen. Kalau simpanan jangka panjang dan kewangan kukuh, *tak perlu terburu jual.* Jangan tambah belian semata nak turunkan purata.', im: 'f', fy: .55 }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'BUKAN EMAS YANG', l2: 'KAYAKAN KITA.', col: GD, follow: 'Follow @taufik.pg', sub: 'Tapi *ilmu* tentang pengurusan wang dan emas. Jangan sekadar belajar cara membeli, belajar juga *cara menyimpan, mengurus dan merancang.* Jom simpan emas!', im: 'me', imH: 580, size: 86, strokes: ['#E8A900', '#FFD84D', '#2A1D00', '#FFEFA0', '#B87A00'] }); },
];
