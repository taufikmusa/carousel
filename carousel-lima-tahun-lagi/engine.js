// carousel-doodle engine — papan hitam + doodle putih/kuning (rujukan "7 Levels of Vibe Coders"). 1080x1440 (3:4).
// slides.js tetapkan: N, ASSETS {key:'fail'} (pilihan), SLIDES [fn(i)] (koordinat 0..1080 x 0..1440). JANGAN EDIT per carousel.
const SW = 1080, SH = window.SH_OVERRIDE || 1440;
const Y = '#FFC61A', W = '#FFFFFF', BK = '#0A0A0A';
const cv = document.getElementById('c'); cv.width = SW * N; cv.height = SH; cv.style.width = (SW * N / 4) + 'px'; cv.style.height = (SH / 4) + 'px';
const X = cv.getContext('2d'); const IMG = {};
const F = { t: s => `700 ${s}px KL`, b: s => `400 ${s}px PH`, k: s => `400 ${s}px KL` };
function rng(s) { return () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function rr(x, y, w, h, r) { X.beginPath(); X.roundRect(x, y, w, h, r); }
function tw(s, f) { X.save(); X.font = f; const w = X.measureText(s).width; X.restore(); return w; }
function T(s, x, y, f, fill = W, align = 'left') { X.save(); X.font = f; X.textAlign = align; X.fillStyle = fill; X.fillText(s, x, y); X.restore(); }

// ---- latar papan hitam + calar kapur ----
function board(x0, seed) {
  X.fillStyle = BK; X.fillRect(x0, 0, SW, SH);
  const R = rng(seed * 7 + 3); X.save(); X.lineCap = 'round';
  for (let k = 0; k < 110; k++) { const x = x0 + R() * SW, y = R() * SH, l = 60 + R() * 220; X.strokeStyle = 'rgba(255,255,255,' + (.015 + R() * .04) + ')'; X.lineWidth = .8 + R() * 1.6; X.beginPath(); X.moveTo(x, y); X.lineTo(x + l * .9, y - l * .45); X.stroke(); }
  X.restore();
  const v = X.createRadialGradient(x0 + SW / 2, SH / 2, SW * .3, x0 + SW / 2, SH / 2, SW * .95); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,.5)'); X.fillStyle = v; X.fillRect(x0, 0, SW, SH);
}

// ---- teks ----  *kata* = kuning
function runs(s) { const out = []; s.split('*').forEach((p, i) => { if (p) out.push([p, i % 2 === 1]); }); return out; }
function wrapRuns(s, f, maxW) {
  const words = []; runs(s).forEach(([p, hot]) => p.split(/(\s+)/).forEach(w => { if (w) words.push([w, hot]); }));
  const lines = [[]]; let cx = 0;
  words.forEach(([w, hot]) => { const ww = tw(w, f); if (cx + ww > maxW && lines[lines.length - 1].length && w.trim()) { lines.push([]); cx = 0; } if (!(cx === 0 && !w.trim())) { lines[lines.length - 1].push([w, hot]); cx += ww; } });
  return lines;
}
// perenggan berpusat (atau kiri) dengan *kuning*; pulangkan y bawah
function para(s, cx, y, maxW, size = 44, o = {}) {
  const f = o.font || F.k(size), lh = size * (o.lh || 1.28), ls = wrapRuns(s, f, maxW), left = o.align === 'left';
  ls.forEach((l, i) => { const wd = l.reduce((a, [w]) => a + tw(w, f), 0); let x = left ? cx : cx - wd / 2; l.forEach(([w, hot]) => { T(w, x, y + i * lh, f, hot ? Y : (o.color || W)); x += tw(w, f); }); });
  return y + ls.length * lh;
}
// tajuk putih (berpusat)
function title(s, cx, y, size = 78) { T(s, cx, y, F.t(size), W, 'center'); }
// tajuk berus kuning, teks hitam. lines = [..]
function brush(lines, cx, y, size = 100) {
  const lh = size * 1.12, ws = lines.map(l => tw(l, F.t(size))), w = Math.max(...ws) + size * .9, h = lines.length * lh + size * .2, x = cx - w / 2, top = y - size * .88, R = rng(Math.round(w + y));
  X.save(); X.fillStyle = Y; X.beginPath(); X.moveTo(x + 24, top + 8);
  const n = Math.round(w / 38); for (let k = 1; k <= n; k++) X.lineTo(x + 24 + (w - 48) * k / n, top + 8 + (R() - .5) * 18);
  for (let k = 1; k <= 3; k++) X.lineTo(x + w + (R() - .3) * 16, top + 8 + h * k / 3 + (R() - .5) * 6);
  for (let k = n; k >= 0; k--) X.lineTo(x + 24 + (w - 48) * k / n, top + h + (R() - .5) * 18);
  for (let k = 2; k >= 1; k--) X.lineTo(x - (R() - .3) * 16, top + 8 + h * k / 3 + (R() - .5) * 6);
  X.closePath(); X.fill(); X.restore();
  // calar berus di tepi
  X.save(); X.strokeStyle = Y; X.lineWidth = 5; X.lineCap = 'round'; for (let k = 0; k < 7; k++) { const px = x + 20 + R() * (w - 40), py = (k % 2 ? top + h : top) + (k % 2 ? 6 : 2); X.beginPath(); X.moveTo(px, py); X.lineTo(px + 40 + R() * 40, py + (k % 2 ? 5 : -4)); X.stroke(); } X.restore();
  lines.forEach((l, i) => T(l, cx, y + i * lh, F.t(size), BK, 'center'));
  return top + h;
}
function rays(cx, cy, r = 40, rot = 0, col = Y) { X.save(); X.translate(cx, cy); X.rotate(rot); X.strokeStyle = col; X.lineWidth = 7; X.lineCap = 'round'; [-.5, 0, .5].forEach(a => { X.beginPath(); X.moveTo(Math.sin(a) * r * .7, -Math.cos(a) * r * .7); X.lineTo(Math.sin(a) * r * 1.3, -Math.cos(a) * r * 1.3); X.stroke(); }); X.restore(); }
function squiggle(x1, x2, y, col = Y, w = 6) { X.save(); X.strokeStyle = col; X.lineWidth = w; X.lineCap = 'round'; X.beginPath(); X.moveTo(x1, y); X.quadraticCurveTo((x1 + x2) / 2, y - 14, x2, y - 3); X.stroke(); X.restore(); }
function arrow(x1, y1, x2, y2, col = Y, w = 8) { X.save(); X.strokeStyle = col; X.fillStyle = col; X.lineWidth = w; X.lineCap = 'round'; X.lineJoin = 'round'; X.beginPath(); X.moveTo(x1, y1); X.lineTo(x2, y2); X.stroke(); const a = Math.atan2(y2 - y1, x2 - x1); X.beginPath(); X.moveTo(x2 + Math.cos(a) * 6, y2 + Math.sin(a) * 6); X.lineTo(x2 - Math.cos(a - .5) * 26, y2 - Math.sin(a - .5) * 26); X.lineTo(x2 - Math.cos(a + .5) * 26, y2 - Math.sin(a + .5) * 26); X.closePath(); X.fill(); X.restore(); }
function pill(s, cx, cy, size = 54, o = {}) { const w = tw(s, F.t(size)) + size * 1.6, h = size * 1.7; X.save(); rr(cx - w / 2, cy - h / 2, w, h, h / 2); if (o.outline) { X.strokeStyle = W; X.lineWidth = 5; X.stroke(); } else { X.fillStyle = Y; X.fill(); } X.restore(); T(s, cx, cy + size * .33, F.t(size), o.outline ? W : BK, 'center'); }
// kad garisan putih (latar hitam)
function box(x, y, w, h, o = {}) { X.save(); rr(x, y, w, h, o.r || 30); X.fillStyle = o.fill || BK; X.fill(); X.strokeStyle = o.stroke || W; X.lineWidth = o.lw || 5; X.stroke(); X.restore(); }
// gelembung ucapan (tail ke tx,ty)
function bubble(x, y, w, h, tx, ty, o = {}) {
  X.save(); X.fillStyle = BK; X.strokeStyle = o.stroke || W; X.lineWidth = 5; X.lineJoin = 'round';
  rr(x, y, w, h, 40); X.fill(); X.stroke();
  const bx = Math.max(x + 50, Math.min(x + w - 90, tx)), by = ty > y ? y + h : y;
  X.beginPath(); X.moveTo(bx, by - (ty > y ? 3 : -3)); X.lineTo(tx, ty); X.lineTo(bx + 46, by - (ty > y ? 3 : -3)); X.closePath(); X.fill(); X.beginPath(); X.moveTo(bx, by); X.lineTo(tx, ty); X.lineTo(bx + 46, by); X.stroke();
  X.fillStyle = BK; X.fillRect(Math.min(bx, bx + 46) + 3, by - (ty > y ? 4 : -4) - 3, 40, 7); // sambungan bersih
  X.restore();
}
// kotak tanda (✓ atau ✕ kuning)
function mark(cx, cy, s, kind) { X.save(); X.strokeStyle = W; X.lineWidth = 5; rr(cx - s / 2, cy - s / 2, s, s, 10); X.stroke(); X.strokeStyle = Y; X.lineWidth = 9; X.lineCap = 'round'; X.lineJoin = 'round'; X.beginPath(); if (kind === 'x') { X.moveTo(cx - s * .28, cy - s * .28); X.lineTo(cx + s * .28, cy + s * .28); X.moveTo(cx + s * .28, cy - s * .28); X.lineTo(cx - s * .28, cy + s * .28); } else { X.moveTo(cx - s * .3, cy); X.lineTo(cx - s * .08, cy + s * .26); X.lineTo(cx + s * .34, cy - s * .3); } X.stroke(); X.restore(); }
function numDot(cx, cy, r, n) { X.save(); X.beginPath(); X.arc(cx, cy, r, 0, 7); X.fillStyle = Y; X.fill(); X.restore(); T(String(n), cx, cy + r * .38, F.t(r * 1.2), BK, 'center'); }

// ---- watak: kepala hitam bergaris putih + hoodie kuning. s = skala, (cx, base) = tapak badan ----
// pose: stand | think | cheer | phone | sad
function figure(cx, base, s = 1, pose = 'stand', flip = 1) {
  X.save(); X.translate(cx, base); X.scale(flip * s, s); X.lineJoin = 'round'; X.lineCap = 'round';
  const hy = -190, sh = -92;   // pusat kepala, bahu
  const arm = (x1, y1, x2, y2) => { X.strokeStyle = BK; X.lineWidth = 50; X.beginPath(); X.moveTo(x1, y1); X.lineTo(x2, y2); X.stroke(); X.strokeStyle = Y; X.lineWidth = 40; X.beginPath(); X.moveTo(x1, y1); X.lineTo(x2, y2); X.stroke(); X.beginPath(); X.arc(x2, y2, 20, 0, 7); X.fillStyle = BK; X.fill(); X.strokeStyle = W; X.lineWidth = 4; X.stroke(); };
  // tudung belakang
  X.beginPath(); X.ellipse(0, hy + 24, 84, 70, 0, 0, Math.PI); X.fillStyle = Y; X.fill(); X.strokeStyle = BK; X.lineWidth = 4; X.stroke();
  // badan
  X.beginPath(); X.moveTo(-100, 0); X.quadraticCurveTo(-112, sh - 4, -62, sh - 6); X.lineTo(62, sh - 6); X.quadraticCurveTo(112, sh - 4, 100, 0); X.closePath(); X.fillStyle = Y; X.fill(); X.strokeStyle = BK; X.lineWidth = 5; X.stroke();
  X.beginPath(); X.moveTo(-40, sh - 4); X.quadraticCurveTo(0, sh + 30, 40, sh - 4); X.strokeStyle = BK; X.lineWidth = 4; X.stroke();      // kolar
  X.beginPath(); X.moveTo(0, sh + 20); X.lineTo(0, sh + 62); X.moveTo(-14, sh + 24); X.lineTo(-14, sh + 52); X.moveTo(14, sh + 24); X.lineTo(14, sh + 52); X.lineWidth = 3; X.stroke();   // tali
  if (pose === 'think') { arm(-70, sh + 12, -48, hy + 78); arm(62, sh + 30, 30, sh + 60); }
  else if (pose === 'cheer') { arm(-80, sh + 8, -150, sh - 130); arm(80, sh + 8, 150, sh - 130); }
  else if (pose === 'phone') { arm(-66, sh + 20, -36, sh + 78); arm(66, sh + 20, 36, sh + 78); X.save(); X.translate(0, sh + 70); X.rotate(-.06); rr(-46, -62, 92, 130, 14); X.fillStyle = BK; X.fill(); X.strokeStyle = W; X.lineWidth = 5; X.stroke(); X.restore(); }
  else if (pose === 'sad') { arm(-92, sh + 14, -100, sh + 100); arm(92, sh + 14, 100, sh + 100); }
  else { arm(-90, sh + 16, -104, sh + 92); arm(90, sh + 16, 104, sh + 92); }
  // kepala
  X.beginPath(); X.arc(0, hy, 78, 0, 7); X.fillStyle = BK; X.fill(); X.strokeStyle = W; X.lineWidth = 7; X.stroke();
  X.fillStyle = W; const ey = pose === 'sad' ? hy + 12 : hy - 2; X.beginPath(); X.ellipse(-24, ey, 9, 15, 0, 0, 7); X.ellipse(26, ey, 9, 15, 0, 0, 7); X.fill();
  if (pose === 'cheer') { X.strokeStyle = W; X.lineWidth = 5; X.beginPath(); X.arc(0, hy + 30, 20, .15, Math.PI - .15); X.stroke(); }
  if (pose === 'sad') { X.strokeStyle = W; X.lineWidth = 5; X.beginPath(); X.arc(0, hy + 50, 18, Math.PI + .3, 2 * Math.PI - .3); X.stroke(); }
  X.restore();
}
function phoneShape(x, y, w, h) { X.save(); rr(x, y, w, h, 56); X.fillStyle = BK; X.fill(); X.strokeStyle = W; X.lineWidth = 8; X.stroke(); rr(x + w / 2 - 50, y + 22, 100, 14, 7); X.fillStyle = W; X.fill(); X.restore(); }
// tangga: n anak tangga naik ke kanan; (x,y) = penjuru kiri-bawah; pulangkan {tx,ty} puncak
function stairs(x, y, w, h, n) {
  const sw = w / n, sh = h / n;
  for (let k = 0; k < n; k++) { const sx = x + k * sw, sy = y - (k + 1) * sh; X.save(); X.fillStyle = BK; X.fillRect(sx, sy, sw, sh * (k + 1)); X.strokeStyle = W; X.lineWidth = 5; X.lineJoin = 'round'; X.beginPath(); X.moveTo(sx, y); X.lineTo(sx, sy); X.lineTo(sx + sw, sy); X.stroke(); X.strokeStyle = Y; X.lineWidth = 7; X.beginPath(); X.moveTo(sx + sw, sy); X.lineTo(sx + sw, y); X.stroke(); X.strokeStyle = 'rgba(255,255,255,.3)'; X.lineWidth = 2; for (let q = 0; q < 4; q++) { X.beginPath(); X.moveTo(sx + 14 + q * 16, sy + 10); X.lineTo(sx + 4 + q * 16, sy + 38); X.stroke(); } X.restore(); }
  return { tx: x + (n - 1) * sw + sw / 2, ty: y - n * sh };
}
function flag(x, y, label) { X.save(); X.strokeStyle = W; X.lineWidth = 6; X.beginPath(); X.moveTo(x, y); X.lineTo(x, y - 190); X.stroke(); X.beginPath(); X.arc(x, y - 196, 11, 0, 7); X.fillStyle = W; X.fill(); X.beginPath(); X.moveTo(x + 4, y - 180); X.lineTo(x + 150, y - 160); X.lineTo(x + 4, y - 130); X.closePath(); X.fillStyle = Y; X.fill(); X.restore(); T(label, x + 76, y - 143, F.t(25), BK, 'center'); }
function cloud(x, y, s = 1) { X.save(); X.translate(x, y); X.scale(s, s); X.strokeStyle = W; X.lineWidth = 5; X.fillStyle = BK; X.beginPath(); X.moveTo(0, 0); X.bezierCurveTo(-18, -4, -14, -44, 26, -34); X.bezierCurveTo(34, -66, 90, -62, 92, -28); X.bezierCurveTo(130, -34, 140, 0, 110, 4); X.closePath(); X.fill(); X.stroke(); X.restore(); }
function sparkle(x, y, r, col = Y) { X.save(); X.translate(x, y); X.fillStyle = col; X.beginPath(); for (let k = 0; k < 8; k++) { const a = k * Math.PI / 4, rad = k % 2 ? r * .25 : r; X.lineTo(Math.cos(a) * rad, Math.sin(a) * rad); } X.closePath(); X.fill(); X.restore(); }
function cutoutBC(im, cx, by, h) { const w = h * im.width / im.height; X.drawImage(im, cx - w / 2, by - h, w, h); }
function cover(im, x, y, w, h, r = 28) { X.save(); rr(x, y, w, h, r); X.clip(); const s = Math.max(w / im.width, h / im.height); X.drawImage(im, x + w / 2 - im.width * s / 2, y + h / 2 - im.height * s / 2, im.width * s, im.height * s); X.restore(); rr(x, y, w, h, r); X.strokeStyle = W; X.lineWidth = 5; X.stroke(); }

window.ready = Promise.all([
  ...[['KL', 'Kalam-700.ttf', 700], ['KL', 'Kalam-400.ttf', 400], ['PH', 'PatrickHand-400.ttf', 400]].map(([fam, file, w]) => new FontFace(fam, `url(fonts/${file})`, { weight: String(w) }).load().then(f => document.fonts.add(f))),
  ...Object.entries(window.ASSETS || {}).map(([k, f]) => new Promise((res, rej) => { const i = new Image(); i.onload = () => { IMG[k] = i; res(); }; i.onerror = () => rej(new Error('missing img/' + f)); i.src = 'img/' + f; })),
]).then(() => {
  SLIDES.forEach((fn, i) => { const x0 = i * SW; board(x0, i); X.save(); X.beginPath(); X.rect(x0, 0, SW, SH); X.clip(); X.translate(x0, 0); fn(i); X.restore(); });
  return true;
});
