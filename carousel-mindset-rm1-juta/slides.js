// carousel-palette VARIAN "Quiet Luxury". "Mindset Paling Power Untuk RM1 Juta Pertama" (8 slaid, 1080x1350).
var PALETTE = { bg: '#F4EDE3', ink: '#222022', blue: '#630002', orange: '#BDA174', muted: '#3b3639' };
var N = 8;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var RD = '#630002', GD = '#BDA174', DK = '#222022', HL = '#E4D7BE';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '3', numCol: '#E4D7BE',
      lines: [
        { p: [['Mindset paling', DK]], size: 112 },
        { p: [['power', RD]], size: 160, lh: 1.0 },
        { p: [['untuk RM1 juta', DK]], size: 104, lh: 1.0 },
        { p: [['pertama.', RD]], size: 104, lh: .95 },
      ],
      titleY: 450, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Jawapan guru saya', title: [['TUKAR OTAK', DK], ['DAHULU!', RD]], tagline: 'Belajar berfikir seperti orang yang *sudah mencapai* impian kita. Pinjam cara fikir orang berjaya. *Otak lama, simpan dalam peti ais dulu!*', hl: HL, im: 'a', fy: .3 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 01', title: [['JELASKAN APA', DK], ['NAK DICAPAI', RD]], tagline: 'Jangan sekadar cakap nak kaya. *Tetapkan sasaran jelas:* RM1 juta pertama? Bebas hutang? Pendapatan pasif? *Tulis matlamat,* dan jangan terlalu awal menghukum impian sendiri.', hl: HL, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 02', title: [['BACA BUKU ORANG', DK], ['YANG BERJAYA', RD]], tagline: 'Ilmu dan strategi mereka sudah dikongsi dalam buku, jadi tak perlu ulang semua kesilapan. Tapi *pilih penulis* yang ada *rekod pencapaian boleh disahkan.*', hl: HL, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 03', title: [['BERADA DALAM', DK], ['CIRCLE BERJAYA', RD]], tagline: 'Belajar cara mereka fikir, urus masa dan wang. *Jangan datang hanya untuk meminta,* tapi datang untuk *belajar dan memberi manfaat.* Pertolongan kecil pun bermakna.', hl: HL, im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kesannya', title: [['PERSEKITARAN', DK], ['UBAH TABIAT', RD]], tagline: 'Kita mula *bercakap tentang perkara berbeza,* nampak peluang yang dulu tak nampak, dan akhirnya *keputusan kita pun berubah.*', hl: HL, im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pesanan mentor', title: [['DIRI YANG', DK], ['BAHARU', RD]], tagline: '“Setiap tahap dalam hidup kita memerlukan *diri kita yang baharu.*” Bina *ilmu, kemahiran dan disiplin* untuk menguruskan RM1 juta itu. Cara fikir, ilmu dan tindakan sama = hasil sama.', hl: HL, im: 'f' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'UBAH DIRI', l2: 'DAHULU.', col: RD, follow: 'Follow @taufik.pg', sub: 'Insya-Allah, perubahan besar bermula daripada *perubahan dalam diri sendiri.* Perkongsian guru saya, Tn. Mohd Zulkifli Shafie.', im: 'me', imH: 580, size: 150, strokes: [RD, GD, DK, '#E4D7BE', '#8a1a1c'] }); },
];
