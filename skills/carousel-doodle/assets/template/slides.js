// carousel-doodle — "Yang Paling Menakutkan Bukan Umur Kita" (papan hitam + doodle kuning, 8 slaid, 1080x1440 = 3:4).
// Tajuk: baris putih + berus kuning. *kata* = kuning. Potret Taufik (outline putih, img/me.png) HANYA slaid terakhir.
var N = 8;
var ASSETS = { me: 'me.png' };
var D = { handle: '@taufik.pg', nama: 'Taufik Musa' };

var SLIDES = [
  // 1 — cover (tangga ke bendera "5 TAHUN")
  function (i) {
    title('Yang Paling Menakutkan', 540, 160, 76); rays(900, 105, 36, .5); rays(150, 140, 30, -.6);
    brush(['Bukan Umur Kita.'], 540, 345, 108);
    para('(Tapi bila 5 tahun lagi, kita masih orang yang sama)', 540, 495, 960, 36); squiggle(220, 860, 520);
    cloud(90, 740, 1); cloud(400, 900, .8);
    var t = stairs(300, 1330, 600, 560, 7); flag(t.tx, t.ty, '5 TAHUN');
    figure(190, 1345, 1.2, 'think'); bubble(40, 800, 150, 130, 130, 990); T('?', 115, 905, F.t(90), Y, 'center'); rays(300, 1020, 30, .6);
  },
  // 2 — posting FB
  function (i) {
    title('Saya Terbaca', 540, 160, 76); brush(['Satu Posting FB'], 540, 340, 106);
    phoneShape(230, 450, 620, 620);
    para('“The scariest part of getting older isn’t your age. It’s being the *same person* five years from now.”', 540, 620, 500, 44, { lh: 1.3 });
    para('Maksudnya, yang paling menakutkan bukan angka umur kita. Tapi bila lima tahun berlalu, *hidup tak banyak berubah.*', 540, 1170, 900, 42);
    rays(880, 470, 34, .6); rays(200, 500, 30, -.6);
  },
  // 3 — masih sama
  function (i) {
    title('Lima Tahun Berlalu,', 540, 160, 78); brush(['Tapi Masih Sama:'], 540, 340, 100);
    ['Kerjaya masih di takuk lama', 'Kewangan masih begitu', 'Hutang masih belum selesai', 'Impian sama masih dalam kepala'].forEach(function (s, k) { var y = 470 + k * 165; box(90, y, 900, 135); mark(165, y + 68, 64, 'x'); T(s, 240, y + 86, F.t(44), W); });
    pill('Sama macam 5 tahun lalu?', 470, 1270, 46); figure(960, 1425, .65, 'sad');
  },
  // 4 — dua jenis orang
  function (i) {
    title('Kenapa Ada Orang', 540, 160, 78); brush(['Berhenti Scroll?'], 540, 340, 106);
    para('Mungkin sebab ayat tu terasa macam *bercakap dengan diri sendiri.*', 540, 480, 900, 42);
    bubble(50, 620, 480, 270, 280, 930); para('“Aku tak nak hidup macam ni 5 tahun lagi. Aku *kena buat sesuatu!*”', 290, 690, 420, 38);
    bubble(550, 700, 480, 190, 800, 930); para('*Senyum sikit,* terus scroll macam biasa.', 790, 775, 420, 38);
    figure(290, 1270, 1.2, 'cheer'); figure(800, 1270, 1.2, 'phone', -1);
    pill('Berubah', 290, 1360, 44); pill('Scroll je', 800, 1360, 44, { outline: true });
  },
  // 5 — impian ditangguhkan
  function (i) {
    title('Mungkin Ada Yang', 540, 160, 78); brush(['Menunggu Perhatian'], 540, 340, 96);
    ['Nak *selesaikan hutang,* tapi belum bermula.', 'Nak *bina simpanan,* tapi duit habis begitu sahaja.', 'Nak *tambah ilmu,* tapi asyik tunggu masa sesuai.', 'Nak *ubah hidup keluarga,* tapi tindakan masih sama.'].forEach(function (s, k) { var y = 470 + k * 165; box(70, y, 940, 140); numDot(145, y + 70, 36, k + 1); para(s, 210, y + 62, 760, 38, { align: 'left', lh: 1.25 }); });
    para('Kita sebenarnya tahu apa yang perlu diperbaiki. Cuma belum ambil *langkah pertama.*', 540, 1190, 900, 42); rays(920, 1130, 32, .5);
  },
  // 6 — pesan guru
  function (i) {
    title('Pesan Guru Saya', 540, 160, 80); brush(['Diri Yang Baru'], 540, 340, 110);
    box(80, 450, 920, 330, { stroke: Y });
    para('“Setiap tahap dalam hidup kita memerlukan *diri kita yang baru.*”', 540, 560, 800, 54, { font: F.k(54), lh: 1.25 });
    T('— Tn. Mohd Zulkifli Shafie', 540, 735, F.t(36), Y, 'center');
    para('Nak hasil berbeza, jangan ulang cara hidup yang sama. Ubah cara berfikir, tambah ilmu, perbaiki tindakan.', 540, 870, 900, 38);
    figure(280, 1285, 1.05, 'stand'); arrow(440, 1130, 650, 1130); figure(800, 1285, 1.05, 'cheer'); sparkle(930, 960, 26); sparkle(660, 1000, 18); rays(800, 985, 40);
    pill('Hari ini', 280, 1375, 40, { outline: true }); pill('Diri baru', 800, 1375, 40);
  },
  // 7 — langkah kecil
  function (i) {
    title('Mulakan Dengan', 540, 160, 78); brush(['Langkah Kecil'], 540, 340, 108);
    ['Mula menyimpan walaupun sedikit', 'Belajar 20 minit sehari', 'Mula kurangkan hutang', 'Mula bina aset'].forEach(function (s, k) { var y = 440 + k * 135; box(70, y, 940, 108); numDot(145, y + 54, 34, k + 1); T(s, 210, y + 70, F.t(42), W); });
    var t = stairs(80, 1400, 460, 220, 4); flag(t.tx, t.ty, 'IMPIAN');
    para('Satu tindakan kecil, dibuat *konsisten.*', 790, 1070, 400, 36); figure(800, 1405, .68, 'cheer');
  },
  // 8 — CTA + potret
  function (i) {
    title('5 Tahun Lagi', 540, 160, 86); brush(['Tetap Akan Tiba.'], 540, 345, 104);
    box(55, 460, 480, 520, { stroke: Y }); para('Berterima kasih pada *diri hari ini?*', 295, 540, 420, 40); figure(295, 960, .9, 'cheer');
    box(545, 460, 480, 520); para('Atau menyesal ulang *alasan yang sama?*', 785, 540, 420, 40); figure(785, 960, .9, 'sad');
    T('Fikir-fikirkan.', 700, 1090, F.t(62), Y, 'center');
    cutoutBC(IMG.me, 225, 1440, 400);
    para('Moga perkongsian ini bermanfaat.', 440, 1200, 560, 36, { align: 'left' }); T(D.nama, 440, 1290, F.t(60), Y); T(D.handle, 440, 1350, F.b(44), W);
  },
];
