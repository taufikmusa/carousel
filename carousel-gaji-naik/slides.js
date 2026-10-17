// 5 Tanda Gaji Naik Tapi Dompet Tetap Kering — carousel-palette (7 slaid)
var N = 7;
var ASSETS = { bungamas: 'bungamas.jpg', bungaraya: 'bungaraya.jpg', dinar: 'dinar.jpg', tikar: 'tikar.jpg', hitam: 'hitam.jpg', me: 'peluk-tubuh.png' };
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5', numCol: '#4F7FD0', titleY: 540,
      lines: [
        { p: [['Gaji Naik,', K.ink]], size: 196 },
        { p: [['Dompet', K.ink]], size: 196, lh: .84 },
        { p: [['tetap ', K.ink], ['kering.', K.orange]], size: 150, lh: .98 },
        { p: [['5 tanda yang anda patut kenal pasti.', K.ink]], size: 46, lh: 1.5, ls: -1 },
      ],
    });
    artBox(IMG.tikar, x + 600, 1010, 480, 340, .5, .5);
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tanda 01', title: [['GAJI NAIK,', K.ink], ['BELANJA NAIK', '#847882']], tagline: 'Setiap kenaikan gaji diikuti *kenaikan taraf belanja*. Gaji bertambah *RM500*, komitmen dan perbelanjaan baru turut melonjak dalam *jumlah yang sama*.', im: 'bungamas', fy: .55, sw: [{ c: '#4E423F' }, { c: '#847882' }, { c: '#CBA786' }, { c: '#F2D28F' }] }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tanda 02', title: [['MEWAH JADI', K.ink], ['KEPERLUAN', '#A14655']], tagline: 'Barangan *mewah* dahulu kini bertukar menjadi *keperluan*. Standard hidup yang terus dinaikkan *menelan setiap sen* kenaikan pendapatan anda.', im: 'bungaraya', fy: .5, sw: [{ c: '#2C2828' }, { c: '#A14655' }, { c: '#B3AE58' }, { c: '#ECC57F' }] }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tanda 03', title: [['SENTIASA', K.ink], ['TAK CUKUP', '#99715C']], tagline: 'Rasa *tidak cukup* walau berpendapatan tinggi. Perbelanjaan membesar *lebih pantas* daripada kemampuan anda untuk *menyimpan*.', im: 'dinar', fy: .55, sw: [{ c: '#272A1A' }, { c: '#99715C' }, { c: '#CEDFEF' }, { c: '#F6F9FD', line: 1 }] }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tanda 04', title: [['SIMPANAN', K.ink], ['MENDATAR', '#955F34']], tagline: 'Kadar simpanan peribadi *kekal mendatar atau merosot*. Kenaikan gaji sepatutnya melonjakkan *peratusan wang* yang berjaya diselamatkan.', im: 'tikar', sw: [{ c: '#381C24' }, { c: '#955F34' }, { c: '#AA804A' }, { c: '#DBD97B' }] }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tanda 05', title: [['KUNCI KE', K.ink], ['DALAM EMAS', '#7E3F39']], tagline: '*Kunci lebihan gaji ke dalam emas* sebelum sempat dibelanjakan. Tukarkan kenaikan pendapatan kepada *aset kekal* sebelum nafsu berbelanja mengambil alih.', im: 'hitam', fy: .5, sw: [{ c: '#181413' }, { c: '#7E3F39' }, { c: '#A98773' }, { c: '#F1F1ED', line: 1 }] }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'KUNCI GAJI', l2: 'JADI ASET!', follow: 'Follow @taufik.pg', im: 'me', imH: 560, size: 150, sub: 'Punca utama kegagalan kewangan *bukan kerana gaji kecil*. Tetapi *nafsu gaya hidup* yang tidak pernah kenyang.' }); },
];
