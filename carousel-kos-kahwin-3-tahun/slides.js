// carousel-palette VARIAN WARNA "Plum & Rose": #462B52 / #A77B9E / #E7C9D2 / #F5EEE8. "5 Sebab Kos Kahwin Wajib Dirancang 3 Tahun Lebih Awal" (7 slaid, 1080x1350).
var PALETTE = { bg: '#F5EEE8', ink: '#1a1220', blue: '#462B52', orange: '#E7C9D2', muted: '#3a2f40' };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var PL = '#462B52', MV = '#A77B9E', RS = '#E7C9D2', DK = '#1a1220';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5', numCol: '#E7C9D2', numX: 200,
      lines: [
        { p: [['Sebab kos', DK]], size: 170 },
        { p: [['kahwin ', DK], ['wajib', PL]], size: 150, lh: .9 },
        { p: [['dirancang', PL]], size: 150, lh: .92 },
        { p: [['3 tahun awal.', MV]], size: 120, lh: .98 },
      ],
      titleY: 520, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 01', title: [['ELAK KUMPUL', DK], ['DALAM MASA SINGKAT', PL]], tagline: 'RM30,000: simpan 6 bulan = *RM5,000 sebulan.* Mula 3 tahun awal = *sekitar RM834 sebulan.* Lebih panjang tempoh, lebih ringan.', hl: RS, im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 02', title: [['KOS BOLEH', DK], ['BERUBAH', PL]], tagline: 'Katering, dewan dan pelamin *boleh naik.* Jangan rancang ikut harga hari ini, *sediakan ruang* untuk kenaikan kos.', hl: RS, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 03', title: [['JANGAN MULA', DK], ['DENGAN HUTANG', PL]], tagline: 'Majlis sehari, *personal loan bertahun-tahun.* Lebih baik majlis ikut kemampuan daripada berhabis demi kehendak orang lain.', hl: RS, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 04', title: [['EMAS ALAT', DK], ['SIMPANAN PANJANG', PL]], tagline: 'Tempoh 3 tahun atau lebih? Boleh simpan *sebahagian* dalam emas. Harga turun naik, jadi *jangan semua dalam emas,* kekalkan tunai.', hl: RS, im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 05', title: [['JANGAN HABISKAN', DK], ['SEMUA UNTUK MAJLIS', PL]], tagline: 'Selepas kahwin, kehidupan sebenar bermula: *deposit rumah, perabot, kecemasan.* Lebihan bajet, jadikan *simpanan dan aset.*', hl: RS, im: 'e', fy: .35 }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'HARI BAHAGIA,', l2: 'BUKAN HUTANG.', col: PL, follow: 'Follow @taufik.pg', sub: 'Mula sedikit demi sedikit. Akaun GAP Public Gold *serendah RM100,* tak perlu tunggu duit banyak.', im: 'me', imH: 580, size: 96, strokes: [PL, MV, RS, '#6b4a7a', '#d9b3c0'] }); },
];
