// carousel-palette VARIAN "Electric Studio" (biru + lime). "Kenapa ramai nak jadi Dealer Public Gold?" (7 slaid, 1080x1350).
var PALETTE = { bg: '#F5F5F0', ink: '#10121B', blue: '#3040FF', orange: '#C8E83A', muted: '#2b2e3a' };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var BL = '#3040FF', DK = '#10121B', LM = '#C8E83A', HL = '#DFFF70';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '?', numCol: '#C8E83A',
      lines: [
        { p: [['Kenapa ramai', DK]], size: 128 },
        { p: [['nak jadi', DK]], size: 128, lh: .9 },
        { p: [['Dealer', BL]], size: 170, lh: .88 },
        { p: [['Public Gold?', BL]], size: 118, lh: .95 },
      ],
      titleY: 440, im: 'cover', imH: 360,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pendapatan aktif', title: [['KERJA DULU,', DK], ['BARU GAJI', BL]], tagline: 'Majoriti kita bergantung pada *pendapatan aktif.* Contohnya manager bank: setiap bulan terima gaji. Tapi bila *berhenti kerja atau bersara,* sumber itu juga terhenti.', hl: HL, im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pendapatan pasif', title: [['TERUS JANA', DK], ['HASIL', BL]], tagline: 'Bina satu sumber yang *terus menjana* walaupun kita tak lagi bekerja secara aktif. Contohnya *rumah sewa:* aset dibina, penyewa bayar setiap bulan.', hl: HL, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Bisnes Public Gold', size: 82, title: [['BUKAN SEKADAR', DK], ['EJEN JUALAN', BL]], tagline: 'Kita adalah *PGBO, Public Gold Business Owner.* Membina perniagaan bersama Public Gold dan berpeluang menerima *royalti* berdasarkan aktiviti jualan yang dibina.', hl: HL, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pewarisan', title: [['BOLEH', DK], ['DIWARISKAN', BL]], tagline: 'Berdasarkan sistem pewarisan Public Gold, hak perniagaan boleh *diwariskan kepada waris.* Bukan sahaja untuk diri sendiri, tapi *peluang keluarga meneruskannya.*', hl: HL, im: 'd', fy: .3 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Jangan salah faham', title: [['BUKAN DAFTAR', DK], ['ESOK TERUS KAYA', BL]], tagline: 'Kuncinya *ilmu, usaha dan konsisten.* Jadi penyimpan emas yang faham manfaatnya dahulu, kemudian *kongsi ilmu yang betul.* Pesan guru: kerja dealer ialah *mengajak orang menyimpan.*', hl: HL, im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'DULU RAGU,', l2: 'KINI TAHU!', col: BL, follow: 'Follow @taufik.pg', sub: 'Baru kenal Public Gold? Mula dengan *belajar menyimpan emas dahulu.* Tonton 5 langkah mudah di video pin profil. Jom simpan emas!', im: 'me', imH: 580, size: 120, strokes: [BL, LM, DK, '#8F9BFF', '#5566ff'] }); },
];
