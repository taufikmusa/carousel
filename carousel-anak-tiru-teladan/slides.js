// carousel-palette VARIAN "Pink Child" (pink lembut, mesra anak). "Anak Tiru Apa Kita Buat" (8 slaid, 1080x1350).
var PALETTE = { bg: '#FFF3F6', ink: '#3A1B2A', blue: '#E0457B', orange: '#FFC9D9', hl: '#FFD9E5', ghost: '#FFE1EA', muted: '#5a3446', brush: ['#E0457B', '#FFC9D9', '#3A1B2A', '#F59BB8', '#B02358'] };
var N = 8;
var ASSETS = { cover: 'cover.jpg', a: 'a.jpg', b: 'b.jpg', c: 'c.jpg', d: 'd.jpg', e: 'e.jpg', f: 'f.jpg', me: 'thumbs-up.png' };
var PK = '#E0457B', DK = '#3A1B2A';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '2',
      lines: [
        { p: [['Anak ingat apa', DK]], size: 112 },
        { p: [['kita BUAT,', PK]], size: 140, lh: .9 },
        { p: [['bukan semua', DK]], size: 112, lh: .95 },
        { p: [['nasihat kita.', DK]], size: 112, lh: .95 },
      ],
      titleY: 440, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kata Dr Rizal (podcast)', title: [['TELLING VS', DK], ['STORYTELLING', PK]], tagline: '“Telling is not going to take them anywhere. *Storytelling will change them.*” Nasihat sahaja belum tentu mengubah, tapi *mesej melalui cerita dan contoh hidup* kesannya jauh lebih mendalam.', im: 'a', fy: .35 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 01', title: [['ANAK BELAJAR DARI', DK], ['APA KITA LAKUKAN', PK]], tagline: 'Nak anak rajin membaca tapi *kita leka dengan telefon?* Suruh kurangkan telefon tapi tak pernah lepas dari tangan? *Anak lebih banyak meniru perbuatan* daripada mendengar nasihat. Perubahan bermula daripada kita.', im: 'b', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara 02', title: [['CERITA LEBIH', DK], ['MELEKAT DARI FAKTA', PK]], tagline: 'Dengan cerita, anak boleh *membayangkan situasi, merasai emosi* dan memahami pengajaran. Jangan hanya beritahu apa yang betul, *tunjukkan bagaimana ia dilakukan* dalam kehidupan sebenar.', im: 'c' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Soal kewangan keluarga', title: [['APA CONTOH', DK], ['YANG MEREKA LIHAT?', PK]], tagline: 'Kita pesan jimat dan simpan, tapi adakah anak *nampak kita ada tabungan, merancang kewangan* dan menyediakan simpanan pendidikan, perkahwinan dan masa depan mereka?', im: 'd', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: '“Kenapa ayah beli emas?”', title: [['CERITAKAN', DK], ['DENGAN JUJUR', PK]], tagline: 'Emas bukan untuk menunjuk kaya, tapi *sebahagian usaha membina simpanan keluarga.* Tunjuk gram dikumpul melalui Akaun Emas GAP Public Gold *serendah RM100,* dan boleh ditebus sebagai emas fizikal.', im: 'e' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Warisan sebenar', title: [['BUKAN HARTA', DK], ['SAHAJA DIWARISI', PK]], tagline: 'Pendidikan kewangan terbaik bukan dari apa yang kita ajar, tapi *apa yang kita tunjukkan.* Jangan tunggu anak dewasa. Moga mereka mewarisi *ilmu dan disiplin* mengurus harta itu.', im: 'f' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'TUNJUKKAN,', l2: 'BUKAN CAKAP.', col: PK, follow: 'Follow @taufik.pg', sub: 'Biar anak membesar melihat ibu ayah *membina aset, mengurus wang* dan menyediakan simpanan. Dulu ragu, kini tahu. Jom simpan emas!', im: 'me', imH: 580, size: 120 }); },
];
