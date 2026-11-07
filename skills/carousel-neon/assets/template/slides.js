// carousel-neon — "5 tahun lagi, masih orang yang sama?" (hitam + lime neon, ikon garisan profesional, 8 slaid, 1080x1440 = 3:4).
// Nombor 01/08 + @taufik.pg + SWIPE ditambah automatik oleh enjin. *kata* = lime. Potret Taufik (outline putih, img/me.png) HANYA slaid terakhir.
var N = 8;
var ASSETS = { me: 'me.png' };
var D = { nama: 'Taufik Musa' };

var SLIDES = [
  // 1 — cover: hari ini vs 5 tahun lagi
  function (i) {
    var y = title(['Yang paling', '*menakutkan*', 'bukan umur kita.'], M, 260, 936, 88);
    para('Tapi bila 5 tahun lagi, kita masih *orang yang sama.*', M, y + 60, 880, 46);
    tile(290, 960, 340, 'person', { fill: true }); tile(790, 960, 340, 'person', { dash: true });
    T('=', 540, 990, F.u(80), L, 'center');
    chip('HARI INI', 290, 1200, 30); chip('5 TAHUN LAGI', 790, 1200, 30, { outline: true, col: L });
  },
  // 2 — posting FB
  function (i) {
    tag('FACEBOOK', M, 250); title(['Satu posting', 'buat saya', '*berhenti scroll.*'], M, 350, 936, 66);
    card(M, 650, 936, 430, { accent: true }); T('“', 120, 800, F.u(170), L);
    para('*The scariest part of getting older isn’t your age.* It’s being the same person five years from now.', 130, 850, 800, 46);
    para('Maksudnya, yang paling menakutkan bukan angka umur kita. Tapi bila lima tahun berlalu, *hidup tak banyak berubah.*', M, 1160, 700, 38);
    tile(900, 1250, 150, 'phone');
  },
  // 3 — masih sama
  function (i) {
    tag('LIMA TAHUN KEMUDIAN', M, 250); title(['Lima tahun', 'berlalu, tapi:'], M, 350, 936, 66);
    [['KERJAYA', 'Masih di takuk lama.', 'briefcase'], ['KEWANGAN', 'Masih begitu.', 'coins'], ['HUTANG', 'Masih belum selesai.', 'chain'], ['IMPIAN', 'Masih dalam kepala.', 'bulb']].forEach(function (r, k) {
      var y = 560 + k * 180; card(M, y, 936, 150, { accent: true }); tile(190, y + 75, 100, r[2]); T(r[0], 270, y + 56, F.b(24), L, 'left', 4); T(r[1], 270, y + 112, F.b(40), W); T('= SAMA', 1000, y + 112, F.u(24), 'rgba(198,255,61,.7)', 'right');
    });
  },
  // 4 — dua jenis orang
  function (i) {
    tag('KENAPA?', M, 250); title(['Kenapa ada orang', '*berhenti* scroll?'], M, 350, 936, 64);
    para('Mungkin sebab ayat tu terasa macam *bercakap dengan diri sendiri.*', M, 570, 936, 38);
    card(M, 700, 936, 270, { stroke: L, lw: 4 }); tile(190, 835, 120, 'target', { solid: true });
    T('BERUBAH', 290, 770, F.b(24), L, 'left', 4); para('“Aku tak nak hidup macam ni 5 tahun lagi. Aku *kena buat sesuatu.*”', 290, 825, 650, 38);
    card(M, 1010, 936, 230, {}); tile(190, 1125, 120, 'phone', { dash: true });
    T('SCROLL JE', 290, 1075, F.b(24), 'rgba(255,255,255,.5)', 'left', 4); para('*Senyum sikit,* terus scroll macam biasa.', 290, 1130, 650, 38);
  },
  // 5 — impian ditangguhkan
  function (i) {
    tag('TERTANGGUH', M, 250); title(['Impian yang', '*ditangguhkan.*'], M, 350, 936, 66);
    [['Selesaikan hutang', 'BELUM BERMULA', 'shield'], ['Bina simpanan', 'DUIT HABIS', 'coins'], ['Tambah ilmu', 'TUNGGU MASA SESUAI', 'book'], ['Ubah hidup keluarga', 'TINDAKAN SAMA', 'home']].forEach(function (r, k) {
      var y = 560 + k * 150; tile(M + 40, y + 52, 80, r[2]); T(r[0], M + 110, y + 40, F.b(40), W); T(r[1], 1008, y + 36, F.b(22), L, 'right', 3);
      X.save(); rr(M + 110, y + 62, 826, 24, 12); X.fillStyle = G1; X.fill(); X.strokeStyle = G2; X.lineWidth = 3; X.stroke(); rr(M + 114, y + 66, 44, 16, 8); X.fillStyle = L; X.fill(); X.restore();
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
    tile(230, 1170, 190, 'person', { dash: true }); arrowR(350, 1170, 530); tile(650, 1170, 190, 'person', { solid: true }); sparkle(790, 1090, 24); sparkle(840, 1150, 14);
    T('HARI INI', 230, 1305, F.b(24), MUTE, 'center', 3); T('DIRI BARU', 650, 1305, F.b(24), L, 'center', 3);
  },
  // 7 — langkah kecil
  function (i) {
    tag('MULA KECIL', M, 250); title(['Mulakan dengan', '*langkah kecil.*'], M, 350, 936, 66);
    [['Mula menyimpan walaupun sedikit.', 'coins'], ['Belajar walaupun 20 minit sehari.', 'hourglass'], ['Mula kurangkan hutang.', 'shield'], ['Mula bina aset.', 'trend']].forEach(function (r, k) { var y = 560 + k * 145; card(M, y, 936, 120, {}); num(M + 62, y + 60, 30, k + 1); para(r[0], M + 120, y + 72, 730, 34, { font: F.b(34) }); tile(950, y + 60, 84, r[1]); });
    para('Satu tindakan kecil, dibuat *konsisten.*', M, 1230, 936, 40);
  },
  // 8 — CTA + potret
  function (i) {
    tag('FIKIR-FIKIRKAN', M, 250); title(['Lima tahun lagi', '*tetap* akan tiba.'], M, 350, 936, 64);
    card(M, 580, 936, 200, { stroke: L, lw: 4 }); tile(190, 680, 110, 'check', { solid: true }); para('Berterima kasih pada *diri hari ini?*', 290, 665, 640, 40);
    card(M, 810, 936, 200, { stroke: 'rgba(255,255,255,.4)' }); tile(190, 910, 110, 'cross', { dash: true }); para('Atau menyesal ulang *alasan yang sama?*', 290, 895, 640, 40);
    cutoutBC(IMG.me, 830, 1440, 400);
    para('Moga perkongsian ini bermanfaat.', M, 1130, 500, 34); T(D.nama, M, 1250, F.u(46), L);
  },
];
