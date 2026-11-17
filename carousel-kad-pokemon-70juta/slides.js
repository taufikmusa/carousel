// carousel-palette VARIAN "Red Cherry" (ceri merah + burgundy gelap + blush). "Kad Pokemon RM70 juta vs emas fizikal" (10 slaid, 1080x1350).
var PALETTE = { bg: '#FDF4F2', ink: '#2A0A10', blue: '#C2102E', orange: '#F7CFD3', hl: '#F9D5D8', ghost: '#F7DADC', muted: '#4a2a30', brush: ['#C2102E', '#F7CFD3', '#2A0A10', '#E4566B', '#8E0B22'] };
var N = 10;
var ASSETS = { cover: 'kad-mangga.jpg', a: 'child.jpg', b: 'binder-kad-durian.jpg', c: 'koleksi-binder-kad.jpg', d: 'gift.jpg', e: 'kad-merdeka-69.jpg', f: 'signpost.jpg', g: 'jongkong-merak-100g-dulang-merah.jpg', h: 'dulang-merah-1kg-koleksi-penuh.jpg', me: 'thumbs-up.png' };
var CH = '#C2102E', DK = '#2A0A10';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '70',
      numCol: '#F7DADC', numSize: 900, numX: 120,
      lines: [
        { p: [['Sekeping kad', DK]], size: 132 },
        { p: [['dijual', DK], [' RM70 juta?', CH]], size: 112, lh: .92 },
        { p: [['Apa yang jadikannya', DK]], size: 82, lh: 1.0 },
        { p: [['begitu bernilai?', CH]], size: 82, lh: 1.0 },
      ],
      titleY: 470, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kisah Jolina', title: [['60,000 KAD', DK], ['SEJAK UMUR 7', CH]], tagline: 'Jolina Gisèle (20, Switzerland) memiliki *lebih 60,000 kad Pokémon* yang dikumpul bapanya, Urs, sejak dia berusia tujuh tahun. Pada mulanya cuma *aktiviti bersama anak perempuan.*', im: 'a', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Hobi jadi besar', title: [['EMPAT JAM', DK], ['SEHARI MENCARI', CH]], tagline: 'Bapanya cari kad di eBay dan bina rangkaian penjual dari *Jepun, London, Jerman, Belanda dan AS.* Ada satu kad dibeli pada harga sekitar *£460,000!*', im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Nilai koleksi', title: [['£90 JUTA', DK], ['HAMPIR RM500 JUTA', CH]], tagline: 'Selepas lebih sedekad, koleksi melebihi 60,000 keping dianggarkan *sekurang-kurangnya £90 juta,* bersamaan *hampir RM500 juta.* Itu anggaran, bukan nilai jualan sebenar.', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Rekod lelongan', title: [['PIKACHU ILLUSTRATOR', DK], ['RM60 JUTA+', CH]], size: 84, tagline: 'Februari 2026, kad *Pikachu Illustrator* milik Logan Paul dilelong *US$16.49 juta,* melebihi RM60 juta. Disahkan *Guinness World Records* sebagai kad trading paling mahal dijual melalui lelongan.', im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Dari mana nilainya?', title: [['NILAI', DK], ['DIBENTUK FAKTOR', CH]], tagline: '*Jumlah terhad, keadaan fizikal kad, permintaan pengumpul* dan kesanggupan orang lain membayar pada harga itu. Pada asalnya, ia bukan bernilai jutaan ringgit.', im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tapi ingat', title: [['TAK SEMUA', DK], ['AKAN NAIK NILAI', CH]], tagline: 'Dalam dunia barang koleksi, ada yang jadi sangat berharga, ada juga yang *akhirnya tiada permintaan.* Nilai bergantung pada *rarity, condition dan komuniti pengumpul.*', im: 'f' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Aset lain: emas fizikal', title: [['PASARAN', DK], ['KOMODITI ANTARABANGSA', CH]], size: 78, tagline: 'Emas dinilai ikut *berat, ketulenan dan harga pasaran semasa.* Tak perlu tunggu peminat tertentu untuk menjualnya. Bagi saya, ia salah satu pilihan *wajar dipertimbangkan* untuk simpanan jangka panjang.', im: 'g' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Mula ikut kemampuan', title: [['TAK PERLU TUNGGU', DK], ['ADA RM500 JUTA', CH]], tagline: 'Di Public Gold, mulakan *Gold Accumulation Program (GAP)* serendah *RM100.* Bila gram cukup, boleh dikeluarkan dalam bentuk *emas fizikal.* Simpanan emas turun naik, buat ikut kemampuan.', im: 'h' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'APA YANG KITA', l2: 'KUMPUL HARI INI?', col: CH, follow: 'Follow @taufik.pg', sub: 'Sedikit demi sedikit bertahun-tahun boleh bawa nilai besar. Saya suka ada sebahagian simpanan dalam *emas fizikal.* Dulu ragu, kini tahu. Jom simpan emas!', im: 'me', imH: 580, size: 100, strokes: ['#C2102E', '#F7CFD3', '#2A0A10', '#E4566B', '#8E0B22'] }); },
];
