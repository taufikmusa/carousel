// carousel-palette — "5 Realiti Pahit Gaji RM4,000 di Kuala Lumpur" (7 slaid, 1080x1350).
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5', numCol: '#4F7FD0',
      lines: [
        { p: [['Gaji RM4,000', K.ink]], size: 150 },
        { p: [['di Kuala', K.ink]], size: 150, lh: .9 },
        { p: [['Lumpur ', K.ink], ['rasa', K.orange]], size: 150, lh: .9 },
        { p: [['macam RM2,000.', K.orange]], size: 112, lh: .98 },
      ],
      titleY: 560, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Realiti 01', title: [['SEWA RUMAH', K.ink], ['MAKAN GAJI', '#7D7480']], tagline: 'Dekat tempat kerja *mahal,* jauh pula *berulang-alik.* Bilik kecil pun *ratusan ringgit.*', im: 'a', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Realiti 02', title: [['KOS PERJALANAN', K.ink], ['TAK BERHENTI', '#7D7480']], tagline: 'Tol, minyak, parkir, tambang. Sehari nampak kecil, sebulan *ratusan ringgit.*', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Realiti 03', title: [['MAKAN LUAR', K.ink], ['JADI KEBIASAAN', '#7D7480']], tagline: 'RM10 hingga RM20 sekali makan. Setiap hari, sebulan *mencecah ratusan ringgit.*', im: 'c', fy: .6 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Realiti 04', title: [['TEKANAN', K.ink], ['GAYA HIDUP', '#7D7480']], tagline: 'Gaji RM4,000, tapi gaya hidup ikut *orang bergaji RM8,000.* Kerja keras sekadar biayai gaya hidup.', im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Realiti 05', title: [['TIADA SISTEM', K.ink], ['SIMPANAN', K.orange]], tagline: 'Tunggu duit lebih baru nak simpan? *Duit lebih jarang muncul* kalau tak asingkan simpanan dulu.', im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'ASINGKAN', l2: 'SIMPANAN DULU.', follow: 'Follow @taufik.pg', sub: 'Bukan besar gaji yang tentukan masa depan, tapi berapa yang *masih tinggal* selepas semua belanja.', im: 'me', imH: 600, size: 118 }); },
];
