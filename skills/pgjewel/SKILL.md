---
name: pgjewel
description: 'Carousel IG/Facebook 1080x1080 (1:1) untuk PRODUK PG JEWEL (cincin, gelang, bangle, rantai, loket) — gaya KRIM berpusat "Kini withdraw GAP boleh": tajuk italic emas + tajuk merah tua tebal Playfair, pil nombor 1/8 kanan atas, produk dipotong besar, kad produk + jadual kiraan, 3 langkah "Bagaimana GAP ditolak?" (ikon jongkong/tukul/kotak, kotak merah RM), formula + nota penting, contoh pengiraan 1-4 + "Belum ada akaun GAP?", dan slaid 8 CTA Taufik (satin merah ceri + potret + PG Code/WhatsApp). Guna bila Taufik sebut "pgjewel" atau beri copywriting tebus gram GAP jadi barang kemas + tangkapan skrin produk (pgjewel.my). Kiraan jumlah/gram automatik. Rujukan: references/rujukan/gaya-pgjewel-krim-withdraw-gap.jpg.'
---

# pgjewel — carousel PG Jewel (gaya krim berpusat, 8 slaid) — produk/kiraan ATAU analisis/edukasi

Rujukan (Taufik: "aku nak skill pgjewel macam ni"): `references/rujukan/gaya-pgjewel-krim-withdraw-gap.jpg` — 7 slaid penerangan krim + **slaid 8 = CTA Taufik** (gelap satin merah ceri, potret outline putih).
Gaya lama (foto-latar, velvet) disimpan sebagai rujukan sahaja: `references/slides-gaya-foto-latar-merisik.js`, `references/rujukan/gaya-pgjewel-lama-foto-latar.jpg`.

## Mula
```
sh skills/pgjewel/scripts/new_carousel.sh carousel-<topik> [pose]      # pose potret, default thumbs-up
convert <tangkapan-skrin>.png -crop WxH+X+Y carousel-<topik>/img/produk.jpg   # potong rapat gambar produk (latar krim/putih supaya cutout bersih)
cd carousel-<topik> && node render.js                                   # out/01..08.jpg
```
Edit objek `D` dalam `slides.js` (tarikh, `gap` = Harga Emas PG Sell hari ini kadar Cash Voucher, nama/kod/berat produk, `harga` app (upah termasuk), `upah`, `pos`, `bundar` 'round'|'floor') + teks ikut copywriting. Kiraan `asas/jumlah/gram` automatik. Hantar JPG dalam chat; commit kod sahaja.
NOTA: tangkapan skrin telefon biasanya 1290px lebar (paparan chat tunjuk lebih kecil) — kira skala sebelum crop.

## Struktur 8 slaid
1 cover: italic emas (ayat sambut) + tajuk merah tebal + 1 baris kecil + produk BESAR & PENUH (tiada teks kecil berlebihan) ·
2 "Tahu tak? / boleh tebus GAP / untuk <jenis> 916": kad produk (harga app) + jadual harga emas (tanpa upah) / upah / pos / jumlah (kotak merah) ·
3 Bagaimana GAP ditolak? Langkah 1: 3 kad ikon (jongkong, tukul, kotak) + bar jumlah ·
4 Langkah 2: Harga Emas PG Sell (kadar Cash Voucher, bertarikh) = kotak merah; gram = pecahan = kotak merah ·
5 Langkah 3: Cash Voucher = kotak merah besar ·
6 Formula pengiraan + Nota penting (✓ x3; 2 daripada pengajaran kisah) ·
7 Contoh pengiraan 1-4 (kad bernombor) + kotak merah "Belum ada akaun GAP?" ·
8 CTA: soalan komen + potret + PG Code/WhatsApp/laman (latar satin merah ceri).

## API (engine.js)
Gaya krim: `pill(i,N,dark)` · `foot(dark)` · `goldItalic(s,y,size,line)` · `redTitle(s,y,maxSize,maxW)` · `goldPill(s,cy,w)` · `redBox(x,y,w,h,teks,size)` · `frac(cx,cy,atas,bawah,size)` · `iconBars/iconTools/iconBox(cx,cy)` · `row3(...)` (slides.js) · `makeCut(im)`/`putCut(cut,cx,cy,w,{rot})` cutout produk · `bgSatin(x0,seed)` satin merah ceri (slaid gelap). Selebihnya sama enjin carousel-ivory (`card`, `box('red'|'cream')`, `numCircle`, `checkCircle`, `para` dengan `*highlight*`, `headline`). `window.BG(i,x0,dark)` pulangkan `false` = guna kertas krim default.

## Peraturan
- Salin dari produk sebenar: nama, ketulenan (916/999), harga, upah — jangan campur 916 dengan 999. Harga emas Sell untuk Cash Voucher ikut yang Taufik beri (screenshot pgjewel.my / app). Bagi balik copywriting yang dibetulkan untuk copy-paste.
- Watak GENERIK, panggilan "anda" / "dia" (BUKAN "beliau", BUKAN "korang"). Ayat kolokial ringkas.
- Slaid 1 = tajuk besar + produk penuh; jangan letak teks kecil/perenggan (nampak tak premium).
- Foto produk sebenar sahaja — jangan jana/tiru foto AI. Potret Taufik hanya di slaid CTA (outline putih).
- Warna slaid gelap = satin merah ceri (pilihan Taufik); slaid krim = merah tua + emas. `THEME` lain hanya bila diminta.

## Varian ANALISIS / EDUKASI (graf emas, DCA, tip simpanan — bukan produk)
Contoh penuh: `references/slides-analisis-graf-emas.js` (carousel "graf setahun vs lima tahun"). Gaya sama (krim, italic emas + merah tebal, pil i/8, kotak merah) dengan peraturan tambahan (Taufik: "update skill pgjewel macam ni"):
- **Slaid 1 cover = latar SATIN MERAH CERI (gelap)** dengan susunan cover krim: italic emas (`goldItalicD`) + tajuk putih besar + 1 baris + foto emas besar pudar (`fadeDark`, bukan `fadePhoto` kerana multiply gelapkan di latar gelap). **TANPA muka/potret** di cover. Tetapkan `DARK = [0, 7]; NODOTS = [0, 7]` dan `pill(i,N,true)`, `foot(true)`.
- Slaid 2–7 krim: `goldItalic` + `redTitle` (nombor besar cth `-4.72%`) + 1 baris tebal + kandungan: `miniChart` (carta ILUSTRASI berlabel) + `stat` kad, kad 2 lajur ✕/✓ (`crossCircle`/`checkCircle`), 3 langkah `numCircle`, kad petikan guru (kotak merah, atribusi "Tn Mohd Zulkifli Shafie"), bar `box('red')` ringkasan. Teks MINIMAL.
- Slaid terakhir = CTA satin + potret + PG Code/WhatsApp/laman (sama seperti varian produk).
- Carta tanpa data sebenar WAJIB label "ILUSTRASI, bukan data sebenar"; angka hanya dari copywriting.
- Mula dengan `new_carousel.sh`, salin `references/slides-analisis-graf-emas.js` ke `slides.js` sebagai titik mula.
