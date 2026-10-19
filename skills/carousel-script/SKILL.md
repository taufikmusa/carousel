---
name: carousel-script
description: 'DEFAULT carousel kandungan "senarai N tanda/sebab/tip" untuk Taufik (@taufik.pg): 1080x1080 (1:1), 7 slaid gelap/cerah berselang. Atas: bar "01 / 07 —— @taufik.pg", label "TANDA 01", tajuk 2 baris besar (putih+emas di gelap, hitam+merah di cerah); perenggan serif 38px dengan penanda highlighter oren-emas; BAWAH: foto sebenar memenuhi ~42% tinggi dengan fade ke latar. Cover (tajuk 3 baris + subtajuk + foto), CTA (tajuk + perenggan penutup + potret outline putih + Follow @taufik.pg). Guna bila Taufik beri copywriting berbentuk senarai (5 tanda, 5 sebab, 7 tip) dan minta "carousel script" / gaya foto-bawah. Rujukan: references/rujukan/gaya-script-5-tanda.jpg.'
---

# carousel-script — teks atas, foto bawah (1080x1350)

Dibina atas enjin pgjewel/carousel-ivory (tema `THEME`, highlight, fon Inter/Playfair/Source Serif). Rujukan gaya Taufik: `references/rujukan/gaya-script-5-tanda.jpg` (rujukan guna foto AI; kita guna foto sebenar dari `assets/emas/` atau gambar Taufik).

## Mula
```
sh skills/carousel-script/scripts/new_carousel.sh carousel-<topik> [pose]       # potret -> img/me.png (default peluk-tubuh)
cp assets/emas/<foto>.jpg carousel-<topik>/img/p1.jpg   # p1 cover, p2..p6 slaid isi
cd carousel-<topik> && node render.js                    # out/01..07.jpg
```
Edit `slides.js`: teks setiap `slide(i, gelap?, label, tajuk1, tajuk2, perenggan, foto)`. Perenggan: `*frasa penting*` = highlight (2–4 setiap slaid). Hantar JPG terus dalam chat; commit kod sahaja.

## Susunan
Slaid 1 cover (gelap) · 2–6 isi berselang cerah/gelap/cerah/gelap/cerah · 7 CTA (gelap + potret). N slaid isi boleh diubah — tambah/buang baris `slide(...)` dan kemas kini `N` dan `DARK`.

## Pilihan foto (assets/emas) — padankan tema slaid
Dompet = `dompet-wealthcard-safari` · app/kira = `kad-dinar-dan-app-gap-ipad` · jongkong tangan = `jongkong-1kg-tapak-tangan` · koleksi = `koleksi-binder-kad` · dinar = `kad-10-dinar-dulang-hitam` · ukiran = `jongkong-merak-100g-dulang-merah`. Foto gelap untuk slaid gelap, foto cerah untuk slaid cerah. Jangan guna foto produk akaun orang lain.

## Peraturan
- **Tajuk timbul**: `var HSTROKE = {white:'#5A0416', goldl:'#4E2D04', ink:'#FFFFFF', red:'#FFFFFF'}` dalam slides.js = garis tepi tebal + bayang lembut di belakang tajuk (Taufik minta supaya tulisan nampak timbul). Kekalkan.
- Tajuk Playfair 900: putih + emas (`white`/`goldl`) di slaid gelap, hitam + merah (`ink`/`red`) di cerah; cover ada swoosh emas bawah baris emas. Foto slaid gelap ditapis `saturate(1.15) contrast(1.05)`.
- **Saiz tetap 1:1 (1080x1080)** — Taufik tak mahu 4:5. Latar = foto slaid itu dikaburkan (tone sama dengan foto): gelap = SATIN MERAH CERI pekat (`bgSatin`: gradien #E02143→#6E0618 + pita cahaya berkilau + bokeh; rujukan Taufik — foto emas tajam di atasnya, TIDAK kabur); cerah = kabur + lapisan krim. Jangan guna gradien maroon terang.
- Salin copywriting Taufik; ringkaskan jika perlu, jangan tambah fakta. "anda" bukan "korang". Watak generik.
- Potret Taufik hanya di CTA. Handle `@taufik.pg` di bar atas setiap slaid.
- Warna lain: `THEME` (maroon default; emerald navy electric earth soft luxury fresh).
