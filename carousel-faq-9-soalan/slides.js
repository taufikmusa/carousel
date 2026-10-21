// carousel-notes — "9 soalan lazim sebelum buka akaun emas GAP Public Gold" (kad Notes atas foto penuh), 5 slaid, 1080x1080 (1:1).
// cover · 3 kad Notes (3 soalan setiap satu; item "Soalan?|Jawapan" = soalan tebal) · CTA kad + potret.
var NOFOOTER = true;
var N = 5;
var DARK = [];
var ASSETS = { p1: 'p1.jpg', p2: 'p2.jpg', p3: 'p3.jpg', p4: 'p4.jpg', p5: 'p5.jpg', me: 'me.png' };
var D = { handle: '@taufik.pg', pgcode: 'PG00359605' };
var FAQ = [
  ['01', 'Berapa modal mula?|RM100 sahaja. Tiada paksaan bulanan, bebas ikut bajet sendiri.'],
  ['02', 'Ada yuran daftar?|100% percuma. Tiada yuran tersembunyi, tiada caj dealer, dan tiada upah simpan.'],
  ['03', 'Boleh keluar emas fizikal?|Ya. Kumpul gram perlahan-lahan dan keluarkan gold bar sekecil 0.25 gram bila baki cukup.'],
  ['04', 'Patuh syariah?|Ya, sistem akaun GAP disahkan sepenuhnya oleh Amanie Advisors.'],
  ['05', 'Bila boleh jual beli?|Online 24 jam sehari, 365 hari setahun. Beli atau jual balik pada jam 3 pagi pun jalan.'],
  ['06', 'Duit masuk akaun siapa?|Terus ke akaun syarikat Public Gold. Dealer hanya bantu uruskan sistem, tak pegang duit anda waima satu sen.'],
  ['07', 'Selamat ke?|Public Gold beroperasi sejak 2008 dengan rekod bersih. Bila gram dah banyak, anda boleh keluar dan pegang sendiri emas fizikal.'],
  ['08', 'Boleh buka untuk anak?|Boleh guna MyKid untuk daftar akaun Junior GAP bagi anak bawah 18 tahun.'],
  ['09', 'Kena denda kalau skip bulan?|Tiada penalti, tiada denda penutupan, dan tiada tarikh luput akaun.'],
];
function faq(img, a, title, tag) {
  coverPhoto(0, IMG[img]); acct(150);
  var c = notesCard({ t1: 'Soalan', t2: title }, FAQ.slice(a, a + 3), { cy: 610, fs: 34, gap: 14 });
  if (tag) { var w = tw(tag, FP(800, 26)) + 44; rr(c.x + c.w - w - 40, c.y - 22, w, 46, 23); X.fillStyle = PK.a; X.fill(); T(tag, c.x + c.w - w / 2 - 40, c.y + 11, FP(800, 26), '#26232A', 'center'); }
}
var SLIDES = [
  // 1 — cover
  function (i) {
    coverPhoto(0, IMG.p1, { dim: .42 }); acct(150);
    sparkle(250, 520, 52); sparkle(195, 485, 24, .3); sparkle(220, 580, 20, .2);
    T('9', 310, 600, FP(800, 300), PK.a, 'left', -12);
    T('soalan', 100, 810, FP(800, 270), '#FFFFFF', 'left', -14);
    T('lazim', 130, 815, 'bold 170px CV', PK.a, 'left', -2);
    T('sebelum buka akaun', 130, 895, FP(500, 56), '#fff', 'left', -2.2); T('emas GAP.', 130, 958, FP(800, 56), '#fff', 'left', -2.2); star5(130 + tw('emas GAP.', FP(800, 56), -2.2) + 52, 940, 32);
    T('Baca no. 6 kalau tak nak kena scam!', 130, 1015, FP(800, 34), PK.a, 'left', -1);
  },
  function (i) { faq('p2', 0, '01–03'); },
  function (i) { faq('p3', 3, '04–06', 'BACA NO. 6!'); },
  function (i) { faq('p4', 6, '07–09'); },
  // 5 — CTA: kad lebar + potret
  function (i) {
    coverPhoto(0, IMG.p5); acct(130);
    var x = 90, y = 220, w = 900, h = 470; X.save(); X.shadowColor = 'rgba(0,0,0,.22)'; X.shadowBlur = 40; X.shadowOffsetY = 12; rr(x, y, w, h, 60); X.fillStyle = 'rgba(250,250,250,.94)'; X.fill(); X.restore();
    X.save(); X.strokeStyle = PK.gold; X.lineWidth = 6; X.lineCap = 'round'; X.lineJoin = 'round'; X.beginPath(); X.moveTo(x + 76, y + 40); X.lineTo(x + 60, y + 56); X.lineTo(x + 76, y + 72); X.stroke(); X.restore(); T('Notes', x + 92, y + 66, FP(500, 32), PK.gold);
    var t = 'Soalan mana', f = 70, tw1 = tw(t, FP(800, f), -2);
    X.fillStyle = PK.hl; X.fillRect(x + 66, y + 108, tw1 + 20, 82); X.fillStyle = PK.a; X.fillRect(x + 60, y + 102, 4, 94); X.beginPath(); X.arc(x + 62, y + 196, 11, 0, 7); X.fill(); X.fillRect(x + 66 + tw1 + 18, y + 102, 4, 94); X.beginPath(); X.arc(x + 66 + tw1 + 20, y + 102, 11, 0, 7); X.fill();
    T(t, x + 72, y + 170, FP(800, f), '#26232A', 'left', -2); T('paling lama berlegar', x + 72, y + 246, FP(800, f), '#26232A', 'left', -2); T('dalam kepala anda?', x + 72, y + 322, FP(800, f), '#26232A', 'left', -2);
    T('Simpan emas beri ketenangan. Emas fizikal kekal berfungsi', x + 72, y + 372, FP(500, 26), '#26232A'); T('sebagai duit tunai yang lebih kalis inflasi.', x + 72, y + 406, FP(500, 26), '#26232A');
    T('Kongsi di komen', x + 72, y + 448, FP(800, 28), '#26232A'); star5(x + 72 + tw('Kongsi di komen', FP(800, 28)) + 36, y + 438, 20);
    cutoutBC(IMG.me, 760, SH + 10, 380);
    X.save(); X.fillStyle = 'rgba(20,10,12,.55)'; rr(50, 800, 520, 160, 32); X.fill(); X.restore();
    T('Taufik Musa', 72, 850, FP(800, 40), '#fff'); T('Dealer Public Gold | G100 Network', 72, 892, FP(500, 26), '#fff'); T(D.pgcode, 72, 930, FP(800, 28), PK.a);
  },
];
