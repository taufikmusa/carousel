// carousel-palette DEFAULT (Electric Studio biru + lime). "Personal Loan 2027: Flat Rate & Rule of 78 dihapuskan" (11 slaid, 1080x1350).
var N = 11;
var ASSETS = { cover: 'cover.jpg', p1: 'p1.jpg', p2: 'p2.jpg', p3: 'p3.jpg', p4: 'p4.jpg', p5: 'p5.jpg', p6: 'p6.jpg', p7: 'p7.jpg', p8: 'p8.jpg', p9: 'p9.jpg', me: 'thumbs-up.png' };
var BL = '#3040FF', DK = '#10121B';
var SLIDES = [
  function (x, i) {
    coverLayout(x, i, N, {
      num: '!',
      lines: [
        { p: [['Nak buat', DK]], size: 130 },
        { p: [['personal loan', BL]], size: 112, lh: .92 },
        { p: [['tahun depan?', DK]], size: 130, lh: .92 },
        { p: [['Ada perubahan besar.', BL]], size: 82, lh: 1.02 },
      ],
      titleY: 470, im: 'cover', imH: 330,
    });
  },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Mulai 1 Jan 2027', title: [['FLAT RATE & RULE', DK], ['OF 78 TAMAT', BL]], tagline: 'Bank dan institusi kewangan *tak lagi dibenarkan* menawarkan pembiayaan peribadi baharu guna kaedah *Flat Rate* dan *Rule of 78.*', im: 'p1', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kenapa BNM ubah?', title: [['KADAR 4% BELUM', DK], ['KOS SEBENAR', BL]], tagline: 'Ramai nampak kadar faedah *4%* dan sangka pinjaman murah. Hakikatnya kadar itu *belum tentu menggambarkan kos sebenar* pinjaman.', im: 'p2' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Masalah 01: Flat Rate', title: [['FAEDAH KIRA DARI', DK], ['PINJAMAN ASAL', BL]], tagline: 'RM50,000 × 4% × 5 tahun = *RM10,000 faedah.* Jumlah bayaran *RM60,000,* ansuran RM1,000 × 60 bulan. Baki hutang makin kurang, tapi faedah *masih dikira atas RM50,000.*', im: 'p3', fy: .3 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Masalah 02: Rule of 78', title: [['CAJ FAEDAH', DK], ['LEBIH AWAL', BL]], tagline: 'Bahagian caj faedah *lebih besar di peringkat awal* pinjaman. Bila nak langsaikan lebih awal, *penjimatan faedah mungkin tak sebanyak* yang dijangka.', im: 'p4' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kaedah baharu', title: [['REDUCING', DK], ['BALANCE', BL]], tagline: 'Faedah dikira atas *baki hutang yang belum dibayar.* Contoh RM50,000, 5 tahun, 4%: ansuran *RM920.83,* faedah *RM5,249.57,* jumlah *RM55,249.57.* (Anggaran)', im: 'p5', fy: .4 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Kenapa faedah berbeza?', title: [['BULAN PERTAMA', DK], ['SEHINGGA SELESAI', BL]], tagline: 'Faedah bulan pertama *RM166.67* atas RM50,000. Daripada RM920.83, *RM754.16* kurangkan pokok. Baki jadi *RM49,245.84,* dan bulan berikutnya faedah dikira atas baki baharu.', im: 'p6' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'EIR & EPR', title: [['KADAR EFEKTIF', DK], ['WAJIB DIDEDAH', BL]], tagline: '*EIR* (faedah efektif, konvensional) dan *EPR* (keuntungan efektif, Islamik). Dalam contoh ini, kadar rata 4% bersamaan *kira-kira 7.42%* setahun. Jangan banding 4% rata dengan 4% efektif.', im: 'p7' }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Perkara lain', title: [['LEBIH RM100,000?', DK], ['ADA MODUL', BL]], tagline: 'Pembiayaan peribadi baharu *melebihi RM100,000* perlu lengkapkan *modul pendidikan kewangan* (institusi kewangan atau AKPK). Had 10 tahun hanya untuk *kategori tertentu,* bukan semua personal loan.', im: 'p8', fy: .3 }); },
  function (x, i) { itemLayout(x, i, N, { eyebrow: 'Pengajaran', title: [['JANGAN UKUR GUNA', DK], ['BERAPA BANK PINJAM', BL]], tagline: 'Setiap pinjaman *guna pendapatan masa depan.* Ukur kemampuan ikut apa yang *benar-benar mampu dibayar* tanpa mengorbankan kewangan keluarga.', im: 'p9' }); },
  function (x, i) { ctaLayout(x, i, N, { l1: 'FIKIR DAHULU', l2: 'SEBELUM BERHUTANG.', col: BL, follow: 'Follow @taufik.pg', sub: 'Banding tawaran bank guna *EIR/EPR, jumlah bayaran balik, ansuran dan caj,* bukan kadar promosi sahaja. Moga bermanfaat.', im: 'me', imH: 580, size: 88 }); },
];
