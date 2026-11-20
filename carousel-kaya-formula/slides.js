// carousel-palette VARIAN WARNA "Gold" (ivori + emas + coklat gelap). "Formula Kaya" (7 slaid, 1080x1350).
var PALETTE = { bg:'#FBF7EC', ink:'#1F1A10', blue:'#A8780F', orange:'#E9CF7A', hl:'#F3E3A5', ghost:'#F0E2B0', muted:'#3a3220', brush:['#A8780F','#E9CF7A','#1F1A10','#CDA24A','#F3E3A5'] };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var DK = '#1F1A10', GD = '#A8780F';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '3',
      lines: [
        { p: [['Formula kaya', DK]], size: 108 },
        { p: [['yang kita wajib', DK]], size: 108, lh: .92 },
        { p: [['faham.', GD]], size: 150, lh: .9 },
        { p: [['KAYA = TABUNGAN + HARTA − HUTANG', DK]], size: 40, lh: 1.5 },
      ],
      titleY: 470, im: 'cover', imH: 380,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Punca 01', title: [['DIDIDIK', DK], ['BERHUTANG', GD]], tagline: 'Ramai susah kaya bukan sebab gaji kecil semata-mata, tapi sebab *sejak mula bekerja* kita sudah didik untuk berhutang. Tamat belajar, guru saya sudah ada *tiga komitmen hutang.*', im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Formula', title: [['KAYA = TABUNGAN', DK], ['+ HARTA − HUTANG', GD]], size: 112, tagline: 'Semak 3 perkara: *tabungan bertambah* setiap bulan? *Harta bertambah* setiap tahun? *Hutang berkurang?* Kalau ketiga-tiganya betul, kedudukan kewangan makin kukuh.', im: 'b', fy: .6 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perangkap', title: [['PINJAMAN', DK], ['MAKSIMUM', GD]], tagline: 'Kereta paling mahal yang layak, rumah paling jauh yang mampu. Sewa RM800 dekat pejabat jadi *RM2,000 sebulan.* Gaji masuk terus dibahagi bank, *tiada financial buffer.*', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Ukuran', title: [['BUKAN KERETA', DK], ['ATAU RUMAH', GD]], tagline: 'Ukur dengan *tabungan, harta* dan *hutang yang berjaya dikurangkan.* Guru saya capai *sifar hutang pada usia 27,* kemudian bina tabungan dengan emas.', im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Mula Sekarang', title: [['SIMPAN', DK], ['APA YANG MAMPU', GD]], tagline: 'Boleh RM100, simpan RM100. *Akaun Emas GAP Public Gold bermula RM100.* Jangan lupa sediakan *dana kecemasan tunai* dan urus hutang dengan baik.', im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'BEKERJA UNTUK', l2: 'BINA KEKAYAAN.', col: GD, follow: 'Follow @taufik.pg', sub: 'Kalau gaji naik, hutang pun naik, kita akan *sibuk membayar hutang* selamanya. Jangan sekadar bekerja untuk *nampak kaya.*', im: 'me', imH: 580, size: 84, strokes: ['#A8780F','#E9CF7A','#1F1A10','#CDA24A','#F3E3A5'] }); },
];
