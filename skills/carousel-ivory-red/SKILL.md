---
name: carousel-ivory-red
description: 'Carousel kisah + kiraan produk emas WARNA MERAH (maroon + emas + gading) 1080x1080: slaid hook/CTA latar maroon berserbuk emas, slaid isi gading dengan tajuk Playfair rata kiri merah tua, kad berbar emas, tag harga emas, resit, bar jumlah merah, medalion foto, potret Taufik + PG Code + WhatsApp di slaid akhir. Guna bila Taufik sebut "carousel ivory merah", "warna merah" untuk gaya premium gading ini, atau mahu 8 slaid kisah/simulasi kiraan emas dengan warna merah. BERBEZA daripada carousel-red (komik pop-art merah/kuning) — ini gaya premium rata kiri. Untuk warna lain guna carousel-ivory (THEME emerald/navy).'
---

# carousel-ivory-red — premium gading, tema MAROON (merah)

Ini **varian warna** `carousel-ivory` dengan `THEME='maroon'` dikunci. Enjin, susunan 8 slaid, API dan peraturan semuanya sama — **baca `skills/carousel-ivory/SKILL.md` dahulu** (struktur slaid, objek `D`, highlight, 1:1 vs 4:5, "anda" bukan "korang", PG Code + WhatsApp di CTA).

## Mula
```
sh skills/carousel-ivory-red/scripts/new_carousel.sh carousel-<topik> [pose]
```
Skrip memanggil carousel-ivory lalu menetapkan `var THEME = 'maroon';` dalam `slides.js`. Selepas itu: letak gambar produk `img/produk.png`, edit `D` + teks, `node render.js`, hantar JPG dalam chat.

## Warna (maroon)
Maroon `#7A0F1A` / `#B5121F`→`#6C0613`, emas terang `goldl` di latar gelap, gading `#FBF8F3`, highlighter emas pucat. Contoh siap: `carousel-gap-ring/` (tahu tak anda? — cincin Gelombang Cinta).

## Peringatan
- Skill `carousel-red` (komik pop-art merah/kuning, Bangers) lain — jangan keliru.
- Jika Taufik mahu post BERBEZA rupa daripada post merah sebelum ini → guna `carousel-ivory` dengan `THEME='emerald'` atau `'navy'`.
