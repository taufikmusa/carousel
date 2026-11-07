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

// ---- ikon garisan (gaya profesional). ic(nama,cx,cy,saiz,{dash,col,fill}) ----
// nama: person phone briefcase coins chain bulb book home shield trend check cross target hourglass calendar spark
function ic(name, cx, cy, s = 100, o = {}) {
  X.save(); X.translate(cx, cy); X.scale(s / 100, s / 100); X.strokeStyle = o.col || L; X.fillStyle = o.col || L; X.lineWidth = 6; X.lineCap = 'round'; X.lineJoin = 'round'; if (o.dash) X.setLineDash([2, 11]);
  const P = (fn, fill) => { X.beginPath(); fn(); if (fill) X.fill(); else X.stroke(); };
  const sf = !!o.fill && !o.dash;
  switch (name) {
    case 'person': P(() => X.arc(0, -22, 22, 0, 7), sf); P(() => { X.moveTo(-42, 44); X.quadraticCurveTo(-42, 8, 0, 8); X.quadraticCurveTo(42, 8, 42, 44); X.closePath(); }, sf); break;
    case 'phone': P(() => X.roundRect(-26, -46, 52, 92, 12)); P(() => { X.moveTo(-8, 34); X.lineTo(8, 34); }); P(() => { X.moveTo(-12, -30); X.lineTo(12, -30); }); break;
    case 'briefcase': P(() => X.roundRect(-44, -22, 88, 62, 10)); P(() => { X.moveTo(-18, -22); X.lineTo(-18, -36); X.lineTo(18, -36); X.lineTo(18, -22); }); P(() => { X.moveTo(-44, 6); X.lineTo(44, 6); }); break;
    case 'coins': [[-6, 22], [-6, 4], [-6, -14]].forEach(([x, y]) => P(() => X.ellipse(x, y, 34, 13, 0, 0, 7))); P(() => { X.moveTo(-40, -14); X.lineTo(-40, 22); X.moveTo(28, -14); X.lineTo(28, 22); }); break;
    case 'chain': P(() => X.roundRect(-46, -16, 54, 32, 16)); P(() => X.roundRect(-8, -16, 54, 32, 16)); break;
    case 'bulb': P(() => { X.arc(0, -10, 30, Math.PI * .8, Math.PI * 2.2); X.quadraticCurveTo(26, 24, 16, 28); X.lineTo(-16, 28); X.quadraticCurveTo(-26, 24, -28, 8); }); P(() => { X.moveTo(-14, 42); X.lineTo(14, 42); }); P(() => { X.moveTo(-8, 28); X.lineTo(-8, 10); X.lineTo(8, 10); X.lineTo(8, 28); }); break;
    case 'book': P(() => { X.moveTo(0, -30); X.quadraticCurveTo(-24, -42, -46, -34); X.lineTo(-46, 34); X.quadraticCurveTo(-24, 26, 0, 38); X.quadraticCurveTo(24, 26, 46, 34); X.lineTo(46, -34); X.quadraticCurveTo(24, -42, 0, -30); X.lineTo(0, 38); }); break;
    case 'home': P(() => { X.moveTo(-46, -2); X.lineTo(0, -42); X.lineTo(46, -2); }); P(() => { X.moveTo(-34, -10); X.lineTo(-34, 40); X.lineTo(34, 40); X.lineTo(34, -10); }); P(() => X.roundRect(-10, 14, 20, 26, 4)); break;
    case 'shield': P(() => { X.moveTo(0, -44); X.lineTo(38, -30); X.lineTo(38, 4); X.quadraticCurveTo(36, 30, 0, 46); X.quadraticCurveTo(-36, 30, -38, 4); X.lineTo(-38, -30); X.closePath(); }); P(() => { X.moveTo(-14, 2); X.lineTo(-4, 14); X.lineTo(16, -10); }); break;
    case 'trend': P(() => { X.moveTo(-44, 30); X.lineTo(-14, 0); X.lineTo(6, 16); X.lineTo(42, -26); }); P(() => { X.moveTo(18, -28); X.lineTo(44, -28); X.lineTo(44, -2); }); break;
    case 'check': P(() => X.arc(0, 0, 44, 0, 7)); P(() => { X.moveTo(-18, 2); X.lineTo(-5, 16); X.lineTo(20, -14); }); break;
    case 'cross': P(() => X.arc(0, 0, 44, 0, 7)); P(() => { X.moveTo(-16, -16); X.lineTo(16, 16); X.moveTo(16, -16); X.lineTo(-16, 16); }); break;
    case 'target': P(() => X.arc(0, 0, 44, 0, 7)); P(() => X.arc(0, 0, 26, 0, 7)); P(() => X.arc(0, 0, 7, 0, 7), true); break;
    case 'hourglass': P(() => { X.moveTo(-30, -44); X.lineTo(30, -44); X.lineTo(30, -32); X.quadraticCurveTo(30, -6, 0, 0); X.quadraticCurveTo(30, 6, 30, 32); X.lineTo(30, 44); X.lineTo(-30, 44); X.lineTo(-30, 32); X.quadraticCurveTo(-30, 6, 0, 0); X.quadraticCurveTo(-30, -6, -30, -32); X.closePath(); }); break;
    case 'calendar': P(() => X.roundRect(-42, -34, 84, 78, 12)); P(() => { X.moveTo(-42, -10); X.lineTo(42, -10); X.moveTo(-18, -46); X.lineTo(-18, -26); X.moveTo(18, -46); X.lineTo(18, -26); }); P(() => X.arc(0, 20, 6, 0, 7), true); break;
    case 'spark': P(() => { for (let k = 0; k < 8; k++) { const a = k * Math.PI / 4, r = k % 2 ? 12 : 44; X.lineTo(Math.cos(a) * r, Math.sin(a) * r); } X.closePath(); }, sf); break;
  }
  X.restore();
}
// jubin ikon: segi empat bulat gelap bergaris lime; o.dash = versi "5 tahun lagi", o.solid = jubin lime penuh
function tile(cx, cy, size, name, o = {}) {
  const x = cx - size / 2, y = cy - size / 2;
  X.save(); rr(x, y, size, size, size * .24);
  if (o.solid) { X.fillStyle = L; X.fill(); } else { const g = X.createLinearGradient(x, y, x, y + size); g.addColorStop(0, '#1B1B1B'); g.addColorStop(1, '#0F0F0F'); X.fillStyle = g; X.fill(); X.strokeStyle = o.dash ? 'rgba(198,255,61,.55)' : L; X.lineWidth = 4; if (o.dash) X.setLineDash([12, 10]); X.stroke(); X.setLineDash([]); }
  X.restore(); ic(name, cx, cy, size * .56, { col: o.solid ? BK : L, dash: o.dash, fill: o.fill });
}
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
