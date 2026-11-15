// carousel-palette VARIAN WARNA "Electric Studio" (biru + lime). "Macam mana nak tahu akaun emas betul-betul ada emas fizikal?" (7 slaid, 1080x1350).
var PALETTE = { bg: '#F5F5F0', ink: '#10121B', blue: '#3040FF', orange: '#C8E83A', muted: '#3a3a3a' };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var BL = '#3040FF', LM = '#DFFF70', DK = '#10121B';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '?', numCol: '#AAB2FF', numSize: 1300, numX: 260,
      lines: [
        { p: [['Betul ke', DK]], size: 170 },
        { p: [['ada emas', DK]], size: 170, lh: .9 },
        { p: [['fizikal ', BL], ['dalam', DK]], size: 140, lh: .92 },
        { p: [['akaun anda?', BL]], size: 140, lh: .92 },
      ],
      titleY: 520, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Ujian mudah', title: [['KELUARKAN', DK], ['EMAS FIZIKAL', BL]], tagline: 'Cara paling mudah nak tahu: *cuba keluarkan emas fizikal* daripada akaun tersebut.', hl: LM, im: 'a', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perhatikan prosesnya', title: [['MUDAH & JELAS', DK], ['ATAU BERHALANGAN?', BL]], tagline: 'Proses mudah dan jelas itu *baik.* Terlalu banyak syarat, prosedur rumit atau halangan? *Lebih berhati-hati.*', hl: LM, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Prinsip asas', title: [['BELI EMAS,', DK], ['MESTI DAPAT EMAS.', BL]], tagline: '*“Titik.”* Pesan guru saya, Tn. Mohd Zulkifli Shafie, prinsip asas simpanan emas.', hl: LM, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Akaun Emas GAP', title: [['BUKAN SEKADAR', DK], ['ANGKA DI SKRIN', BL]], tagline: 'Dibina untuk kita *kumpul emas sedikit demi sedikit* ikut kemampuan, tak perlu tunggu ada ribuan ringgit.', hl: LM, im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Bila gram cukup', title: [['TUKAR KEPADA', DK], ['EMAS FIZIKAL', BL]], tagline: 'Keluarkan sebagai *jongkong, dinar* atau produk emas yang tersedia, ikut matlamat simpanan kita.', hl: LM, im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'TANYA JUGA:', l2: 'MANA EMAS KITA?', col: BL, follow: 'Follow @taufik.pg', sub: 'Jangan sekadar tanya berapa gram dalam akaun. *Tanya bagaimana dapat emas fizikal* yang jadi hak kita. Rujuk video yang saya pin: 5 langkah mudah bermula.', im: 'me', imH: 540, size: 92, strokes: [BL, LM, DK, '#AAB2FF', '#C8E83A'] }); },
];
