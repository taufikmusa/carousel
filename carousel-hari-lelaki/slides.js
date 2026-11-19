// carousel-palette VARIAN "Red Cherry". "Hari Lelaki Antarabangsa: tanggungjawab lelaki" (8 slaid, 1080x1350).
var PALETTE = { bg: '#FDF4F2', ink: '#2A0A10', blue: '#C2102E', orange: '#F7CFD3', hl: '#F9D5D8', ghost: '#F7DADC', muted: '#4a2a30', brush: ['#C2102E', '#F7CFD3', '#2A0A10', '#E4566B', '#8E0B22'] };
var N = 8;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var CH = '#C2102E', DK = '#2A0A10';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '19',
      numCol: '#F7DADC', numSize: 700, numX: 100, numY: 1180,
      lines: [
        { p: [['Hari Lelaki', DK]], size: 130 },
        { p: [['Antarabangsa.', CH]], size: 104, lh: .92 },
        { p: [['Apa tanggungjawab', DK]], size: 76, lh: 1.05 },
        { p: [['yang wajib direnungkan?', DK]], size: 76, lh: 1.0 },
      ],
      titleY: 450, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: '19 November', title: [['INTERNATIONAL', DK], ['MEN’S DAY', CH]], tagline: 'Mula diperkenalkan *1999* di Trinidad dan Tobago oleh *Dr Jerome Teelucksingh.* Untuk menghargai sumbangan lelaki kepada keluarga, masyarakat dan negara, dan mengetengahkan contoh lelaki yang positif.', im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Lebih daripada kekuatan', title: [['EMPAT', DK], ['TANGGUNGJAWAB', CH]], tagline: '*Nafkah isteri,* membesarkan dan mendidik anak, *menjaga ibu bapa* yang semakin tua, dan memastikan orang tersayang *tidak terabai* bila kita tak lagi mampu bekerja.', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kegembiraan sebenar', title: [['BUKAN KERETA', DK], ['MEWAH', CH]], tagline: 'Tapi bila mampu menunaikan tanggungjawab: *anak dapat pendidikan sempurna,* isteri tak terlalu risau kewangan, *ibu bapa dijaga selesa.* Kepuasan yang tak boleh dibeli dengan kemewahan.', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Bukan sekadar cari duit', title: [['URUS &', DK], ['SIMPAN', CH]], tagline: 'Jangan bertahun-tahun mencari rezeki tapi *bila diperlukan tiada simpanan mencukupi.* Belajar mengurus dan menyimpan hasil titik peluh.', im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pesan guru emas saya', title: [['PAKSA, LUPA', DK], ['& AUTOMATIK', CH]], tagline: '*Asingkan simpanan* sebelum sempat dibelanjakan, tukar sebahagian kepada emas fizikal, kumpul gram demi gram. Emas bukan jalan pintas jadi kaya, tapi boleh *mengekalkan nilai kekayaan.* Tn Mohd Zulkifli Shafie.', im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Mula serendah RM100', title: [['10 ATAU 20 TAHUN', DK], ['LAGI?', CH]], tagline: 'Akaun GAP Public Gold bermula *RM100,* ikut kemampuan sendiri. Kita tak tahu apa jadi nanti: anak perlukan bantuan, ibu bapa perlukan penjagaan, atau kita *tak lagi mampu bekerja.*', im: 'f' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'SELAMAT HARI', l2: 'LELAKI.', col: CH, follow: 'Follow @taufik.pg', sub: 'Semoga kita lelaki yang *rajin mencari rezeki, bijak mengurus, menyimpan dan membina aset* untuk menunaikan amanah yang dipikul.', im: 'me', imH: 580, size: 110 }); },
];
