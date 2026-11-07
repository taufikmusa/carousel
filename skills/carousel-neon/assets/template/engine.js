// carousel-neon engine — latar hitam + hijau lime neon, Unbounded (tajuk) + Space Grotesk (isi), watak hantu "Bayang". 1080x1440 (3:4).
// Setiap slaid: "01/08" kiri atas, "@taufik.pg" kiri bawah. slides.js tetapkan N, ASSETS (pilihan), SLIDES [fn(i)]. JANGAN EDIT per carousel.
const SW = 1080, SH = window.SH_OVERRIDE || 1440, M = 72;
const L = '#C6FF3D', BK = '#080808', W = '#FFFFFF', G1 = '#151515', G2 = '#2A2A2A', MUTE = 'rgba(255,255,255,.62)';
const cv = document.getElementById('c'); cv.width = SW * N; cv.height = SH; cv.style.width = (SW * N / 4) + 'px'; cv.style.height = (SH / 4) + 'px';
const X = cv.getContext('2d'); const IMG = {};
const F = { u: s => `800 ${s}px UB`, b: s => `700 ${s}px SG`, m: s => `500 ${s}px SG` };
function rng(s) { return () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function rr(x, y, w, h, r) { X.beginPath(); X.roundRect(x, y, w, h, r); }
function tw(s, f) { X.save(); X.font = f; const w = X.measureText(s).width; X.restore(); return w; }
function T(s, x, y, f, fill = W, align = 'left', ls = 0) { X.save(); X.font = f; X.textAlign = align; X.letterSpacing = ls + 'px'; X.fillStyle = fill; X.fillText(s, x, y); X.restore(); }

// ---- latar + chrome ----
function board(x0, i) {
  X.fillStyle = BK; X.fillRect(x0, 0, SW, SH);
  const R = rng(i * 13 + 5); const cx = x0 + (i % 2 ? SW * .85 : SW * .15), cy = i % 2 ? SH * .22 : SH * .8;
  const g = X.createRadialGradient(cx, cy, 20, cx, cy, 640); g.addColorStop(0, 'rgba(198,255,61,.13)'); g.addColorStop(1, 'rgba(198,255,61,0)'); X.fillStyle = g; X.fillRect(x0, 0, SW, SH);
  X.save(); X.fillStyle = 'rgba(255,255,255,.07)'; for (let gx = 0; gx < SW; gx += 54) for (let gy = 0; gy < SH; gy += 54) { X.beginPath(); X.arc(x0 + gx + 27, gy + 27, 1.6, 0, 7); X.fill(); } X.restore();
  X.save(); X.globalAlpha = .035; for (let k = 0; k < 2600; k++) { X.fillStyle = R() < .5 ? '#fff' : L; X.fillRect(x0 + R() * SW, R() * SH, 1.4, 1.4); } X.restore();
}
function chrome(i, n) {
  const a = String(i + 1).padStart(2, '0'), b = '/' + String(n).padStart(2, '0');
  T(a, M, 104, F.b(40), L); const wa = tw(a, F.b(40)); T(b, M + wa + 4, 104, F.b(40), 'rgba(255,255,255,.4)');
  X.save(); X.strokeStyle = 'rgba(198,255,61,.5)'; X.lineWidth = 3; X.lineCap = 'round'; X.beginPath(); X.moveTo(M + wa + tw(b, F.b(40)) + 26, 93); X.lineTo(M + wa + tw(b, F.b(40)) + 130, 93); X.stroke(); X.restore();
  X.save(); X.fillStyle = L; X.beginPath(); X.arc(M + 8, SH - 74, 8, 0, 7); X.fill(); X.restore(); T('@taufik.pg', M + 28, SH - 64, F.b(32), 'rgba(255,255,255,.9)');
  if (i < n - 1) T('SWIPE  →', SW - M, SH - 64, F.b(26), 'rgba(255,255,255,.38)', 'right', 3);
}

// ---- teks ----  *kata* = lime
function segs(s) { const o = []; s.split('*').forEach((p, i) => { if (p) o.push([p, i % 2 === 1]); }); return o; }
function wrapSegs(s, f, maxW) {
  const words = []; segs(s).forEach(([p, hot]) => p.split(/(\s+)/).forEach(w => { if (w) words.push([w, hot]); }));
  const lines = [[]]; let cx = 0;
  words.forEach(([w, hot]) => { const ww = tw(w, f); if (cx + ww > maxW && lines[lines.length - 1].length && w.trim()) { lines.push([]); cx = 0; } if (!(cx === 0 && !w.trim())) { lines[lines.length - 1].push([w, hot]); cx += ww; } });
  return lines;
}
function para(s, x, y, maxW, size = 42, o = {}) {
  const f = o.font || F.m(size), lh = size * (o.lh || 1.32), ls = wrapSegs(s, f, maxW), c = o.align === 'center';
  ls.forEach((l, i) => { const wd = l.reduce((a, [w]) => a + tw(w, f), 0); let px = c ? x - wd / 2 : x; l.forEach(([w, hot]) => { T(w, px, y + i * lh, hot ? F.b(size) : f, hot ? L : (o.color || W)); px += tw(w, hot ? F.b(size) : f); }); });
  return y + ls.length * lh;
}
// tajuk Unbounded: baris-baris, auto-muat kepada maxW; *lime*
function title(lines, x, y, maxW = SW - 2 * M, maxSize = 76, o = {}) {
  let size = maxSize; lines.forEach(l => { const w = segs(l).reduce((a, [p]) => a + tw(p, F.u(100)), 0); size = Math.min(size, 100 * maxW / w); });
  const lh = size * 1.2, c = o.align === 'center';
  lines.forEach((l, i) => { const wd = segs(l).reduce((a, [p]) => a + tw(p, F.u(size)), 0); let px = c ? x - wd / 2 : x; segs(l).forEach(([p, hot]) => { T(p, px, y + i * lh, F.u(size), hot ? L : W); px += tw(p, F.u(size)); }); });
  return y + (lines.length - 1) * lh + size * .3;
}
function tag(s, x, y, o = {}) { const f = F.b(26), w = tw(s, f) + s.length * 2 + 46; X.save(); rr(x, y - 34, w, 52, 26); if (o.fill) { X.fillStyle = L; X.fill(); } else { X.strokeStyle = L; X.lineWidth = 3; X.stroke(); } X.restore(); T(s, x + 22, y + 2, f, o.fill ? BK : L, 'left', 2); return w; }
function chip(s, cx, cy, size = 36, o = {}) { const f = F.b(size), w = tw(s, f) + size * 1.5, h = size * 1.7; X.save(); rr(cx - w / 2, cy - h / 2, w, h, h / 2); if (o.outline) { X.strokeStyle = o.col || W; X.lineWidth = 3; X.stroke(); } else { X.fillStyle = L; X.fill(); } X.restore(); T(s, cx, cy + size * .34, f, o.outline ? (o.col || W) : BK, 'center'); return w; }
function card(x, y, w, h, o = {}) { X.save(); rr(x, y, w, h, o.r || 30); X.fillStyle = o.fill || G1; X.fill(); X.strokeStyle = o.stroke || G2; X.lineWidth = o.lw || 3; X.stroke(); if (o.accent) { X.save(); X.clip(); X.fillStyle = L; X.fillRect(x, y, 10, h); X.restore(); } X.restore(); }
function num(cx, cy, r, n) { X.save(); X.beginPath(); X.arc(cx, cy, r, 0, 7); X.fillStyle = L; X.fill(); X.restore(); T(String(n), cx, cy + r * .36, F.u(r * 1.0), BK, 'center'); }
function sparkle(x, y, r, col = L) { X.save(); X.translate(x, y); X.fillStyle = col; X.beginPath(); for (let k = 0; k < 8; k++) { const a = k * Math.PI / 4, rad = k % 2 ? r * .22 : r; X.lineTo(Math.cos(a) * rad, Math.sin(a) * rad); } X.closePath(); X.fill(); X.restore(); }
function arrowR(x1, y, x2, col = L) { X.save(); X.strokeStyle = col; X.fillStyle = col; X.lineWidth = 6; X.lineCap = 'round'; X.beginPath(); X.moveTo(x1, y); X.lineTo(x2 - 8, y); X.stroke(); X.beginPath(); X.moveTo(x2, y); X.lineTo(x2 - 24, y - 15); X.lineTo(x2 - 24, y + 15); X.closePath(); X.fill(); X.restore(); }
function bubble(x, y, w, h, tx, ty, o = {}) {
  X.save(); X.lineJoin = 'round'; X.fillStyle = o.fill || G1; X.strokeStyle = o.stroke || L; X.lineWidth = 4;
  const down = ty > y + h / 2, bx = Math.max(x + 44, Math.min(x + w - 44, tx)), by = down ? y + h : y;
  rr(x, y, w, h, 36); X.fill(); X.stroke();
  X.beginPath(); X.moveTo(bx - 22, by); X.lineTo(tx, ty); X.lineTo(bx + 22, by); X.closePath(); X.fill(); X.beginPath(); X.moveTo(bx - 22, by); X.lineTo(tx, ty); X.lineTo(bx + 22, by); X.stroke();
  X.fillStyle = o.fill || G1; X.fillRect(bx - 20, by + (down ? -5 : -3), 40, 8); X.restore();
}

// ---- watak "Blur": kucing lime berwajah blur (mata juling, kelopak layu). pose: idle | think | cheer | sad | wave; o = {outline, flip} ----
function cat(cx, base, s = 1, pose = 'idle', o = {}) {
  X.save(); X.translate(cx, base); X.scale((o.flip || 1) * s * .86, s * .86); X.lineJoin = 'round'; X.lineCap = 'round';
  const out = !!o.outline, col = L, ink = out ? L : BK;
  const fillOrDash = () => { if (out) { X.fillStyle = BK; X.fill(); X.setLineDash([14, 12]); X.strokeStyle = L; X.lineWidth = 5; X.stroke(); X.setLineDash([]); } else { X.fillStyle = col; X.fill(); } };
  X.fillStyle = 'rgba(198,255,61,.14)'; X.beginPath(); X.ellipse(0, 8, 120, 15, 0, 0, 7); X.fill();
  // ekor
  X.beginPath(); X.moveTo(72, -34); X.bezierCurveTo(150, -20, 170, -120, 128, -170); X.lineWidth = 30; X.strokeStyle = out ? BK : col; X.stroke();
  if (out) { X.lineWidth = 36; X.strokeStyle = L; X.setLineDash([10, 12]); X.beginPath(); X.moveTo(72, -34); X.bezierCurveTo(150, -20, 170, -120, 128, -170); X.stroke(); X.lineWidth = 24; X.setLineDash([]); X.strokeStyle = BK; X.stroke(); }
  // lengan (belakang badan)
  const arm = (x1, y1, x2, y2) => { X.lineWidth = 40; X.strokeStyle = out ? L : col; if (out) X.setLineDash([8, 10]); X.beginPath(); X.moveTo(x1, y1); X.lineTo(x2, y2); X.stroke(); X.setLineDash([]); };
  if (pose === 'cheer') { arm(-74, -96, -120, -220); arm(74, -96, 120, -220); } else if (pose === 'wave') { arm(74, -100, 122, -226); } else if (pose === 'think') { arm(-52, -64, -30, -134); }
  // badan
  X.beginPath(); X.ellipse(0, -66, 92, 70, 0, 0, 7); fillOrDash();
  // kaki depan
  X.beginPath(); X.ellipse(-40, -10, 30, 18, 0, 0, 7); X.ellipse(40, -10, 30, 18, 0, 0, 7); fillOrDash();
  // telinga
  const droop = pose === 'sad' ? 18 : 0;
  [-1, 1].forEach(sd => { X.beginPath(); X.moveTo(sd * 78, -208); X.lineTo(sd * (56 + droop), -302 + droop * 2.2); X.lineTo(sd * 8, -250); X.closePath(); fillOrDash(); if (!out) { X.beginPath(); X.moveTo(sd * 62, -222); X.lineTo(sd * (50 + droop * .8), -278 + droop * 1.8); X.lineTo(sd * 24, -246); X.closePath(); X.fillStyle = 'rgba(8,8,8,.28)'; X.fill(); } });
  // kepala
  X.beginPath(); X.ellipse(0, -172, 86, 76, 0, 0, 7); fillOrDash();
  if (!out) { const g = X.createLinearGradient(0, -250, 0, -100); g.addColorStop(0, 'rgba(255,255,255,.3)'); g.addColorStop(.6, 'rgba(255,255,255,0)'); X.beginPath(); X.ellipse(0, -172, 86, 76, 0, 0, 7); X.fillStyle = g; X.fill(); }
  // mata blur: putih besar, anak mata kecil juling, kelopak layu
  const ey = pose === 'sad' ? -166 : -176, eyes = [[-34, -5, 4], [34, 6, 9]];
  eyes.forEach(([ex, px, py], k) => {
    X.save(); X.beginPath(); X.ellipse(ex, ey, 25, 29, 0, 0, 7); X.fillStyle = out ? BK : W; X.fill(); X.lineWidth = out ? 4 : 0; X.strokeStyle = L; if (out) X.stroke(); X.clip();
    X.fillStyle = ink; X.beginPath(); X.arc(ex + px * 1.2, ey + py, 10, 0, 7); X.fill();
    X.fillStyle = out ? BK : col; X.beginPath(); X.rect(ex - 30, ey - 34, 60, pose === 'cheer' ? 14 : (k ? 32 : 26)); X.fill(); X.strokeStyle = ink; X.lineWidth = 5; X.beginPath(); X.moveTo(ex - 30, ey - 34 + (pose === 'cheer' ? 14 : (k ? 32 : 26))); X.lineTo(ex + 30, ey - 34 + (pose === 'cheer' ? 14 : (k ? 32 : 26))); X.stroke(); X.restore();
  });
  // hidung, mulut, misai
  X.fillStyle = ink; X.beginPath(); X.moveTo(-8, -146); X.lineTo(8, -146); X.lineTo(0, -135); X.closePath(); X.fill();
  X.strokeStyle = ink; X.lineWidth = 5; X.beginPath();
  if (pose === 'sad') { X.moveTo(-14, -112); X.quadraticCurveTo(0, -126, 14, -112); } else if (pose === 'cheer') { X.arc(0, -134, 20, .15, Math.PI - .15); } else { X.moveTo(-18, -128); X.quadraticCurveTo(-9, -116, 0, -130); X.quadraticCurveTo(9, -116, 18, -128); }
  X.stroke(); X.lineWidth = 3.5; X.globalAlpha = .75; [[-1, -146, -1], [-1, -136, 0], [-1, -126, 1]].forEach(([sd, yy, sl]) => { [-1, 1].forEach(side => { X.beginPath(); X.moveTo(side * 54, yy); X.lineTo(side * 120, yy + sl * 12 - 4); X.stroke(); }); }); X.globalAlpha = 1;
  // tanda blur: ? untuk idle/think, titisan peluh untuk sad
  if (pose === 'think' || pose === 'idle') { X.fillStyle = L; X.font = '800 70px UB'; X.textAlign = 'center'; if (out) X.globalAlpha = .6; X.fillText('?', 112, -250); X.globalAlpha = 1; }
  X.restore();
}
const ghost = cat;   // keserasian: slaid lama panggil ghost()
// garis masa mendatar: titik-titik + label
function timeline(x1, x2, y, labels) { X.save(); X.strokeStyle = 'rgba(198,255,61,.5)'; X.lineWidth = 4; X.setLineDash([2, 14]); X.lineCap = 'round'; X.beginPath(); X.moveTo(x1, y); X.lineTo(x2, y); X.stroke(); X.setLineDash([]); labels.forEach(([t, px]) => { X.beginPath(); X.arc(px, y, 11, 0, 7); X.fillStyle = L; X.fill(); T(t, px, y + 52, F.b(28), W, 'center', 2); }); X.restore(); }
function cutoutBC(im, cx, by, h) { const w = h * im.width / im.height; X.drawImage(im, cx - w / 2, by - h, w, h); }

window.ready = Promise.all([
  ...[['UB', 'Unbounded-800.ttf', 800], ['SG', 'SpaceGrotesk-700.ttf', 700], ['SG', 'SpaceGrotesk-500.ttf', 500]].map(([fam, file, w]) => new FontFace(fam, `url(fonts/${file})`, { weight: String(w) }).load().then(f => document.fonts.add(f))),
  ...Object.entries(window.ASSETS || {}).map(([k, f]) => new Promise((res, rej) => { const i = new Image(); i.onload = () => { IMG[k] = i; res(); }; i.onerror = () => rej(new Error('missing img/' + f)); i.src = 'img/' + f; })),
]).then(() => {
  SLIDES.forEach((fn, i) => { const x0 = i * SW; board(x0, i); X.save(); X.beginPath(); X.rect(x0, 0, SW, SH); X.clip(); X.translate(x0, 0); chrome(i, N); fn(i); X.restore(); });
  return true;
});
