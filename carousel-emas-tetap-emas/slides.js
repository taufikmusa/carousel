// carousel-palette VARIAN WARNA "Quiet Luxury": merah tua + emas. "Harga emas jatuh, ia tetap emas" (7 slaid, 1080x1350).
var PALETTE = { bg: '#F4EDE3', ink: '#222022', blue: '#630002', orange: '#BDA174', muted: '#3b3639' };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var DK = '#222022', RD = '#630002', GD = '#BDA174';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '1', numCol: '#E4D7BE',
      lines: [
        { p: [['Harga emas jatuh', DK]], size: 100 },
        { p: [['TAK SAMA', RD]], size: 150, lh: .9 },
        { p: [['dengan saham', DK]], size: 100, lh: .95 },
        { p: [['jatuh.', DK]], size: 100, lh: .92 },
      ],
      titleY: 430, im: 'cover', imH: 400,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pesan guru', title: [['EMAS JATUH,', DK], ['TETAP EMAS', RD]], tagline: '*"Duit bila nilainya jatuh, ia adalah kertas. Emas bila harganya jatuh, ia tetap emas."* Berat dan gram *tak berkurang.* Perlukan tunai? *Pajak di Ar-Rahnu,* tebus bila kewangan mengizinkan.', hl: GD, im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Emas vs saham', title: [['SAHAM JATUH,', DK], ['NILAI SUSUT', RD]], tagline: 'Bila harga saham jatuh, *nilai pegangan turut menyusut* dan kena nilai semula prestasi dan risiko syarikat. Kita beli emas untuk *kumpul gram,* bukan main turun naik harga.', hl: GD, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Bila masa jual?', title: [['3 KEADAAN', DK], ['UTAMA', RD]], tagline: 'Satu, *kecemasan,* bila dana 3 bulan gaji sudah habis. Dua, *capai matlamat,* contohnya haji atau pendidikan anak. Tiga, *aset lebih produktif* seperti rumah sewa, tanah atau perniagaan, dikira dengan teliti.', hl: GD, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: '16 tahun guru menabung', title: [['200 GRAM', DK], ['KE BEBERAPA KG', RD]], tagline: 'Mula *200 gram pada 2010.* Perlu wang, *pajak.* Kewangan mengizinkan, *tebus.* Ada lebihan, *tambah lagi.* Kitaran sama selama 16 tahun, kini *beberapa kilogram.*', hl: GD, im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Emas ialah alat', title: [['BINA KEKAYAAN,', DK], ['BUKAN MENEKA', RD]], tagline: '*Tambah tabungan. Kurangkan hutang. Bina harta* yang menjana pendapatan. Bukan tempat leka main *buy low, sell high.* #1Keluarga1KiloEmas', hl: GD, im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'BUKAN EMAS YANG', l2: 'KAYAKAN KITA.', col: RD, follow: 'Follow @taufik.pg', sub: 'Tapi *ilmu* tentang pengurusan wang dan emas. Emas hanyalah alat, matlamatnya *kekayaan yang kukuh* untuk keluarga. Dulu ragu kini tahu, *jom simpan emas!*', im: 'me', imH: 560, size: 84, strokes: [RD, GD, DK, '#E4D7BE', '#8a1a1c'] }); },
];
