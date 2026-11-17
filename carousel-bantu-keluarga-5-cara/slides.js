// carousel-palette VARIAN "Quiet Luxury". "5 Cara Bantu Keluarga Tanpa Korbankan Masa Depan" (7 slaid, 1080x1350).
var PALETTE = { bg: '#F4EDE3', ink: '#222022', blue: '#630002', orange: '#BDA174', muted: '#3b3639' };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var RD = '#630002', GD = '#BDA174', DK = '#222022', HL = '#E4D7BE';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5', numCol: '#E4D7BE',
      lines: [
        { p: [['Cara bantu', DK]], size: 150 },
        { p: [['keluarga', RD]], size: 160, lh: .9 },
        { p: [['tanpa korbankan', DK]], size: 104, lh: .95 },
        { p: [['masa depan sendiri.', RD]], size: 90, lh: 1.0 },
      ],
      titleY: 450, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 01', title: [['TETAPKAN HAD', DK], ['KEMAMPUAN', RD]], tagline: 'Bantu *ikut kemampuan, bukan ikut desakan.* Jangan sampai berhutang atau abaikan komitmen sendiri semata-mata nak penuhi permintaan orang lain.', hl: HL, im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 02', title: [['KUKUHKAN', DK], ['KEWANGAN SENDIRI', RD]], tagline: 'Kita tak mampu selamatkan orang lemas *kalau sendiri belum pandai berenang.* Pastikan *keperluan asas, komitmen dan simpanan* sendiri terjaga sebelum menghulur bantuan.', hl: HL, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 03', title: [['BANTU BERDIKARI,', DK], ['BUKAN SEKADAR DUIT', RD]], tagline: 'Kalau hanya hulur tunai tanpa selesaikan punca, *masalah sama berulang.* Bantu mereka *cari jalan keluar, belajar urus kewangan* dan bina pendapatan sendiri.', hl: HL, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 04', title: [['ASINGKAN SIMPANAN', DK], ['SEBELUM MEMBANTU', RD]], tagline: 'Jangan tunggu duit lebih. *Tetapkan bahagian simpanan sebaik terima pendapatan,* kemudian agihkan untuk komitmen dan keluarga. Jangan korbankan masa depan setiap kali orang lain perlu bantuan.', hl: HL, im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 05', title: [['BINA KEKAYAAN,', DK], ['LEBIH RAMAI DIBANTU', RD]], tagline: 'Fikir juga bagaimana bina *kedudukan kewangan lebih kukuh* supaya mampu membantu dalam jangka panjang. Itulah sebabnya kita perlu *tabungan, aset dan perancangan kewangan* yang baik.', hl: HL, im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'TEMPAT KELUARGA', l2: 'BERSANDAR.', col: RD, follow: 'Follow @taufik.pg', sub: 'Kukuhkan kewangan sendiri supaya kita jadi *tempat keluarga bersandar,* bukan sama-sama tumbang apabila diuji.', im: 'me', imH: 580, size: 96, strokes: [RD, GD, DK, '#E4D7BE', '#8a1a1c'] }); },
];
