// carousel-palette DEFAULT (Electric Studio biru lime). "Orang Sanggup Bayar Mahal Untuk 3 Benda Ini" (8 slaid, 1080x1350).
var N = 8;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var BL = '#3040FF', DK = '#10121B';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '3',
      lines: [
        { p: [['Orang sanggup', DK]], size: 120 },
        { p: [['bayar mahal', BL]], size: 130, lh: .9 },
        { p: [['untuk 3 benda', DK]], size: 112, lh: .95 },
        { p: [['ini.', BL]], size: 150, lh: .95 },
      ],
      titleY: 450, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pernah tertanya?', title: [['BUKAN BELI', DK], ['PRODUK SEMATA', BL]], tagline: 'Kenapa bayar *RM20 untuk kopi* yang hampir sama dengan RM5? Kenapa bayar lebih untuk kelas bisnes atau bercuti? Sebab manusia *membayar untuk nilai* yang datang bersama barang atau perkhidmatan itu.', im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Nilai 01', title: [['PENYELESAIAN', DK], ['KEPADA MASALAH', BL]], tagline: 'Sakit bayar doktor, kereta rosak bayar mekanik, bisnes bermasalah bayar konsultan. *Semakin besar masalah, semakin tinggi nilai penyelesaian,* asalkan kita percaya ia boleh diselesaikan.', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Nilai 02', title: [['KEMUDAHAN', DK], ['JIMAT MASA', BL]], tagline: 'Caj penghantaran makanan, servis ekspres, software mahal. Bukan tak mampu buat sendiri, tapi mereka faham *masa dan tenaga juga ada nilai.*', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Nilai 03', title: [['PENGALAMAN', DK], ['YANG DIBELI', BL]], tagline: 'Bercuti, tiket konsert, restoran tertentu: bukan sekadar makanan atau tiket, tapi *suasana, kenangan* dan perasaan yang *sukar diperoleh di tempat lain.*', im: 'd', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Yang selalu terlupa', title: [['PERHATIAN SAMA', DK], ['PADA MASA DEPAN?', BL]], tagline: 'Kita sanggup belanja untuk keselesaan hari ini, tapi *berapa ramai yang bersedia* supaya hidup 10 atau 20 tahun akan datang lebih selesa? Jarang fikir *berapa aset* yang nak dikumpul.', im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Satu pilihan', title: [['EMAS FIZIKAL,', DK], ['BUKAN CEPAT KAYA', BL]], tagline: 'Tak menjanjikan untung tetap, tapi boleh jadi simpanan jangka panjang untuk *memelihara nilai kekayaan.* Akaun Emas GAP Public Gold bermula *serendah RM100,* dan boleh dikeluarkan sebagai emas fizikal ikut denominasi dan terma.', im: 'f' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'NIKMATI HARI INI,', l2: 'SEDIAKAN MASA DEPAN.', col: BL, follow: 'Follow @taufik.pg', sub: 'Belajar juga *menyimpan dan mengumpul aset,* bukan hanya membelanjakan duit. Dulu ragu, kini tahu. Jom simpan emas!', im: 'me', imH: 580, size: 80 }); },
];
