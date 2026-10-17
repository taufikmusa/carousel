---
name: carousel-palette
description: 'Carousel IG 1080x1350 gaya KAD PALET / SWISS EDITORIAL (rujukan "5 Color Palette to level up your design", 7 slaid). Latar kertas krim, NOMBOR WATERCOLOUR GERGASI di cover, tajuk Inter 900 super tebal rapat (2 warna: hitam + warna aksen), eyebrow huruf besar jarak lebar ("PALETTE 01"), tagline ringkas, kotak gambar lukisan/foto empat segi tepat, baris swatch 4 warna + kod hex mono, "SAVE THIS PALETTE" di bawah, CTA "SAVE IT FOR LATER." dengan potret outline putih atas coretan berus kering. Guna bila Taufik sebut "carousel palette", "gaya swiss", "gaya kad warna", "macam 5 color palette", atau attach gambar + copywriting dan minta 7 slaid gaya ni. Handle @taufik.pg. BERBEZA daripada carousel-editorial (nombor oren + tulisan tangan) dan carousel-thumbnail (gelap).'
---

# carousel-palette — krim, tipografi tebal, seni dilukis (1080x1350)

Rujukan gaya: `references/rujukan/01..07.jpg` (carousel @zbalosch, 7 slaid; gaya sahaja — jangan salin kandungan/burung).

## Resipi gaya
- **Kertas krim `#F3EFE7`** + grain halus. Dakwat `#121212`. Aksen ikut slaid (biru `#2A4BA0`, oren `#EE8130`, atau warna palet topik).
- **Header setiap slaid**: `02 / 07` kiri, `@taufik.pg` kanan (cover ada garis nipis di tengah). TIADA footer pil.
- **Tajuk**: Inter 900, tracking −4.5%, baris 1 hitam + baris 2 berwarna aksen (`"& CREAM"` gaya). Eyebrow di atas: `PALETTE 01` huruf besar, jarak lebar. Tagline 3 perkataan bertitik ("Calm. Grounded. Natural.") di bawah tajuk.
- **Gambar**: kotak segi tepat tajam (tiada bucu bulat/bayang), ~920×620, gaya lukisan/foto. Di bawahnya **4 swatch** + kod hex mono, kemudian `SAVE THIS PALETTE`.
- **Cover**: digit/perkataan watercolour pucat gergasi (bocor keluar kanvas), tajuk hitam besar bertindih digit, baris kecil dengan 2-3 perkataan oren, **cutout** (PNG lutsinar) di kanan bawah bertindih digit.
- **CTA (slaid terakhir)**: `SAVE IT` hitam / `FOR LATER.` biru, `Follow @taufik.pg`, coretan berus kering warna palet, **potret Taufik outline putih** di atasnya.

## Fail
```
assets/template/  engine.js (JANGAN EDIT) · slides.js (CONTOH — tulis semula) · index.html · render.js · fonts/
scripts/new_carousel.sh   salin template + jana potret sticker
references/rujukan/       7 tangkapan skrin rujukan
```

## Aliran kerja
1. `sh skills/carousel-palette/scripts/new_carousel.sh carousel-<topik> thumbs-up` (pose dari `assets/README.md`).
2. Gambar dari Taufik (attach) → simpan ke `carousel-<topik>/img/` (PNG lutsinar untuk cover cutout). Tiada gambar spesifik → `cp assets/emas/<fail>.jpg carousel-<topik>/img/` (baca `assets/README.md`).
3. Tulis `slides.js`: `var N`, `var ASSETS={key:'fail'}`, `var SLIDES=[fn(x,i)...]` — guna layout: `coverLayout`, `itemLayout`, `ctaLayout` (lihat contoh).
4. `cd carousel-<topik> && node render.js` → `out/01..0N.jpg` + `out/panorama.png`. Semak semua slaid (`montage`), betulkan teks terpotong/bertindih.
5. Hantar `out/0*.jpg` TERUS dalam chat (SendUserFile). Commit kod sahaja (out/ di-gitignore).

## Layout API
- `coverLayout(x,i,N,{num, numCol, numX, numY, numSize, lines:[{p:[[teks,warna]],size,lh}], titleY, im, imH, imBleed, imDrop})`
- `itemLayout(x,i,N,{eyebrow, title:[[baris1,warna],[baris2,warna]], size(=140), tagline, hl, im, fx, fy, sw:[{c,t,tc,line}], caption})` — tanpa `sw`, gambar jadi lebih tinggi. `sw` (swatch), `caption` & label hex `l` OPSYENAL — DEFAULT: TIADA. Taufik tak nak swatch, kod hex, atau "SAVE THIS PALETTE"; letak hanya jika diminta.
- `ctaLayout(x,i,N,{l1,l2,col,follow,sub,im,imH,size,strokes:[warna...]})  (sub = perenggan kecil bawah "follow")`
- Primitif: `header` `richLine` `titleStack` `eyebrow` `tagline` `caption` `ghost` `brushStroke` `artBox` `cutoutBR` `cutoutBC` `swatches` `txt` `tw`.
- `swatches` boleh jadi "chip" bukan warna sahaja: `t` = teks dalam kotak (cth `5g`), `l` = label bawah, `line:1` = garis halus untuk warna cerah.

## Peraturan
- **Highlight WAJIB**: dalam `tagline`/`sub`, bungkus 2–4 frasa penting dengan `*...*` (tebal + penanda highlighter warna `hl`, default oren). Elak mata bosan tengok perenggan kosong.
- 7 slaid default: 1 cover + 5 isi + 1 CTA (ikut N dari copywriting). Satu idea satu slaid.
- Warna aksen tajuk & swatch **selaras dengan gambar** slaid tu (macam rujukan: tiap slaid ada palet sendiri). Kalau swatch diminta: tanpa label hex kecuali diminta, warna mesti benar-benar dari gambar — ambil sampel dengan `convert img.jpg -resize 1x1 txt:` / kuantisasi kalau perlu.
- Potret Taufik HANYA di slaid CTA (outline putih wajib). Cover & isi tanpa potret.
- Ayat dari copywriting Taufik; jangan tambah fakta. Teks rekaan (tagline/caption) senaraikan dalam laporan. Angka/harga hanya dari Taufik atau sumber bertarikh.
- Bahasa Melayu Malaysia; istilah teknikal kekal English.
