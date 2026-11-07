---
name: carousel-neon
description: 'Carousel IG 1080x1440 (3:4) gaya HITAM + LIME NEON: latar hitam bertitik halus + cahaya lime, tajuk Unbounded 800 putih dengan *kata lime*, isi Space Grotesk, tag pil kecil, kad gelap bergaris lime, kad lime penuh untuk petikan, watak kucing blur (lime licin; versi bergaris putus = diri masa depan) pelbagai pose, penomboran "01/08" kiri atas dan "@taufik.pg" kiri bawah di SETIAP slaid, "SWIPE →" di kanan bawah. Guna bila Taufik sebut "gaya neon", "gaya kucing blur", "hitam lime", atau minta carousel mindset/motivasi/refleksi dengan latar hitam yang BUKAN doodle kuning. Potret Taufik outline putih di slaid terakhir.'
---

# carousel-neon — hitam + lime, watak kucing blur (1080x1440)

Panggilan Taufik: "gaya neon" / "gaya kucing blur". Dipilih Taufik (pilihan A) selepas gaya doodle kuning (`carousel-doodle`) — sengaja berbeza: warna lime, font lebar Unbounded, watak hantu.

## Mula
```
sh skills/carousel-neon/scripts/new_carousel.sh carousel-<topik> [pose]   # potret outline putih -> img/me.png (default thumbs-up)
cd carousel-<topik> && node render.js                                      # out/01..0N.jpg
```
Hantar JPG dalam chat; commit kod sahaja. `N` dalam slides.js menentukan "01/0N" automatik.

## API (engine.js)
`title([baris],x,y,maxW,maxSize)` Unbounded, auto-muat, `*lime*` · `para(s,x,y,maxW,size,{font,color,align,lh})` · `tag(s,x,y,{fill})` pil garisan lime · `chip(s,cx,cy,size,{outline,col})` · `card(x,y,w,h,{accent,stroke,fill,lw})` · `num(cx,cy,r,n)` · `bubble(x,y,w,h,tailX,tailY,{stroke})` · `arrowR(x1,y,x2)` · `sparkle` · `timeline` · `cutoutBC`.
Watak: `ghost(cx,base,skala,pose,{outline,flip})` pose = idle | think | cheer | sad | wave. `outline:true` = bayang bergaris putus (diri 5 tahun lagi / orang yang tak berubah).

## Struktur 8 slaid (contoh)
cover (Bayang hari ini vs bayang masa depan) → petikan sumber (kad accent) → senarai kad "= SAMA" → dua jenis orang (gelembung sembang) → bar kemajuan kosong → kad lime petikan guru + transformasi watak → garis masa langkah kecil → CTA (dua kad pilihan + potret + nama).

## Peraturan
- Potret Taufik HANYA di slaid terakhir. Bahasa Melayu kolokial; frasa penting dalam `*lime*`.
- Tajuk pendek (2–3 baris); tag kecil di atas tajuk kecuali cover.
- Fon: Unbounded 800, Space Grotesk 500/700 (assets/fonts). Tiada foto emas — ilustrasi sahaja.
