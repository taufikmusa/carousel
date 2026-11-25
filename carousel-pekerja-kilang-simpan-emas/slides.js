// carousel-palette VARIAN WARNA "White Metallic" (putih perak + kelabu keluli). "5 Bukti Pekerja Kilang Boleh Bina Simpanan Emas" (7 slaid, 1080x1350).
var PALETTE = { bg: '#FAFBFC', ink: '#15181E', blue: '#4A5568', orange: '#D5DAE1', hl: '#E1E5EB', ghost: '#E9ECF1', muted: '#2f343d', brush: ['#9AA3B0', '#D5DAE1', '#15181E', '#5A6270', '#EEF1F5'] };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var DK = '#15181E', ST = '#4A5568';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5',
      lines: [
        { p: [['Bukti pekerja kilang', DK]], size: 100 },
        { p: [['pun boleh', DK]], size: 100, lh: .94 },
        { p: [['simpan emas.', ST]], size: 128, lh: .92 },
        { p: [['Walaupun gaji tak besar.', DK]], size: 56, lh: 1.3 },
      ],
      titleY: 430, im: 'cover', imH: 400,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Bukti 01', title: [['DISIPLIN LEBIH', DK], ['DARI PENDAPATAN', ST]], tagline: 'Bergaji kecil tapi *konsisten menyimpan* boleh bina kekayaan. Bergaji besar pun boleh *hidup tanpa simpanan* kalau tak pandai mengurus duit.', im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Bukti 02', title: [['RM100 SEBULAN,', DK], ['RM3 SEHARI', ST]], tagline: 'Tak perlu tunggu duit banyak. Dengan *RM100 sebulan* sudah boleh mula simpan emas melalui *GAP Public Gold.* Yang penting, *bina tabiat* menyimpan dahulu.', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Bukti 03', title: [['JAGA NILAI', DK], ['DUIT PELUH', ST]], tagline: 'Inflasi buat *kuasa beli duit berkurang.* Sebahagian simpanan boleh diperuntukkan kepada emas untuk *memelihara nilai kekayaan* jangka panjang.', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Bukti 04', title: [['JANGAN BERGANTUNG', DK], ['KWSP SEMATA', ST]], size: 118, tagline: 'KWSP penting untuk persaraan. Tapi kita juga perlukan *simpanan tambahan* yang boleh diakses *ikut keperluan dan perancangan sendiri.*', im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Bukti 05', title: [['SEMUA BERMULA', DK], ['DENGAN LANGKAH PERTAMA', ST]], size: 106, tagline: 'Yang kini ada *puluhan atau ratusan gram* pun bermula dengan jumlah kecil. Tak ada siapa terus memiliki *emas berkilo-kilo dalam sehari.*', im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'MULA DENGAN', l2: 'APA YANG ADA.', col: ST, follow: 'Follow @taufik.pg', sub: 'Jawatan dan pendapatan mungkin berbeza, tapi *peluang membina simpanan terbuka kepada semua.* Jangan tunggu gaji besar. Dulu ragu kini tahu, *jom simpan emas!*', im: 'me', imH: 560, size: 90, strokes: ['#9AA3B0', '#D5DAE1', '#15181E', '#5A6270', '#EEF1F5'] }); },
];
