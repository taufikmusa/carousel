// carousel-palette VARIAN "Red Cherry". "Kita simpan token? Sejarah duit kertas & emas" (10 slaid, 1080x1350).
var PALETTE = { bg: '#FDF4F2', ink: '#2A0A10', blue: '#C2102E', orange: '#F7CFD3', hl: '#F9D5D8', ghost: '#F7DADC', muted: '#4a2a30', brush: ['#C2102E', '#F7CFD3', '#2A0A10', '#E4566B', '#8E0B22'] };
var N = 10;
var ASSETS = { cover: 'cover.jpg', p1: 'p1.jpg', p2: 'p2.jpg', p3: 'p3.jpg', p4: 'p4.jpg', p5: 'p5.jpg', p6: 'p6.jpg', p7: 'p7.jpg', p8: 'p8.jpg', me: 'thumbs-up.png' };
var CH = '#C2102E', DK = '#2A0A10';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '?', numCol: '#F7DADC',
      lines: [
        { p: [['Kita ingat', DK]], size: 120 },
        { p: [['simpan duit.', DK]], size: 120, lh: .92 },
        { p: [['Rupanya simpan', DK]], size: 100, lh: .98 },
        { p: [['token susut nilai.', CH]], size: 100, lh: .98 },
      ],
      titleY: 450, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Analogi token dobi', title: [['TOKEN BUKAN', DK], ['DUIT SEBENAR', CH]], tagline: 'Masuk *RM15* di kedai dobi, keluar 15 token. Bawa ke restoran atau stesen minyak? *Tak boleh guna.* Token cuma alat mewakili nilai dalam satu sistem. Duit kertas pun asalnya macam itu.', im: 'p1', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: '01: Asalnya mewakili emas', title: [['BRETTON WOODS', DK], ['1944', CH]], tagline: '*44 negara* bersetuju guna US Dollar dengan sandaran emas. *35 Dollar = 1 troy ounce emas* (31.1 gram). Duit kertas cuma *kertas yang mewakili emas* yang disimpan.', im: 'p2' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: '02: 15 Ogos 1971', title: [['HUBUNGAN DENGAN', DK], ['EMAS TERPUTUS', CH]], tagline: 'Presiden *Richard Nixon* umum penamatan penukaran US Dollar kepada emas. Duit kertas tak lagi bersandarkan emas. Itulah *sistem wang fiat:* nilai bergantung pada *kepercayaan, undang-undang dan penerimaan.*', im: 'p3' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: '03: Rizab bank pusat', title: [['KITA SIMPAN KERTAS,', DK], ['EMAS TETAP RIZAB', CH]], tagline: 'Selepas sistem tamat, kita terus guna duit kertas, sedangkan *emas masih jadi aset rizab penting* bank-bank pusat dunia. Kenapa kita terlalu selesa simpan kekayaan dalam kertas yang *kuasa belinya boleh terhakis?*', im: 'p4' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: '04: Nombor dalam akaun', title: [['KITA TERTIPU', DK], ['DENGAN NOMBOR', CH]], tagline: 'RM10,000 dalam bank, *sepuluh tahun kemudian masih RM10,000.* Tapi mampukah ia beli barang yang sama? *Belum tentu.* Itu kesan *inflasi:* nombor tak berkurang, tapi kuasa beli mengecil.', im: 'p5' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: '05: Simpan nilai', title: [['SATU DINAR', DK], ['4.25 GRAM', CH]], tagline: 'Dalam sejarah yang sering diketengahkan, satu dinar pada zaman Rasulullah SAW mampu membeli *seekor kambing.* Harga emas dalam Ringgit naik, tapi itu tak bermakna penyimpan jadi kaya. *Emas membantu mengekalkan kuasa beli.*', im: 'p6' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Seimbang', title: [['TUNAI UNTUK HARIAN,', DK], ['ASET UNTUK JANGKA PANJANG', CH]], size: 66, tagline: 'Wang tunai tetap penting untuk bil, barang dan keperluan keluarga. Untuk simpanan jangka panjang, *pelbagaikan sebahagian kekayaan* kepada aset fizikal seperti emas.', im: 'p7' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Jadi, apa boleh buat?', title: [['MULA DENGAN', DK], ['RM100 SAHAJA', CH]], tagline: 'Melalui *Akaun Emas GAP Public Gold,* kumpul gram demi gram. Bila cukup dan bersedia, keluarkan dalam *emas fizikal.* Harga emas turun naik, simpan ikut kemampuan. Nak tahu lebih? *PM saya, tiada paksaan.*', im: 'p8' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'SIMPAN NILAI,', l2: 'BUKAN TOKEN.', col: CH, follow: 'Follow @taufik.pg', sub: 'Orang lain sibuk mengumpul nombor. Yang faham nilai sibuk *mengumpul aset.* Dulu ragu, kini tahu. Jom simpan emas! Kredit analogi: Tn Mohd Zulkifli Shafie.', im: 'me', imH: 580, size: 118, strokes: ['#C2102E', '#F7CFD3', '#2A0A10', '#E4566B', '#8E0B22'] }); },
];
