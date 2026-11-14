// carousel-palette VARIAN WARNA "Fresh Signal": hijau #006638 + lime #C6CE76 + koral #FF784F + cerah #F8F5EC. "5 Cara Graduan Bina Aset Walaupun Ada Hutang PTPTN" (7 slaid, 1080x1350).
var PALETTE = { bg: '#F8F5EC', ink: '#006638', blue: '#FF784F', orange: '#C6CE76', muted: '#2f4a3a' };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var GR = '#006638', CO = '#FF784F', LM = '#C6CE76';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5', numCol: '#D6DB9C',
      lines: [
        { p: [['Cara graduan', GR]], size: 150 },
        { p: [['bina aset', GR]], size: 150, lh: .9 },
        { p: [['walaupun ada', GR]], size: 130, lh: .92 },
        { p: [['hutang ', GR], ['PTPTN.', CO]], size: 130, lh: .92 },
      ],
      titleY: 520, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 01', title: [['JANGAN TUNGGU', GR], ['HUTANG HABIS', CO]], tagline: 'Hutang 10 tahun, takkan tunggu 10 tahun baru nak bina aset? *Semakin awal mula, semakin panjang masa* kekayaan membesar.', hl: LM, im: 'a', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 02', title: [['SEIMBANGKAN', GR], ['HUTANG & SIMPANAN', CO]], tagline: 'Bayar ansuran seperti dijadualkan, dan *asingkan simpanan sejak gaji pertama.* Walau RM100 sebulan, yang penting disiplin.', hl: LM, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 03', title: [['MANFAATKAN', GR], ['INSENTIF', CO]], tagline: 'Ambil tahu kempen diskaun atau *insentif bayaran balik rasmi.* Jangan terlepas peluang kurangkan beban hutang.', hl: LM, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 04', title: [['TABIAT BETUL', GR], ['DARI GAJI PERTAMA', CO]], tagline: 'Simpan sebelum berbelanja. *Kekayaan = Tabungan + Harta − Hutang.* Tabungan naik, hutang turun, setiap bulan.', hl: LM, im: 'd', fy: .3 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 05', title: [['SIMPAN EMAS', GR], ['MODAL KECIL', CO]], tagline: 'Akaun Emas GAP Public Gold serendah *RM100,* sedikit demi sedikit. Jangan sampai *abaikan bayaran hutang* atau keperluan asas.', hl: LM, im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'MULA KEDUA-DUA', l2: 'SEKARANG.', col: CO, follow: 'Follow @taufik.pg', sub: 'Jangan tunggu kaya baru nak menyimpan, jangan tunggu bebas hutang baru nak bina aset. *Mula sedikit demi sedikit.*', im: 'me', imH: 580, size: 98, strokes: [GR, LM, CO, '#D6DB9C', '#004d2b'] }); },
];
