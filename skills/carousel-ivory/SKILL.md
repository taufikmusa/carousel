---
name: carousel-ivory
description: 'Carousel IG 1080x1080 gaya PREMIUM GADING (rujukan "Kini withdraw GAP boleh tukar emas perhiasan 916", 7 slaid). Latar gading berseri, tajuk Playfair: baris emas italic + garis emas, baris merah tua tebal; subtajuk serif hitam dengan angka emas; kad putih bergaris emas, pil merah/emas/krim, bulatan nombor emas, ikon emas vektor (jongkong, alat, kotak), kotak formula dan nota penting dengan tanda semak emas, banner merah penutup. Guna bila Taufik minta gaya ni, atau topik KIRAAN / langkah demi langkah / withdraw GAP / harga produk emas + gambar produk (cincin, gelang, kemas). Data (harga GAP, tarikh, harga produk, upah, pos) diedit dalam objek D, kiraan jumlah dan gram dijana automatik.'
---

# carousel-ivory — premium gading, kad bergaris emas (1080x1080)

Rujukan: `references/rujukan/01..07.jpg` (carousel @drsitihasifah — gaya sahaja). Struktur 7 slaid:
1. **Cover**: "Kini withdraw" (emas italic) / "GAP boleh" (merah) / "Tukar kepada emas perhiasan **999!**" + foto produk besar (latar fade ke kertas).
2. **Contoh kiraan**: kad kiri (foto + nama + harga), kad kanan (jadual: harga emas tanpa upah, upah, pengeposan, jumlah dalam pil merah).
3. **Langkah 1**: pil emas, ayat, 3 kad ikon (jongkong / alat / kotak) + jumlah keseluruhan.
4. **Langkah 2**: harga GAP semasa (bertarikh) + gram GAP dijual = jumlah ÷ harga GAP.
5. **Langkah 3**: Cash Voucher = jumlah.
6. **Formula pengiraan** + Nota penting (3 tanda semak).
7. **Contoh pengiraan** 4 baris bernombor + banner "Belum ada akaun GAP?".

## Fail
```
assets/template/ engine.js (JANGAN EDIT) · slides.js (EDIT objek D + teks) · index.html · render.js · fonts/ · ring-contoh.png (contoh gambar)
scripts/new_carousel.sh   salin template ke <repo>/<projek>/ (gambar → img/produk.png)
references/rujukan/       7 slaid rujukan
```

## Aliran kerja
1. `sh skills/carousel-ivory/scripts/new_carousel.sh carousel-<topik>`.
2. Gambar produk (atau tangkapan skrin app): **potong rapat produk** (`convert in.png -crop WxH+X+Y out.png`) → `img/produk.png`. Latar produk yang cerah/krim paling sesuai (ia di-fade ke kertas). Gambar tangkapan skrin: potong dari fail asal (resolusi penuh).
3. Edit `D` dalam `slides.js`: `tarikh`, `gap` (RM/gram), `tulen` (999/916), `produk`, `harga`, `upah`, `upahTermasuk`, `pos`. `asas`, `jumlah`, `gram` dikira sendiri (gram = jumlah ÷ gap, 4 tp, bundar ke bawah macam rujukan).
4. `cd carousel-<topik> && node render.js` → `out/01..07.jpg`. Semak semua slaid (`montage`), betulkan teks bertindih.
5. Hantar JPG terus dalam chat. Commit kod sahaja.

## Peraturan
- **Angka mesti dari app/Taufik**: harga GAP + tarikh, harga produk, upah, pos. Jika app kata "Labour Fee Included", set `upahTermasuk:true` (harga emas = harga − upah). Pengeposan RM10 ikut rujukan — SAHKAN dengan Taufik.
- Potret Taufik tidak digunakan dalam gaya ni (rujukan tiada). Handle `@taufik.pg` di bawah setiap slaid.
- Font tajuk Playfair Display 700/800/900 + 400i/700i, badan Source Serif 4 500–800 (dalam `assets/fonts/`; guna satu berat setiap fail).
- Teks BM Malaysia; ayat ikut rujukan (boleh disesuaikan topik). Teks rekaan senaraikan dalam laporan.
