// carousel-palette engine — cream-paper "Swiss editorial + painted art" carousel (1080x1350 per slide).
// Giant watercolour numeral, ultra-heavy tight Inter headlines (2-tone), mono eyebrow/hex labels,
// full-bleed-less painted art box, colour swatch row, dry-brush strokes on the CTA.
// slides.js defines: N, ASSETS {key:'file'}, SLIDES [fn(x, i)].  DO NOT EDIT per carousel.
const SW = 1080, SH = 1350, M = 70;
const K = { bg: '#F3EFE7', ink: '#121212', blue: '#2A4BA0', orange: '#EE8130', muted: '#3a3a3a' };
const cv = document.getElementById('c'); cv.width = SW * N; cv.height = SH; cv.style.width = (SW * N / 4) + 'px'; cv.style.height = (SH / 4) + 'px';
const X = cv.getContext('2d');
const IMG = {};
const F = { num: s => `900 ${s}px IN`, bold: s => `800 ${s}px IN`, body: s => `500 ${s}px IN`, mono: s => `700 ${s}px MO` };
function rng(s) { return () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let wsp = 0;
function txt(s, x, y, f, fill = K.ink, align = 'left', ls = 0) { X.save(); X.font = f; X.wordSpacing = wsp + 'px'; X.textAlign = align; X.letterSpacing = ls + 'px'; X.fillStyle = fill; X.fillText(s, x, y); X.restore(); }
function tw(s, f, ls = 0) { X.save(); X.font = f; X.wordSpacing = wsp + 'px'; X.letterSpacing = ls + 'px'; const w = X.measureText(s).width; X.restore(); return w; }
function rr(x, y, w, h, r) { X.beginPath(); X.roundRect(x, y, w, h, r); }

// ---- header: "02/07" left, optional hairline, @handle right ----
function header(x0, i, n, rule = false) {
  const t = String(i + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
  txt(t, x0 + M, 92, F.bold(30), K.ink, 'left', 1);
  if (rule) { X.fillStyle = K.ink; X.fillRect(x0 + M + 190, 82, SW - 2 * M - 190 - 250, 2); }
  txt('@taufik.pg', x0 + SW - M, 92, F.bold(30), K.ink, 'right', 0);
}
// one line of 2-tone text. parts = [[text, colour], ...]; tight tracking by default
function richLine(parts, x, y, size, ls = -size * .045, font = F.num) {
  const w0 = wsp; wsp = size * .07; let cx = x; parts.forEach(([t, c]) => { txt(t, cx, y, font(size), c || K.ink, 'left', ls); cx += tw(t, font(size), ls); }); wsp = w0; return cx;
}
// stack of title lines: lines = [{p:[[t,c]], size, lh}] ; returns last baseline
function titleStack(lines, x, y) {
  let by = y; lines.forEach((l, i) => { if (i) by += (l.lh || .9) * l.size; richLine(l.p, x, by, l.size, l.ls); }); return by;
}
// wide-tracked mono/bold label e.g. PALETTE 01
function eyebrow(s, x, y, size = 30) { txt(s.toUpperCase(), x, y, F.bold(size), K.ink, 'left', size * .2); }
// paragraph, wraps to maxW; *kata penting* = tebal + penanda (highlighter) warna hl. Returns last baseline.
function tagline(s, x, y, size = 38, maxW = SW - 2 * M, lh = 1.3, hl = K.orange) {
  let hot = false; const words = s.split(' ').map(t => { const h = hot || t.startsWith('*'); if (t.startsWith('*')) hot = true; if (/\*[.,?!]*$/.test(t)) hot = false; return { t: t.replace(/\*/g, ''), h }; });
  const fw = h => h ? F.bold(size) : F.body(size), sp = tw(' ', F.body(size)); const lines = []; let cur = [], cw = 0;
  words.forEach(w => { const ww = tw(w.t, fw(w.h)); if (cur.length && cw + sp + ww > maxW) { lines.push(cur); cur = []; cw = 0; } cw += (cur.length ? sp : 0) + ww; cur.push({ ...w, ww }); });
  lines.push(cur);
  lines.forEach((ln, li) => { let cx = x; const by = y + li * size * lh;
    ln.forEach((w, k) => { if (w.h) { X.save(); X.globalAlpha = .42; X.fillStyle = hl; X.fillRect(cx - 6, by - size * .86, w.ww + (ln[k + 1] && ln[k + 1].h ? sp : 0) + 12 - (ln[k + 1] && ln[k + 1].h ? 0 : 0), size * 1.14); X.restore(); } txt(w.t, cx, by, fw(w.h), K.ink); cx += w.ww + sp; }); });
  return y + (lines.length - 1) * size * lh;
}
function caption(s, x, y, size = 28) { txt(s.toUpperCase(), x, y, F.bold(size), K.ink, 'left', size * .18); }

// ---- giant watercolour numeral / glyph (bleeds off canvas, clipped by slide) ----
function ghost(s, x, y, size, col = '#4F7FD0', seed = 3) {
  const w = Math.ceil(tw(s, F.num(size)) + 40), h = Math.ceil(size * 1.05), O = document.createElement('canvas'); O.width = w; O.height = h; const c = O.getContext('2d');
  const g = c.createLinearGradient(0, 0, 0, h); g.addColorStop(0, col + 'b0'); g.addColorStop(.5, col + '80'); g.addColorStop(1, col + '28');
  c.font = F.num(size); c.fillStyle = g; c.fillText(s, 20, size * .83);
  c.globalCompositeOperation = 'source-atop'; const R = rng(seed);
  for (let i = 0; i < 90; i++) { const gx = R() * w, gy = R() * h, r = 40 + R() * 160, rg = c.createRadialGradient(gx, gy, 0, gx, gy, r); const lite = R() < .5; rg.addColorStop(0, lite ? 'rgba(255,255,255,.16)' : 'rgba(20,40,110,.10)'); rg.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = rg; c.fillRect(gx - r, gy - r, r * 2, r * 2); }
  for (let i = 0; i < 9000; i++) { c.fillStyle = R() < .5 ? 'rgba(255,255,255,.10)' : 'rgba(10,30,100,.06)'; c.fillRect(R() * w, R() * h, 1 + R() * 3, 1 + R() * 3); }
  X.drawImage(O, x - 20, y - size * .83);
}
// dry-brush stroke (many thin bristle lines) from (x1,y1) to (x2,y2)
function brushStroke(x1, y1, x2, y2, wdt, col, seed = 1) {
  const R = rng(seed), a = Math.atan2(y2 - y1, x2 - x1), L = Math.hypot(x2 - x1, y2 - y1), nx = -Math.sin(a), ny = Math.cos(a);
  X.save(); X.lineCap = 'round';
  for (let i = 0; i < wdt / 2.2; i++) {
    const o = (i / (wdt / 2.2) - .5) * wdt, a0 = R() * L * .12, a1 = L * (.78 + R() * .22), ed = 1 - Math.abs(o) / wdt * .6;
    X.strokeStyle = col; X.globalAlpha = .55 + R() * .45; X.lineWidth = 2 + R() * 4;
    X.beginPath(); X.moveTo(x1 + Math.cos(a) * a0 + nx * o, y1 + Math.sin(a) * a0 + ny * o);
    X.lineTo(x1 + Math.cos(a) * a1 * ed + nx * (o + (R() - .5) * 8), y1 + Math.sin(a) * a1 * ed + ny * (o + (R() - .5) * 8)); X.stroke();
  }
  X.restore();
}

// ---- images ----
// painted-art box: sharp rectangle, object-fit cover, focus fx/fy
function artBox(im, x, y, w, h, fx = .5, fy = .5) {
  X.save(); X.beginPath(); X.rect(x, y, w, h); X.clip();
  const s = Math.max(w / im.width, h / im.height), sw = w / s, sh = h / s;
  X.drawImage(im, Math.max(0, Math.min(im.width - sw, fx * im.width - sw / 2)), Math.max(0, Math.min(im.height - sh, fy * im.height - sh / 2)), sw, sh, x, y, w, h); X.restore();
}
// transparent cutout anchored by its bottom-right corner (may bleed off the slide)
function cutoutBR(im, rx, by, h) { const w = h * im.width / im.height; X.drawImage(im, rx - w, by - h, w, h); }
function cutoutBC(im, cx, by, h) { const w = h * im.width / im.height; X.drawImage(im, cx - w / 2, by - h, w, h); }

// ---- swatch / chip row: items [{c:'#hex', l:'label under', t:'text inside', tc:'text colour'}] ----
function swatches(items, x, y, w, h = 84, gap = 16, font = F.mono(26)) {
  const cw = (w - gap * (items.length - 1)) / items.length;
  items.forEach((it, i) => {
    const cx = x + i * (cw + gap); X.fillStyle = it.c; X.fillRect(cx, y, cw, h);
    if (it.line) { X.strokeStyle = 'rgba(0,0,0,.12)'; X.lineWidth = 2; X.strokeRect(cx, y, cw, h); }
    if (it.t) txt(it.t, cx + cw / 2, y + h / 2 + 11, F.num(34), it.tc || '#fff', 'center', -1);
    if (it.l) txt(it.l, cx + cw / 2, y + h + 46, font, K.ink, 'center', 1);
  });
}

// ---- ready-made layouts (use these first; compose with primitives only if needed) ----
// COVER: ghost numeral + big stacked title + cutout bottom-right
function coverLayout(x, i, n, o) {
  header(x, i, n, true);
  ghost(o.num, x + (o.numX ?? 200), o.numY ?? 1180, o.numSize ?? 1460, o.numCol || '#4F7FD0');
  const by = titleStack(o.lines, x + M + 10, o.titleY ?? 720);
  if (o.im) cutoutBR(IMG[o.im], x + SW + (o.imBleed ?? 40), SH + (o.imDrop ?? 20), o.imH ?? 620);
  return by;
}
// ITEM: eyebrow, 2-tone title, tagline, art box, swatch row, caption
function itemLayout(x, i, n, o) {
  header(x, i, n);
  eyebrow(o.eyebrow, x + M, 170);
  let size = o.size ?? 140; o.title.forEach(p => { wsp = size * .07; const w = tw(p[0], F.num(size), -size * .045); wsp = 0; if (w > SW - 2 * M) size = Math.floor(size * (SW - 2 * M) / w); });
  const lines = o.title.map(p => ({ p: [[p[0], p[1] || K.ink]], size, lh: .93 }));
  const by = titleStack(lines, x + M, 170 + 40 + size * .78);
  const ty = tagline(o.tagline, x + M, by + 66, o.tsize ?? 34, SW - 2 * M, 1.42, o.hl || K.orange);
  const top = ty + 50, bot = o.sw ? 1186 : 1296;
  artBox(IMG[o.im], x + M, top, SW - 2 * M, bot - top, o.fx, o.fy);
  if (o.sw) swatches(o.sw, x + M, 1214, SW - 2 * M, 80);
  if (o.caption) caption(o.caption, x + M, 1316);
}
// CTA: 2-line punch title, follow line, cutout portrait on dry-brush strokes
function ctaLayout(x, i, n, o) {
  header(x, i, n);
  const lines = [{ p: [[o.l1, K.ink]], size: o.size ?? 128, lh: .9 }, { p: [[o.l2, o.col || K.blue]], size: o.size ?? 128, lh: .9 }];
  const by = titleStack(lines, x + M, 270);
  txt(o.follow, x + M, by + 100, F.num(58), K.ink, 'left', -2);
  if (o.sub) tagline(o.sub, x + M, by + 180, 34, SW - 2 * M, 1.42, o.col || K.blue);
  (o.strokes || ['#2A4BA0', '#C9A24A', '#D96B3A', '#E9D9A8', '#4A2E5C']).forEach((c, k) => brushStroke(x + 150 + k * 95, 800 + (k % 2) * 30 - k * 24, x + 260 + k * 95, 1170 + (k % 2) * 40 - k * 28, 90, c, k + 4));
  cutoutBC(IMG[o.im], x + SW / 2 + 40, SH - 20, o.imH ?? 700);
}

function paper(x0) {
  X.fillStyle = K.bg; X.fillRect(x0, 0, SW, SH);
  const R = rng(x0 + 11); X.save(); X.globalAlpha = .05;
  for (let i = 0; i < 9000; i++) { X.fillStyle = R() < .5 ? '#000' : '#8a6a3a'; X.fillRect(x0 + R() * SW, R() * SH, 1 + R() * 2, 1 + R() * 2); }
  for (let i = 0; i < 160; i++) { X.strokeStyle = R() < .5 ? '#000' : '#fff'; X.lineWidth = 1; const px = x0 + R() * SW, py = R() * SH; X.beginPath(); X.moveTo(px, py); X.lineTo(px + (R() - .5) * 40, py + (R() - .5) * 40); X.stroke(); }
  X.restore();
}

window.ready = Promise.all([
  ...[F.num(40), F.bold(40), F.body(40), F.mono(40)].map(f => document.fonts.load(f)),
  ...Object.entries(ASSETS).map(([k, f]) => new Promise((res, rej) => { const i = new Image(); i.onload = () => { IMG[k] = i; res(); }; i.onerror = () => rej(new Error('missing img/' + f)); i.src = 'img/' + f; })),
]).then(() => {
  SLIDES.forEach((fn, i) => { const x0 = i * SW; paper(x0); X.save(); X.beginPath(); X.rect(x0, 0, SW, SH); X.clip(); fn(x0, i); X.restore(); });
  return true;
});
