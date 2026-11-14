---
name: carousel-gradient
description: 'Carousel IG/FB 1080x1080 (1:1) gaya ANALISIS KORPORAT BERSIH: latar krim + swoosh coklat, tajuk Poppins 800 hitam tebal, pil palet Taufik Cream #FFFEC5 + Dark Coffee #39241F (tiada gradien; Taufik minta tukar supaya tak nampak sama dengan rujukan) dengan teks putih italic besar, tag pil coklat gelap kecil di atas-kiri, sub-teks italic dengan garis gradien, kad lilac dengan jubin ikon gradien, carta ilustrasi, footer gelombang coklat + "i/N", lencana @taufik.pg atas-kanan. Teks MINIMAL. Rujukan: gaya "MetaNext" analisis industri (references/rujukan). Guna bila Taufik sebut "gaya gradient", "gaya analisis", "macam MetaNext", atau minta carousel data/analisis yang kemas-profesional. Potret Taufik outline putih di slaid terakhir.'
---

# carousel-gradient — putih + gradien, teks minimal (1080x1080)

Panggilan: "gaya gradient". Rujukan: `references/rujukan/*.jpg` (cover, kad nombor besar, kad ikon 4 grid, aliran proses, sebelum/selepas, penutup).

## Mula
```
sh skills/carousel-gradient/scripts/new_carousel.sh carousel-<topik> [pose]   # potret outline putih -> img/me.png
cp assets/emas/<foto>.jpg carousel-<topik>/img/emas.jpg                         # foto cover (pilihan)
cd carousel-<topik> && node render.js                                           # out/01..0N.jpg
```
## API
`tag(s)` · `title([baris],y,size)` · `pill(s,y,size,{x})` · `sub([baris],y,size)` · `para(s,x,y,maxW,size)` (`*tebal*`) · `card(x,y,w,h,{fill,stroke})` · `tile(cx,cy,size,ikon,'a'|'b'|'c')` ikon: down up coins calendar check cross target clock hourglass person shield gold chart · `chart(x,y,w,h,pts,col1,col2)` ILUSTRASI · `photoFade(im,x,y,w,h,{fade,left})` · `cutoutBC` · `note(s,x,y)`. Footer kiri boleh tukar dengan `window.FOOT`.

## Peraturan
- Teks minimal: 1 tajuk besar + 1 pil + maksimum 3 kad kecil per slaid. Tiada perenggan panjang.
- Carta tanpa data sebenar WAJIB dilabel "ILUSTRASI, bukan data sebenar". Angka hanya dari copywriting.
- Potret Taufik hanya slaid terakhir. Bahasa Melayu kolokial.
