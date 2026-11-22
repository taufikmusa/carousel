// carousel-palette VARIAN WARNA "Red Cherry". "Keistimewaan emas bantu belajar menyimpan" (7 slaid, 1080x1350). Data: Kosmo 22.11.2026 (61% tiada simpanan RM1,000).
var PALETTE = { bg: '#FDF4F2', ink: '#2A0A10', blue: '#C2102E', orange: '#F7CFD3', hl: '#F9D5D8', ghost: '#F7DADC', muted: '#4a2a30', brush: ['#C2102E', '#F7CFD3', '#2A0A10', '#E4566B', '#8E0B22'] };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var DK = '#2A0A10', RD = '#C2102E';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '61',
      lines: [
        { p: [['61% rakyat tiada', DK]], size: 90 },
        { p: [['RM1,000.', RD]], size: 150, lh: .92 },
        { p: [['Emas boleh ajar kita', DK]], size: 74, lh: 1.05 },
        { p: [['belajar menyimpan.', DK]], size: 74, lh: .98 },
      ],
      titleY: 400, im: 'cover', imH: 640,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Keistimewaan 01', title: [['EMAS BANTU', DK], ['MENDISIPLINKAN DIRI', RD]], size: 118, tagline: 'Duit tunai mudah digunakan. Bila mula kumpul emas, kita *lebih berhati-hati* sebelum menjualnya, sebab *sayang nak lepaskan* emas yang dah dikumpul.', im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Keistimewaan 02', title: [['FOKUS KUMPUL', DK], ['ASET', RD]], tagline: 'Setiap kali menabung, kita bukan sekadar lihat baki duit, tapi *jumlah gram* yang berjaya dikumpul. Sedikit demi sedikit, *lama-lama jadi banyak.*', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Keistimewaan 03', title: [['TAK BOLEH', DK], ['DICETAK SESUKA HATI', RD]], size: 118, tagline: 'Berbeza dengan wang kertas, emas *perlu dilombong dan diproses.* Bekalannya terhad dan *memerlukan usaha* untuk mendapatkannya.', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Keistimewaan 04', title: [['SEJARAH KEKAL', DK], ['KUASA BELI', RD]], tagline: 'Nilai wang kertas boleh *terhakis akibat inflasi.* Emas pula digunakan sebagai *penyimpan nilai* sejak ribuan tahun dahulu.', im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Keistimewaan 05', title: [['HARTA UNTUK', DK], ['DIWARISKAN', RD]], tagline: 'Apa yang kita kumpul hari ini boleh jadi sebahagian *harta untuk anak-anak* dan generasi seterusnya. *GAP Public Gold bermula RM100.*', im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'JANGAN SAMPAI', l2: 'TERCARI RM1,000.', col: RD, follow: 'Follow @taufik.pg', sub: 'Bukan berapa lama kita bekerja, tapi *berapa banyak hasil peluh* yang masih kita simpan. *Dana kecemasan tunai* tetap perlu, emas untuk jangka panjang. Jom simpan emas!', im: 'me', imH: 560, size: 90, strokes: ['#C2102E', '#F7CFD3', '#2A0A10', '#E4566B', '#8E0B22'] }); },
];
