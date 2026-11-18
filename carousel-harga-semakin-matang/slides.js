// carousel-palette VARIAN "Purple" (violet + lavender). "Harga Yang Perlu Dibayar Bila Semakin Matang" (9 slaid, 1080x1350).
var PALETTE = { bg: '#F5F1FB', ink: '#1E1433', blue: '#6B3FD4', orange: '#CDB8F5', hl: '#E3D6FA', ghost: '#E6DCF7', muted: '#3b2f55', brush: ['#6B3FD4', '#CDB8F5', '#1E1433', '#9B7CE8', '#3E2380'] };
var N = 9;
var ASSETS = { cover: 'cover.jpg', h: 'h.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var VT = '#6B3FD4', DK = '#1E1433';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5',
      lines: [
        { p: [['Ada harga', DK]], size: 140 },
        { p: [['bila kita', DK]], size: 140, lh: .9 },
        { p: [['semakin', VT]], size: 140, lh: .9 },
        { p: [['matang.', VT]], size: 170, lh: .9 },
      ],
      titleY: 430, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Semakin dewasa', title: [['TIGA HARGA', DK], ['YANG KITA BAYAR', VT]], tagline: 'Harga mencintai ialah *kesedihan bila kehilangan.* Harga ketenangan ialah *menjauhi orang yang tak lagi membawa kebaikan.* Harga mempertahankan maruah ialah *sanggup bersendirian* daripada terus dalam hubungan yang menyakitkan.', im: 'h' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pelajaran 01', title: [['PERHATIAN BUKAN', DK], ['KASIH SAYANG', VT]], tagline: 'Ada yang mencari kita bila perlu sesuatu, dan *hilang bila kita susah.* Jangan keliru antara yang suka beri perhatian dengan yang *benar-benar menghargai.* Kasih sayang dibuktikan *tindakan konsisten.*', im: 'a', fy: .5 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pelajaran 02', title: [['YANG BIASA', DK], ['BELUM TENTU BAIK', VT]], tagline: 'Kadang kita bertahan bukan kerana bahagia, tapi kerana *sudah terlalu biasa.* Sesuatu yang lama kita kenali *tak semestinya baik untuk kita.*', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pelajaran 03', title: [['HARGA DIRI LEBIH', DK], ['PENTING', VT]], tagline: 'Tak perlu korbankan ketenangan untuk disukai semua orang. Ada masa perlu *berkata tidak,* melepaskan, atau *berjalan sendiri.* Tak semua yang hilang itu satu kerugian.', im: 'c', fx: .8, fy: .95 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pelajaran 04', title: [['SIBUK TAK SAMA', DK], ['DENGAN BERMAKNA', VT]], tagline: 'Boleh bekerja siang malam dan kejar pangkat, tapi jangan lupa *membina kehidupan yang benar-benar kita mahu.* Termasuk *persediaan kewangan* untuk diri sendiri dan keluarga.', im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pelajaran 05', title: [['SAYANG DIRI,', DK], ['SEDIAKAN MASA DEPAN', VT]], tagline: 'Menghargai diri juga bermakna *tak biar diri yang lebih tua nanti menanggung akibat* keputusan kewangan hari ini. Belajar *menyimpan, mengumpul aset* dan menyediakan perlindungan kewangan.', im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Satu pilihan aset', title: [['EMAS FIZIKAL,', DK], ['SEDIKIT DEMI SEDIKIT', VT]], tagline: 'Melalui Akaun Emas GAP Public Gold, mula mengumpul *serendah RM100.* Tak perlu tunggu kaya. Yang penting *disiplin,* supaya ada sesuatu yang boleh digunakan bila tiba masanya.', im: 'f' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'MASA DEPAN PUN', l2: 'PERLU KASIH.', col: VT, follow: 'Follow @taufik.pg', sub: 'Kita tak boleh kawal semua perkara, tapi *boleh membuat persediaan.* Masa depan kita juga memerlukan kasih sayang daripada diri kita hari ini. Dulu ragu, kini tahu. Jom simpan emas!', im: 'me', imH: 580, size: 96 }); },
];
