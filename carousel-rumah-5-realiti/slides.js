// carousel-palette VARIAN "Electric Studio" (biru + lime). "5 Realiti Pahit Harga Rumah" (7 slaid, 1080x1350).
var PALETTE = { bg: '#F5F5F0', ink: '#10121B', blue: '#3040FF', orange: '#C8E83A', muted: '#2b2e3a' };
var N = 7;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', me: 'thumbs-up.png' };
var BL = '#3040FF', DK = '#10121B', LM = '#C8E83A', HL = '#DFFF70';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5', numCol: '#C8E83A',
      lines: [
        { p: [['Realiti pahit', DK]], size: 140 },
        { p: [['harga ', DK], ['rumah', BL]], size: 160, lh: .9 },
        { p: [['anak muda', BL]], size: 160, lh: .92 },
        { p: [['perlu faham!', DK]], size: 112, lh: .98 },
      ],
      titleY: 450, im: 'cover', imH: 340,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Realiti 01', title: [['HARGA NAIK,', DK], ['GAJI BELUM TENTU', BL]], tagline: 'Rumah RM500,000 bukan lagi luar biasa di sesetengah kawasan. Tapi *kenaikan gaji* belum tentu mampu *mengejar* kenaikan harga hartanah.', hl: HL, im: 'a', fy: .35 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Realiti 02', title: [['DEPOSIT PUN', DK], ['SATU CABARAN', BL]], tagline: 'Rumah RM500,000, deposit 10% sahaja sudah *RM50,000.* Belum termasuk *kos guaman, duti setem* dan perbelanjaan lain.', hl: HL, im: 'b' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Realiti 03', title: [['SIMPAN SAHAJA', DK], ['ADA RISIKO', BL]], tagline: 'Angka simpanan bertambah, rasa selamat. Tapi *inflasi* boleh menjadikan *kuasa beli* duit semakin mengecil, sementara harga terus berubah.', hl: HL, im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Realiti 04', title: [['EMAS SEBAHAGIAN', DK], ['TABUNG DEPOSIT', BL]], tagline: 'Emas ada sejarah panjang mengekalkan *kuasa beli.* Selain tunai kecemasan, pertimbangkan emas fizikal. Cuma harga emas *turun naik* dan *tiada jaminan* mengatasi harga rumah.', hl: HL, im: 'd' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Realiti 05', title: [['MULA KECIL,', DK], ['TAPI KONSISTEN', BL]], tagline: 'Jangan tunggu lebihan besar. *Tetapkan sasaran deposit* dan bina sedikit demi sedikit. Akaun GAP Public Gold bermula *serendah RM100* mengikut harga semasa.', hl: HL, im: 'e' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'BIAR DUIT', l2: 'BEKERJA!', col: BL, follow: 'Follow @taufik.pg', sub: 'Impian rumah bukan sekadar soal gaji, tapi cara kita *mengurus, menyimpan dan melindungi* hasil titik peluh. Moga bermanfaat.', im: 'me', imH: 580, size: 130, strokes: [BL, LM, DK, '#8F9BFF', '#5566ff'] }); },
];
