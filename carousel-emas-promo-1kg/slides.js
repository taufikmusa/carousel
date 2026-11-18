// carousel-palette VARIAN "Quiet Luxury". "Harga emas rendah + promo 1KG percuma 5g (Nov 2026)" (9 slaid, 1080x1350).
var PALETTE = { bg: '#F4EDE3', ink: '#222022', blue: '#630002', orange: '#BDA174', muted: '#3b3639' };
var N = 9;
var ASSETS = { cover: 'cover.jpg', graf: 'graf.jpg', net: 'net.jpg', gift: 'gift.jpg', st: 'st.jpg', promo: 'promo.jpg', pakej: 'pakej.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var RD = '#630002', GD = '#BDA174', DK = '#222022', HL = '#E4D7BE';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '1', numCol: '#E4D7BE',
      lines: [
        { p: [['Harga emas antara', DK]], size: 90 },
        { p: [['termurah', RD]], size: 150, lh: .92 },
        { p: [['tahun 2026.', DK]], size: 130, lh: .92 },
        { p: [['Peluang untuk lebihan tunai?', DK]], size: 60, lh: 1.05 },
      ],
      titleY: 450, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: '18 Nov 2026', title: [['USD3,758', DK], ['SEAUNS', RD]], tagline: 'Emas dunia pernah melebihi *USD5,300 seauns* tahun ini. Harga turun ketara, dan turun *2.68%* pada hari ini. Sumber: goldprice.org.', hl: HL, im: 'graf', fit: true }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Risiko atau peluang?', title: [['MANA PANDANGAN', DK], ['ANDA?', RD]], tagline: 'Ada yang nampak *risiko.* Tapi bagi yang ada *lebihan tunai* dan faham fungsi emas dalam pengurusan kekayaan, mungkin berbeza. Ini bukan nasihat beli.', hl: HL, im: 'st' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pesan guru emas saya', title: [['SEDIAKAN', DK], ['LIFE BOAT', RD]], tagline: '“Kapal Titanic sebesar mana pun tetap wajib sediakan *bot penyelamat (life boat)* yang cukup.” Tn Mohd Zulkifli Shafie.', hl: HL, im: 'net' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Benteng kekayaan keluarga', title: [['DI LUAR SISTEM', DK], ['KEWANGAN?', RD]], tagline: 'Perniagaan, hartanah, pelaburan, tunai besar: berapa banyak *di luar sistem kewangan?* *Emas fizikal* boleh jadi salah satu benteng kekayaan keluarga.', hl: HL, im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Harga Public Gold', title: [['KEMAS KINI', DK], ['SETIAP 20 MINIT', RD]], tagline: 'Ikut pergerakan pasaran. Bila bersedia membeli, boleh *lock harga yang dipaparkan* semasa transaksi. Tak perlu meneka harga esok.', hl: HL, im: 'gift' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Promosi 1 hingga 30 Nov 2026', title: [['BELI 1KG,', DK], ['PERCUMA 5G', RD]], tagline: 'Beli *1KG Bullion Bar Public Gold,* dapat *Percuma 5g Gold Bar.* Tertakluk kepada terma dan syarat.', hl: HL, im: 'promo', fit: true }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Butiran pakej', title: [['PREMIUM', DK], ['RM265 / RM515', RD]], tagline: 'Pakej *Kilobar Special Promotion (Nov26).* Premium *RM265 (West)* / *RM515 (East).* Harga tertakluk perubahan dan pengesahan semasa Public Gold.', hl: HL, im: 'pakej', fit: true }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'SUSUN KEKAYAAN', l2: 'LEBIH BIJAK.', col: RD, follow: 'Follow @taufik.pg', sub: 'Bukan soal siapa pandai meneka harga terendah. Berminat pakej *1KG + 5g percuma?* Hubungi saya untuk semakan harga terkini dan penerangan lanjut.', im: 'me', imH: 580, size: 104, strokes: [RD, GD, DK, '#E4D7BE', '#8a1a1c'] }); },
];
