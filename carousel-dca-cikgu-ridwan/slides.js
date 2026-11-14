// carousel-palette VARIAN WARNA "Cream & Dark Coffee": krim #FFFEC5 + kopi gelap #39241F. DCA — perkongsian Cikgu Ridwan (8 slaid, 1080x1350).
var PALETTE = { bg: '#FFFEC5', ink: '#39241F', blue: '#8A5A44', orange: '#E8DB7E', muted: '#39241F' };
var N = 8;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var DK = '#39241F', BR = '#8A5A44', HL = '#E8DB7E';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: 'DCA', numCol: '#F2E9A0', numSize: 760, numX: 40, numY: 960,
      lines: [
        { p: [['Beli RM764,', DK]], size: 150 },
        { p: [['kini RM550.', DK]], size: 150, lh: .9 },
        { p: [['Rugi ke?', BR]], size: 150, lh: .92 },
      ],
      titleY: 540, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Situasi', title: [['BELI JANUARI', DK], ['RM764 SEGRAM', BR]], tagline: 'Sekarang harga *RM550.* Tapi Cikgu Ridwan *masih untung* pada keseluruhan simpanan. Kenapa? Sebab beliau *tambah lagi bila harga turun.*', hl: HL, im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Apa itu DCA', title: [['DOLLAR COST', DK], ['AVERAGING', BR]], tagline: 'Beli aset *secara berkala* supaya *kos purata pembelian* seimbang dalam jangka panjang.', hl: HL, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Contoh kiraan', title: [['RM764 + RM550', DK], ['= RM657 PURATA', BR]], tagline: 'Gram sama setiap belian. Tambah belian ketiga *RM600,* kos purata turun lagi ke *RM638.* Belum campur spread dan kos transaksi.', hl: HL, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: '6 tahun menyimpan', title: [['DARI RM267', DK], ['SAMPAI RM764', BR]], tagline: 'Beli ketika *RM400, RM500, RM600,* malah *RM764.* Turun ke RM550 pun tak dilihat semata-mata sebagai kerugian.', hl: HL, im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pelajaran', title: [['KONSISTEN', DK], ['BUKAN TEKA HARGA', BR]], tagline: 'Jangan fokus pada *harga belian terakhir.* Tiada siapa tahu bila turun atau naik, jadi *beli berkala* dan lihat keseluruhan perjalanan.', hl: HL, im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pesan guru emas saya', title: [['BUKAN PECUT', DK], ['TAPI MARATHON', BR]], tagline: 'Tuan Haji Mohd Zulkifli Shafie: tak perlu berlumba atau ghairah kejar harga terendah. *Yang penting terus bergerak dan konsisten.*', hl: HL, im: 'f' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'KAWAL', l2: 'DISIPLIN.', col: BR, follow: 'Follow @taufik.pg', sub: 'Harga emas tak dapat dikawal, tapi *disiplin, ilmu dan strategi* boleh. Terima kasih Cikgu Ridwan atas perkongsian.', im: 'me', imH: 580, size: 128, strokes: [DK, BR, '#E8DB7E', '#B89A6A', '#5A3A2F'] }); },
];
