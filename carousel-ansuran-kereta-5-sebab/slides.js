// carousel-palette VARIAN "Hitam Metallic Exclusive" (hitam + silver + champagne). "5 Sebab Ansuran Kereta Susahkan Kekayaan" (8 slaid, 1080x1350).
var PALETTE = { bg: '#0E0E10', ink: '#ECEDEF', blue: '#CDB87A', orange: '#3A3C42', hl: '#3A3C42', ghost: '#1C1D21', muted: '#C7CAD1', brush: ['#B9BEC7', '#CDB87A', '#ECEDEF', '#6E727B', '#3A3C42'] };
var N = 8;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var SV = '#ECEDEF', CH = '#CDB87A';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5',
      lines: [
        { p: [['Sebab ansuran', SV]], size: 128 },
        { p: [['kereta', CH]], size: 190, lh: .9 },
        { p: [['susahkan', SV]], size: 128, lh: .95 },
        { p: [['kekayaan kita.', CH]], size: 110, lh: .98 },
      ],
      titleY: 440, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 01', title: [['ANSURAN MAKAN', SV], ['GAJI KITA', CH]], tagline: 'Gaji bersih *RM3,000,* ansuran kereta *RM1,000* sebulan: satu pertiga gaji habis untuk kereta sahaja. Belum masuk rumah, makan minum dan bil. Mana nak bina simpanan?', im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 02', title: [['KERETA ASET', SV], ['SUSUT NILAI', CH]], tagline: 'Sebaik keluar dari pusat pameran, *nilai kereta mula menyusut.* Tapi ansuran bank *tetap dibayar seperti biasa.* Rasa makin kaya, hakikatnya nilai aset makin berkurang.', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 03', title: [['JANGAN LIHAT', SV], ['ANSURAN SAHAJA', CH]], tagline: 'Kos sebenar jauh lebih besar: *insurans, cukai jalan, minyak, tol, servis, tayar dan pembaikan.* Jangan sampai mampu bayar ansuran tapi terpaksa ikat perut untuk kos lain.', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 04', title: [['IKUT KEPERLUAN,', SV], ['BUKAN STATUS', CH]], tagline: 'Jangan ukur kemampuan ikut *berapa bank sanggup luluskan.* Bank luluskan, tapi *kita yang tanggung komitmen bertahun-tahun.* Kereta sederhana yang cukup, tak perlu dipaksa lebih mahal.', im: 'd', fy: .45 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 05', size: 84, title: [['JIMAT ANSURAN,', SV], ['TUKAR JADI ASET', CH]], tagline: 'Pilih kereta lebih murah, jimat *RM500 sebulan?* Teruskan simpan RM500 itu: *dana kecemasan dahulu,* kemudian aset seperti emas fizikal. Akaun Emas GAP serendah *RM100.*', im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pesanan guru saya', title: [['KEKAYAAN =', SV], ['TABUNGAN + HARTA − HUTANG', CH]], size: 78, tagline: 'Jangan beli kereta untuk pergi bekerja, tapi *akhirnya bekerja semata-mata untuk bayar hutang kereta.* Lebih baik kereta biasa dengan *simpanan dan aset bertambah.*', im: 'f' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'KERETA BANTU', l2: 'KITA BERGERAK.', col: CH, follow: 'Follow @taufik.pg', sub: 'Jangan biar hutang kereta *menghalang kita* menuju kebebasan kewangan. Kredit prinsip: Tn. Mohd Zulkifli Shafie. Moga bermanfaat.', im: 'me', imH: 580, size: 104, strokes: ['#B9BEC7', '#CDB87A', '#ECEDEF', '#6E727B', '#3A3C42'] }); },
];
