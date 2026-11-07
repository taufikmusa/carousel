---
name: carousel-doodle
description: 'Carousel IG 1080x1440 (3:4) gaya PAPAN HITAM + DOODLE KUNING: latar hitam berserat kapur, baris tajuk putih + tajuk berus kuning bertulisan hitam (Kalam), teks isi tulisan tangan putih dengan *kata kuning*, watak orang-lidi (kepala hitam bergaris putih, hoodie kuning) pelbagai pose, tangga + bendera, kad garisan putih dengan kotak tanda, gelembung ucapan, pil kuning, sinar kuning. Rujukan: "7 Levels of Vibe Coders" (references/rujukan). Guna bila Taufik sebut "gaya doodle", "gaya papan hitam", "macam 7 Levels of Vibe Coders", atau minta carousel tiru gaya tu. Potret Taufik outline putih di slaid terakhir.'
---

# carousel-doodle — papan hitam + doodle kuning (1080x1440)

Rujukan: `references/rujukan/7-levels-vibe-coders-*.jpg` (cover tangga + bendera, slaid "Level N" dengan kad ikon & pil "Skill level").
Panggilan Taufik: "gaya doodle".

## Mula
```
sh skills/carousel-doodle/scripts/new_carousel.sh carousel-<topik> [pose]   # potret outline putih -> img/me.png (default thumbs-up)
# edit slides.js, kemudian
cd carousel-<topik> && node render.js                                        # out/01..0N.jpg (1080x1440)
```
Hantar JPG dalam chat; commit kod sahaja.

## API (engine.js — jangan edit per carousel)
Teks: `title(s,cx,y,size)` putih · `brush([baris],cx,y,size)` berus kuning, teks hitam · `para(s,cx,y,maxW,size,{align,lh,font})` dengan `*kuning*` · `pill(s,cx,cy,size,{outline})` · `rays(cx,cy,r,rot)` · `squiggle` · `arrow` · `sparkle`.
Bentuk: `box(x,y,w,h,{stroke})` · `mark(cx,cy,s,'x'|'v')` kotak tanda · `numDot(cx,cy,r,n)` · `bubble(x,y,w,h,tailX,tailY)` · `phoneShape` · `stairs(x,y,w,h,n)` + `flag(x,y,label)` · `cloud`.
Watak: `figure(cx,base,skala,pose,flip)` pose = stand | think | cheer | phone | sad. Foto: `cover(IMG.k,x,y,w,h)` (kad foto bergaris), `cutoutBC(im,cx,by,h)`.

## Struktur 8 slaid (contoh dalam slides.js)
cover (tangga + bendera) → sumber/posting → senarai masalah (kotak ✕) → dua jenis orang (2 watak + gelembung) → senarai tangguhan → pesan guru (kad kuning + watak berubah) → langkah kecil (kad bernombor + tangga) → CTA (dua kad pilihan + potret + nama/handle).

## Peraturan
- Tajuk pendek: 1 baris putih + 1 baris berus (≤ ~16 aksara berus pada size 108; kecilkan size untuk teks panjang).
- Potret Taufik HANYA di slaid terakhir (CTA). Bahasa Melayu kolokial, "anda"/"kita" ikut copywriting.
- Fon: Kalam 700/400, Patrick Hand 400 (assets/fonts). Tiada foto emas dalam gaya ini — doodle sahaja; foto sebenar hanya jika diminta (`cover()`).
