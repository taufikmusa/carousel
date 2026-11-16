// carousel-palette VARIAN "Lime Cream & Vintage Grape" (#DDEA78 / #433455). "5 Cara Tukar Side Income Jadi Kekayaan" (8 slaid, 1080x1350).
var PALETTE = { bg: '#DDEA78', ink: '#433455', blue: '#6B4F8F', orange: '#F2F8B8', hl: '#F2F8B8', ghost: '#CBDB5C', muted: '#4e4062', brush: ['#433455', '#F2F8B8', '#6B4F8F', '#9A86B5', '#2B2138'] };
var N = 8;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var GP = '#433455', VL = '#6B4F8F', DK = '#2B2138';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5',
      lines: [
        { p: [['Cara tukar', GP]], size: 150 },
        { p: [['side income', VL]], size: 130, lh: .9 },
        { p: [['jadi kekayaan,', GP]], size: 106, lh: .95 },
        { p: [['bukan duit tambahan.', VL]], size: 82, lh: 1.0 },
      ],
      titleY: 470, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 01', title: [['ASINGKAN DUIT', GP], ['SIDE INCOME', VL]], tagline: 'Jangan campur semua dalam satu akaun. Asingkan supaya nampak jelas *hasil sebenar* usaha tambahan, dan mudah urus *untung serta belanja.*', im: 'a', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 02', title: [['MATLAMAT UNTUK', GP], ['SETIAP RINGGIT', VL]], tagline: 'Tetapkan bahagian untuk *modal pusingan, belanja bisnes dan simpanan.* Paling penting, satu bahagian khas untuk *membina aset.* Jangan tunggu duit lebih baru nak simpan.', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 03', title: [['JANGAN NAIK', GP], ['GAYA HIDUP', VL]], tagline: 'Dapat duit lebih, terus tukar telefon dan tambah komitmen? Pendapatan naik, *hutang dan belanja pun naik.* Belajar *kekalkan gaya hidup* walaupun pendapatan meningkat.', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 04', title: [['KONSISTEN,', GP], ['BUKAN SEKALI-SEKALA', VL]], tagline: 'Tak perlu tunggu untung beribu. Mampu asing *RM100 seminggu?* Mulakan dengan RM100, tambah bila mampu. Yang penting *tabiat menyimpan secara konsisten.*', im: 'd', fy: .45 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 05', title: [['TUKAR SEBAHAGIAN', GP], ['KEPADA ASET', VL]], tagline: 'Jangan biar semua hasil kekal dalam wang yang mudah dibelanjakan. Antaranya *emas fizikal* jangka panjang: Akaun Emas GAP bermula *serendah RM100.* Emas bukan jalan pintas jadi kaya.', im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Formula guru saya', title: [['KEKAYAAN =', GP], ['TABUNGAN + HARTA − HUTANG', VL]], size: 78, tagline: 'Jangan sibuk tambah pendapatan sahaja. Pastikan *tabungan bertambah, aset berkembang* dan *hutang berkurang.* Yang menentukan kekayaan ialah *berapa banyak hasil kerja berjaya disimpan* dan ditukar jadi aset.', im: 'f' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'BIAR PENAT', l2: 'JADI BEKALAN.', col: VL, follow: 'Follow @taufik.pg', sub: 'Penat lelah hari ini jadi *bekalan kekayaan* masa depan. Kredit formula: Tn. Mohd Zulkifli Shafie. Moga bermanfaat.', im: 'me', imH: 580, size: 120, strokes: ['#433455', '#F2F8B8', '#6B4F8F', '#9A86B5', '#2B2138'] }); },
];
