// carousel-palette VARIAN WARNA "Quiet Luxury": merah tua #630002 + krim #F4EDE3 + emas #BDA174 + gelap #222022. "5 Cara Selamatkan Duit Anak" (7 slaid, 1080x1350).
var PALETTE = { bg: '#F4EDE3', ink: '#222022', blue: '#630002', orange: '#BDA174', muted: '#3b3639' };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var DK = '#222022', RD = '#630002', GD = '#BDA174';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5', numCol: '#E4D7BE',
      lines: [
        { p: [['Cara selamat-', DK]], size: 120 },
        { p: [['kan duit anak', RD]], size: 120, lh: .92 },
        { p: [['daripada habis', DK]], size: 125, lh: .92 },
        { p: [['dibelanjakan.', DK]], size: 125, lh: .92 },
      ],
      titleY: 500, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 01', title: [['SIMPAN DAHULU,', DK], ['BARU BELANJA', RD]], tagline: 'Jangan ajar simpan *yang berbaki.* Asingkan setiap kali dapat duit, contohnya *70% simpanan, 30% belanja sendiri.*', hl: GD, im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 02', title: [['TUKAR SEBAHAGIAN', DK], ['KEPADA EMAS', RD]], tagline: 'Tunai mudah dibelanjakan. Pertimbangkan *Akaun Emas GAP Junior,* sedikit demi sedikit duit jadi *gram emas.*', hl: GD, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 03', title: [['TUNJUK', DK], ['PERKEMBANGAN', RD]], tagline: 'Jangan sekadar simpan bagi pihak anak. *Tunjuk berapa gram* sudah terkumpul supaya mereka *hargai proses* mengumpul aset.', hl: GD, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 04', title: [['BEZAKAN KEPERLUAN', DK], ['& KEHENDAK', RD]], tagline: 'Tak semua yang teringin perlu dibeli. Ajar tanya: *betul perlu, atau sekadar menarik?* Kemahiran untuk keputusan kewangan dewasa.', hl: GD, im: 'd', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Cara 05', title: [['JADIKAN BUDAYA', DK], ['KELUARGA', RD]], tagline: 'Mula masa kecil, jangan tunggu bekerja. Jadikan *aktiviti bulanan* menyemak tabungan bersama-sama.', hl: GD, im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'WARISKAN ILMU,', l2: 'BUKAN HARTA SAHAJA.', col: RD, follow: 'Follow @taufik.pg', sub: 'Kita tak dapat tentukan kekayaan anak, tapi boleh *didik cara membina kekayaan* sejak kecil.', im: 'me', imH: 580, size: 78, strokes: [RD, GD, DK, '#E4D7BE', '#8a1a1c'] }); },
];
