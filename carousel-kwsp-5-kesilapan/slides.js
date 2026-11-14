// carousel-palette VARIAN WARNA "Electric Studio": biru #3040FF + lime #DFFF70 + gelap #10121B + cerah #F5F5F0. "5 Kesilapan Besar Apabila Duit KWSP Masuk Akaun" (7 slaid, 1080x1350).
var PALETTE = { bg: '#F5F5F0', ink: '#10121B', blue: '#3040FF', orange: '#C8E83A', muted: '#3a3a3a' };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var BL = '#3040FF', LM = '#DFFF70';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5', numCol: '#AAB2FF',
      lines: [
        { p: [['Kesilapan', K.ink]], size: 170 },
        { p: [['besar duit', K.ink]], size: 170, lh: .9 },
        { p: [['KWSP ', BL], ['masuk', K.ink]], size: 150, lh: .92 },
        { p: [['akaun.', BL]], size: 150, lh: .92 },
      ],
      titleY: 520, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kesilapan 01', title: [['ANGGAP DURIAN', K.ink], ['RUNTUH', BL]], tagline: 'Nampak angka besar, nafsu berbelanja menguasai. Tukar kereta, renovasi rumah. *30 tahun terkumpul, beberapa tahun habis.*', hl: LM, im: 'a', fy: .5 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kesilapan 02', title: [['TIADA PELAN', K.ink], ['JANGKA PANJANG', BL]], tagline: 'Bersara umur 55, hidup sampai 80? *25 tahun tanpa gaji bulanan.* Fikir berapa lama duit boleh bertahan.', hl: LM, im: 'b', fy: .35 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kesilapan 03', title: [['DUIT TERPERAP', K.ink], ['DALAM BANK', BL]], tagline: 'Jumlah sama, tapi *kuasa beli tak sama.* RM100 hari ini belum tentu beli barang yang sama 10 atau 20 tahun lagi.', hl: LM, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kesilapan 04', title: [['GOPOH', K.ink], ['MELABUR', BL]], tagline: 'Janji pulangan tinggi, risiko kononnya rendah. *Tak faham, jangan serah duit.*', hl: LM, im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kesilapan 05', title: [['SATU BAKUL', K.ink], ['SAHAJA', BL]], tagline: 'Sebahagian *tunai untuk kecemasan,* sebahagian ke aset sesuai, termasuk *emas fizikal* sebagai penyimpan nilai. Setiap aset ada risikonya.', hl: LM, im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'DUIT KERJA', l2: 'UNTUK ANDA.', col: BL, follow: 'Follow @taufik.pg', sub: '30 tahun untuk kumpul, jangan 3 tahun untuk habiskan. *Sebelum bersara, belajar urus kekayaan.*', im: 'me', imH: 600, size: 118, strokes: [BL, LM, '#10121B', '#AAB2FF', '#C8E83A'] }); },
];
