// carousel-ivory engine v2 — premium ivory/maroon carousel (1080x1080 default, 4:5 pilihan): left-aligned Playfair headlines (ink/red/gold),
// eyebrow labels, highlighter paragraphs, soft cards with gold bar, receipt rows, price tag, medallion photo, dark maroon hook/CTA slides.
// slides.js defines: N, DARK (indeks slaid gelap), ASSETS {key:'file'}, SLIDES [fn(i)] (local coords 0..1080).  DO NOT EDIT per carousel.
const SW = 1080, SH = window.SH_OVERRIDE || 1080, M = 72;
const K = { bg: '#FBF8F3', ink: '#1B1512', red1: '#B5121F', red2: '#6C0613', maroon: '#7A0F1A', gold1: '#D9AE45', gold2: '#B27F17', gold3: '#7B500C', line: '#E7D2A0', cream: '#FBEBC9', card: '#FFFFFF', muted: '#6B5E57' };
// Tema warna (set `var THEME = 'emerald'|'navy'|'maroon'` di slides.js). Gaya sama, warna utama berbeza.
const THEMES = {
  maroon: { r1: '#B5121F', r2: '#6C0613', m: '#7A0F1A', b1: '#B5121F', b2: '#6A0512', d0: '#3A050D', d1: '#8F1020', d2: '#5E0A15', d3: '#2D030A', rgb: '122,15,26', sh: '100,0,10', tint: '#F1E4DD' },
  emerald: { r1: '#0F7A5C', r2: '#063F30', m: '#0A5240', b1: '#0F7A5C', b2: '#053A2C', d0: '#04241B', d1: '#0F6A50', d2: '#073D2E', d3: '#031A13', rgb: '10,82,64', sh: '0,50,35', tint: '#E3EEE8' },
  navy: { r1: '#1F4E9A', r2: '#0B2250', m: '#14316B', b1: '#245BB0', b2: '#0A1F4A', d0: '#050E24', d1: '#1B4A94', d2: '#0E2A5C', d3: '#040B1C', rgb: '20,49,107', sh: '0,20,60', tint: '#E3E9F3' },
};
const TH = THEMES[window.THEME || 'maroon']; Object.assign(K, { red1: TH.r1, red2: TH.r2, maroon: TH.m });
const cv = document.getElementById('c'); cv.width = SW * N; cv.height = SH; cv.style.width = (SW * N / 4) + 'px'; cv.style.height = (SH / 4) + 'px';
const X = cv.getContext('2d');
const IMG = {};
const F = { pf: (w, s) => `${w} ${s}px PF`, pfi: (w, s) => `italic ${w} ${s}px PFI`, ss: (w, s) => `${w} ${s}px SS` };
function rng(s) { return () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function rr(x, y, w, h, r) { X.beginPath(); X.roundRect(x, y, w, h, r); }
var tw = function (s, f, ls = 0) { X.save(); X.font = f; X.letterSpacing = ls + 'px'; const w = X.measureText(s).width; X.restore(); return w; };
function fit(s, fontFn, targetW, ls = 0) { const w = tw(s, fontFn(100), ls * 100); return 100 * targetW / w; }
// plain text. fill may be a colour or a gradient factory fn(y,size)
var T = function (s, x, y, f, fill = K.ink, align = 'left', ls = 0) { X.save(); X.font = f; X.textAlign = align; X.letterSpacing = ls + 'px'; X.fillStyle = fill; X.fillText(s, x, y); X.restore(); }
function gradY(y0, y1, stops) { const g = X.createLinearGradient(0, y0, 0, y1); stops.forEach(([o, c]) => g.addColorStop(o, c)); return g; }
const goldFill = (y, size) => gradY(y - size * .78, y + size * .12, [[0, '#E3BB55'], [.45, K.gold2], [1, K.gold3]]);
const goldFillL = (y, size) => gradY(y - size * .78, y + size * .12, [[0, '#FBEBB0'], [.5, '#EBC45E'], [1, '#C8921E']]);
const redFill = (y, size) => gradY(y - size * .78, y + size * .12, [[0, K.red1], [1, K.red2]]);

// ---- text blocks ----
var wsp = 0;
T = function (s, x, y, f, fill = K.ink, align = 'left', ls = 0) { X.save(); X.font = f; X.wordSpacing = wsp + 'px'; X.textAlign = align; X.letterSpacing = ls + 'px'; X.fillStyle = typeof fill === 'function' ? fill(y, parseFloat(f.match(/(\d+(\.\d+)?)px/)[1])) : fill; X.fillText(s, x, y); X.restore(); };
tw = function (s, f, ls = 0) { X.save(); X.font = f; X.wordSpacing = wsp + 'px'; X.letterSpacing = ls + 'px'; const w = X.measureText(s).width; X.restore(); return w; };
const STY = { ink: [F.pf, 900, K.ink], red: [F.pf, 900, redFill], gold: [F.pf, 900, goldFill], white: [F.pf, 900, '#FFFFFF'], cream: [F.pf, 900, '#F6E3B4'], goldi: [(w, s) => F.pfi(700, s), 700, goldFill], goldl: [F.pf, 900, goldFillL], goldil: [(w, s) => F.pfi(700, s), 700, goldFillL], whitei: [(w, s) => F.pfi(700, s), 700, '#FFFFFF'] };
// headline: lines = [[ [text, style], ... ], ...]; left aligned; shrinks (all lines equally) to fit maxW. returns last baseline
function headline(lines, x, y, o = {}) {
  const size0 = o.size ?? 118, maxW = o.maxW ?? SW - 2 * M, lh = o.lh ?? .98;
  const meas = size => Math.max(...lines.map(l => { wsp = size * .05; const w = l.reduce((a, [t, st]) => a + tw(t, STY[st][0](STY[st][1], size), -size * (st === 'goldi' || st === 'whitei' || st === 'goldil' ? .01 : .025)), 0); wsp = 0; return w; }));
  const size = Math.min(size0, size0 * maxW / meas(size0)); let by = y;
  lines.forEach((l, i) => { if (i) by += size * lh; let cx = x; wsp = size * .05; l.forEach(([t, st]) => { const ls = -size * (st === 'goldi' || st === 'whitei' || st === 'goldil' ? .01 : .025); T(t, cx, by, STY[st][0](STY[st][1], size), STY[st][2], 'left', ls); cx += tw(t, STY[st][0](STY[st][1], size), ls); }); wsp = 0; });
  return by;
}
function eyebrow(s, x, y, dark) { X.save(); X.fillStyle = dark ? '#E3BB55' : K.gold2; X.fillRect(x, y - 9, 40, 3); X.restore(); T(s.toUpperCase(), x + 58, y, F.ss(700, 24), dark ? '#F1D78A' : K.gold2, 'left', 4.2); }
// paragraph with *highlight* markers; wraps; returns last baseline
function para(s, x, y, w, size = 36, o = {}) {
  const dark = !!o.dark, lh = o.lh ?? 1.46; let hot = false;
  const words = s.split(' ').map(t => { const h = hot || t.startsWith('*'); if (t.startsWith('*')) hot = true; if (/\*[.,?!:;)]*$/.test(t)) hot = false; return { t: t.replace(/\*/g, ''), h }; });
  const fw = h => h ? F.ss(800, size) : F.ss(500, size), sp = tw(' ', F.ss(500, size)); const lines = []; let cur = [], cw = 0;
  words.forEach(wd => { const ww = tw(wd.t, fw(wd.h)); if (cur.length && cw + sp + ww > w) { lines.push(cur); cur = []; cw = 0; } cw += (cur.length ? sp : 0) + ww; cur.push({ ...wd, ww }); }); lines.push(cur);
  const base = o.color || (dark ? '#F6E9D0' : '#2B2320');
  lines.forEach((ln, li) => { const by = y + li * size * lh; let cx = x;
    if (!dark) { X.save(); X.globalAlpha = .4; X.fillStyle = '#EBC56A'; X.beginPath(); ln.forEach((wd, k) => { if (wd.h) X.rect(cx - 6, by - size * .84, wd.ww + (ln[k + 1] && ln[k + 1].h ? sp : 0) + 12, size * 1.12); cx += wd.ww + sp; }); X.fill(); X.restore(); cx = x; }
    ln.forEach(wd => { T(wd.t, cx, by, fw(wd.h), wd.h ? (dark ? '#F4D77C' : K.maroon) : base); cx += wd.ww + sp; }); });
  return y + (lines.length - 1) * size * lh;
}

// ---- ui blocks ----
function footer(i, n, dark) {
  T('@taufik.pg', M, SH - 58, F.ss(700, 25), dark ? '#F1D78A' : K.maroon, 'left', 1);
  if ((window.NODOTS || []).includes(i)) return; const gap = 24, cw = 12; let x = SW - M; for (let k = n - 1; k >= 0; k--) { const cur = k === i, w = cur ? 40 : cw; x -= w; rr(x, SH - 70, w, 12, 6); X.fillStyle = cur ? (dark ? '#E3BB55' : K.maroon) : (dark ? 'rgba(255,255,255,.28)' : 'rgba(' + TH.rgb + ',.22)'); X.fill(); x -= gap - 10; }
}
function card(x, y, w, h, o = {}) {
  const r = o.r ?? 22; X.save();
  if (o.dark) { rr(x, y, w, h, r); X.fillStyle = 'rgba(255,255,255,.07)'; X.fill(); X.strokeStyle = 'rgba(227,187,85,.45)'; X.lineWidth = 2; X.stroke(); X.restore(); return; }
  X.shadowColor = 'rgba(120,80,30,.16)'; X.shadowBlur = 26; X.shadowOffsetY = 8; rr(x, y, w, h, r); X.fillStyle = o.fill || K.card; X.fill(); X.restore();
  if (o.bar) { X.save(); rr(x, y, w, h, r); X.clip(); X.fillStyle = gradY(y, y + h, [[0, '#E3BB55'], [1, '#9A6A10']]); X.fillRect(x, y, 11, h); X.restore(); }
}
function box(x, y, w, h, kind, r = 18) {
  X.save(); rr(x, y, w, h, r);
  if (kind === 'red') { X.fillStyle = gradY(y, y + h, [[0, TH.b1], [1, TH.b2]]); X.shadowColor = 'rgba(' + TH.sh + ',.3)'; X.shadowBlur = 16; X.shadowOffsetY = 6; X.fill(); }
  if (kind === 'gold') { X.fillStyle = gradY(y, y + h, [[0, '#DDB04A'], [.55, '#B07C14'], [1, '#8A5C0C']]); X.shadowColor = 'rgba(120,80,10,.3)'; X.shadowBlur = 12; X.shadowOffsetY = 4; X.fill(); }
  if (kind === 'cream') { X.fillStyle = K.cream; X.fill(); X.strokeStyle = '#F0DAA5'; X.lineWidth = 2; X.stroke(); }
  X.restore();
}
function numBox(x, y, s, t) { box(x, y, s, s, 'gold', s * .26); T(t, x + s / 2, y + s * .68, F.ss(800, s * .56), '#fff', 'center'); }
function checkCircle(cx, cy, r, col) { const g = X.createRadialGradient(cx - r * .3, cy - r * .4, r * .1, cx, cy, r); g.addColorStop(0, '#F0CF70'); g.addColorStop(.6, '#C08A1E'); g.addColorStop(1, '#8A5C0C'); X.save(); X.beginPath(); X.arc(cx, cy, r, 0, 7); X.fillStyle = g; X.fill(); X.strokeStyle = '#fff'; X.lineWidth = r * .16; X.lineCap = 'round'; X.lineJoin = 'round'; X.beginPath(); X.moveTo(cx - r * .38, cy + r * .02); X.lineTo(cx - r * .08, cy + r * .32); X.lineTo(cx + r * .42, cy - r * .3); X.stroke(); X.restore(); }
function crossCircle(cx, cy, r) { X.save(); X.beginPath(); X.arc(cx, cy, r, 0, 7); X.fillStyle = TH.tint; X.fill(); X.strokeStyle = K.maroon; X.lineWidth = r * .16; X.lineCap = 'round'; const d = r * .36; X.beginPath(); X.moveTo(cx - d, cy - d); X.lineTo(cx + d, cy + d); X.moveTo(cx + d, cy - d); X.lineTo(cx - d, cy + d); X.stroke(); X.restore(); }
function arrowDown(cx, y, len = 36, col = K.gold2) { X.save(); X.strokeStyle = col; X.lineWidth = 6; X.lineCap = 'round'; X.lineJoin = 'round'; X.beginPath(); X.moveTo(cx, y); X.lineTo(cx, y + len); X.moveTo(cx - 14, y + len - 14); X.lineTo(cx, y + len); X.lineTo(cx + 14, y + len - 14); X.stroke(); X.restore(); }
function dotted(x1, x2, y, col = '#C9A864') { X.save(); X.strokeStyle = col; X.lineWidth = 3; X.setLineDash([2, 9]); X.lineCap = 'round'; X.beginPath(); X.moveTo(x1, y); X.lineTo(x2, y); X.stroke(); X.restore(); }
function priceTag(cx, cy, w, h, label, rot = -.06) {
  X.save(); X.translate(cx, cy); X.rotate(rot); const r = 22, tip = h * .5;
  X.shadowColor = 'rgba(100,60,10,.35)'; X.shadowBlur = 24; X.shadowOffsetY = 12;
  X.beginPath(); X.moveTo(-w / 2, 0); X.lineTo(-w / 2 + tip, -h / 2); X.lineTo(w / 2 - r, -h / 2); X.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r); X.lineTo(w / 2, h / 2 - r); X.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2); X.lineTo(-w / 2 + tip, h / 2); X.closePath();
  X.fillStyle = gradY(-h / 2, h / 2, [[0, '#E6BE5A'], [.5, '#B88418'], [1, '#8A5C0C']]); X.fill(); X.shadowColor = 'transparent';
  X.strokeStyle = 'rgba(255,240,190,.6)'; X.lineWidth = 3; X.stroke();
  X.beginPath(); X.arc(-w / 2 + tip * .78, 0, 13, 0, 7); X.fillStyle = K.bg; X.fill(); X.strokeStyle = '#7B500C'; X.lineWidth = 3; X.stroke();
  let sz = h * .46; const avail = w - tip - 60; const m = tw(label, F.ss(800, sz), -1); if (m > avail) sz *= avail / m; T(label, tip * .5 + 18, sz * .36, F.ss(800, sz), '#fff', 'center', -1); X.restore();
}

// ---- images ----
// photo whose beige background fades into the paper (no visible box)
function fadePhoto(im, cx, cy, w, fade = 70, glow = true) {
  const h = w * im.height / im.width, O = document.createElement('canvas'); O.width = Math.ceil(w); O.height = Math.ceil(h); const c = O.getContext('2d'); c.drawImage(im, 0, 0, w, h); c.globalCompositeOperation = 'destination-in';
  [[0, 0, fade, 0], [w, 0, w - fade, 0], [0, 0, 0, fade], [0, h, 0, h - fade]].forEach(([x1, y1, x2, y2]) => { const g = c.createLinearGradient(x1, y1, x2, y2); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, '#000'); c.fillStyle = g; c.fillRect(0, 0, w, h); });
  if (glow) { const g = X.createRadialGradient(cx, cy, 10, cx, cy, w * .6); g.addColorStop(0, 'rgba(255,225,140,.30)'); g.addColorStop(1, 'rgba(255,225,140,0)'); X.fillStyle = g; X.fillRect(cx - w, cy - w, w * 2, w * 2); }
  X.save(); X.globalCompositeOperation = 'multiply'; X.drawImage(O, cx - w / 2, cy - h / 2); X.restore();
}
// circular medallion: gold double ring + photo cover-fit inside
function medallion(im, cx, cy, d, fx = .5, fy = .5, zoom = 1) {
  const r = d / 2; X.save(); X.shadowColor = 'rgba(0,0,0,.45)'; X.shadowBlur = 50; X.shadowOffsetY = 20; X.beginPath(); X.arc(cx, cy, r + 16, 0, 7); X.fillStyle = gradY(cy - r, cy + r, [[0, '#F0D27A'], [.5, '#B88418'], [1, '#7B500C']]); X.fill(); X.restore();
  X.save(); X.beginPath(); X.arc(cx, cy, r + 4, 0, 7); X.fillStyle = TH.d3; X.fill(); X.restore();
  X.save(); X.beginPath(); X.arc(cx, cy, r, 0, 7); X.clip(); X.fillStyle = '#F6F3EC'; X.fillRect(cx - r, cy - r, d, d);
  const s = Math.max(d / im.width, d / im.height) * zoom, w = im.width * s, h = im.height * s; X.drawImage(im, cx - w * fx, cy - h * fy, w, h); X.restore();
}
function cutoutBC(im, cx, by, h) { const w = h * im.width / im.height; X.drawImage(im, cx - w / 2, by - h, w, h); }

// ---- backgrounds ----
function paper(i, x0, dark) {
  if (dark) {
    X.fillStyle = TH.d0; X.fillRect(x0, 0, SW, SH);
    let g = X.createRadialGradient(x0 + SW * .5, SH * .62, 60, x0 + SW * .5, SH * .62, SW * 1.05); g.addColorStop(0, TH.d1); g.addColorStop(.55, TH.d2); g.addColorStop(1, TH.d3); X.fillStyle = g; X.fillRect(x0, 0, SW, SH);
    g = X.createRadialGradient(x0 + SW, 0, 20, x0 + SW, 0, 620); g.addColorStop(0, 'rgba(240,200,110,.22)'); g.addColorStop(1, 'rgba(240,200,110,0)'); X.fillStyle = g; X.fillRect(x0, 0, SW, SH);
    const R = rng(x0 + 9); X.save(); for (let k = 0; k < 70; k++) { X.globalAlpha = .1 + R() * .3; X.fillStyle = '#F0D27A'; X.beginPath(); X.arc(x0 + R() * SW, R() * SH, .8 + R() * 2.2, 0, 7); X.fill(); } X.restore(); return;
  }
  X.fillStyle = K.bg; X.fillRect(x0, 0, SW, SH);
  const g = X.createRadialGradient(x0 + SW / 2, SH * .4, 60, x0 + SW / 2, SH * .5, SW * .95); g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(1, 'rgba(240,230,210,.4)'); X.fillStyle = g; X.fillRect(x0, 0, SW, SH);
  const R = rng(x0 + 5); X.save(); X.globalAlpha = .03; for (let k = 0; k < 4500; k++) { X.fillStyle = R() < .5 ? '#000' : '#a07a40'; X.fillRect(x0 + R() * SW, R() * SH, 1.5, 1.5); } X.restore();
}

window.ready = Promise.all([
  ...[['PF', 'PlayfairDisplay-700.ttf', 700, 'normal'], ['PF', 'PlayfairDisplay-800.ttf', 800, 'normal'], ['PF', 'PlayfairDisplay-900.ttf', 900, 'normal'], ['PFI', 'PlayfairDisplay-400i.ttf', 400, 'italic'], ['PFI', 'PlayfairDisplay-700i.ttf', 700, 'italic'],
    ['SS', 'SourceSerif4-500.ttf', 500, 'normal'], ['SS', 'SourceSerif4-600.ttf', 600, 'normal'], ['SS', 'SourceSerif4-700.ttf', 700, 'normal'], ['SS', 'SourceSerif4-800.ttf', 800, 'normal']]
    .map(([fam, file, w, st]) => new FontFace(fam, `url(fonts/${file})`, { weight: String(w), style: st }).load().then(f => document.fonts.add(f))),
  ...Object.entries(ASSETS).map(([k, f]) => new Promise((res, rej) => { const i = new Image(); i.onload = () => { IMG[k] = i; res(); }; i.onerror = () => rej(new Error('missing img/' + f)); i.src = 'img/' + f; })),
]).then(() => {
  SLIDES.forEach((fn, i) => { const x0 = i * SW, dark = (window.DARK || []).includes(i); paper(i, x0, dark); X.save(); X.beginPath(); X.rect(x0, 0, SW, SH); X.clip(); X.translate(x0, 0); fn(i); footer(i, N, dark); X.restore(); });
  return true;
});
