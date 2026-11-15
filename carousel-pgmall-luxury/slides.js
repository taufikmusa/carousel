// carousel-palette VARIAN "Quiet Luxury" (#630002 / #BDA174). "Kenapa Berbelanja di PGMall?" (7 slaid, 1080x1350).
var PALETTE = { bg: '#F4EDE3', ink: '#222022', blue: '#630002', orange: '#BDA174', muted: '#3b3639' };
var N = 7;
var ASSETS = { cover: 'bags.jpg', a: 'gift.jpg', b: 'parcel.jpg', c: 'phone.jpg', d: 'bangle.jpg', me: 'thumbs-up.png' };
var RD = '#630002', GD = '#BDA174', DK = '#222022';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5', numCol: '#E4D7BE',
      lines: [
        { p: [['Kenapa saya', DK]], size: 128 },
        { p: [['galakkan ', DK], ['belanja', RD]], size: 108, lh: .92 },
        { p: [['di PGMall?', RD]], size: 168, lh: .9 },
        { p: [['Bukan sekadar beli, boleh jana pulangan.', DK]], size: 50, lh: 1.05 },
      ],
      titleY: 480, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 01', title: [['MACAM-MACAM', DK], ['BARANG ADA', RD]], tagline: 'PGMall ialah platform e-commerce tempatan: *elektronik, fesyen, barangan rumah, makanan, kecantikan, kesihatan, buku* dan keperluan harian. Bukan beli emas sahaja.', hl: '#E4D7BE', im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 02', title: [['KONSEP', DK], ['CONSUMERCHANT', RD]], tagline: 'Gabungan *Consumer + Merchant.* Kita bukan sekadar pembeli, tapi berpeluang jadi *sebahagian ekosistem perniagaan* PGMall.', hl: '#E4D7BE', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 03', title: [['ADA PROGRAM', DK], ['CASHBACK', RD]], tagline: 'Ganjaran cashback melalui *pembelian sendiri dan referral,* mengikut kelayakan dan terma program. *Bukan pendapatan tetap* atau keuntungan dijamin.', hl: '#E4D7BE', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 04', title: [['SHOP, SHARE', DK], ['& EARN', RD]], tagline: '*SHOP:* beli dan guna sendiri. *SHARE:* kongsi referral link. *EARN:* cashback daripada pembelian layak, tanpa perlu jual produk sendiri.', hl: '#E4D7BE', im: 'cover', fy: .3 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 05', title: [['PRODUK', DK], ['PUBLIC GOLD JUGA', RD]], tagline: 'Boleh dapatkan produk jenama ekosistem Public Gold seperti *PG Jewel* dan produk berkaitan emas. *Satu platform,* dua dunia.', hl: '#E4D7BE', im: 'd' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'BELANJA BIJAK,', l2: 'BUKAN CASHBACK.', col: RD, follow: 'Follow @taufik.pg', sub: 'Jangan beli barang yang *tak perlu* semata-mata kerana cashback. Berbelanjalah dengan bijak, *manfaatkan ganjaran jika ada.*', im: 'me', imH: 580, size: 100, strokes: [RD, GD, DK, '#E4D7BE', '#8a1a1c'] }); },
];
