// carousel-palette VARIAN "Bright Yellow" (kuning terang + arang). "Kerja Bagus Kena Nampak" (8 slaid, 1080x1350).
var PALETTE = { bg: '#FFE94A', ink: '#15130A', blue: '#7A5A00', orange: '#FFF7B0', hl: '#FFF7B0', ghost: '#FFD91F', muted: '#2a2610', brush: ['#15130A', '#FFF7B0', '#FFFFFF', '#B8A100', '#3a3412'] };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var DK = '#15130A', WH = '#7A5A00';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '2',
      lines: [
        { p: [['Kerja bagus', DK]], size: 140 },
        { p: [['sahaja', WH]], size: 150, lh: .9 },
        { p: [['tak cukup.', DK]], size: 140, lh: .92 },
        { p: [['Orang kena nampak.', DK]], size: 76, lh: 1.05 },
      ],
      titleY: 450, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Nasihat Dr Rizal (podcast)', title: [['KERJA BAGUS &', DK], ['NAMPAK BAGUS', WH]], tagline: '“Kerja bagus dan kena nampak kerja bagus. *Bukan hanya kerja bagus.*” Kita bukan sahaja buat kerja baik, tapi pastikan *orang tahu dan nampak hasilnya.*', im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 01', title: [['BERANI TUNJUK &', DK], ['CERITA', WH]], tagline: 'Datang awal, siap tugasan tanpa disuruh, tapi *tak pernah maklum kepada ketua?* Masa penilaian, bos tak tahu sumbangan kita. Belajar *communicate,* bukan menunjuk-nunjuk, tapi pastikan hasil kerja diketahui.', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 02', title: [['BUKAN NAMPAK', DK], ['SIBUK, TAPI PERFORM', WH]], tagline: 'Pandai cakap tapi hasil biasa-biasa? *Tak ke mana.* Kena ada *kualiti dan hasil,* prestasi jauh lebih baik daripada standard. Kata Dr Rizal: buat *tiga kali ganda lebih baik.* Visibility tanpa performance tak cukup.', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Dalam dunia simpanan emas', title: [['PENGALAMAN YANG', DK], ['DISIMPAN SENDIRI', WH]], tagline: 'Ramai dah lama simpan emas, ada yang puluhan gram, ada yang capai matlamat keluarga. Tapi *tak pernah berkongsi.* Mungkin ada kawan atau saudara yang *bergelut simpanan bocor.*', im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Mula serendah RM100', title: [['BELAJAR, AMAL,', DK], ['KONGSI', WH]], tagline: 'Melalui Akaun Emas GAP Public Gold, mula *serendah RM100.* Tak perlu tunggu kaya, tak perlu tunggu jadi pakar baru berkongsi. *Kongsi apa yang kita sendiri faham dan lalui.*', im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'ILMU YANG DIKONGSI', l2: 'UBAH HIDUP.', col: WH, follow: 'Follow @taufik.pg', sub: 'Jadilah yang *mengamalkan dan membantu orang lain memahami.* Ilmu yang disimpan sendiri hanya memberi manfaat kepada kita. Dulu ragu, kini tahu. Jom simpan emas!', im: 'me', imH: 580, size: 92, strokes: ['#15130A', '#FFF7B0', '#FFFFFF', '#B8A100', '#3a3412'] }); },
];
