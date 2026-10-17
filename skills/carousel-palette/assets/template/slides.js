// CONTOH template carousel-palette (7 slaid): cover + 5 isi + CTA. Salin pola, tukar teks/gambar.
// Teks di sini hanya contoh gaya — ganti dengan copywriting Taufik.
var N = 7;
var ASSETS = {
  cover: 'jongkong-berdiri-meja-hitam.jpg', a: 'jongkong-100g-kad-bungamas-meja.jpg', b: 'koleksi-dulang-1kg.jpg',
  c: 'kad-dinar-hijau-dua-pantai.jpg', d: 'set-jongkong-bertingkat-bungamas.jpg', e: 'kad-taifook-4-saiz-tangan.jpg', me: 'thumbs-up.png',
};
var SW_GOLD = [{ c: '#6B4A12', l: '#6B4A12' }, { c: '#C9971C', l: '#C9971C' }, { c: '#F1DFA6', l: '#F1DFA6' }, { c: '#FAF7EE', l: '#FAF7EE', line: 1 }];
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '5', numCol: '#4F7FD0',
      lines: [
        { p: [['Contoh', K.ink]], size: 215 },
        { p: [['Tajuk', K.ink]], size: 215, lh: .84 },
        { p: [['untuk ', K.ink], ['naik taraf', K.orange]], size: 116, lh: .98 },
        { p: [['kandungan anda.', K.ink]], size: 104, lh: .9 },
      ],
      im: null,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tip 01', title: [['SIMPAN', K.ink], ['& SABAR', '#6B4A12']], tagline: 'Ringkas. Konsisten. Tenang.', im: 'a', sw: SW_GOLD, caption: 'Save post ni' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tip 02', title: [['KUMPUL', K.ink], ['& TAMBAH', K.orange]], tagline: 'Sikit-sikit lama-lama jadi bukit.', im: 'b', sw: [{ c: '#B5472B' }, { c: '#E8A98A' }, { c: '#F6EBDD', line: 1 }, { c: '#272233' }], caption: 'Save post ni' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tip 03', title: [['TENANG', K.ink], ['& CUTI', K.blue]], tagline: 'Hasil kerja keras, nikmati sikit.', im: 'c', fy: .6, sw: [{ c: '#263D8D' }, { c: '#A9C4E8' }, { c: '#F3DEA0' }, { c: '#FAF7EE', line: 1 }], caption: 'Save post ni' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tip 04', title: [['NAIK', K.ink], ['& SAIZ', '#6A3E7D']], tagline: 'Kecil dulu, besarkan perlahan.', im: 'd', sw: [{ c: '#462B52' }, { c: '#A77B9E' }, { c: '#E7C9D2' }, { c: '#F5EEE8', line: 1 }], caption: 'Save post ni' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Tip 05', title: [['SIMPAN', K.ink], ['& LUPA', '#3E6B2A']], tagline: 'Biar masa yang kerja untuk anda.', im: 'e', sw: [{ c: '#18392B' }, { c: '#8CA17B' }, { c: '#E9E1CE', line: 1 }, { c: '#C1A16A' }], caption: 'Save post ni' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'SIMPAN IT', l2: 'UNTUK NANTI.', follow: 'Follow @taufik.pg', im: 'me', imH: 820 }); },
];
