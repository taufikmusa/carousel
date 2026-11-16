// carousel-palette VARIAN "Gold" (ivori + emas + coklat gelap). "5 Cara Kaki Travel Bina Kekayaan" (8 slaid, 1080x1350).
var PALETTE = { bg: '#FBF7EC', ink: '#1F1A10', blue: '#A8780F', orange: '#E9CF7A', hl: '#F3E3A5', ghost: '#F0E2B0', muted: '#3a3220', brush: ['#A8780F', '#E9CF7A', '#1F1A10', '#CDA24A', '#F3E3A5'] };
var N = 8;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var GD = '#A8780F', DK = '#1F1A10';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5',
      lines: [
        { p: [['Kaki travel,', DK]], size: 140 },
        { p: [['jelajah dunia', GD]], size: 122, lh: .9 },
        { p: [['sambil bina', DK]], size: 122, lh: .95 },
        { p: [['kekayaan.', GD]], size: 150, lh: .92 },
      ],
      titleY: 450, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 01', title: [['BAYAR DIRI SENDIRI', DK], ['DAHULU', GD]], tagline: 'Setiap kali dapat gaji, *asingkan simpanan dahulu* sebelum booking tiket. Kalau tunggu duit lebih, selalunya memang tak ada lebih. *Bina tabungan dahulu,* baru rancang percutian.', im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 02', title: [['TRAVEL IKUT', DK], ['KEMAMPUAN', GD]], tagline: 'Jangan paksa ke destinasi mahal semata-mata nak nampak hebat di media sosial. *Tak perlu berhutang kad kredit* untuk bercuti. Kenangan indah tak semestinya mahal.', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 03', title: [['MASA MUDA', DK], ['TAK KEKAL', GD]], tagline: 'Hari ini kita bertenaga menjelajah. Satu hari nanti *kita semakin berusia* dan tak mampu bekerja sekuat sekarang. Jangan habiskan semua pendapatan sehingga *lupa bekalan hari tua.*', im: 'c', fy: .3 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 04', title: [['BINA ASET,', DK], ['MASA DEPAN TENANG', GD]], tagline: 'Jangan hanya kumpul gambar kenangan. Kumpul juga aset: *bina tabungan, kurangkan hutang,* miliki aset ikut kemampuan. Bercuti lebih tenang tanpa risau komitmen bila pulang.', im: 'd', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 05', title: [['SIMPANAN EMAS', DK], ['SEBAGAI TABIAT', GD]], tagline: 'Asing *RM100 sebulan* untuk emas. Nampak kecil, tapi konsisten jadi *tabungan dalam gram emas.* Akaun Emas GAP serendah RM100. Buat ikut kemampuan, jangan ganggu keperluan asas dan dana kecemasan.', im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Formula guru saya', title: [['KEKAYAAN =', DK], ['TABUNGAN + HARTA − HUTANG', GD]], size: 78, tagline: 'Jangan ukur kejayaan dengan *berapa negara dilawati.* Lihat juga *tabungan, aset dan hutang yang berjaya dikurangkan.* Tak salah menikmati dunia ketika muda, tapi jangan susah ketika tua.', im: 'f' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'KUMPUL KENANGAN,', l2: 'KUMPUL ASET.', col: GD, follow: 'Follow @taufik.pg', sub: 'Biar hari ini ada *cerita untuk dikenang,* dan hari tua ada *harta untuk dinikmati.* Kredit formula: Tn. Mohd Zulkifli Shafie.', im: 'me', imH: 580, size: 92, strokes: ['#A8780F', '#E9CF7A', '#1F1A10', '#CDA24A', '#F3E3A5'] }); },
];
