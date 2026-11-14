// carousel-gradient engine — putih + swoosh lilac, gradien biru→ungu→merah jambu→oren, Poppins 800 (rujukan: gaya "MetaNext" analisis industri). 1080x1080 (1:1).
// slides.js tetapkan N, ASSETS (pilihan), SLIDES [fn(i)]. Tag atas-kiri, lencana @taufik.pg atas-kanan, footer gelombang + "i/N" di setiap slaid. JANGAN EDIT per carousel.
const SW = 1080, SH = window.SH_OVERRIDE || 1080, M = 62;
// palet Taufik: Cream #FFFEC5 + Dark Coffee #39241F (tiada gradien)
const CR = '#FFFEC5', INK = '#39241F', LIL = '#F4F0A8', LIL2 = '#E3DC8A', PUR = '#39241F', BLU = '#39241F', PNK = '#6B4A3F', ORG = '#8A6A55', MUTE = '#6B5148';
const cv = document.getElementById('c'); cv.width = SW * N; cv.height = SH; cv.style.width = (SW * N / 4) + 'px'; cv.style.height = (SH / 4) + 'px';
const X = cv.getContext('2d'); const IMG = {};
const F = { h: s => `800 ${s}px PO`, hi: s => `italic 800 ${s}px PO`, b: s => `600 ${s}px PO`, m: s => `500 ${s}px PO` };
function rng(s) { return () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function rr(x, y, w, h, r) { X.beginPath(); X.roundRect(x, y, w, h, r); }
function tw(s, f, ls = 0) { X.save(); X.font = f; X.letterSpacing = ls + 'px'; const w = X.measureText(s).width; X.restore(); return w; }
function T(s, x, y, f, fill = INK, align = 'left', ls = 0) { X.save(); X.font = f; X.textAlign = align; X.letterSpacing = ls + 'px'; X.fillStyle = fill; X.fillText(s, x, y); X.restore(); }
function grad(x1, x2, stops) { return INK; }   // pepejal: coklat gelap
function gradV(y1, y2, stops) { const g = X.createLinearGradient(0, y1, 0, y2); stops.forEach(([o, c]) => g.addColorStop(o, c)); return g; }

// ---- latar: putih + swoosh lilac + gelombang gradien di bawah ----
function bg(x0, i) {
  X.fillStyle = CR; X.fillRect(x0, 0, SW, SH);
  X.save(); X.beginPath(); X.rect(x0, 0, SW, SH); X.clip();
  const flip = i % 2;
  [[.16, 0, -60], [.10, 40, 30]].forEach(([a, dy, dx], k) => { X.beginPath(); const sx = flip ? x0 : x0 + SW; const d = flip ? 1 : -1; X.moveTo(sx, 40 + dy); X.bezierCurveTo(sx + d * -520, 120 + dy, sx + d * -260, 520 + dy, sx + d * -430 + dx * d, 980); X.lineTo(sx, 980); X.closePath(); const g = X.createLinearGradient(sx, 0, sx + d * -500, 900); g.addColorStop(0, 'rgba(57,36,31,' + a * .45 + ')'); g.addColorStop(1, 'rgba(57,36,31,0)'); X.fillStyle = g; X.fill(); });
  X.restore();
}
function footer(x0, i, n, left) {
  X.save(); X.beginPath(); X.rect(0, 0, SW, SH); X.clip();
  X.beginPath(); X.moveTo(0, SH - 70); X.bezierCurveTo(260, SH - 120, 520, SH - 20, 760, SH - 78); X.bezierCurveTo(900, SH - 110, 1000, SH - 130, SW, SH - 116); X.lineTo(SW, SH); X.lineTo(0, SH); X.closePath();
  X.fillStyle = INK; X.fill();
  X.beginPath(); X.moveTo(SW - 380, SH); X.bezierCurveTo(SW - 220, SH - 70, SW - 120, SH - 120, SW, SH - 150); X.lineTo(SW, SH); X.closePath(); X.fillStyle = 'rgba(255,254,197,.22)'; X.fill();
  X.restore();
  T(left || 'Taufik Musa | Dealer Public Gold', M, SH - 36, F.hi(24), CR);
  const lab = (i + 1) + '/' + n, w = tw(lab, F.h(28)) + 56; X.save(); rr(SW - M - w, SH - 66, w, 52, 26); X.fillStyle = CR; X.fill(); X.restore(); T(lab, SW - M - w / 2, SH - 30, F.h(28), INK, 'center');
}
// lencana kanan-atas: gelung gradien + @taufik.pg
function brand() {
  const cx = SW - M - 84, cy = 104;
  X.save(); X.lineCap = 'round'; X.lineWidth = 15; X.strokeStyle = grad(cx - 54, cx + 54); X.beginPath(); X.moveTo(cx - 54, cy + 22); X.bezierCurveTo(cx - 54, cy - 70, cx - 6, cy - 70, cx, cy - 12); X.bezierCurveTo(cx + 6, cy + 46, cx + 54, cy + 46, cx + 54, cy - 28); X.stroke(); X.restore();
  T('Taufik Musa', cx, cy + 66, F.b(28), INK, 'center'); T('@taufik.pg', cx, cy + 94, F.b(19), MUTE, 'center', 1);
}
// tag pil gradien atas-kiri (oren → ungu), teks putih italic
function tag(s) {
  const f = F.hi(30), w = tw(s, f) + 64, x = M + 32, y = 70, h = 56;
  X.save(); X.fillStyle = INK; X.beginPath(); X.moveTo(M + 8, y + h); X.lineTo(M + 26, y); X.lineTo(M + 34, y); X.lineTo(M + 16, y + h); X.closePath(); X.fill();
  rr(x, y, w, h, 16); X.fillStyle = INK; X.fill(); X.restore(); T(s, x + 32, y + 40, f, CR);
  return x + w;
}
// tajuk hitam tebal. lines = baris; kembalikan y bawah
function title(lines, y, size = 92, lh = 1.04) { lines.forEach((l, i) => T(l, M, y + i * size * lh, F.h(size), INK, 'left', -size * .02)); return y + (lines.length - 1) * size * lh; }
// pil gradien dengan teks putih italic besar
function pill(s, y, size = 100, o = {}) {
  const f = F.hi(size), w = Math.min(SW - 2 * M + 20, tw(s, f, -size * .02) + size * .9), h = size * 1.3, x = o.x != null ? o.x : M - 18;
  X.save(); X.shadowColor = 'rgba(57,36,31,.25)'; X.shadowBlur = 20; X.shadowOffsetY = 8; rr(x, y, w, h, h * .3); X.fillStyle = INK; X.fill(); X.restore();
  T(s, x + size * .42, y + h * .74, f, CR, 'left', -size * .02); return { w, h, bottom: y + h };
}
// sub: garis gradien kiri + teks italic tebal (boleh 2 baris) ; *tebal*
function sub(lines, y, size = 38) {
  X.save(); X.fillStyle = INK; X.beginPath(); X.moveTo(M + 6, y + lines.length * size * 1.25 - size * .6); X.lineTo(M + 20, y - size * .8); X.lineTo(M + 30, y - size * .8); X.lineTo(M + 16, y + lines.length * size * 1.25 - size * .6); X.closePath(); X.fill(); X.restore();
  lines.forEach((l, i) => T(l, M + 52, y + i * size * 1.25, F.hi(size), INK)); return y + lines.length * size * 1.25;
}
// perenggan kecil; *kata* = tebal
function para(s, x, y, maxW, size = 34, o = {}) {
  const words = []; s.split('*').forEach((p, i) => p.split(/(\s+)/).forEach(w => { if (w) words.push([w, i % 2 === 1]); }));
  const lines = [[]]; let cx = 0; words.forEach(([w, b]) => { const ww = tw(w, b ? F.h(size) : F.b(size)); if (cx + ww > maxW && lines[lines.length - 1].length && w.trim()) { lines.push([]); cx = 0; } if (!(cx === 0 && !w.trim())) { lines[lines.length - 1].push([w, b]); cx += ww; } });
  const lh = size * 1.34; lines.forEach((l, i) => { let px = x; l.forEach(([w, b]) => { T(w, px, y + i * lh, b ? F.h(size) : F.b(size), o.color || INK); px += tw(w, b ? F.h(size) : F.b(size)); }); }); return y + lines.length * lh;
}
function card(x, y, w, h, o = {}) { X.save(); rr(x, y, w, h, o.r || 34); X.fillStyle = o.fill || LIL; X.fill(); if (o.stroke) { X.strokeStyle = o.stroke; X.lineWidth = 3; X.stroke(); } X.restore(); }

// ---- ikon putih dalam jubin gradien ----
function glyph(name, s) {
  X.save(); X.scale(s / 100, s / 100); X.strokeStyle = CR; X.fillStyle = CR; X.lineWidth = 7; X.lineCap = 'round'; X.lineJoin = 'round';
  const P = (fn, fill) => { X.beginPath(); fn(); if (fill) X.fill(); else X.stroke(); };
  switch (name) {
    case 'down': P(() => { X.moveTo(-40, -28); X.lineTo(-10, 2); X.lineTo(8, -14); X.lineTo(40, 26); }); P(() => { X.moveTo(14, 28); X.lineTo(42, 28); X.lineTo(42, 0); }); break;
    case 'up': P(() => { X.moveTo(-40, 28); X.lineTo(-10, -2); X.lineTo(8, 14); X.lineTo(40, -26); }); P(() => { X.moveTo(14, -28); X.lineTo(42, -28); X.lineTo(42, -2); }); break;
    case 'coins': [[-4, 22], [-4, 4], [-4, -14]].forEach(([x, y]) => P(() => X.ellipse(x, y, 32, 12, 0, 0, 7))); P(() => { X.moveTo(-36, -14); X.lineTo(-36, 22); X.moveTo(28, -14); X.lineTo(28, 22); }); break;
    case 'calendar': P(() => X.roundRect(-38, -30, 76, 70, 10)); P(() => { X.moveTo(-38, -8); X.lineTo(38, -8); X.moveTo(-16, -42); X.lineTo(-16, -22); X.moveTo(16, -42); X.lineTo(16, -22); }); P(() => X.arc(0, 20, 6, 0, 7), true); break;
    case 'check': P(() => { X.moveTo(-30, 2); X.lineTo(-8, 24); X.lineTo(32, -22); }); break;
    case 'cross': P(() => { X.moveTo(-26, -26); X.lineTo(26, 26); X.moveTo(26, -26); X.lineTo(-26, 26); }); break;
    case 'target': P(() => X.arc(0, 0, 40, 0, 7)); P(() => X.arc(0, 0, 22, 0, 7)); P(() => X.arc(0, 0, 6, 0, 7), true); break;
    case 'clock': P(() => X.arc(0, 0, 40, 0, 7)); P(() => { X.moveTo(0, -22); X.lineTo(0, 2); X.lineTo(16, 12); }); break;
    case 'hourglass': P(() => { X.moveTo(-26, -40); X.lineTo(26, -40); X.lineTo(26, -28); X.quadraticCurveTo(26, -4, 0, 0); X.quadraticCurveTo(26, 4, 26, 28); X.lineTo(26, 40); X.lineTo(-26, 40); X.lineTo(-26, 28); X.quadraticCurveTo(-26, 4, 0, 0); X.quadraticCurveTo(-26, -4, -26, -28); X.closePath(); }); break;
    case 'person': P(() => X.arc(0, -20, 18, 0, 7)); P(() => { X.moveTo(-36, 40); X.quadraticCurveTo(-36, 6, 0, 6); X.quadraticCurveTo(36, 6, 36, 40); }); break;
    case 'shield': P(() => { X.moveTo(0, -42); X.lineTo(34, -28); X.lineTo(34, 4); X.quadraticCurveTo(32, 28, 0, 44); X.quadraticCurveTo(-32, 28, -34, 4); X.lineTo(-34, -28); X.closePath(); }); P(() => { X.moveTo(-12, 2); X.lineTo(-3, 13); X.lineTo(14, -10); }); break;
    case 'gold': P(() => { X.moveTo(-40, 28); X.lineTo(-26, -2); X.lineTo(26, -2); X.lineTo(40, 28); X.closePath(); }); P(() => { X.moveTo(-18, -2); X.lineTo(-10, -26); X.lineTo(10, -26); X.lineTo(18, -2); }); break;
    case 'chart': P(() => { X.moveTo(-40, 40); X.lineTo(-40, -36); X.moveTo(-40, 40); X.lineTo(42, 40); }); P(() => { X.moveTo(-26, 20); X.lineTo(-6, -4); X.lineTo(10, 10); X.lineTo(34, -22); }); break;
  }
  X.restore();
}
// jubin: kind 'a' = biru→ungu, 'b' = oren→merah jambu, 'c' = ungu→merah jambu
function tile(cx, cy, size, name, kind = 'a') {
  const x = cx - size / 2, y = cy - size / 2, st = { a: [INK, INK], b: ['#6B4A3F', '#4A332C'], c: [INK, '#5A3E35'] }[kind];
  X.save(); X.shadowColor = 'rgba(57,36,31,.25)'; X.shadowBlur = 14; X.shadowOffsetY = 6; rr(x, y, size, size, size * .26); const g = X.createLinearGradient(x, y, x + size, y + size); g.addColorStop(0, st[0]); g.addColorStop(1, st[1]); X.fillStyle = g; X.fill(); X.restore();
  X.save(); X.translate(cx, cy); glyph(name, size * .6); X.restore();
}
// carta ilustrasi: pts = [[0..1,0..1]] (y 0=atas). arah mewarna. Dilabel "ILUSTRASI" oleh pemanggil
function chart(x, y, w, h, pts, col1 = PUR, col2 = PNK) {
  X.save(); card(x, y, w, h, { fill: CR, stroke: INK });
  X.strokeStyle = LIL2; X.lineWidth = 2; for (let k = 1; k < 4; k++) { X.beginPath(); X.moveTo(x + 30, y + 30 + (h - 60) * k / 4); X.lineTo(x + w - 30, y + 30 + (h - 60) * k / 4); X.stroke(); }
  const P = pts.map(([a, b]) => [x + 40 + (w - 80) * a, y + 36 + (h - 72) * b]);
  X.beginPath(); X.moveTo(P[0][0], P[0][1]); for (let k = 1; k < P.length; k++) { const mx = (P[k - 1][0] + P[k][0]) / 2; X.bezierCurveTo(mx, P[k - 1][1], mx, P[k][1], P[k][0], P[k][1]); }
  X.lineWidth = 9; X.lineCap = 'round'; X.strokeStyle = grad(x, x + w, [[0, col1], [1, col2]]); X.stroke();
  X.lineTo(P[P.length - 1][0], y + h - 30); X.lineTo(P[0][0], y + h - 30); X.closePath(); const g = X.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, 'rgba(57,36,31,.2)'); g.addColorStop(1, 'rgba(57,36,31,0)'); X.fillStyle = g; X.fill();
  const e = P[P.length - 1]; X.beginPath(); X.arc(e[0], e[1], 12, 0, 7); X.fillStyle = CR; X.fill(); X.lineWidth = 6; X.strokeStyle = INK; X.stroke(); X.restore();
}
// foto: potong ke kotak bulat sudut, fade atas ke latar (photoFade)
function photoFade(im, x, y, w, h, o = {}) {
  const s = Math.max(w / im.width, h / im.height); X.save(); X.beginPath(); X.rect(x, y, w, h); X.clip();
  X.drawImage(im, x + w / 2 - im.width * s * (o.fx ?? .5), y + h / 2 - im.height * s * (o.fy ?? .5), im.width * s, im.height * s);
  const g = X.createLinearGradient(0, y, 0, y + h * (o.fade ?? .55)); g.addColorStop(0, CR); g.addColorStop(1, 'rgba(255,254,197,0)'); X.fillStyle = g; X.fillRect(x, y, w, h);
  if (o.left) { const g2 = X.createLinearGradient(x, 0, x + w * o.left, 0); g2.addColorStop(0, CR); g2.addColorStop(1, 'rgba(255,254,197,0)'); X.fillStyle = g2; X.fillRect(x, y, w, h); }
  X.restore();
}
function cutoutBC(im, cx, by, h) { const w = h * im.width / im.height; X.drawImage(im, cx - w / 2, by - h, w, h); }
function note(s, x, y) { T(s, x, y, F.m(20), MUTE); }

window.ready = Promise.all([
  ...[['PO', 'Poppins-800.ttf', 800, 'normal'], ['PO', 'Poppins-600.woff2', 600, 'normal'], ['PO', 'Poppins-500.ttf', 500, 'normal'], ['PO', 'Poppins-800i.woff2', 800, 'italic']].map(([fam, file, w, st]) => new FontFace(fam, `url(fonts/${file})`, { weight: String(w), style: st }).load().then(f => document.fonts.add(f))),
  ...Object.entries(window.ASSETS || {}).map(([k, f]) => new Promise((res, rej) => { const i = new Image(); i.onload = () => { IMG[k] = i; res(); }; i.onerror = () => rej(new Error('missing img/' + f)); i.src = 'img/' + f; })),
]).then(() => {
  SLIDES.forEach((fn, i) => { const x0 = i * SW; X.save(); X.beginPath(); X.rect(x0, 0, SW, SH); X.clip(); X.translate(x0, 0); bg(0, i); fn(i); brand(); footer(0, i, N, window.FOOT); X.restore(); });
  return true;
});
