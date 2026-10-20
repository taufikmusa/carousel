// carousel-ivory engine v2 — premium ivory/maroon carousel (1080x1080 default; 3:4 dan 4:5 dalam references): left-aligned Playfair headlines (ink/red/gold),
// eyebrow labels, highlighter paragraphs, soft cards with gold bar, receipt rows, price tag, medallion photo, dark maroon hook/CTA slides.
// slides.js defines: N, DARK (indeks slaid gelap), ASSETS {key:'file'}, SLIDES [fn(i)] (local coords 0..1080).  DO NOT EDIT per carousel.
const SW = 1080, SH = window.SH_OVERRIDE || 1080, M = 72;
const K = { bg: '#FBF8F3', ink: '#1B1512', red1: '#B5121F', red2: '#6C0613', maroon: '#7A0F1A', gold1: '#D9AE45', gold2: '#B27F17', gold3: '#7B500C', line: '#E7D2A0', cream: '#FBEBC9', card: '#FFFFFF', muted: '#6B5E57' };
// Tema warna: `var THEME = '...'` di slides.js. Gaya sama, warna berbeza. Setiap tema mentakrif PERANAN warna (bukan nama warna):
//  r1/r2 + b1/b2 = warna utama (tajuk 'red', kotak 'red') · g = isi tajuk 'gold' di latar cerah · gl = isi di latar gelap · eye* = label · hl = penanda highlighter
//  bar/nb/tag/ck/ring = gradien aksen · cream = pil lembut · d0..d3 = latar gelap · bg/ink/muted/body = kertas & teks
const GOLD = {
  g: ['#E3BB55', '#B27F17', '#7B500C'], gl: ['#FBEBB0', '#EBC45E', '#C8921E'], eyeL: '#B27F17', eyeD: '#F1D78A', accT: '#F4D77C', hl: '#EBC56A', hlA: .4,
  bar: ['#E3BB55', '#9A6A10'], nb: ['#DDB04A', '#B07C14', '#8A5C0C'], nbText: '#FFFFFF', tag: ['#E6BE5A', '#B88418', '#8A5C0C'], tagText: '#FFFFFF', tagStroke: 'rgba(255,240,190,.6)', tagHole: '#7B500C',
  cream: '#FBEBC9', creamLine: '#F0DAA5', line: '#C9A864', ck: ['#F0CF70', '#C08A1E', '#8A5C0C'], ckStroke: '#FFFFFF', arrow: '#B27F17', ring: ['#F0D27A', '#B88418', '#7B500C'],
  gcol: '240,200,110', pg: '255,225,140', dust: '#F0D27A', bg: '#FBF8F3', ink: '#1B1512', muted: '#6B5E57', body: '#2B2320', dkText: '#F6E9D0', cardShadow: 'rgba(120,80,30,.16)', paperTint: 'rgba(240,230,210,.4)', grain: '#a07a40',
};
const THEMES = {
  maroon: { ...GOLD, r1: '#B5121F', r2: '#6C0613', m: '#7A0F1A', b1: '#B5121F', b2: '#6A0512', d0: '#3A050D', d1: '#8F1020', d2: '#5E0A15', d3: '#2D030A', rgb: '122,15,26', sh: '100,0,10', tint: '#F1E4DD' },
  emerald: { ...GOLD, r1: '#0F7A5C', r2: '#063F30', m: '#0A5240', b1: '#0F7A5C', b2: '#053A2C', d0: '#04241B', d1: '#0F6A50', d2: '#073D2E', d3: '#031A13', rgb: '10,82,64', sh: '0,50,35', tint: '#E3EEE8' },
  navy: { ...GOLD, r1: '#1F4E9A', r2: '#0B2250', m: '#14316B', b1: '#245BB0', b2: '#0A1F4A', d0: '#050E24', d1: '#1B4A94', d2: '#0E2A5C', d3: '#040B1C', rgb: '20,49,107', sh: '0,20,60', tint: '#E3E9F3' },
  // ---- 5 palet (rujukan "5 color palette") ----
  electric: { // biru elektrik + lime
    r1: '#3A4BFF', r2: '#1B26B8', m: '#1D2AC4', b1: '#3A4BFF', b2: '#1823A8', d0: '#0A0C16', d1: '#1A2494', d2: '#0E1350', d3: '#070914', rgb: '48,64,255', sh: '16,24,120', tint: '#E6E9FF',
    g: ['#5566FF', '#3040FF', '#1B26B8'], gl: ['#F4FFC4', '#DFFF70', '#B9E23A'], eyeL: '#3040FF', eyeD: '#DFFF70', accT: '#DFFF70', hl: '#DFFF70', hlA: .95,
    bar: ['#3A4BFF', '#1B26B8'], nb: ['#4455FF', '#3040FF', '#1B26B8'], nbText: '#FFFFFF', tag: ['#EBFF8C', '#DFFF70', '#C4E650'], tagText: '#10121B', tagStroke: 'rgba(16,18,27,.16)', tagHole: '#10121B',
    cream: '#ECEEFF', creamLine: '#CBD1FF', line: '#9AA5FF', ck: ['#F4FFC4', '#DFFF70', '#B9E23A'], ckStroke: '#10121B', arrow: '#3040FF', ring: ['#F4FFC4', '#DFFF70', '#9FBF2A'],
    gcol: '48,64,255', pg: '223,255,112', dust: '#DFFF70', bg: '#F5F5F0', ink: '#10121B', muted: '#5B6070', body: '#1F2230', dkText: '#EDEEFF', cardShadow: 'rgba(40,50,160,.16)', paperTint: 'rgba(225,228,245,.45)', grain: '#6070c0' },
  earth: { // hijau hutan + terakota + krim
    r1: '#4F5C42', r2: '#2F3827', m: '#3E4934', b1: '#4F5C42', b2: '#2F3827', d0: '#1C2218', d1: '#4A5740', d2: '#2D3626', d3: '#161B12', rgb: '62,73,52', sh: '30,40,20', tint: '#E7E9DD',
    g: ['#CC7048', '#B85C3B', '#8F4026'], gl: ['#F6E3C8', '#E7B58C', '#C97B52'], eyeL: '#B85C3B', eyeD: '#E7B58C', accT: '#EFC9A0', hl: '#CDBDA5', hlA: .6,
    bar: ['#C96F48', '#8F4026'], nb: ['#CC7048', '#B85C3B', '#8F4026'], nbText: '#FFFFFF', tag: ['#D4805A', '#B85C3B', '#8F4026'], tagText: '#FFFFFF', tagStroke: 'rgba(255,230,210,.5)', tagHole: '#6B2E18',
    cream: '#EFE5D3', creamLine: '#CDBDA5', line: '#B9A78C', ck: ['#F6E3C8', '#E7B58C', '#C97B52'], ckStroke: '#3E4934', arrow: '#B85C3B', ring: ['#F6E3C8', '#E7B58C', '#B0653A'],
    gcol: '200,150,100', pg: '230,190,140', dust: '#E7C9A0', bg: '#F3EBDD', ink: '#2B3024', muted: '#6B6A5C', body: '#2B3024', dkText: '#F3EBDD', cardShadow: 'rgba(60,70,40,.16)', paperTint: 'rgba(225,215,195,.45)', grain: '#a08060' },
  soft: { // lavender + ungu tua + lime
    r1: '#5A3C8C', r2: '#33204F', m: '#33204F', b1: '#4B3278', b2: '#2A1842', d0: '#1E1033', d1: '#4A2F7A', d2: '#33204F', d3: '#150A26', rgb: '51,32,79', sh: '30,10,60', tint: '#ECE6FF',
    g: ['#7B5CC4', '#5A3C8C', '#33204F'], gl: ['#F5FFB0', '#E8F56D', '#C5D84A'], eyeL: '#6B4BB0', eyeD: '#E8F56D', accT: '#E8F56D', hl: '#E8F56D', hlA: .9,
    bar: ['#7B5CC4', '#33204F'], nb: ['#7B5CC4', '#5A3C8C', '#33204F'], nbText: '#FFFFFF', tag: ['#F2FF9A', '#E8F56D', '#CFE04F'], tagText: '#33204F', tagStroke: 'rgba(51,32,79,.18)', tagHole: '#33204F',
    cream: '#EFEAFF', creamLine: '#D3C9FF', line: '#B8A9F0', ck: ['#F5FFB0', '#E8F56D', '#C5D84A'], ckStroke: '#33204F', arrow: '#6B4BB0', ring: ['#F5FFB0', '#E8F56D', '#B0C23A'],
    gcol: '221,212,255', pg: '232,245,109', dust: '#E8F56D', bg: '#FAF8F2', ink: '#26163C', muted: '#6A5F80', body: '#2A1B3F', dkText: '#F1ECFF', cardShadow: 'rgba(70,40,120,.15)', paperTint: 'rgba(221,212,255,.4)', grain: '#8070b0' },
  luxury: { // merah tua + emas pucat + krim
    r1: '#8A0A0E', r2: '#630002', m: '#630002', b1: '#7A0508', b2: '#4A0002', d0: '#1B191B', d1: '#4A0A0C', d2: '#2A1214', d3: '#121012', rgb: '99,0,2', sh: '60,0,0', tint: '#F1E4DD',
    g: ['#CDB382', '#BDA174', '#8E7544'], gl: ['#EAD9B3', '#D2B987', '#A98B55'], eyeL: '#9A8050', eyeD: '#D9C292', accT: '#E5D2A5', hl: '#D2B987', hlA: .45,
    bar: ['#CDB382', '#8E7544'], nb: ['#CDB382', '#BDA174', '#8E7544'], nbText: '#FFFFFF', tag: ['#D6BE8F', '#BDA174', '#8E7544'], tagText: '#FFFFFF', tagStroke: 'rgba(255,240,200,.5)', tagHole: '#6E5A30',
    cream: '#F4EDE3', creamLine: '#E4D6BC', line: '#CDBA94', ck: ['#E5D2A5', '#BDA174', '#8E7544'], ckStroke: '#FFFFFF', arrow: '#9A8050', ring: ['#E5D2A5', '#BDA174', '#7C6538'],
    gcol: '190,160,110', pg: '230,205,150', dust: '#D2B987', bg: '#F4EDE3', ink: '#222022', muted: '#6E6560', body: '#2A2628', dkText: '#F4EDE3', cardShadow: 'rgba(90,60,30,.15)', paperTint: 'rgba(225,212,190,.45)', grain: '#907050' },
  fresh: { // hijau + lime + coral
    r1: '#0A8048', r2: '#006638', m: '#006638', b1: '#0A7A44', b2: '#004D2A', d0: '#03281A', d1: '#0B7A46', d2: '#05492B', d3: '#021A11', rgb: '0,102,56', sh: '0,60,30', tint: '#E3EFE6',
    g: ['#FF9570', '#FF784F', '#D9552E'], gl: ['#EEF4A8', '#C6CE76', '#9CAA48'], eyeL: '#E05A32', eyeD: '#C6CE76', accT: '#D8E27E', hl: '#C6CE76', hlA: .7,
    bar: ['#FF8E69', '#D9552E'], nb: ['#FF8E69', '#FF784F', '#D9552E'], nbText: '#FFFFFF', tag: ['#FF9A78', '#FF784F', '#D9552E'], tagText: '#FFFFFF', tagStroke: 'rgba(255,230,215,.5)', tagHole: '#8F3A1C',
    cream: '#EEF0D4', creamLine: '#D6DC9A', line: '#B6BF70', ck: ['#EEF4A8', '#C6CE76', '#9CAA48'], ckStroke: '#006638', arrow: '#FF784F', ring: ['#EEF4A8', '#C6CE76', '#8A9838'],
    gcol: '198,206,118', pg: '210,225,130', dust: '#C6CE76', bg: '#F8F5EC', ink: '#0F2A1C', muted: '#566055', body: '#16301F', dkText: '#F3F7E2', cardShadow: 'rgba(30,90,50,.15)', paperTint: 'rgba(215,225,185,.4)', grain: '#80a070' },
};
const TH = THEMES[window.THEME || 'maroon']; Object.assign(K, { red1: TH.r1, red2: TH.r2, maroon: TH.m, bg: TH.bg, ink: TH.ink, muted: TH.muted, cream: TH.cream, line: TH.line });
const cv = document.getElementById('c'); cv.width = SW * N; cv.height = SH; cv.style.width = (SW * N / 4) + 'px'; cv.style.height = (SH / 4) + 'px';
const X = cv.getContext('2d');
const IMG = {};
const F = { ix: (w, s) => `${w} ${s}px IX`, pf: (w, s) => `${w} ${s}px PF`, pfi: (w, s) => `italic ${w} ${s}px PFI`, ss: (w, s) => `${w} ${s}px SS` };
function rng(s) { return () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function rr(x, y, w, h, r) { X.beginPath(); X.roundRect(x, y, w, h, r); }
var tw = function (s, f, ls = 0) { X.save(); X.font = f; X.letterSpacing = ls + 'px'; const w = X.measureText(s).width; X.restore(); return w; };
function fit(s, fontFn, targetW, ls = 0) { const w = tw(s, fontFn(100), ls * 100); return 100 * targetW / w; }
// plain text. fill may be a colour or a gradient factory fn(y,size)
var T = function (s, x, y, f, fill = K.ink, align = 'left', ls = 0) { X.save(); X.font = f; X.textAlign = align; X.letterSpacing = ls + 'px'; X.fillStyle = fill; X.fillText(s, x, y); X.restore(); }
function gradY(y0, y1, stops) { const g = X.createLinearGradient(0, y0, 0, y1); stops.forEach(([o, c]) => g.addColorStop(o, c)); return g; }
const goldFill = (y, size) => gradY(y - size * .78, y + size * .12, [[0, TH.g[0]], [.45, TH.g[1]], [1, TH.g[2]]]);
const goldFillL = (y, size) => gradY(y - size * .78, y + size * .12, [[0, TH.gl[0]], [.5, TH.gl[1]], [1, TH.gl[2]]]);
const redFill = (y, size) => gradY(y - size * .78, y + size * .12, [[0, K.red1], [1, K.red2]]);

// ---- text blocks ----
var wsp = 0;
T = function (s, x, y, f, fill = K.ink, align = 'left', ls = 0) { X.save(); X.font = f; X.wordSpacing = wsp + 'px'; X.textAlign = align; X.letterSpacing = ls + 'px'; X.fillStyle = typeof fill === 'function' ? fill(y, parseFloat(f.match(/(\d+(\.\d+)?)px/)[1])) : fill; X.fillText(s, x, y); X.restore(); };
tw = function (s, f, ls = 0) { X.save(); X.font = f; X.wordSpacing = wsp + 'px'; X.letterSpacing = ls + 'px'; const w = X.measureText(s).width; X.restore(); return w; };
const STY = { sw: [F.ix, 900, '#FFFFFF'], sg: [F.ix, 900, goldFillL], si: [F.ix, 900, K.ink], sr: [F.ix, 900, redFill], sgd: [F.ix, 900, goldFill], ink: [F.pf, 900, K.ink], red: [F.pf, 900, redFill], gold: [F.pf, 900, goldFill], white: [F.pf, 900, '#FFFFFF'], cream: [F.pf, 900, TH.gl[0]], goldi: [(w, s) => F.pfi(700, s), 700, goldFill], goldl: [F.pf, 900, goldFillL], goldil: [(w, s) => F.pfi(700, s), 700, goldFillL], whitei: [(w, s) => F.pfi(700, s), 700, '#FFFFFF'] };
// headline: lines = [[ [text, style], ... ], ...]; left aligned; shrinks (all lines equally) to fit maxW. returns last baseline
function headline(lines, x, y, o = {}) {
  const size0 = o.size ?? 118, maxW = o.maxW ?? SW - 2 * M, lh = o.lh ?? .98;
  const meas = size => Math.max(...lines.map(l => { wsp = size * .05; const w = l.reduce((a, [t, st]) => a + tw(t, STY[st][0](STY[st][1], size), -size * (st === 'goldi' || st === 'whitei' || st === 'goldil' ? .01 : .025)), 0); wsp = 0; return w; }));
  const size = Math.min(size0, size0 * maxW / meas(size0)); let by = y;
  lines.forEach((l, i) => { if (i) by += size * lh; let cx = x; wsp = size * .05; l.forEach(([t, st]) => { const ls = -size * (st === 'goldi' || st === 'whitei' || st === 'goldil' ? .01 : .025); T(t, cx, by, STY[st][0](STY[st][1], size), STY[st][2], 'left', ls); cx += tw(t, STY[st][0](STY[st][1], size), ls); }); wsp = 0; });
  return by;
}
function eyebrow(s, x, y, dark) { X.save(); X.fillStyle = dark ? TH.eyeD : TH.eyeL; X.fillRect(x, y - 9, 40, 3); X.restore(); T(s.toUpperCase(), x + 58, y, F.ss(700, 24), dark ? TH.eyeD : TH.eyeL, 'left', 4.2); }
// paragraph with *highlight* markers; wraps; returns last baseline
function para(s, x, y, w, size = 36, o = {}) {
  const dark = !!o.dark, lh = o.lh ?? 1.46; let hot = false;
  const words = s.split(' ').map(t => { const h = hot || t.startsWith('*'); if (t.startsWith('*')) hot = true; if (/\*[.,?!:;)]*$/.test(t)) hot = false; return { t: t.replace(/\*/g, ''), h }; });
  const fw = h => h ? F.ss(800, size) : F.ss(500, size), sp = tw(' ', F.ss(500, size)); const lines = []; let cur = [], cw = 0;
  words.forEach(wd => { const ww = tw(wd.t, fw(wd.h)); if (cur.length && cw + sp + ww > w) { lines.push(cur); cur = []; cw = 0; } cw += (cur.length ? sp : 0) + ww; cur.push({ ...wd, ww }); }); lines.push(cur);
  const base = o.color || (dark ? TH.dkText : TH.body);
  lines.forEach((ln, li) => { const by = y + li * size * lh; let cx = x;
    if (!dark) { X.save(); X.globalAlpha = TH.hlA; X.fillStyle = TH.hl; X.beginPath(); ln.forEach((wd, k) => { if (wd.h) X.rect(cx - 6, by - size * .84, wd.ww + (ln[k + 1] && ln[k + 1].h ? sp : 0) + 12, size * 1.12); cx += wd.ww + sp; }); X.fill(); X.restore(); cx = x; }
    ln.forEach(wd => { T(wd.t, cx, by, fw(wd.h), wd.h ? (dark ? TH.accT : K.maroon) : base); cx += wd.ww + sp; }); });
  return y + (lines.length - 1) * size * lh;
}

// ---- ui blocks ----
function footer(i, n, dark) {
  T('@taufik.pg', M, SH - 58, F.ss(700, 25), dark ? TH.eyeD : K.maroon, 'left', 1);
  if ((window.NODOTS || []).includes(i)) return; const gap = 24, cw = 12; let x = SW - M; for (let k = n - 1; k >= 0; k--) { const cur = k === i, w = cur ? 40 : cw; x -= w; rr(x, SH - 70, w, 12, 6); X.fillStyle = cur ? (dark ? TH.eyeD : K.maroon) : (dark ? 'rgba(255,255,255,.28)' : 'rgba(' + TH.rgb + ',.22)'); X.fill(); x -= gap - 10; }
}
function card(x, y, w, h, o = {}) {
  const r = o.r ?? 22; X.save();
  if (o.dark) { rr(x, y, w, h, r); X.fillStyle = 'rgba(255,255,255,.07)'; X.fill(); X.strokeStyle = 'rgba(255,255,255,.22)'; X.lineWidth = 2; X.stroke(); X.restore(); return; }
  X.shadowColor = TH.cardShadow; X.shadowBlur = 26; X.shadowOffsetY = 8; rr(x, y, w, h, r); X.fillStyle = o.fill || K.card; X.fill(); X.restore(); if (o.edge) { rr(x, y, w, h, r); X.save(); X.strokeStyle = o.edge; X.lineWidth = 2; X.stroke(); X.restore(); }
  if (o.bar) { X.save(); rr(x, y, w, h, r); X.clip(); X.fillStyle = gradY(y, y + h, [[0, TH.bar[0]], [1, TH.bar[1]]]); X.fillRect(x, y, 11, h); X.restore(); }
}
function box(x, y, w, h, kind, r = 18) {
  X.save(); rr(x, y, w, h, r);
  if (kind === 'red') { X.fillStyle = gradY(y, y + h, [[0, TH.b1], [1, TH.b2]]); X.shadowColor = 'rgba(' + TH.sh + ',.3)'; X.shadowBlur = 16; X.shadowOffsetY = 6; X.fill(); }
  if (kind === 'gold') { X.fillStyle = gradY(y, y + h, [[0, TH.nb[0]], [.55, TH.nb[1]], [1, TH.nb[2]]]); X.shadowColor = 'rgba(0,0,0,.22)'; X.shadowBlur = 12; X.shadowOffsetY = 4; X.fill(); }
  if (kind === 'cream') { X.fillStyle = K.cream; X.fill(); X.strokeStyle = TH.creamLine; X.lineWidth = 2; X.stroke(); }
  X.restore();
}
function numBox(x, y, s, t) { box(x, y, s, s, 'gold', s * .26); T(t, x + s / 2, y + s * .68, F.ss(800, s * .56), TH.nbText, 'center'); }
function checkCircle(cx, cy, r, col) { const g = X.createRadialGradient(cx - r * .3, cy - r * .4, r * .1, cx, cy, r); g.addColorStop(0, TH.ck[0]); g.addColorStop(.6, TH.ck[1]); g.addColorStop(1, TH.ck[2]); X.save(); X.beginPath(); X.arc(cx, cy, r, 0, 7); X.fillStyle = g; X.fill(); X.strokeStyle = TH.ckStroke; X.lineWidth = r * .16; X.lineCap = 'round'; X.lineJoin = 'round'; X.beginPath(); X.moveTo(cx - r * .38, cy + r * .02); X.lineTo(cx - r * .08, cy + r * .32); X.lineTo(cx + r * .42, cy - r * .3); X.stroke(); X.restore(); }
function crossCircle(cx, cy, r) { X.save(); X.beginPath(); X.arc(cx, cy, r, 0, 7); X.fillStyle = TH.tint; X.fill(); X.strokeStyle = K.maroon; X.lineWidth = r * .16; X.lineCap = 'round'; const d = r * .36; X.beginPath(); X.moveTo(cx - d, cy - d); X.lineTo(cx + d, cy + d); X.moveTo(cx + d, cy - d); X.lineTo(cx - d, cy + d); X.stroke(); X.restore(); }
function arrowDown(cx, y, len = 36, col = TH.arrow) { X.save(); X.strokeStyle = col; X.lineWidth = 6; X.lineCap = 'round'; X.lineJoin = 'round'; X.beginPath(); X.moveTo(cx, y); X.lineTo(cx, y + len); X.moveTo(cx - 14, y + len - 14); X.lineTo(cx, y + len); X.lineTo(cx + 14, y + len - 14); X.stroke(); X.restore(); }
function dotted(x1, x2, y, col = TH.line) { X.save(); X.strokeStyle = col; X.lineWidth = 3; X.setLineDash([2, 9]); X.lineCap = 'round'; X.beginPath(); X.moveTo(x1, y); X.lineTo(x2, y); X.stroke(); X.restore(); }
function priceTag(cx, cy, w, h, label, rot = -.06) {
  X.save(); X.translate(cx, cy); X.rotate(rot); const r = 22, tip = h * .5;
  X.shadowColor = 'rgba(0,0,0,.30)'; X.shadowBlur = 24; X.shadowOffsetY = 12;
  X.beginPath(); X.moveTo(-w / 2, 0); X.lineTo(-w / 2 + tip, -h / 2); X.lineTo(w / 2 - r, -h / 2); X.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r); X.lineTo(w / 2, h / 2 - r); X.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2); X.lineTo(-w / 2 + tip, h / 2); X.closePath();
  X.fillStyle = gradY(-h / 2, h / 2, [[0, TH.tag[0]], [.5, TH.tag[1]], [1, TH.tag[2]]]); X.fill(); X.shadowColor = 'transparent';
  X.strokeStyle = TH.tagStroke; X.lineWidth = 3; X.stroke();
  X.beginPath(); X.arc(-w / 2 + tip * .78, 0, 13, 0, 7); X.fillStyle = K.bg; X.fill(); X.strokeStyle = TH.tagHole; X.lineWidth = 3; X.stroke();
  let sz = h * .46; const avail = w - tip - 60; const m = tw(label, F.ss(800, sz), -1); if (m > avail) sz *= avail / m; T(label, tip * .5 + 18, sz * .36, F.ss(800, sz), TH.tagText, 'center', -1); X.restore();
}

// ---- images ----
// photo whose beige background fades into the paper (no visible box)
function fadePhoto(im, cx, cy, w, fade = 70, glow = true) {
  const h = w * im.height / im.width, O = document.createElement('canvas'); O.width = Math.ceil(w); O.height = Math.ceil(h); const c = O.getContext('2d'); c.drawImage(im, 0, 0, w, h); c.globalCompositeOperation = 'destination-in';
  [[0, 0, fade, 0], [w, 0, w - fade, 0], [0, 0, 0, fade], [0, h, 0, h - fade]].forEach(([x1, y1, x2, y2]) => { const g = c.createLinearGradient(x1, y1, x2, y2); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, '#000'); c.fillStyle = g; c.fillRect(0, 0, w, h); });
  if (glow) { const g = X.createRadialGradient(cx, cy, 10, cx, cy, w * .6); g.addColorStop(0, 'rgba(' + TH.pg + ',.30)'); g.addColorStop(1, 'rgba(' + TH.pg + ',0)'); X.fillStyle = g; X.fillRect(cx - w, cy - w, w * 2, w * 2); }
  X.save(); X.globalCompositeOperation = 'multiply'; X.drawImage(O, cx - w / 2, cy - h / 2); X.restore();
}
// circular medallion: gold double ring + photo cover-fit inside
function medallion(im, cx, cy, d, fx = .5, fy = .5, zoom = 1) {
  const r = d / 2; X.save(); X.shadowColor = 'rgba(0,0,0,.45)'; X.shadowBlur = 50; X.shadowOffsetY = 20; X.beginPath(); X.arc(cx, cy, r + 16, 0, 7); X.fillStyle = gradY(cy - r, cy + r, [[0, TH.ring[0]], [.5, TH.ring[1]], [1, TH.ring[2]]]); X.fill(); X.restore();
  X.save(); X.beginPath(); X.arc(cx, cy, r + 4, 0, 7); X.fillStyle = TH.d3; X.fill(); X.restore();
  X.save(); X.beginPath(); X.arc(cx, cy, r, 0, 7); X.clip(); X.fillStyle = '#F6F3EC'; X.fillRect(cx - r, cy - r, d, d);
  const s = Math.max(d / im.width, d / im.height) * zoom, w = im.width * s, h = im.height * s; X.drawImage(im, cx - w * fx, cy - h * fy, w, h); X.restore();
}
function cutoutBC(im, cx, by, h) { const w = h * im.width / im.height; X.drawImage(im, cx - w / 2, by - h, w, h); }


// ---- pgjewel: foto produk jadi latar ----
// cutout produk emas daripada latar cerah (alpha dari ketepuan warna), trim ke bbox
function makeCut(im) {
  const W = im.width, H = im.height, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d', { willReadFrequently: true }); g.drawImage(im, 0, 0);
  const d = g.getImageData(0, 0, W, H), a = d.data; const px = [[2, 2], [W - 3, 2], [2, H - 3], [W - 3, H - 3]].map(([x, y]) => [a[(y * W + x) * 4], a[(y * W + x) * 4 + 1], a[(y * W + x) * 4 + 2]]); const bg = [0, 1, 2].map(k => px.map(p => p[k]).sort((u, v) => u - v)[2]);
  let x0 = W, y0 = H, x1 = 0, y1 = 0;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const i = (y * W + x) * 4, r = a[i], gg = a[i + 1], b = a[i + 2], mx = Math.max(r, gg, b), mn = Math.min(r, gg, b), sat = (mx - mn) / Math.max(mx, 1); const al = Math.max(0, Math.min(1, ((r - b) - (bg[0] - bg[2]) - 40) / 30));
    if (al > 0) { const k = .55; a[i] = Math.max(0, Math.min(255, (r - (1 - al) * bg[0] * k) / (al + (1 - al) * k))); a[i + 1] = Math.max(0, Math.min(255, (gg - (1 - al) * bg[1] * k) / (al + (1 - al) * k))); a[i + 2] = Math.max(0, Math.min(255, (b - (1 - al) * bg[2] * k) / (al + (1 - al) * k))); }
    a[i + 3] = al * 255; if (al > .35) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; } }
  g.putImageData(d, 0, 0); const o = document.createElement('canvas'); o.width = x1 - x0 + 1; o.height = y1 - y0 + 1; const og = o.getContext('2d'); og.filter = "blur(1px)"; og.drawImage(c, x0, y0, o.width, o.height, 0, 0, o.width, o.height); return o;
}
// letak cutout: lebar w, tengah (cx,cy), dengan bayang + sinar emas
function putCut(cut, cx, cy, w, o = {}) {
  const h = w * cut.height / cut.width; X.save(); X.translate(cx, cy); X.rotate(o.rot || 0);
  if (o.glow !== false) { const g = X.createRadialGradient(0, 0, 10, 0, 0, w * .75); g.addColorStop(0, 'rgba(' + TH.pg + ',.34)'); g.addColorStop(1, 'rgba(' + TH.pg + ',0)'); X.fillStyle = g; X.fillRect(-w, -w, w * 2, w * 2); }
  X.shadowColor = 'rgba(0,0,0,.5)'; X.shadowBlur = 38; X.shadowOffsetY = 26; X.drawImage(cut, -w / 2, -h / 2, w, h); X.restore();
}
function bokeh(x0, seed, n, area) { const R = rng(seed); X.save(); for (let k = 0; k < n; k++) { const x = x0 + area[0] + R() * area[2], y = area[1] + R() * area[3], r = 8 + R() * 38, g = X.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, 'rgba(255,235,190,' + (.10 + R() * .3) + ')'); g.addColorStop(1, 'rgba(255,235,190,0)'); X.fillStyle = g; X.beginPath(); X.arc(x, y, r, 0, 7); X.fill(); } X.restore(); }
// latar gelap beludru: gradien + lipatan + bokeh
function bgVelvet(x0, seed) {
  let g = X.createLinearGradient(x0, 0, x0 + SW, SH); g.addColorStop(0, TH.d1); g.addColorStop(.5, TH.d2); g.addColorStop(1, TH.d3); X.fillStyle = g; X.fillRect(x0, 0, SW, SH);
  X.save(); X.globalAlpha = .5; for (let k = 0; k < 5; k++) { const y = 520 + k * 120; g = X.createLinearGradient(0, y, 0, y + 150); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(.5, 'rgba(255,255,255,.07)'); g.addColorStop(1, 'rgba(0,0,0,.18)'); X.fillStyle = g; X.beginPath(); X.moveTo(x0, y + 80); X.quadraticCurveTo(x0 + 400, y - 60 + k * 18, x0 + SW, y + 50); X.lineTo(x0 + SW, y + 220); X.lineTo(x0, y + 240); X.fill(); } X.restore();
  g = X.createRadialGradient(x0 + SW * .5, SH * .55, 100, x0 + SW * .5, SH * .55, SW * .9); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.5)'); X.fillStyle = g; X.fillRect(x0, 0, SW, SH);
  bokeh(x0, seed, 16, [0, 0, SW, SH]);
}
// latar cerah: foto produk dikaburkan + lapisan krim
function bgPhoto(x0, im, opt = {}) {
  X.save(); X.beginPath(); X.rect(x0, 0, SW, SH); X.clip(); const s = Math.max(SW / im.width, SH / im.height) * (opt.zoom || 2.2); X.filter = 'blur(26px)'; X.drawImage(im, x0 + SW / 2 - im.width * s * (opt.fx ?? .5), SH / 2 - im.height * s * (opt.fy ?? .5), im.width * s, im.height * s); X.filter = 'none'; X.restore();
  X.fillStyle = 'rgba(' + (opt.wash || '251,247,240') + ',' + (opt.a ?? .62) + ')'; X.fillRect(x0, 0, SW, SH);
  const g = X.createLinearGradient(0, 0, 0, SH); g.addColorStop(0, 'rgba(255,255,255,.55)'); g.addColorStop(1, 'rgba(255,255,255,0)'); X.fillStyle = g; X.fillRect(x0, 0, SW, SH);
}
// bar atas: 01/07 — LABEL
function topbar(i, n, label, dark) {
  const col = dark ? TH.eyeD : TH.eyeL; T(String(i + 1).padStart(2, '0') + '/' + String(n).padStart(2, '0'), M, 96, F.ss(700, 24), dark ? 'rgba(255,255,255,.75)' : K.muted, 'left', 1.5);
  X.save(); X.fillStyle = col; X.fillRect(M + 100, 86, 56, 3); X.restore(); T(label.toUpperCase(), M + 176, 96, F.ss(700, 24), col, 'left', 4);
}
function numCircle(cx, cy, r, t) { checkCircle(cx, cy, r); X.save(); X.beginPath(); X.arc(cx, cy, r - 2, 0, 7); const g = X.createRadialGradient(cx - r * .3, cy - r * .4, r * .1, cx, cy, r); g.addColorStop(0, TH.ck[0]); g.addColorStop(.6, TH.ck[1]); g.addColorStop(1, TH.ck[2]); X.fillStyle = g; X.fill(); X.restore(); T(t, cx, cy + r * .36, F.pf(900, r * 1.15), TH.nbText, 'center'); }

// ---- backgrounds ----
function paper(i, x0, dark) {
  if (window.BG && window.BG(i, x0, dark) !== false) return;
  if (dark) {
    X.fillStyle = TH.d0; X.fillRect(x0, 0, SW, SH);
    let g = X.createRadialGradient(x0 + SW * .5, SH * .62, 60, x0 + SW * .5, SH * .62, SW * 1.05); g.addColorStop(0, TH.d1); g.addColorStop(.55, TH.d2); g.addColorStop(1, TH.d3); X.fillStyle = g; X.fillRect(x0, 0, SW, SH);
    g = X.createRadialGradient(x0 + SW, 0, 20, x0 + SW, 0, 620); g.addColorStop(0, 'rgba(' + TH.gcol + ',.22)'); g.addColorStop(1, 'rgba(' + TH.gcol + ',0)'); X.fillStyle = g; X.fillRect(x0, 0, SW, SH);
    const R = rng(x0 + 9); X.save(); for (let k = 0; k < 70; k++) { X.globalAlpha = .1 + R() * .3; X.fillStyle = TH.dust; X.beginPath(); X.arc(x0 + R() * SW, R() * SH, .8 + R() * 2.2, 0, 7); X.fill(); } X.restore(); return;
  }
  X.fillStyle = K.bg; X.fillRect(x0, 0, SW, SH);
  const g = X.createRadialGradient(x0 + SW / 2, SH * .4, 60, x0 + SW / 2, SH * .5, SW * .95); g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(1, TH.paperTint); X.fillStyle = g; X.fillRect(x0, 0, SW, SH);
  const R = rng(x0 + 5); X.save(); X.globalAlpha = .03; for (let k = 0; k < 4500; k++) { X.fillStyle = R() < .5 ? '#000' : TH.grain; X.fillRect(x0 + R() * SW, R() * SH, 1.5, 1.5); } X.restore();
}
function bgSatin(x0, seed, hue) {
  hue = hue || { a: '#E02143', b: '#B80F2C', c: '#6E0618' };
  let g = X.createLinearGradient(x0, 0, x0 + SW, SH); g.addColorStop(0, hue.a); g.addColorStop(.45, hue.b); g.addColorStop(1, hue.c); X.fillStyle = g; X.fillRect(x0, 0, SW, SH);
  X.save(); X.beginPath(); X.rect(x0, 0, SW, SH); X.clip(); X.filter = 'blur(26px)';
  const R = rng(seed); for (let k = 0; k < 6; k++) { const y = R() * SH, th = 60 + R() * 120, a = .16 + R() * .22, sl = (R() - .3) * 380;
    g = X.createLinearGradient(0, y, 0, y + th); g.addColorStop(0, 'rgba(255,170,175,0)'); g.addColorStop(.5, 'rgba(255,190,195,' + a + ')'); g.addColorStop(1, 'rgba(255,170,175,0)'); X.fillStyle = g;
    X.beginPath(); X.moveTo(x0 - 80, y + sl * .3); X.quadraticCurveTo(x0 + SW * .5, y - sl, x0 + SW + 80, y + sl * .5); X.lineTo(x0 + SW + 80, y + sl * .5 + th); X.quadraticCurveTo(x0 + SW * .5, y - sl + th, x0 - 80, y + sl * .3 + th); X.fill(); }
  X.filter = 'none'; X.restore();
  X.save(); X.beginPath(); X.rect(x0, 0, SW, SH); X.clip(); X.globalCompositeOperation = 'multiply'; g = X.createRadialGradient(x0 + SW * .45, SH * .35, SW * .2, x0 + SW * .5, SH * .5, SW * .95); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(120,10,25,1)'); X.fillStyle = g; X.fillRect(x0, 0, SW, SH); X.restore();
  bokeh(x0, seed + 5, 10, [SW * .45, 0, SW * .55, SH * .6]);
}

// ---- pgjewel v2: gaya krim berpusat (rujukan: "Kini withdraw GAP boleh", 7 slaid + CTA) ----
function pill(i, n, dark) { X.save(); X.strokeStyle = dark ? TH.eyeD : K.maroon; X.lineWidth = 2.5; rr(947, 34, 104, 44, 22); X.stroke(); X.restore(); T((i + 1) + '/' + n, 999, 66, F.ss(800, 25), dark ? TH.eyeD : K.maroon, 'center'); }
function foot(dark) { T('@taufik.pg', SW / 2, 1056, F.ss(700, 27), dark ? TH.eyeD : K.maroon, 'center', 1); }
function goldItalic(s, y, size, line) {
  T(s, SW / 2, y, F.pfi(700, size), goldFill, 'center', -size * .01);
  if (line) { const w = tw(s, F.pfi(700, size), -size * .01), g = X.createLinearGradient(SW / 2 - w / 2, 0, SW / 2 + w / 2, 0); g.addColorStop(0, 'rgba(201,151,28,0)'); g.addColorStop(.5, '#C9971C'); g.addColorStop(1, 'rgba(201,151,28,0)'); X.save(); X.strokeStyle = g; X.lineWidth = 3; X.beginPath(); X.moveTo(SW / 2 - w / 2, y + size * .17); X.quadraticCurveTo(SW / 2, y + size * .1, SW / 2 + w / 2, y + size * .17); X.stroke(); X.restore(); }
}
function redTitle(s, y, maxSize, maxW) { const sz = Math.min(maxSize, fit(s, function (f) { return F.pf(900, f); }, maxW || 900, -.03)); T(s, SW / 2, y, F.pf(900, sz), redFill, 'center', -sz * .03); return sz; }
function goldPill(s, cy, w) { const x = SW / 2 - w / 2, h = 70; X.save(); X.shadowColor = 'rgba(80,50,0,.3)'; X.shadowBlur = 14; X.shadowOffsetY = 5; rr(x, cy - h / 2, w, h, 24); const g = X.createLinearGradient(0, cy - h / 2, 0, cy + h / 2); g.addColorStop(0, TH.tag[0]); g.addColorStop(.55, TH.tag[1]); g.addColorStop(1, TH.tag[2]); X.fillStyle = g; X.fill(); X.restore(); T(s, SW / 2, cy + 15, F.ss(700, 44), '#FFFFFF', 'center'); }
function frac(cx, cy, num, den, size) { const w = Math.max(tw(num, F.ss(800, size)), tw(den, F.ss(800, size))) + 12; T(num, cx, cy - 8, F.ss(800, size), K.ink, 'center'); X.save(); X.strokeStyle = K.ink; X.lineWidth = 2.5; X.beginPath(); X.moveTo(cx - w / 2, cy + 2); X.lineTo(cx + w / 2, cy + 2); X.stroke(); X.restore(); T(den, cx, cy + size + 4, F.ss(800, size), K.ink, 'center'); }
function redBox(x, y, w, h, s, size, col) { box(x, y, w, h, 'red', 22); T(s, x + w / 2, y + h / 2 + size * .34, F.ss(800, size), col || '#FFFFFF', 'center'); }
function ingot(x, y, w, h, d) { const g = X.createLinearGradient(0, y, 0, y + h + d); g.addColorStop(0, '#F6D774'); g.addColorStop(1, '#C9941C'); X.save(); X.fillStyle = g; X.fillRect(x, y + d, w, h); X.fillStyle = '#FBE9A0'; X.beginPath(); X.moveTo(x, y + d); X.lineTo(x + d, y); X.lineTo(x + w + d, y); X.lineTo(x + w, y + d); X.fill(); X.fillStyle = '#A9780F'; X.beginPath(); X.moveTo(x + w, y + d); X.lineTo(x + w + d, y); X.lineTo(x + w + d, y + h); X.lineTo(x + w, y + h + d); X.fill(); X.strokeStyle = '#8A5C0C'; X.lineWidth = 2; X.strokeRect(x, y + d, w, h); X.restore(); }
function iconBars(cx, cy) { ingot(cx - 60, cy - 36, 96, 30, 18); ingot(cx - 78, cy - 4, 96, 30, 18); ingot(cx - 8, cy - 4, 96, 30, 18); }
function iconTools(cx, cy) { X.save(); X.translate(cx, cy); const g = X.createLinearGradient(0, -50, 0, 50); g.addColorStop(0, '#F2C960'); g.addColorStop(1, '#B27F17'); X.fillStyle = g; X.strokeStyle = '#8A5C0C'; X.lineWidth = 2; X.rotate(.78); rr(-9, -58, 18, 116, 8); X.fill(); X.stroke(); X.beginPath(); X.arc(0, -58, 30, 0, 7); X.fill(); X.stroke(); X.fillStyle = '#FBE9A0'; X.beginPath(); X.arc(-4, -62, 9, 0, 7); X.fill(); X.rotate(-1.56); rr(-9, -58, 18, 116, 8); X.fillStyle = g; X.fill(); X.stroke(); rr(-34, -80, 68, 30, 8); X.fill(); X.stroke(); X.restore(); }
function iconBox(cx, cy) { X.save(); X.translate(cx, cy); X.lineJoin = 'round'; X.strokeStyle = '#7A4F12'; X.lineWidth = 2; X.fillStyle = '#E4B263'; X.beginPath(); X.moveTo(-58, -20); X.lineTo(0, -48); X.lineTo(58, -20); X.lineTo(0, 8); X.closePath(); X.fill(); X.stroke(); X.fillStyle = '#D19A45'; X.beginPath(); X.moveTo(-58, -20); X.lineTo(0, 8); X.lineTo(0, 66); X.lineTo(-58, 38); X.closePath(); X.fill(); X.stroke(); X.fillStyle = '#B9822E'; X.beginPath(); X.moveTo(58, -20); X.lineTo(0, 8); X.lineTo(0, 66); X.lineTo(58, 38); X.closePath(); X.fill(); X.stroke(); X.fillStyle = '#fff'; X.beginPath(); X.moveTo(18, 30); X.lineTo(44, 18); X.lineTo(44, 44); X.lineTo(18, 56); X.closePath(); X.fill(); X.restore(); }

window.ready = Promise.all([
  ...[['PF', 'PlayfairDisplay-700.ttf', 700, 'normal'], ['PF', 'PlayfairDisplay-800.ttf', 800, 'normal'], ['PF', 'PlayfairDisplay-900.ttf', 900, 'normal'], ['PFI', 'PlayfairDisplay-400i.ttf', 400, 'italic'], ['PFI', 'PlayfairDisplay-700i.ttf', 700, 'italic'],
    ['IX', 'Inter-900.woff2', 900, 'normal'], ['IX', 'Inter-800.woff2', 800, 'normal'], ['IX', 'Inter-500.woff2', 500, 'normal'], ['SS', 'SourceSerif4-500.ttf', 500, 'normal'], ['SS', 'SourceSerif4-600.ttf', 600, 'normal'], ['SS', 'SourceSerif4-700.ttf', 700, 'normal'], ['SS', 'SourceSerif4-800.ttf', 800, 'normal']]
    .map(([fam, file, w, st]) => new FontFace(fam, `url(fonts/${file})`, { weight: String(w), style: st }).load().then(f => document.fonts.add(f))),
  ...Object.entries(ASSETS).map(([k, f]) => new Promise((res, rej) => { const i = new Image(); i.onload = () => { IMG[k] = i; res(); }; i.onerror = () => rej(new Error('missing img/' + f)); i.src = 'img/' + f; })),
]).then(() => {
  SLIDES.forEach((fn, i) => { const x0 = i * SW, dark = (window.DARK || []).includes(i); paper(i, x0, dark); X.save(); X.beginPath(); X.rect(x0, 0, SW, SH); X.clip(); X.translate(x0, 0); fn(i); if (!window.NOFOOTER) footer(i, N, dark); X.restore(); });
  return true;
});
