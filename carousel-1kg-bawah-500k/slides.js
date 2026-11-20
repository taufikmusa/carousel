// carousel-palette VARIAN WARNA "Quiet Luxury": merah tua + emas. "1KG emas bawah RM500,000 + 5g percuma" (7 slaid, 1080x1350). Data: promosi 1-30 Nov 2026.
var PALETTE = { bg: '#F4EDE3', ink: '#222022', blue: '#630002', orange: '#BDA174', muted: '#3b3639' };
var N = 7;
var ASSETS = { cover: 'cover.jpg', promo: 'promo.jpg', pakej: 'pakej.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var DK = '#222022', RD = '#630002', GD = '#BDA174', HL = '#E4D7BE';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '1', numCol: '#E4D7BE',
      lines: [
        { p: [['1 kilogram emas', DK]], size: 100 },
        { p: [['bawah', DK]], size: 100, lh: 1.0 },
        { p: [['RM500,000.', RD]], size: 150, lh: .9 },
        { p: [['Siap bonus 5 gram percuma.', DK]], size: 56, lh: 1.3 },
      ],
      titleY: 450, im: 'cover', imH: 400,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: '11.11 Emas Impian', title: [['BELI 1KG,', DK], ['PERCUMA 5G', RD]], tagline: 'Promosi *1 hingga 30 November 2026.* Beli *1KG Bullion Bar Public Gold,* dapat *5g Gold Bar percuma.* Tertakluk kepada terma dan syarat.', hl: GD, im: 'promo', fit: true }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Butiran pakej', title: [['RM499,109', RD], ['+ PREMIUM', DK]], size: 128, tagline: 'Pakej *Kilobar Special Promotion (Nov26).* Premium *RM265 (West Malaysia)* dan *RM515 (East Malaysia).* Harga tertakluk perubahan semasa.', hl: GD, im: 'pakej', fit: true }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kira-kiranya', title: [['JUMLAH BAWAH', DK], ['RM500,000', RD]], tagline: '*West: RM499,374. East: RM499,624.* Dengan hadiah 5g, kita memiliki *1,005 gram* emas fizikal daripada satu transaksi.', hl: GD, im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kenapa emas?', title: [['SIMPAN NILAI,', DK], ['BUKAN NOMBOR', RD]], tagline: 'Tunai penting untuk *kecairan,* tapi semua dalam wang kertas terdedah kepada *inflasi.* Guru: *"Orang lain sibuk simpan nombor, orang kaya simpan nilai."*', hl: GD, im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Peringatan', title: [['BUKAN DUIT', DK], ['KECEMASAN', RD]], tagline: 'Jangan guna *duit kecemasan, duit komitmen* atau wang yang diperlukan tak lama lagi. Emas untuk *bina dan pertahan kekayaan jangka panjang.*', hl: GD, im: 'f' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'NAK TAHU', l2: 'LEBIH LANJUT?', col: RD, follow: 'Follow @taufik.pg', sub: 'Promosi sehingga *30 November 2026.* Berminat dengan pakej *1KG Bullion Bar?* Hubungi saya, saya bantu terangkan. Dulu ragu kini tahu, *jom simpan emas!*', im: 'me', imH: 560, size: 90, strokes: [RD, GD, DK, '#E4D7BE', '#8a1a1c'] }); },
];
