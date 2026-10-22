// Carousel "Nak simpan emas, tapi takut hilang dan rasa duit belum cukup?" — 5 perkara akaun emas GAP Public Gold. carousel-ivory MAROON, 8 slaid, 1080x1080 (1:1).
// hook gelap → kenapa ramai belum mula → 5 perkara (RM100 · tak simpan sendiri · keluar fizikal · jual semula · jangka panjang) → CTA + potret.
var N = 8;
var THEME = 'maroon';
var DARK = [0, 7]; var NODOTS = [7];
var ASSETS = { me: 'tunjuk-kamera.png', home: 'app-home.jpg', buy: 'app-buy100.jpg', dinar: 'app-dinar.jpg', bm: 'app-bungamas.jpg', set: 'p-set.jpg' };
var D = { pgcode: 'PG00359605', wa: '60132740711', web: 'simpanemasfizikal.com' };

// skrin app dalam bingkai telefon (potongan: sy..sy+sh piksel sumber)
function phone(im, cx, y, w, sy, sh) {
  var s = w / im.width, h = sh * s, x = cx - w / 2, b = 12;
  X.save(); X.shadowColor = 'rgba(0,0,0,.35)'; X.shadowBlur = 36; X.shadowOffsetY = 14; rr(x - b, y - b, w + 2 * b, h + 2 * b, 44); X.fillStyle = '#16110F'; X.fill(); X.restore();
  X.save(); rr(x, y, w, h, 34); X.clip(); X.drawImage(im, 0, sy, im.width, sh, x, y, w, h); X.restore();
  return h;
}
function check(y, title, text) { card(M, y, 936, 104, { bar: 1 }); checkCircle(146, y + 52, 27); T(title, 192, y + 46, F.ss(800, 30), K.maroon); T(text, 192, y + 82, F.ss(500, 26), K.ink); }

var SLIDES = [
  // 1 — hook (gelap)
  function (i) {
    eyebrow('Akaun Emas GAP Public Gold', M, 96, true);
    headline([[['Nak simpan', 'white']], [['emas, tapi', 'goldl']], [['takut hilang', 'white']], [['& duit belum', 'goldl']], [['cukup?', 'goldil']]], M, 215, { size: 96, maxW: 520 });
    para('Saya rasa ini antara sebab ramai orang *masih belum mula* menabung emas.', M, 800, 480, 30, { dark: true });
    phone(IMG.home, 810, 150, 360, 0, 2000);
  },
  // 2 — kenapa ramai belum mula
  function (i) {
    eyebrow('Kenapa ramai belum mula', M, 96);
    headline([[['Takut hilang,', 'ink']], [['modal belum cukup?', 'red']]], M, 225, { size: 98 });
    card(M, 330, 936, 112, { bar: 1 }); crossCircle(146, 386, 27); T('Takut simpan emas fizikal di rumah', 192, 378, F.ss(800, 30), K.maroon); T('Risau hilang, risau kena curi.', 192, 416, F.ss(500, 26), K.ink);
    card(M, 462, 936, 112, { bar: 1 }); crossCircle(146, 518, 27); T('Fikir nak mula kena modal besar', 192, 510, F.ss(800, 30), K.maroon); T('Akhirnya hasrat nak menyimpan tinggal hasrat.', 192, 548, F.ss(500, 26), K.ink);
    box(M, 620, 936, 340, 'red', 28);
    T('PESAN GURU SAYA', 112, 676, F.ss(700, 24), TH.eyeD, 'left', 3); T('Tn. Mohd Zulkifli Shafie', 112, 718, F.pf(900, 38), goldFillL);
    para('Kekayaan bukan sekadar tentang berapa banyak duit dalam akaun bank, tetapi juga tentang *aset yang berjaya kita kumpulkan.*', 112, 770, 856, 30, { dark: true, lh: 1.4 });
  },
  // 3 — perkara 1
  function (i) {
    eyebrow('Perkara 1', M, 96);
    headline([[['Mula', 'ink']], [['serendah', 'ink']], [['RM100.', 'red']]], M, 225, { size: 104, maxW: 520 });
    para('Tak perlu tunggu duit banyak. Kumpul emas *sedikit demi sedikit* ikut kemampuan, *tanpa komitmen bulanan yang wajib.*', M, 560, 500, 30, { lh: 1.4 });
    card(M, 790, 500, 190, { bar: 1 }); para('Asingkan sebahagian duit untuk emas supaya *tak habis* dibelanja pada perkara kurang penting.', 112, 828, 420, 27, { lh: 1.35 });
    phone(IMG.buy, 810, 150, 400, 110, 1650);
  },
  // 4 — perkara 2
  function (i) {
    eyebrow('Perkara 2', M, 96);
    headline([[['Tak perlu simpan', 'ink']], [['emas sendiri.', 'red']]], M, 225, { size: 104 });
    para('Simpanan emas GAP *disandarkan kepada emas fizikal,* jadi tak perlu risau tempat nak simpan jongkong sendiri sejak hari pertama.', M, 410, 936, 31);
    check(580, 'Disandarkan kepada emas fizikal', 'Bukan sekadar nombor dalam sistem.');
    check(704, 'Disahkan patuh syariah', 'Oleh Amanie Advisors.');
    check(828, 'Disimpan oleh Public Gold', 'Tanpa caj simpanan.');
  },
  // 5 — perkara 3
  function (i) {
    eyebrow('Perkara 3', M, 96);
    headline([[['Boleh keluarkan', 'ink']], [['emas fizikal.', 'red']]], M, 225, { size: 104 });
    para('Bila gram dah terkumpul, tebus dalam bentuk *jongkong emas atau dinar,* tertakluk kepada denominasi dan caj berkaitan.', M, 410, 936, 31);
    phone(IMG.bm, 330, 585, 380, 500, 1330); phone(IMG.dinar, 750, 585, 380, 500, 1330);
  },
  // 6 — perkara 4
  function (i) {
    eyebrow('Perkara 4', M, 96);
    headline([[['Boleh jual bila', 'ink']], [['perlukan tunai.', 'red']]], M, 225, { size: 104 });
    para('Semak baki dan urus transaksi melalui platform Public Gold. Kalau kecemasan, emas dalam akaun boleh *dijual semula kepada Public Gold,* tertakluk harga dan terma semasa. Emas juga berpotensi jadi *cagaran Ar-Rahnu,* tertakluk penilaian institusi.', M, 410, 936, 30);
    phone(IMG.home, 330, 700, 520, 170, 560);
    box(630, 680, 378, 300, 'red', 26); T('Tetap sediakan', 660, 750, F.ss(700, 30), '#FFFFFF'); T('dana kecemasan', 660, 792, F.pf(900, 38), goldFillL); T('tunai.', 660, 836, F.pf(900, 38), goldFillL);
    para('Emas dan wang kecemasan ada peranan masing-masing.', 660, 876, 320, 24, { dark: true, lh: 1.3 });
  },
  // 7 — perkara 5
  function (i) {
    eyebrow('Perkara 5', M, 96);
    headline([[['Bina simpanan', 'ink']], [['jangka panjang.', 'red']]], M, 225, { size: 104 });
    para('Melalui *GAP Junior,* simpanan emas boleh dimulakan untuk anak-anak yang memenuhi syarat. Kumpul sedikit demi sedikit untuk *pendidikan anak, persediaan haji* atau keperluan keluarga.', M, 410, 936, 31);
    fadePhoto(IMG.set, 540, 900, 640, 90);
  },
  // 8 — CTA (gelap + potret)
  function (i) {
    eyebrow('Mula hari ini', M, 96, true);
    headline([[['Mula ikut', 'goldl']], [['kemampuan,', 'white']], [['tak perlu', 'goldl']], [['tunggu sempurna.', 'goldil']]], M, 215, { size: 84, maxW: 600 });
    para('Bukan berapa gram hari ini, tapi *tabiat menyimpan yang konsisten.* *PM saya* untuk terang cara buka akaun GAP, *percuma.*', M, 535, 470, 27, { dark: true, lh: 1.4 });
    cutoutBC(IMG.me, 850, SH, 730);
    T('Moga perkongsian ini bermanfaat.', M, 780, F.ss(500, 26), TH.dkText);
    T('Taufik Musa', M, 838, F.pf(900, 54), goldFillL); T('Dealer Public Gold', M, 874, F.ss(700, 25), '#FFFFFF', 'left', 1.5);
    [['PG CODE', D.pgcode, 916], ['WHATSAPP', D.wa, 946], ['LAMAN', D.web, 976]].forEach(function (r) { T(r[0], M, r[2], F.ss(700, 21), TH.eyeD, 'left', 2.5); T(r[1], M + 160, r[2], F.ss(800, 25), '#FFFFFF', 'left', 1); });
  },
];
