// carousel-palette VARIAN "Metallic Silver". "Silver USD115, tapi emas dahulu" (9 slaid, 1080x1350).
var PALETTE = { bg: '#EEF0F3', ink: '#1B1E24', blue: '#5A6270', orange: '#C9CED6', hl: '#D9DDE4', ghost: '#E1E4E9', muted: '#343942', brush: ['#8E96A3', '#C9CED6', '#1B1E24', '#5A6270', '#E4E7EC'] };
var N = 9;
var ASSETS = { cover: 'bars.jpg', vault: 'vault.jpg', g2: 'g2.jpg', g5: 'g5.jpg', sap: 'sap.jpg', emas: 'emas.jpg', net: 'net.jpg', me: 'thumbs-up.png' };
var SV = '#5A6270', DK = '#1B1E24', HL = '#D9DDE4';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '115',
      numSize: 620, numX: 90, numY: 1140,
      lines: [
        { p: [['Silver pernah', DK]], size: 110 },
        { p: [['USD115', SV]], size: 190, lh: .9 },
        { p: [['Tapi emas dahulu?', DK]], size: 84, lh: 1.0 },
      ],
      titleY: 450, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Bukan sekadar perhiasan', title: [['SILVER DALAM', DK], ['INDUSTRI MODEN', SV]], tagline: 'Telefon pintar, komputer, komponen elektronik, *solar panel, kenderaan elektrik* dan teknologi AI semuanya guna silver.', hl: HL, im: 'vault' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Silver Institute', title: [['DEFISIT ENAM', DK], ['TAHUN BERTURUT', SV]], tagline: 'Pada 2026 permintaan dijangka melebihi bekalan sebanyak *35 juta troy ounces.* Okt 2025, pasaran London pernah alami *liquidity squeeze.*', hl: HL, im: 'cover', fy: .5 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Graf 2 tahun (USD/oz)', title: [['NAIK 50.56%', DK], ['DUA TAHUN', SV]], tagline: 'Tertinggi *USD115.50,* terendah USD28.84, penutup USD46.91. Sumber: silverprice.org, 17 Nov 2026.', hl: HL, im: 'g2', fit: true }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Graf 5 tahun (USD/oz)', title: [['NAIK 88.95%', DK], ['LIMA TAHUN', SV]], tagline: 'Dari terendah *USD17.84.* Tapi selepas puncak USD115.50, harga *turun ketara.* Turun naiknya lebih agresif.', hl: HL, im: 'g5', fit: true }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Patutkah kumpul silver?', title: [['CUKUPKAN EMAS', DK], ['DAHULU', SV]], tagline: 'Guru saya, Tn Mohd Zulkifli Shafie, cadang *simpanan emas bersamaan 12 bulan gaji* dahulu sebelum kumpul silver secara serius.', hl: HL, im: 'emas' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: '3 sebab emas dahulu', title: [['STABIL, MUDAH', DK], ['CAIR, MUDAH SIMPAN', SV]], tagline: '*Emas lebih stabil,* silver lebih volatile. Emas lebih mudah dijual atau dipajak *(Ar-Rahnu),* buyback silver di Malaysia lebih terhad. Aset ratusan ribu: emas ringan, silver boleh *puluhan kilogram.*', hl: HL, im: 'net' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Silver Accumulation Program', title: [['RM100 =', DK], ['12.9870 GRAM', SV]], tagline: 'SAP Public Gold, silver 999. Harga 18 Nov 2026: *RM770 = 100 gram.* Mula serendah RM100, ikut kemampuan. Harga tertakluk perubahan.', hl: HL, im: 'sap', fit: true }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'EMAS DAHULU.', l2: 'KEMUDIAN SILVER.', col: SV, follow: 'Follow @taufik.pg', sub: 'Bina asas dengan emas, kenali potensi silver, *urus kekayaan dengan ilmu.* Nak belajar GAP dan SAP? PM saya, tiada paksaan.', im: 'me', imH: 580, size: 100 }); },
];
