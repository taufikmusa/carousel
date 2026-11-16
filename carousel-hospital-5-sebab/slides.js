// carousel-palette VARIAN "Fresh Signal" (hijau + koral). "5 Sebab Satu Kemasukan Hospital Boleh Ganggu Kewangan Keluarga" (7 slaid, 1080x1350).
var PALETTE = { bg: '#F8F5EC', ink: '#006638', blue: '#FF784F', orange: '#C6CE76', hl: '#D9DE9A' };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var GR = '#006638', CO = '#FF784F', LM = '#C6CE76', DG = '#0b3d27';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5', numCol: '#D6DB9C',
      lines: [
        { p: [['Sebab satu', GR]], size: 160 },
        { p: [['kemasukan ', GR], ['hospital', CO]], size: 96, lh: .95 },
        { p: [['boleh ganggu', GR]], size: 128, lh: .92 },
        { p: [['kewangan keluarga!', CO]], size: 96, lh: .98 },
      ],
      titleY: 470, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 01', title: [['KOS RAWATAN', GR], ['PULUHAN RIBU', CO]], tagline: 'Pembedahan, rawatan pakar, ICU dan susulan boleh *menelan belanja besar,* lebih-lebih lagi di hospital swasta. Simpanan bertahun boleh *susut dalam beberapa hari.*', im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 02', title: [['MEDICAL CARD', GR], ['ADA HAD', CO]], tagline: 'Setiap polisi ada *had perlindungan, pengecualian dan syarat.* Ada kos yang mungkin tak ditanggung sepenuhnya, jadi kita tetap perlu *sediakan wang sendiri.*', im: 'b', fy: .3 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 03', title: [['PENYAKIT TAK', GR], ['TUNGGU KITA', CO]], tagline: 'Kita rancang menyimpan lebih tahun depan, tapi penyakit tak tanya *akaun bank dah cukup atau belum.* Persediaan perlu dibuat *ketika masih sihat.*', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 04', title: [['SIMPANAN MASA DEPAN', GR], ['TERPAKSA DIKORBAN', CO]], tagline: 'Bila tunai tak cukup, ada yang guna *simpanan pendidikan anak, keluarkan wang persaraan* atau berhutang. Wang untuk masa depan habis menyelesaikan masalah hari ini.', im: 'd', fy: .35 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Sebab 05', title: [['ASET BOLEH', GR], ['DICAIRKAN', CO]], tagline: 'Selain dana kecemasan tunai, *emas fizikal* boleh jadi aset tambahan yang boleh dijual bila perlu wang. Tapi *bukan pengganti* medical card atau dana kecemasan tunai.', im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'SEDIAKAN', l2: 'LIFE BOAT.', col: CO, follow: 'Follow @taufik.pg', sub: '“Orang kaya yang tak simpan emas ibarat penumpang kapal Titanic yang tak ada life boat.” (Tn Mohd Zulkifli Shafie). Bina perlindungan *ketika masih mampu,* bukan ketika terdesak.', im: 'me', imH: 580, size: 150, strokes: [GR, CO, LM, '#D6DB9C', DG] }); },
];
