// carousel-notes — gaya "Apple Notes" atas foto penuh (rujukan: Ella Content Club "25 hooks"). 7 slaid 1080x1080 (1:1):
// cover (tajuk besar + angka merah jambu) · 5 slaid kad Notes (tajuk + senarai bernombor) · CTA (kad + potret Taufik outline putih).
// Ganti teks (HOOKS), foto img/p1..p7.jpg, dan potret img/me.png. Potret HANYA di slaid CTA.
var NOFOOTER = true;
var N = 7;
var DARK = [];
var ASSETS = { p1: 'p1.jpg', p2: 'p2.jpg', p3: 'p3.jpg', p4: 'p4.jpg', p5: 'p5.jpg', p6: 'p6.jpg', p7: 'p7.jpg', me: 'me.png' };
var D = { handle: '@taufik.pg' };
var HOOKS = [
  ['Rasa ingin tahu', 'hook', 1, ['Kalau saya tahu benda ni lebih awal…', 'Takde orang cerita bahagian ni pasal…', 'Ni yang saya akan buat lain kalau mula semula.', 'Saya tak sangka ini jadi, tapi…', 'Benda yang saya harap ada orang bagitahu pasal…']],
  ['Masalah', 'hook', 6, ['Kalau anda tengah struggle dengan ___, baca ni.', 'Mungkin ___ anda bukan masalahnya. Ini mungkin.', 'Masih habiskan berjam-jam untuk ___? Cuba ini.', 'Kalau ___ rasa lebih susah dari sepatutnya, mungkin anda buat ini.', 'Berhenti ___ kalau nak ___.']],
  ['Lawan arus', 'hook', 11, ['Anda tak perlu ___ untuk ___.', 'Lebih banyak ___ bukan selalu jawapannya.', 'Berhenti buat ___ hanya sebab semua orang buat.', 'Nasihat popular ni mungkin tahan anda dari maju.', 'Anda mungkin tak perlukan ___ lagi satu.']],
  ['Janji', 'hook', 16, ['Cara ___ tanpa ___.', 'Macam mana saya ___ dalam masa kurang dari ___.', '5 cara untuk ___ tanpa serabutkan kepala.', 'Cara paling mudah untuk ___.', 'Rangka kerja ringkas untuk ___.']],
  ['Relatable', 'hook', 21, ['Kalau anda pernah ___, ni untuk anda.', 'Perasaan bila anda ___…', 'POV: anda cuba ___ tapi ___.', 'Cakap kat saya bukan saya seorang yang ___.', 'Kalau ___ dah lama dalam senarai to-do, mula kat sini.']],
];
var SLIDES = [
  // 1 — cover
  function (i) {
    coverPhoto(0, IMG.p1, { dim: .38 }); acct(150);
    sparkle(235, 560, 56); sparkle(180, 520, 26, .3); sparkle(205, 625, 22, .2);
    T('25', 300, 560, FP(800, 330), PK.a, 'left', -14);
    T('hook', 120, 800, FP(800, 330), '#FFFFFF', 'left', -16);
    T('hook', 150, 800, 'bold 190px CV', PK.a, 'left', -2);
    T('setiap creator patut', 130, 905, FP(500, 62), '#fff', 'left', -2.5); T('simpan', 130 + tw('setiap creator patut ', FP(500, 62), -2.5), 905, FP(800, 62), '#fff', 'left', -2.5);
    T('di bank idea anda.', 130, 975, FP(500, 62), '#fff', 'left', -2.5); star5(130 + tw('di bank idea anda.', FP(500, 62), -2.5) + 54, 955, 34);
  },
  function (i) { var h = HOOKS[0]; coverPhoto(0, IMG.p2, { fy: .5 }); acct(150); notesCard({ t1: h[0], t2: h[1] }, h[3].map(function (t, k) { return [String(h[2] + k).padStart(2, '0'), t]; }), { cy: 580 }); },
  function (i) { var h = HOOKS[1]; coverPhoto(0, IMG.p3); acct(150); notesCard({ t1: h[0], t2: h[1] }, h[3].map(function (t, k) { return [String(h[2] + k).padStart(2, '0'), t]; }), { cy: 580 }); },
  function (i) { var h = HOOKS[2]; coverPhoto(0, IMG.p4); acct(150); notesCard({ t1: h[0], t2: h[1] }, h[3].map(function (t, k) { return [String(h[2] + k).padStart(2, '0'), t]; }), { cy: 580 }); },
  function (i) { var h = HOOKS[3]; coverPhoto(0, IMG.p5); acct(150); notesCard({ t1: h[0], t2: h[1] }, h[3].map(function (t, k) { return [String(h[2] + k).padStart(2, '0'), t]; }), { cy: 580 }); },
  function (i) { var h = HOOKS[4]; coverPhoto(0, IMG.p6); acct(150); notesCard({ t1: h[0], t2: h[1] }, h[3].map(function (t, k) { return [String(h[2] + k).padStart(2, '0'), t]; }), { cy: 580 }); },
  // 7 — CTA: kad lebar + potret
  function (i) {
    coverPhoto(0, IMG.p7); acct(130);
    var x = 90, y = 250, w = 900, h = 345; X.save(); X.shadowColor = 'rgba(0,0,0,.22)'; X.shadowBlur = 40; X.shadowOffsetY = 12; rr(x, y, w, h, 60); X.fillStyle = 'rgba(250,250,250,.94)'; X.fill(); X.restore();
    X.save(); X.strokeStyle = PK.gold; X.lineWidth = 6; X.lineCap = 'round'; X.lineJoin = 'round'; X.beginPath(); X.moveTo(x + 76, y + 40); X.lineTo(x + 60, y + 56); X.lineTo(x + 76, y + 72); X.stroke(); X.restore(); T('Notes', x + 92, y + 66, FP(500, 32), PK.gold);
    var t = 'Save ni', tw1 = tw(t, FP(800, 76), -2);
    X.fillStyle = PK.hl; X.fillRect(x + 66, y + 112, tw1 + 20, 86); X.fillStyle = PK.a; X.fillRect(x + 60, y + 106, 4, 98); X.beginPath(); X.arc(x + 62, y + 204, 11, 0, 7); X.fill(); X.fillRect(x + 66 + tw1 + 18, y + 106, 4, 98); X.beginPath(); X.arc(x + 66 + tw1 + 20, y + 106, 11, 0, 7); X.fill();
    T(t, x + 72, y + 180, FP(800, 76), '#26232A', 'left', -2); T('hook bank', x + 72 + tw1 + 28, y + 180, FP(500, 76), '#26232A', 'left', -2);
    T('untuk nanti.', x + 72, y + 262, FP(800, 76), '#26232A', 'left', -2); star5(x + 72 + tw('untuk nanti.', FP(800, 76), -2) + 54, y + 236, 34);
    T('Dan', x + 72, y + 330, FP(500, 34), '#26232A'); T('follow', x + 72 + tw('Dan ', FP(500, 34)), y + 330, FP(800, 34), '#26232A'); T(D.handle, x + 72 + tw('Dan follow ', FP(800, 34)), y + 330, FP(800, 34), '#2F8FE8'); T('untuk idea kandungan.', x + 72 + tw('Dan follow ' + D.handle + ' ', FP(800, 34)), y + 330, FP(500, 34), '#26232A');
    cutoutBC(IMG.me, 760, SH + 10, 470);
  },
];
