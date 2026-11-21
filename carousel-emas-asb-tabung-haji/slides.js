// carousel-palette VARIAN WARNA "Purple Metallic" (lavender perak + ungu violet + ungu gelap). "5 Perbezaan Emas, ASB & Tabung Haji" (7 slaid, 1080x1350).
var PALETTE = { bg: '#EFEAF8', ink: '#1A0F2E', blue: '#5B2BB8', orange: '#B9A4EE', hl: '#D9CCF7', ghost: '#DCD2F2', muted: '#3a2f55', brush: ['#5B2BB8', '#B9A4EE', '#1A0F2E', '#C9CED6', '#8C6BE0'] };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var DK = '#1A0F2E', PU = '#5B2BB8';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5',
      lines: [
        { p: [['Perbezaan sebenar', DK]], size: 100 },
        { p: [['EMAS, ASB &', PU]], size: 128, lh: .92 },
        { p: [['TABUNG HAJI.', PU]], size: 128, lh: .92 },
        { p: [['Fungsi setiap satu lain.', DK]], size: 58, lh: 1.25 },
      ],
      titleY: 430, im: 'cover', imH: 400,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perbezaan 01', title: [['TUNAI vs', DK], ['SIMPAN NILAI', PU]], tagline: 'ASB dan Tabung Haji beri *agihan keuntungan* ikut prestasi tahunan. Emas tak beri dividen, fungsinya *simpanan aset fizikal* jangka panjang.', im: 'a', fy: .5 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perbezaan 02', title: [['DIVIDEN NAIK,', DK], ['KOS HIDUP PUN', PU]], tagline: 'Seronok dividen masuk, tapi *kuasa beli* terhakis oleh inflasi. Jangan lihat berapa duit bertambah, lihat *apa yang masih mampu dibeli.*', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perbezaan 03', title: [['TREND NAIK', DK], ['JANGKA PANJANG', PU]], tagline: 'Dalam tempoh panjang harga emas menunjukkan *trend meningkat,* walau ada masa jatuh dan lambat pulih. Ia *bukan aset yang sentiasa naik,* jadi simpan untuk jangka panjang.', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perbezaan 04', title: [['JANGAN SATU', DK], ['BAKUL SAHAJA', PU]], tagline: 'Tunai untuk *kecemasan* dan harian. ASB dan Tabung Haji ada fungsi tersendiri. Emas jadi sebahagian *benteng kekayaan keluarga.* Perlukan *kepelbagaian.*', im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perbezaan 05', title: [['GABUNG TUNAI', DK], ['& EMAS FIZIKAL', PU]], tagline: 'Tak perlu keluarkan semua dari ASB atau Tabung Haji. Sedia *dana kecemasan tunai,* bina emas berperingkat. *Akaun Emas GAP Public Gold bermula RM100.*', im: 'f', fy: .45 }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'TAHU DI MANA', l2: 'SETIAP RINGGIT.', col: PU, follow: 'Follow @taufik.pg', sub: 'ASB bukan musuh emas, Tabung Haji bukan pesaing emas. Ketiga-tiganya *saling melengkapi* bila kita faham fungsinya. Dulu ragu kini tahu, *jom simpan emas!*', im: 'me', imH: 560, size: 88, strokes: ['#5B2BB8', '#B9A4EE', '#1A0F2E', '#C9CED6', '#8C6BE0'] }); },
];
