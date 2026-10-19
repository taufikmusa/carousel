---
name: pgjewel
description: 'Carousel IG/Facebook 1080x1080 untuk PRODUK PG JEWEL (cincin, bangle, rantai, loket) — gaya foto-latar premium: slaid gelap beludru maroon dengan produk emas dipotong besar + bokeh, slaid cerah berlatar foto produk dikaburkan, tajuk Inter 900 putih/emas, bar atas "01/07 —— LABEL", kad kaca, tag harga emas, kad resit, nombor emas bulat, slaid CTA potret Taufik + PG Code + WhatsApp. Guna bila Taufik sebut "pgjewel", atau beri copywriting kisah/simulasi tebus gram GAP jadi barang kemas PG Jewel + gambar produk (tangkapan skrin pgjewel.my/app). Kiraan jumlah dan gram automatik. Rujukan gaya: references/rujukan/gaya-pgjewel.jpg.'
---

# pgjewel — carousel produk PG Jewel (foto sebagai latar)

Rujukan: `references/rujukan/gaya-pgjewel.jpg` (7 slaid: hook gelap, dilema cerah, pilihan gelap, perincian krim, gram gelap, pengajaran, CTA).
Bina atas enjin carousel-ivory (tema `THEME`, highlight, kiraan) tetapi susunan/latar berbeza: **produk sebenar jadi latar**, bukan kertas kosong.

## Mula
```
sh skills/pgjewel/scripts/new_carousel.sh carousel-<topik> [pose]      # pose potret, default thumbs-up
cp <gambar-produk>.jpg carousel-<topik>/img/produk.jpg                  # potong rapat produk (convert in.png -crop WxH+X+Y out.jpg)
cd carousel-<topik> && node render.js                                   # out/01..07.jpg
```
Edit objek `D` dalam `slides.js` (tarikh, gap, produk, harga, pos, bundar) + teks slaid ikut copywriting. Hantar JPG dalam chat. Commit kod sahaja.

## Struktur 7 slaid (ikut copywriting kisah)
1 hook gelap (tajuk 4 baris putih/emas + produk besar) · 2 dilema cerah (kad ✕/✓ + tag harga) · 3 pilihan gelap (produk + tag) · 4 perincian cerah (kad resit + bar jumlah + harga GAP bertarikh) · 5 gram gelap (nombor emas besar ÷) · 6 tiga pengajaran cerah (nombor emas) · 7 CTA gelap (soalan komen + potret + PG Code/WhatsApp/laman).

## API tambahan (engine.js)
`window.BG(i,x0,dark)` tetapkan latar setiap slaid · `makeCut(im)` cutout produk emas daripada latar cerah (kunci warna) · `putCut(cut,cx,cy,w,{rot})` · `bgVelvet` · `bgPhoto(x0,im,{zoom,fx,a})` · `topbar(i,N,label,dark)` · `numCircle` · gaya headline `sw` putih, `sg` emas terang, `si` hitam, `sr` merah tema · `card(...,{fill,edge})` kaca. Selebihnya sama dengan carousel-ivory.

## Peraturan
- Salin dari produk sebenar: nama, ketulenan (916/999), harga, upah — jangan campur 916 dengan 999 atau tambah istilah yang tiada pada produk. Bagi balik copywriting yang telah dibetulkan supaya Taufik boleh copy-paste.
- Watak GENERIK (tiada nama/kisah palsu). "anda" bukan "korang". Highlight 2–4 frasa `*...*`.
- Harga GAP + tarikh ikut yang Taufik beri. Pembundaran gram: `D.bundar` ('round' ikut copywriting Taufik, atau 'floor').
- Latar produk di gambar mesti cerah/krim supaya cutout bersih. Jika cutout kasar (produk bercelah halus), guna `fadePhoto`/`medallion` daripada carousel-ivory.
- Foto latar hanya dari gambar produk sebenar — jangan jana/tiru foto AI.
- Warna lain: `THEME` (maroon default; emerald navy electric earth soft luxury fresh).
