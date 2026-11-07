// carousel-neon — "5 tahun lagi, masih orang yang sama?" (hitam + lime neon, hantu "Bayang", 8 slaid, 1080x1440 = 3:4).
// Nombor 01/08 + @taufik.pg ditambah automatik oleh enjin. *kata* = lime. Potret Taufik (outline putih, img/me.png) HANYA slaid terakhir.
var N = 8;
var ASSETS = { me: 'me.png' };
var D = { nama: 'Taufik Musa' };

var SLIDES = [
  // 1 — cover: Bayang hari ini vs Bayang 5 tahun lagi
  function (i) {
    var y = title(['Yang paling', '*menakutkan*', 'bukan umur kita.'], M, 260, 936, 88);
    para('Tapi bila 5 tahun lagi, kita masih *orang yang sama.*', M, y + 60, 880, 46);
    ghost(280, 1230, 1.6, 'think'); ghost(800, 1230, 1.6, 'think', { outline: true });
    T('=  ?', 540, 1020, F.u(80), L, 'center');
    chip('HARI INI', 280, 1306, 30); chip('5 TAHUN LAGI', 800, 1306, 30, { outline: true, col: L });
  },
  // 2 — posting FB
  function (i) {
    tag('FACEBOOK', M, 250); title(['Satu posting', 'buat saya', '*berhenti scroll.*'], M, 350, 936, 66);
    card(M, 650, 936, 430, { accent: true }); T('“', 120, 800, F.u(170), L);
    para('*The scariest part of getting older isn’t your age.* It’s being the same person five years from now.', 130, 850, 800, 46);
    para('Maksudnya, yang paling menakutkan bukan angka umur kita. Tapi bila lima tahun berlalu, *hidup tak banyak berubah.*', M, 1160, 700, 38);
    ghost(925, 1330, .85, 'wave');
  },
  // 3 — masih sama
  function (i) {
    tag('LIMA TAHUN KEMUDIAN', M, 250); title(['Lima tahun', 'berlalu, tapi:'], M, 350, 936, 66);
    [['KERJAYA', 'Masih di takuk lama.'], ['KEWANGAN', 'Masih begitu.'], ['HUTANG', 'Masih belum selesai.'], ['IMPIAN', 'Masih tersimpan dalam kepala.']].forEach(function (r, k) {
      var y = 560 + k * 180; card(M, y, 936, 150, { accent: true }); T(r[0], 120, y + 56, F.b(26), L, 'left', 4); T(r[1], 120, y + 112, F.b(44), W); T('= SAMA', 1000, y + 112, F.u(26), 'rgba(198,255,61,.7)', 'right');
    });
  },
  // 4 — dua jenis orang
  function (i) {
    tag('KENAPA?', M, 250); title(['Kenapa ada orang', '*berhenti* scroll?'], M, 350, 936, 64);
    para('Mungkin sebab ayat tu terasa macam *bercakap dengan diri sendiri.*', M, 570, 936, 38);
    ghost(170, 960, .9, 'cheer'); bubble(310, 700, 690, 250, 250, 800); para('“Aku tak nak hidup macam ni 5 tahun lagi. Aku *kena buat sesuatu.*”', 350, 775, 610, 40);
    ghost(910, 1270, .9, 'idle', { outline: true }); bubble(80, 1010, 690, 220, 840, 1120, { stroke: 'rgba(255,255,255,.45)' }); para('*Senyum sikit,* terus scroll macam biasa.', 120, 1090, 610, 40);
  },
  // 5 — impian ditangguhkan
  function (i) {
    tag('TERTANGGUH', M, 250); title(['Impian yang', '*ditangguhkan.*'], M, 350, 936, 66);
    [['Selesaikan hutang', 'BELUM BERMULA'], ['Bina simpanan', 'DUIT HABIS'], ['Tambah ilmu', 'TUNGGU MASA SESUAI'], ['Ubah hidup keluarga', 'TINDAKAN SAMA']].forEach(function (r, k) {
      var y = 560 + k * 150; T(r[0], M, y + 40, F.b(42), W); T(r[1], 1008, y + 38, F.b(24), L, 'right', 3);
      X.save(); rr(M, y + 62, 936, 28, 14); X.fillStyle = G1; X.fill(); X.strokeStyle = G2; X.lineWidth = 3; X.stroke(); X.beginPath(); X.arc(M + 14, y + 76, 11, 0, 7); X.fillStyle = L; X.fill(); X.restore();
    });
    para('Kita tahu apa yang perlu diperbaiki. Cuma belum ambil *langkah pertama.*', M, 1210, 936, 40);
  },
  // 6 — pesan guru
  function (i) {
    tag('PESAN GURU SAYA', M, 250); title(['Perlukan', '*diri yang baru.*'], M, 350, 936, 66);
    X.save(); rr(M, 540, 936, 380, 44); X.fillStyle = L; X.fill(); X.restore();
    para('“Setiap tahap dalam hidup kita memerlukan diri kita yang baru.”', 120, 650, 840, 54, { font: F.b(54), color: BK, lh: 1.25 });
    T('— TN. MOHD ZULKIFLI SHAFIE', 120, 870, F.b(28), BK, 'left', 2);
    para('Ubah cara berfikir, tambah ilmu, perbaiki tindakan, bina rutin.', M, 965, 936, 36);
    ghost(260, 1240, .8, 'idle', { outline: true }); arrowR(400, 1140, 600); ghost(760, 1240, .8, 'cheer'); sparkle(930, 1060, 26); sparkle(640, 1040, 16); sparkle(880, 1150, 12);
    T('HARI INI', 260, 1296, F.b(26), MUTE, 'center', 3); T('DIRI BARU', 760, 1296, F.b(26), L, 'center', 3);
  },
  // 7 — langkah kecil
  function (i) {
    tag('MULA KECIL', M, 250); title(['Mulakan dengan', '*langkah kecil.*'], M, 350, 936, 66);
    X.save(); X.strokeStyle = 'rgba(198,255,61,.35)'; X.lineWidth = 4; X.setLineDash([2, 12]); X.lineCap = 'round'; X.beginPath(); X.moveTo(112, 610); X.lineTo(112, 1070); X.stroke(); X.restore();
    ['Mula menyimpan walaupun sedikit.', 'Belajar walaupun 20 minit sehari.', 'Mula kurangkan hutang.', 'Mula bina aset.'].forEach(function (s, k) { var y = 590 + k * 150; num(112, y + 24, 34, k + 1); para(s, 190, y + 36, 800, 44, { font: F.b(44) }); });
    para('Satu tindakan kecil, dibuat *konsisten.*', M, 1260, 700, 40); ghost(930, 1330, .75, 'wave');
  },
  // 8 — CTA + potret
  function (i) {
    tag('FIKIR-FIKIRKAN', M, 250); title(['Lima tahun lagi', '*tetap* akan tiba.'], M, 350, 936, 64);
    card(M, 580, 936, 200, { stroke: L, lw: 4 }); ghost(190, 760, .6, 'cheer'); para('Berterima kasih pada *diri hari ini?*', 330, 665, 640, 40);
    card(M, 810, 936, 200, { stroke: 'rgba(255,255,255,.4)' }); ghost(190, 990, .6, 'sad'); para('Atau menyesal ulang *alasan yang sama?*', 330, 895, 640, 40);
    cutoutBC(IMG.me, 830, 1440, 400);
    para('Moga perkongsian ini bermanfaat.', M, 1130, 500, 34); T(D.nama, M, 1250, F.u(46), L);
  },
];
