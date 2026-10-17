// carousel-ivory engine — premium ivory carousel (1080x1080 per slide): serif headlines (gold italic + deep red),
// rounded cards with thin gold border, red/gold/cream pills, gold numbered circles, vector gold icons.
// slides.js defines: N, ASSETS {key:'file'}, SLIDES [fn(i)]  (local coords 0..1080).  DO NOT EDIT per carousel.
const SW = 1080, SH = 1080;
const K = { bg: '#FBF8F3', ink: '#15110F', red1: '#B5121F', red2: '#6C0613', maroon: '#7A0F1A', gold1: '#D9AE45', gold2: '#B27F17', gold3: '#7B500C', line: '#E7D2A0', cream: '#FBEBC9', card: '#FFFDF9' };
const cv = document.getElementById('c'); cv.width = SW * N; cv.height = SH; cv.style.width = (SW * N / 4) + 'px'; cv.style.height = (SH / 4) + 'px';
const X = cv.getContext('2d');
const IMG = {};
const F = { pf: (w, s) => `${w} ${s}px PF`, pfi: (w, s) => `italic ${w} ${s}px PFI`, ss: (w, s) => `${w} ${s}px SS` };
function rng(s) { return () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function rr(x, y, w, h, r) { X.beginPath(); X.roundRect(x, y, w, h, r); }
function tw(s, f, ls = 0) { X.save(); X.font = f; X.letterSpacing = ls + 'px'; const w = X.measureText(s).width; X.restore(); return w; }
function fit(s, fontFn, targetW, ls = 0) { const w = tw(s, fontFn(100), ls * 100); return 100 * targetW / w; }
// plain text. fill may be a colour or a gradient factory fn(y,size)
function T(s, x, y, f, fill = K.ink, align = 'left', ls = 0) { X.save(); X.font = f; X.textAlign = align; X.letterSpacing = ls + 'px'; X.fillStyle = fill; X.fillText(s, x, y); X.restore(); }
function gradY(y0, y1, stops) { const g = X.createLinearGradient(0, y0, 0, y1); stops.forEach(([o, c]) => g.addColorStop(o, c)); return g; }
const goldFill = (y, size) => gradY(y - size * .78, y + size * .12, [[0, '#E3BB55'], [.45, K.gold2], [1, K.gold3]]);
const redFill = (y, size) => gradY(y - size * .78, y + size * .12, [[0, K.red1], [1, K.red2]]);

// ---- headline pieces ----
function swoosh(x1, x2, y, th = 7) { // tapered gold stroke under gold italic
  const g = X.createLinearGradient(x1, 0, x2, 0); g.addColorStop(0, '#B27F17'); g.addColorStop(.5, '#EBC965'); g.addColorStop(1, '#B27F17');
  X.save(); X.fillStyle = g; X.beginPath(); X.moveTo(x1, y + 8); X.quadraticCurveTo((x1 + x2) / 2, y - 18, x2, y - 4); X.quadraticCurveTo((x1 + x2) / 2, y - 18 + th, x1, y + 8 + 1); X.fill(); X.restore();
}
function goldItalic(s, cx, y, w, under = true) { const sz = fit(s, f => F.pfi(700, f), w, -.01); T(s, cx, y, F.pfi(700, sz), goldFill(y, sz), 'center', -sz * .01); if (under) swoosh(cx - w * .42, cx + w * .5, y + sz * .17); return sz; }
function redBlack(s, cx, y, w) { const sz = fit(s, f => F.pf(900, f), w, -.03); T(s, cx, y, F.pf(900, sz), redFill(y, sz), 'center', -sz * .03); return sz; }
// two-line headline. top:'gold' => a=gold italic (swoosh), b=red. top:'red' => a=red, b=gold italic. returns baseline of b
function head(o) {
  const y = o.y ?? 170, top = o.top || 'gold', cx = SW / 2;
  if (top === 'gold') { goldItalic(o.a, cx, y, o.wa); const sz = fit(o.b, f => F.pf(900, f), o.wb, -.03); const by = y + (o.gap ?? sz * 1.12); redBlack(o.b, cx, by, o.wb); return by; }
  const sz = fit(o.a, f => F.pf(900, f), o.wa, -.03); redBlack(o.a, cx, y, o.wa); const by = y + (o.gap ?? sz * .7); goldItalic(o.b, cx, by, o.wb); return by;
}
// mixed line, centered: parts [{t, f, fill}] drawn left→right on one baseline
function mixed(parts, cx, y, ls = 0) { const ws = parts.map(p => tw(p.t, p.f, ls)); let x = cx - ws.reduce((a, b) => a + b, 0) / 2; parts.forEach((p, i) => { T(p.t, x, y, p.f, typeof p.fill === 'function' ? p.fill(y, p.size) : (p.fill || K.ink), 'left', ls); x += ws[i]; }); }

// ---- ui blocks ----
function counter(i, n) { const t = `${i + 1}/${n}`; rr(948, 36, 104, 40, 20); X.save(); X.strokeStyle = K.maroon; X.lineWidth = 2.4; X.stroke(); X.restore(); T(t, 1000, 66, F.ss(700, 28), K.maroon, 'center'); }
function handle(s) { T(s, SW / 2, 1058, F.ss(600, 24), K.maroon, 'center', .5); }
function card(x, y, w, h, r = 28) {
  X.save(); X.shadowColor = 'rgba(150,110,30,.16)'; X.shadowBlur = 22; X.shadowOffsetY = 6; rr(x, y, w, h, r); X.fillStyle = K.card; X.fill(); X.restore();
  rr(x, y, w, h, r); X.save(); X.strokeStyle = K.line; X.lineWidth = 2.5; X.stroke(); X.restore();
}
function pill(x, y, w, h, kind, s, size, ls = 0) {
  X.save(); rr(x, y, w, h, h / 2 > 30 ? Math.min(h * .3, 34) : h / 2);
  if (kind === 'red') { X.fillStyle = gradY(y, y + h, [[0, '#B5121F'], [1, '#6A0512']]); X.shadowColor = 'rgba(100,0,10,.3)'; X.shadowBlur = 14; X.shadowOffsetY = 5; X.fill(); X.shadowColor = 'transparent'; X.strokeStyle = 'rgba(255,255,255,.18)'; X.lineWidth = 2; X.stroke(); }
  if (kind === 'gold') { X.fillStyle = gradY(y, y + h, [[0, '#D8AB3E'], [.5, '#B07C14'], [1, '#8A5C0C']]); X.shadowColor = 'rgba(120,80,10,.3)'; X.shadowBlur = 12; X.shadowOffsetY = 4; X.fill(); }
  if (kind === 'cream') { X.fillStyle = K.cream; X.fill(); X.strokeStyle = '#F0DAA5'; X.lineWidth = 2; X.stroke(); }
  if (kind === 'creamgold') { X.fillStyle = gradY(y, y + h, [[0, '#FCEFC9'], [1, '#F0D184']]); X.fill(); X.strokeStyle = '#E0B95A'; X.lineWidth = 2; X.stroke(); }
  X.restore();
  const col = kind === 'cream' || kind === 'creamgold' ? K.ink : '#fff'; return { col };
}
function pillText(x, y, w, h, kind, s, size, font = 'ss', wt = 700) {
  pill(x, y, w, h, kind); const f = font === 'pf' ? F.pf(wt, size) : F.ss(wt, size);
  T(s, x + w / 2, y + h / 2 + size * .34, f, kind === 'cream' || kind === 'creamgold' ? (font === 'pf' ? K.maroon : K.ink) : '#fff', 'center');
}
function numCircle(cx, cy, r, s) {
  const g = X.createRadialGradient(cx - r * .3, cy - r * .4, r * .1, cx, cy, r); g.addColorStop(0, '#F0CF70'); g.addColorStop(.55, '#C08A1E'); g.addColorStop(1, '#8A5C0C');
  X.save(); X.shadowColor = 'rgba(120,80,10,.35)'; X.shadowBlur = 10; X.shadowOffsetY = 4; X.beginPath(); X.arc(cx, cy, r, 0, 7); X.fillStyle = g; X.fill(); X.restore();
  X.save(); X.beginPath(); X.arc(cx, cy, r - 3, 0, 7); X.strokeStyle = 'rgba(255,240,190,.55)'; X.lineWidth = 2; X.stroke(); X.restore();
  T(s, cx, cy + r * .42, F.pf(700, r * 1.25), '#fff', 'center');
}
function checkCircle(cx, cy, r) {
  numCircle(cx, cy, r, ''); X.save(); X.strokeStyle = '#fff'; X.lineWidth = r * .16; X.lineCap = 'round'; X.lineJoin = 'round';
  X.beginPath(); X.moveTo(cx - r * .38, cy + r * .02); X.lineTo(cx - r * .08, cy + r * .32); X.lineTo(cx + r * .42, cy - r * .3); X.stroke(); X.restore();
}
function hair(x1, x2, y) { X.save(); X.strokeStyle = K.line; X.lineWidth = 2; X.beginPath(); X.moveTo(x1, y); X.lineTo(x2, y); X.stroke(); X.restore(); }
function fraction(top, bot, cx, y, size, w) { T(top, cx, y - size * .4, F.ss(700, size), K.ink, 'center'); X.save(); X.strokeStyle = K.ink; X.lineWidth = 2.5; X.beginPath(); X.moveTo(cx - w / 2, y); X.lineTo(cx + w / 2, y); X.stroke(); X.restore(); T(bot, cx, y + size * 1.05, F.ss(700, size), K.ink, 'center'); }
// three gold strokes ( / | \ ) pointing out of (x,y)
function sparks(x, y, s = 1) { const g = X.createLinearGradient(x, y - 60, x + 60, y + 60); g.addColorStop(0, '#E3BB55'); g.addColorStop(1, '#8A5C0C'); X.save(); X.strokeStyle = g; X.lineCap = 'round'; X.lineWidth = 4 * s;
  [[-.55, 56], [0, 66], [.55, 56]].forEach(([a, l]) => { X.save(); X.translate(x, y); X.rotate(a - Math.PI / 2 + .25); X.beginPath(); X.moveTo(26 * s, 0); X.lineTo((26 + l * .55) * s, 0); X.stroke(); X.restore(); }); X.restore(); }

// ---- images ----
// photo whose beige background fades into the paper (no visible box). fade = edge fade in px
function fadePhoto(im, cx, cy, w, fade = 70, glow = true) {
  const h = w * im.height / im.width, O = document.createElement('canvas'); O.width = Math.ceil(w); O.height = Math.ceil(h); const c = O.getContext('2d'); c.drawImage(im, 0, 0, w, h); c.globalCompositeOperation = 'destination-in';
  [[0, 0, fade, 0], [w, 0, w - fade, 0], [0, 0, 0, fade], [0, h, 0, h - fade]].forEach(([x1, y1, x2, y2]) => { const g = c.createLinearGradient(x1, y1, x2, y2); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, '#000'); c.fillStyle = g; c.fillRect(0, 0, w, h); });
  if (glow) { const g = X.createRadialGradient(cx, cy, 10, cx, cy, w * .6); g.addColorStop(0, 'rgba(255,225,140,.30)'); g.addColorStop(1, 'rgba(255,225,140,0)'); X.fillStyle = g; X.fillRect(cx - w, cy - w, w * 2, w * 2); }
  X.save(); X.globalCompositeOperation = 'multiply'; X.drawImage(O, cx - w / 2, cy - h / 2); X.restore();
}
function photoIn(im, x, y, w, h, r = 22, fx = .5, fy = .5) { X.save(); rr(x, y, w, h, r); X.clip(); const s = Math.max(w / im.width, h / im.height), sw = w / s, sh = h / s; X.drawImage(im, Math.max(0, Math.min(im.width - sw, fx * im.width - sw / 2)), Math.max(0, Math.min(im.height - sh, fy * im.height - sh / 2)), sw, sh, x, y, w, h); X.restore(); }

// ---- vector gold icons ----
const goldG = (x, y, w, h, a = '#F7DE8E', b = '#C8901E', c = '#8E5E0E') => gradY(y, y + h, [[0, a], [.5, b], [1, c]]);
function bar(x, y, w, h, d) {
  X.save(); X.lineJoin = 'round'; X.strokeStyle = '#8E5E0E'; X.lineWidth = 2;
  X.fillStyle = '#FFF0B0'; X.beginPath(); X.moveTo(x, y + d); X.lineTo(x + d * 1.3, y); X.lineTo(x + w + d * 1.3, y); X.lineTo(x + w, y + d); X.closePath(); X.fill(); X.stroke();
  X.fillStyle = '#B47C12'; X.beginPath(); X.moveTo(x + w, y + d); X.lineTo(x + w + d * 1.3, y); X.lineTo(x + w + d * 1.3, y + h - d); X.lineTo(x + w, y + h + d); X.closePath(); X.fill(); X.stroke();
  X.fillStyle = goldG(x, y + d, w, h); X.fillRect(x, y + d, w, h); X.strokeRect(x, y + d, w, h); X.restore();
}
function iconBars(cx, cy, s = 1) { X.save(); X.translate(cx - 70 * s, cy - 55 * s); X.scale(s, s); bar(0, 50, 90, 26, 14); bar(80, 44, 90, 26, 14); bar(36, 6, 90, 26, 14); X.restore(); }
function iconTools(cx, cy, s = 1) {
  X.save(); X.translate(cx, cy); X.scale(s, s); X.lineJoin = 'round'; X.strokeStyle = '#8E5E0E'; X.lineWidth = 2.2;
  X.save(); X.rotate(.75); X.fillStyle = goldG(-8, -60, 16, 120); rr(-8, -10, 16, 78, 6); X.fill(); X.stroke(); rr(-34, -52, 68, 36, 7); X.fill(); X.stroke(); X.restore();
  X.save(); X.rotate(-.75); X.fillStyle = goldG(-8, -70, 16, 140); rr(-8, -20, 16, 90, 6); X.fill(); X.stroke(); X.beginPath(); X.arc(0, -42, 26, 0, 7); X.fill(); X.stroke(); X.fillStyle = K.bg; X.beginPath(); X.arc(0, -42, 10, 0, 7); X.fill(); X.restore(); X.restore();
}
function iconBox(cx, cy, s = 1) {
  X.save(); X.translate(cx, cy); X.scale(s, s); X.lineJoin = 'round'; X.strokeStyle = '#8A5A1E'; X.lineWidth = 2.2;
  const poly = (pts, fill) => { X.beginPath(); pts.forEach(([x, y], i) => i ? X.lineTo(x, y) : X.moveTo(x, y)); X.closePath(); X.fillStyle = fill; X.fill(); X.stroke(); };
  poly([[-60, -20], [0, -50], [60, -20], [0, 10]], '#F3CE82'); poly([[-60, -20], [0, 10], [0, 70], [-60, 40]], '#D9A04A'); poly([[60, -20], [0, 10], [0, 70], [60, 40]], '#C48A32');
  poly([[-12, -44], [12, -34], [12, -4], [-12, -14]], 'rgba(255,240,200,.75)');
  poly([[22, 38], [50, 24], [50, 50], [22, 64]], '#fff'); X.restore();
}

function paper(x0) {
  X.fillStyle = K.bg; X.fillRect(x0, 0, SW, SH);
  const g = X.createRadialGradient(x0 + SW / 2, SH * .45, 60, x0 + SW / 2, SH * .5, SW * .8); g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(1, 'rgba(240,230,210,.35)'); X.fillStyle = g; X.fillRect(x0, 0, SW, SH);
  const R = rng(x0 + 5); X.save(); X.globalAlpha = .03; for (let i = 0; i < 4000; i++) { X.fillStyle = R() < .5 ? '#000' : '#a07a40'; X.fillRect(x0 + R() * SW, R() * SH, 1.5, 1.5); } X.restore();
}

window.ready = Promise.all([
  ...[['PF', 'PlayfairDisplay-700.ttf', 700, 'normal'], ['PF', 'PlayfairDisplay-800.ttf', 800, 'normal'], ['PF', 'PlayfairDisplay-900.ttf', 900, 'normal'], ['PFI', 'PlayfairDisplay-400i.ttf', 400, 'italic'], ['PFI', 'PlayfairDisplay-700i.ttf', 700, 'italic'],
    ['SS', 'SourceSerif4-500.ttf', 500, 'normal'], ['SS', 'SourceSerif4-600.ttf', 600, 'normal'], ['SS', 'SourceSerif4-700.ttf', 700, 'normal'], ['SS', 'SourceSerif4-800.ttf', 800, 'normal']]
    .map(([fam, file, w, st]) => new FontFace(fam, `url(fonts/${file})`, { weight: String(w), style: st }).load().then(f => document.fonts.add(f))),
  ...Object.entries(ASSETS).map(([k, f]) => new Promise((res, rej) => { const i = new Image(); i.onload = () => { IMG[k] = i; res(); }; i.onerror = () => rej(new Error('missing img/' + f)); i.src = 'img/' + f; })),
]).then(() => {
  SLIDES.forEach((fn, i) => { const x0 = i * SW; paper(x0); X.save(); X.beginPath(); X.rect(x0, 0, SW, SH); X.clip(); X.translate(x0, 0); fn(i); X.restore(); });
  return true;
});
