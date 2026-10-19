---
name: carousel-notes
description: Carousel gaya "Apple Notes" — kad putih bulat-sudut (Notes, tajuk berpenanda merah jambu, senarai bernombor) atas foto penuh, cover angka besar + tulisan skrip, CTA kad lebar + potret Taufik. 1080x1080, 7 slaid. Guna bila Taufik minta "carousel notes" / senarai idea, hook, tip, templat copy-paste yang orang nak SAVE.
---
# carousel-notes (rujukan: Ella Content Club "25 hooks")
Taufik panggil: "carousel notes". Sesuai untuk senarai pendek yang orang save (hook bank, soalan, checklist, tip).

## Mula
`sh skills/carousel-notes/scripts/new_carousel.sh carousel-<topik> [pose]` (default pose thumbs-up) → salin foto `img/p1.jpg..p7.jpg` dari `assets/emas/` → edit `slides.js` → `node render.js` → `out/01..07.jpg`.

## Struktur 7 slaid
1. Cover: foto digelapkan, angka besar merah jambu (cth `25`), perkataan putih gergasi + tulisan skrip Caveat merah jambu bertindih, sub-tajuk Poppins (kata kunci tebal), bintang/sparkle emas. Tiada emoji (dilukis sendiri).
2–6. `notesCard({t1,t2}, [[no,teks]...], {cy})`: kad Notes (‹ Notes, ikon), tajuk `t1` tebal + `t2` nipis dengan penanda merah jambu, 5 item bernombor (nombor tebal + titik merah jambu). Teks auto-wrap & tajuk auto-muat. Foto penuh berbeza tiap slaid.
7. CTA: kad lebar "Save ni hook bank untuk nanti." + "follow @taufik.pg" + potret Taufik outline putih (HANYA di sini).

## Peraturan
- Edit `HOOKS` dalam slides.js (tajuk, nombor mula, 5 item). Kekalkan ≤5 item/kad dan ayat pendek (≤ ~60 aksara) supaya kad tak melimpah.
- Penanda akaun atas (`acct`) = bulatan "T." + TAUFIK MUSA + @taufik.pg dalam pil lutsinar gelap supaya jelas di atas foto cerah.
- Font: Poppins 800/500 (tajuk, senarai), Caveat 700 (skrip cover). Warna: merah jambu #FF7EB6, penanda #F9D3E3, emas Notes #B5871A.
- Teks BM kolokial, "anda" bukan "korang". Foto emas sebenar; tiada AI foto.
- Saiz 1:1 (Taufik mahu 1:1 untuk Facebook). Untuk 4:5 set `window.SH_OVERRIDE = 1350` di slides.js dan laras `cy`.
