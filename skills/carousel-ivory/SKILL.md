---
name: carousel-ivory
description: 'Carousel IG 1080x1350 gaya PREMIUM GADING & MAROON untuk KISAH + KIRAAN produk emas (cincin/gelang/kemas, withdraw GAP). Slaid hook dan CTA latar maroon berserbuk emas; slaid isi gading dengan eyebrow emas huruf besar, tajuk Playfair rata kiri (hitam/merah tua/emas), perenggan Source Serif dengan penanda highlighter, kad putih berbar emas, tag harga emas, kad resit titik-titik, bar jumlah merah, kotak langkah bernombor, medalion foto bulat, titik kemajuan di bawah, potret Taufik outline putih di slaid CTA. Guna bila Taufik beri copywriting kisah/simulasi kiraan produk emas (cth tebus GAP jadi cincin) + gambar produk, atau minta gaya premium merah-emas. Data (harga GAP, tarikh, harga produk, upah, pos) dalam objek D; jumlah dan gram dikira automatik.'
---

# carousel-ivory v2 — kisah premium gading + maroon (1080x1350, 8 slaid)

Dibina daripada rujukan `references/rujukan/` (kiraan withdraw GAP, gaya sahaja) TETAPI diubah supaya tidak nampak meniru: tajuk rata kiri, eyebrow, titik kemajuan, tag harga, resit, kad berbar, slaid maroon, medalion. JANGAN kembali ke susunan rujukan (tajuk tengah emas-italic + garis, kad bergaris emas, kaunter 1/7).

## Struktur 8 slaid (ikut copywriting kisah)
1. **Hook (maroon)**: eyebrow "Kisah sebenar", tajuk 4 baris (putih/emas), ayat pembuka, medalion foto produk.
2. **Dilema**: foto produk + tag harga, 2 kad ✕ (bayar tunai / tangguh).
3. **Penyelesaian**: 2 kad "Bukan …" dicoret + kad merah "Tetapi … Akaun Emas GAP".
4. **Bermula dari RM100**: perenggan + 3 langkah bernombor dengan anak panah.
5. **Simulasi kiraan**: kad resit (harga, pos, bar jumlah merah) + harga GAP bertarikh.
6. **Berapa gram**: RM jumlah ÷ RM gap → nombor emas gergasi + banner merah.
7. **Tiga pengajaran**: 3 kad bernombor.
8. **CTA (maroon)**: soalan komen + potret Taufik + tanda tangan nama/jawatan. Tiada titik kemajuan.

## Fail
```
assets/template/ engine.js (JANGAN EDIT) · slides.js (EDIT D + teks) · index.html · render.js · fonts/ · ring-contoh.png
scripts/new_carousel.sh <projek> [pose]   salin template + jana potret outline putih (default tunjuk-kamera)
references/rujukan/                        7 slaid rujukan asal (gaya sahaja)
```

## Aliran kerja
1. `sh skills/carousel-ivory/scripts/new_carousel.sh carousel-<topik> [pose]`.
2. Gambar produk → `img/produk.png` (potong rapat produk: `convert in.png -crop WxH+X+Y out.png`; tangkapan skrin app: potong dari fail asal). Latar cerah/krim OK (di-fade/di dalam medalion).
3. Edit `D` dalam `slides.js` (`tarikh`, `gap`, `produk`, `kod`, `harga`, `upah`, `upahTermasuk`, `pos`). `asas`, `jumlah`, `gram` (4 tp, bundar ke bawah) dikira sendiri. Tulis semula teks slaid ikut copywriting (ayat Taufik; ringkaskan, jangan tambah fakta).
4. `cd carousel-<topik> && node render.js` → `out/01..08.jpg`; semak semua (`montage`).
5. Hantar JPG terus dalam chat. Commit kod sahaja.

## API engine.js
`headline([[ [teks,gaya],... ], ...], x, y, {size, maxW, lh})` gaya: ink red gold white cream goldi whitei **goldl/goldil** (emas TERANG — wajib di latar maroon) · `eyebrow(s,x,y,dark)` · `para(s,x,y,w,size,{dark,lh})` (`*frasa*` = highlight) · `card(x,y,w,h,{bar,r,dark})` · `box(x,y,w,h,'red'|'gold'|'cream')` · `numBox` `checkCircle` `crossCircle` `arrowDown` `dotted` `priceTag(cx,cy,w,h,label,rot)` · `fadePhoto(im,cx,cy,w)` `medallion(im,cx,cy,d,fx,fy,zoom)` `cutoutBC(im,cx,bottomY,h)` · `T` `tw` · fill emas `goldFill`, `goldFillL`, `redFill`. `var DARK=[..]` slaid maroon, `var NODOTS=[..]`.

## Peraturan
- Highlight 2–4 frasa penting setiap perenggan (`*...*`).
- Teks atas latar maroon guna emas terang (`goldl`/`goldFillL`), bukan `gold`.
- Angka dari app/Taufik sahaja (harga GAP bertarikh, harga produk, upah). "Labour Fee Included" → `upahTermasuk:true`. Pengeposan ikut Taufik.
- Potret Taufik hanya slaid CTA (outline putih). Font: Playfair Display 700/800/900 + italic 700, Source Serif 4 500–800 (`assets/fonts/`).
- Bahasa Melayu Malaysia.
