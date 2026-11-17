// carousel-palette VARIAN "Gold". "Pencen 5 Tahun Dari Sekarang? Mustahil ke?" (9 slaid, 1080x1350).
var PALETTE = { bg: '#FBF7EC', ink: '#1F1A10', blue: '#A8780F', orange: '#E9CF7A', hl: '#F3E3A5', ghost: '#F0E2B0', muted: '#3a3220', brush: ['#A8780F', '#E9CF7A', '#1F1A10', '#CDA24A', '#F3E3A5'] };
var N = 9;
var ASSETS = { cover: 'cover.jpg', p1: 'p1.jpg', p2: 'p2.jpg', p3: 'p3.jpg', p4: 'p4.jpg', p5: 'p5.jpg', p6: 'p6.jpg', p7: 'p7.jpg', me: 'thumbs-up.png' };
var GD = '#A8780F', DK = '#1F1A10';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5',
      lines: [
        { p: [['Pencen', DK]], size: 190 },
        { p: [['5 tahun lagi?', GD]], size: 120, lh: .92 },
        { p: [['Mustahil ke?', DK]], size: 120, lh: .95 },
      ],
      titleY: 500, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pesan guru saya', title: [['PENCEN BUKAN', DK], ['SOAL UMUR', GD]], tagline: 'Tapi soal *kedudukan kewangan.* Ramai fikir kena tunggu umur 55 atau 60. Hakikatnya *kita boleh mula membina* kebebasan kewangan jauh lebih awal.', im: 'p1', fy: .3 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kitaran 30 tahun', title: [['KERJA, BAYAR,', DK], ['ULANG LAGI', GD]], tagline: 'Gaji masuk, bayar rumah, kereta, bil dan belanja keluarga, bulan depan *ulang.* Sampai umur 55, tabungan tak cukup, hutang belum selesai, tiada harta jana pendapatan. *Berhenti kerja, pendapatan pun berhenti.*', im: 'p2' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 01', title: [['TAMBAH TABUNGAN', DK], ['SETIAP BULAN', GD]], tagline: 'Mulakan *RM100,* mampu RM300 tingkatkan lagi. Guru saya mula dengan *RM20 sebulan* melalui potongan gaji ke Tabung Haji. Yang menentukan bukan jumlah permulaan, tapi *disiplin.*', im: 'p3' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 02', title: [['LANGSAIKAN', DK], ['HUTANG', GD]], tagline: 'Hutang membuat kita *bekerja untuk komitmen masa lalu.* Bayangkan RM2,000 sebulan untuk hutang: itu boleh jadi *modal bina kekayaan* bila bebas hutang. Jangan tambah hutang untuk nampak kaya.', im: 'p4' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 03', title: [['BINA HARTA', DK], ['JANA PENDAPATAN PASIF', GD]], size: 80, tagline: 'Simpanan tunai akhirnya habis bila digunakan. Kita perlukan harta yang *jana pendapatan walaupun tak bekerja:* rumah sewa aliran tunai positif, perniagaan, saham atau aset lain yang sesuai ilmu dan kemampuan.', im: 'p5' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sasaran RM1.2 juta', title: [['RM1.2 JUTA', DK], ['= RM5,000 SEBULAN', GD]], tagline: 'Harta bersih *RM1.2 juta* pada pulangan *5% setahun* = RM60,000 setahun atau *RM5,000 sebulan.* Ini contoh pengiraan berdasarkan andaian, *bukan pulangan dijamin.*', im: 'p6' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Jadi, boleh ke?', title: [['BERGANTUNG', DK], ['KEDUDUKAN KITA', GD]], tagline: 'Bergantung pada *kewangan hari ini, komitmen, aset dan pendapatan pasif* yang mampu dibina. Bukan semua orang capai matlamat sama dalam 5 tahun, tapi *kita boleh ubah haluan mulai hari ini.*', im: 'p7' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'BUKAN TERPAKSA', l2: 'BEKERJA LAGI.', col: GD, follow: 'Follow @taufik.pg', sub: 'Itulah erti sebenar *financial freedom.* “Setiap tahap hidup memerlukan diri yang baru.” Kredit: Tn. Mohd Zulkifli Shafie.', im: 'me', imH: 580, size: 96, strokes: ['#A8780F', '#E9CF7A', '#1F1A10', '#CDA24A', '#F3E3A5'] }); },
];
