// carousel-notes — gaya "Apple Notes" atas foto penuh (rujukan: Ella Content Club "25 hooks"). 7 slaid 1080x1080 (1:1):
// cover (tajuk besar + angka merah jambu) · 5 slaid kad Notes (tajuk + senarai bernombor) · CTA (kad + potret Taufik outline putih).
// Ganti teks (HOOKS), foto img/p1..p7.jpg, dan potret img/me.png. Potret HANYA di slaid CTA.
var NOFOOTER = true;
var N = 7;
var DARK = [];
var ASSETS = { p1: 'p1.jpg', p2: 'p2.jpg', p3: 'p3.jpg', p4: 'p4.jpg', p5: 'p5.jpg', p6: 'p6.jpg', p7: 'p7.jpg', me: 'me.png' };
var ACCENT = { a: '#FFC400', hl: '#FFF27A' };   // kuning cerah
var D = { handle: '@taufik.pg' };
var BUKTI = [
  ['Bukti 1:', 'Emas tulen', ['Setiap gram digital disandarkan kepada emas fizikal tulen.', 'Wang anda tidak bertukar jadi nombor maya semata-mata, tapi membeli emas sebenar.']],
  ['Bukti 2:', 'Pos ke rumah', ['Emas fizikal boleh dipos terus ke pintu rumah.', 'Bila berat emas sudah mencukupi, anda boleh minta ia dihantar dengan perlindungan insurans.']],
  ['Bukti 3:', 'Rekod telus', ['Transaksi direkod secara telus dalam aplikasi rasmi.', 'Anda boleh menyemak baki gram, sejarah belian dan harga pasaran pada bila-bila masa.']],
  ['Bukti 4:', 'Ada cawangan', ['Cawangan fizikal sedia dikunjungi di seluruh negara.', 'Jika tidak mahu pos, anda boleh mengambil sendiri jongkong emas di kaunter cawangan.']],
  ['Bukti 5:', 'Nilai kekal', ['Kemudahan teknologi tidak mengubah nilai emas.', 'Anda menikmati kepantasan urusan moden tanpa mengorbankan nilai aset fizikal.']],
];
function bukti(i, img, fy) { var b = BUKTI[i - 1]; coverPhoto(0, IMG[img], { fy: fy }); acct(150); notesCard({ t1: b[0], t2: b[1] }, b[2].map(function (t) { return [null, t]; }), { cy: 600, fs: 40 }); }
var SLIDES = [
  function (i) {
    coverPhoto(0, IMG.p1, { dim: .42 }); acct(150);
    T('\u201CBeli emas dalam telefon ni', 130, 290, FP(500, 40), '#fff', 'left', -1); T('selamat ke?\u201D', 130, 340, FP(500, 40), '#fff', 'left', -1);
    sparkle(250, 520, 52); sparkle(195, 485, 24, .3); sparkle(220, 580, 20, .2);
    T('5', 310, 600, FP(800, 300), PK.a, 'left', -12);
    T('bukti', 100, 810, FP(800, 290), '#FFFFFF', 'left', -14);
    T('bukti', 130, 815, 'bold 170px CV', PK.a, 'left', -2);
    T('beli emas', 130, 900, FP(500, 60), '#fff', 'left', -2.5); T('online', 130 + tw('beli emas ', FP(500, 60), -2.5), 900, FP(800, 60), '#fff', 'left', -2.5);
    T('sebenarnya selamat.', 130, 968, FP(800, 60), '#fff', 'left', -2.5); star5(130 + tw('sebenarnya selamat.', FP(800, 60), -2.5) + 52, 948, 32);
  },
  function (i) { bukti(1, 'p2', .5); }, function (i) { bukti(2, 'p3', .5); }, function (i) { bukti(3, 'p4', .5); }, function (i) { bukti(4, 'p5', .5); }, function (i) { bukti(5, 'p6', .5); },
  function (i) {
    coverPhoto(0, IMG.p7); acct(130);
    var x = 90, y = 240, w = 900, h = 425; X.save(); X.shadowColor = 'rgba(0,0,0,.22)'; X.shadowBlur = 40; X.shadowOffsetY = 12; rr(x, y, w, h, 60); X.fillStyle = 'rgba(250,250,250,.94)'; X.fill(); X.restore();
    X.save(); X.strokeStyle = PK.gold; X.lineWidth = 6; X.lineCap = 'round'; X.lineJoin = 'round'; X.beginPath(); X.moveTo(x + 76, y + 40); X.lineTo(x + 60, y + 56); X.lineTo(x + 76, y + 72); X.stroke(); X.restore(); T('Notes', x + 92, y + 66, FP(500, 32), PK.gold);
    var t = 'Beli emas online', f = 66, tw1 = tw(t, FP(800, f), -2);
    X.fillStyle = PK.hl; X.fillRect(x + 66, y + 108, tw1 + 20, 80); X.fillStyle = PK.a; X.fillRect(x + 60, y + 102, 4, 92); X.beginPath(); X.arc(x + 62, y + 194, 11, 0, 7); X.fill(); X.fillRect(x + 66 + tw1 + 18, y + 102, 4, 92); X.beginPath(); X.arc(x + 66 + tw1 + 20, y + 102, 11, 0, 7); X.fill();
    T(t, x + 72, y + 168, FP(800, f), '#26232A', 'left', -2);
    T('bukan perjudian nasib.', x + 72, y + 246, FP(800, f), '#26232A', 'left', -2);
    T('Ia kemudahan moden yang menjimatkan masa anda.', x + 72, y + 304, FP(500, 25), '#26232A');
    T('Uruskan aset anda di hujung jari!', x + 72, y + 350, FP(800, 32), '#26232A'); star5(x + 72 + tw('Uruskan aset anda di hujung jari!', FP(800, 32)) + 40, y + 340, 22);
    T('Follow', x + 72, y + 394, FP(500, 28), '#26232A'); T(D.handle, x + 72 + tw('Follow ', FP(500, 28)), y + 394, FP(800, 28), '#2F8FE8');
    cutoutBC(IMG.me, 770, SH + 10, 400);
  },
];
