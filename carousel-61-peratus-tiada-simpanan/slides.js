// carousel-palette VARIAN WARNA "Quiet Luxury": merah tua + emas. "61% rakyat tiada simpanan kecemasan RM1,000" (9 slaid, 1080x1350). Data: Kosmo 22.11.2026.
var PALETTE = { bg: '#F4EDE3', ink: '#222022', blue: '#630002', orange: '#BDA174', muted: '#3b3639' };
var N = 9;
var ASSETS = { cover: 'cover.jpg', kosmo2: 'kosmo2.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', g: 'g.jpg', me: 'thumbs-up.png' };
var DK = '#222022', RD = '#630002', GD = '#BDA174';
var SLIDES = [
  function (x, i) { artBox(IMG.kosmo2, x, 0, 1080, 1350); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Laporan Kosmo, 22 Nov 2026', title: [['KERJA BERTAHUN,', DK], ['TIADA RM1,000', RD]], tagline: 'Bekerja 5, 10, 20 tahun, tapi *kereta rosak, anak sakit* atau hilang kerja, mula pening cari duit. Pinjam keluarga, guna kad kredit. *Ke mana perginya duit?*', hl: GD, im: 'a' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pesan guru emas saya', title: [['TAK ADA', DK], ['SISTEM SIMPANAN', RD]], tagline: '*"Kerja bertahun tapi simpanan RM1,000 pun tak ada, cubalah menabung emas dengan ilmu."* Masalahnya bukan tak bekerja keras, tapi *belum ada sistem* supaya gaji kekal jadi simpanan.', hl: GD, im: 'cover' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 01', title: [['JANGAN TUNGGU', DK], ['DUIT LEBIH', RD]], tagline: 'Tunggu duit lebih, *sampai bila-bila pun tak ada.* Asingkan simpanan *sebaik gaji masuk,* walaupun RM100 dahulu.', hl: GD, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 02', title: [['JANGAN BIAR DUIT', DK], ['MUDAH DIBELANJAKAN', RD]], size: 104, tagline: 'Baki bank nampak banyak, rasa *masih mampu berbelanja.* Sebab itu perlukan *disiplin dan sistem simpanan* yang betul.', hl: GD, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 03', title: [['MENABUNG EMAS', DK], ['DENGAN ILMU', RD]], tagline: 'Emas boleh jadi alat *mendisiplinkan simpanan.* Bila duit jadi emas, kita *fikir dua kali* sebelum menjualnya untuk perkara tak penting.', hl: GD, im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 04', title: [['MULA DENGAN', DK], ['KEMAMPUAN SENDIRI', RD]], tagline: 'Tak perlu tunggu ribuan ringgit. *Akaun Emas GAP Public Gold bermula RM100.* Beli sedikit demi sedikit ikut kemampuan.', hl: GD, im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 05', title: [['KONSISTEN', DK], ['LEBIH PENTING', RD]], tagline: 'Jangan pandang rendah simpanan kecil. *RM100 setiap bulan* membina tabiat jauh lebih baik daripada yang *hanya merancang tapi tak pernah bermula.*', hl: GD, im: 'g' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'MULAKAN', l2: 'HARI INI.', col: RD, follow: 'Follow @taufik.pg', sub: 'Ukuran kemajuan: setiap tahun *tabungan bertambah, harta berkembang, hutang berkurang.* Dana kecemasan tunai tetap penting. Hubungi saya untuk mula *emas GAP.* Jom simpan emas!', im: 'me', imH: 540, size: 110, strokes: [RD, GD, DK, '#E4D7BE', '#8a1a1c'] }); },
];
