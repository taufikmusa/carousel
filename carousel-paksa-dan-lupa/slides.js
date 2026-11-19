// carousel-palette VARIAN WARNA "Quiet Luxury": merah tua + emas. "Paksa dan Lupa" (7 slaid, 1080x1350).
var PALETTE = { bg: '#F4EDE3', ink: '#222022', blue: '#630002', orange: '#BDA174', muted: '#3b3639' };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var DK = '#222022', RD = '#630002', GD = '#BDA174';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '1', numCol: '#E4D7BE',
      lines: [
        { p: [['Formula menabung', DK]], size: 98 },
        { p: [['yang berjaya:', DK]], size: 98, lh: .92 },
        { p: [['PAKSA', RD]], size: 190, lh: .88 },
        { p: [['& LUPA.', RD]], size: 190, lh: .88 },
      ],
      titleY: 470, im: 'cover', imH: 420,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Langkah 01', title: [['LEBIH BAIK', DK], ['MENABUNG', RD]], tagline: 'Gaji tak cukup. Menabung pun tak cukup. Tapi pesan guru: *tabung walaupun terpaksa korek.* Simpan RM500, keluar RM400, *masih ada baki RM100.*', hl: GD, im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Langkah 02', title: [['JANGAN SELALU', DK], ['TENGOK BAKI', RD]], tagline: 'Ramai gagal bukan sebab tak pandai menabung, tapi sebab *terlalu mudah nampak duit sendiri.* Lagi kerap tengok, *lagi kuat godaan.*', hl: GD, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Langkah 03', title: [['POTONG GAJI', DK], ['SEBELUM MASUK', RD]], tagline: 'Mula *RM20 sebulan* ke Tabung Haji, tak dihubungkan dengan online banking. Nak tengok baki? Kena ke kaunter. *Itulah paksa dan lupa.*', hl: GD, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Langkah 04', title: [['TUKAR NOMBOR', DK], ['JADI EMAS', RD]], tagline: 'Bukan lagi RM500 dalam akaun, tapi *sekeping emas yang cantik.* Timbul rasa sayang nak jual, jadi *halangan psikologi* sebelum keluarkan simpanan.', hl: GD, im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Langkah 05', title: [['MULA DENGAN', DK], ['KEMAMPUAN', RD]], tagline: 'Mampu RM20, mulakan RM20. *Akaun Emas GAP Public Gold bermula RM100.* Ingat, emas bukan pengganti *dana kecemasan tunai.*', hl: GD, im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'DULU RAGU,', l2: 'KINI TAHU.', col: RD, follow: 'Follow @taufik.pg', sub: 'Paksa diri menyimpan, lupakan simpanan itu, dan *biar disiplin bekerja* untuk masa depan kita. *Jom simpan emas!*', im: 'me', imH: 580, size: 90, strokes: [RD, GD, DK, '#E4D7BE', '#8a1a1c'] }); },
];
