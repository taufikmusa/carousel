// carousel-palette VARIAN "Quiet Luxury". "Bajet RM100,000 simpan emas: 3 pilihan Gold Bar" (7 slaid, 1080x1350).
var PALETTE = { bg: '#F4EDE3', ink: '#222022', blue: '#630002', orange: '#BDA174', muted: '#3b3639' };
var N = 7;
var ASSETS = { cover: 'set-jongkong-bertingkat-bungamas.jpg', a: 'jongkong-100g-kad-bungamas-meja.jpg', b: 'jongkong-10g-closeup.jpg', c: 'jongkong-50g-100g-atas-kad-tikar.jpg', d: 'timbunan-jongkong-50g-100g-tikar.jpg', e: 'dulang-merah-1kg-koleksi-penuh.jpg', me: 'thumbs-up.png' };
var RD = '#630002', GD = '#BDA174', DK = '#222022', HL = '#E4D7BE';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '3', numCol: '#E4D7BE',
      lines: [
        { p: [['Bajet RM100,000', DK]], size: 100 },
        { p: [['simpan ', DK], ['emas?', RD]], size: 128, lh: .92 },
        { p: [['Faham 3 pilihan', DK]], size: 100, lh: .95 },
        { p: [['sebelum beli.', RD]], size: 100, lh: .95 },
      ],
      titleY: 470, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pilihan 01', title: [['GOLD BAR', DK], ['100 GRAM', RD]], tagline: 'Untuk simpan jumlah besar dan jual *sekaligus* kelak. Biasanya semakin besar berat, *semakin rendah spread.* Contoh: sekitar 7%, tertakluk harga dan kadar semasa.', hl: HL, im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pilihan 02', title: [['GOLD BAR', DK], ['10 GRAM', RD]], tagline: 'Pilihan *fleksibiliti.* Perlu RM20,000? *Jual sebahagian sahaja,* tak perlu jual semua. Lebih praktikal untuk pajakan Ar-Rahnu, tertakluk penerimaan dan syarat institusi.', hl: HL, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pilihan 03', title: [['GOLD BAR', DK], ['50 GRAM', RD]], tagline: 'Pilihan *pertengahan:* tak terlalu besar, tak terlalu kecil. Sesuai untuk yang mahu *keseimbangan* antara kadar spread dan fleksibiliti bila mencairkan simpanan.', hl: HL, im: 'c', fy: .55 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Jadi, yang mana?', title: [['IKUT MATLAMAT', DK], ['ANDA', RD]], tagline: 'Simpan banyak, jual sekaligus → pertimbang *saiz besar.* Nak jual sedikit demi sedikit → *saiz kecil* mungkin lebih sesuai. Dua keping 100g, empat keping 50g atau 20 keping 10g: semua ada kelebihan.', hl: HL, im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Belum ada RM100,000?', title: [['TAK PERLU', DK], ['RISAU', RD]], tagline: 'Mulakan emas *serendah RM100* melalui Akaun Emas GAP Public Gold. Kumpul sedikit demi sedikit sehingga *gram bertambah.*', hl: HL, im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'DULU RAGU,', l2: 'KINI TAHU!', col: RD, follow: 'Follow @taufik.pg', sub: 'Bukan sekadar berapa banyak emas dibeli, tapi *kenapa menyimpan* dan *bila* mahu guna. Rujuk video pin saya untuk panduan buka Akaun GAP.', im: 'me', imH: 580, size: 130, strokes: [RD, GD, DK, '#E4D7BE', '#8a1a1c'] }); },
];
