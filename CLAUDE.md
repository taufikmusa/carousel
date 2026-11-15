# randomvideo — nota untuk Claude

Setiap folder = satu video motion graphics (canvas `main.js` + `music.py` + `render.js`).
Render: `python3 music.py && node render.js` dalam folder projek.

## Hantar hasil (WAJIB)
- **Gambar** (JPG/PNG, carousel, post IG): hantar terus dalam chat (SendUserFile). Tak perlu commit ke repo.
- **Jangan** hantar MP4 dalam chat (SendUserFile). Commit + push MP4, kemudian beri **link GitHub raw sahaja**:
  `https://github.com/taufikmusa/randomvideo-template/raw/<branch>/<projek>/<projek>.mp4`
  (iPhone: buka link → video main → Share → Save Video). Sertakan durasi + saiz.
- Bila Taufik kata "dah download" / "ok" / "dah simpan": terus padam MP4 projek tu (`git rm`),
  buang fail sementara (frames/, src.mp4, stills/, music.wav), commit "Cleanup <projek> (Taufik dah download)", push. Tak perlu tanya.
- Kod, font dan gambar projek kekal untuk revisi.

## Aset
- Pustaka gambar Taufik ada dalam `assets/` (baca `assets/README.md`). Guna semula, jangan minta upload lagi.
- Potret Taufik WAJIB outline putih: `sh assets/sticker.sh`.
- Gambar baru dari Taufik: tambah ke `assets/` + kemas kini README.

## Broll Taufik (Google Drive) — LOKASI TETAP
Taufik simpan broll di 2 folder Drive dan akan terus tambah fail ke SITU SAHAJA. Guna Google Drive connector (ToolSearch "select:mcp__Google_Drive__search_files,mcp__Google_Drive__download_file_content"), jangan minta upload semula.
- **Broll aku** (selfie Taufik + emas, 33 png): folder `1b1C0vXTEklIVvVcmJAUvHKiPaZIkcf2V` — https://drive.google.com/drive/folders/1b1C0vXTEklIVvVcmJAUvHKiPaZIkcf2V
- **Broll emas dan lain lain** (foto emas, stok gaya hidup/duit/watak Melayu, Tab-xx): folder `10LXgO55QhsSOThJeOCtTp79QyFMZf44n` — https://drive.google.com/drive/folders/10LXgO55QhsSOThJeOCtTp79QyFMZf44n
- Cara: `search_files` dengan `parentId = '<folder>'` (tambah `createdTime > '...'` untuk fail baharu sahaja), `download_file_content` ikut fileId; salin dari `tool-results/` ke `<projek>/img/`.
- Bila Taufik kata "dah update broll": semak fail baharu dalam folder (createdTime), kemas kini katalog dalam `assets/README.md` (bahagian broll-*), commit.
- Katalog nama + awalan ID sedia ada dalam `assets/README.md`. Pilih foto ikut tema; foto Melayu untuk topik Malaysia; selfie Taufik hanya bila sesuai (bukan setiap slaid).

## Skill carousel (dalam skills/)
- `carousel-thumbnail` = DEFAULT bila Taufik minta "carousel" tanpa sebut gaya DAN tanpa copywriting (latar gelap, Anton + blok berus, potret outline putih). NOTA: bila Taufik tampal COPYWRITING tanpa sebut gaya → guna carousel-palette (lihat bawah).
- `carousel-pastel` = sticker kartun KELUARGA pastel lembut: Baba (Taufik), Mami, Amani (kakak sulung), Aileen (adik). Guna foto emas sebenar bila sesuai.
- `carousel-red` = komik pop-art merah/kuning (burst, Bangers, belon) dengan kartun Baba + pilihan Mami/Amani/Aileen + foto emas sebenar (photoPanel). Kartun boleh di mana-mana slaid.
- `carousel-maroon` = promo impian: latar foto emas kabur, tajuk Poppins italic putih + pil maroon, kad tier angka emas, doodle kuning.
- `carousel-editorial` = gaya putih majalah, nombor oren gergasi, tulisan tangan (rujukan "9 Money Milestones").
- `carousel-palette` = **DEFAULT bila Taufik beri copywriting tanpa sebut gaya/warna** (palet default = Electric Studio biru + lime). Dia hanya sebut NAMA WARNA untuk tukar (Quiet Luxury, Fresh Signal, Cream & Dark Coffee, Plum & Rose, krim biru oren asal) → gaya sama, tukar `var PALETTE`; jadual dalam SKILL.md. Krim Swiss editorial: digit watercolour gergasi, tajuk Inter 900 2-warna, kotak seni + 4 swatch hex, CTA "SAVE IT FOR LATER" (rujukan "5 Color Palette", 7 slaid). Attach gambar + copywriting → terus buat 7 slaid.
- `carousel-ivory` = DEFAULT bila Taufik beri copywriting kisah/kiraan produk emas (+ gambar produk): gading + maroon (merah tua + emas) 1080x1080, 8 slaid (hook gelap → dilema → penyelesaian → simulasi → gram → 3 pengajaran → CTA + potret/PG Code/WhatsApp). Tema warna lain (`THEME`: emerald navy electric earth soft luxury fresh) HANYA bila diminta. Watak GENERIK, "anda" bukan "korang". Edit objek `D` dalam slides.js — kiraan automatik. 3:4 / 4:5 dalam references. Gambar produk siap potong: `assets/jewel/`.
- `carousel-ivory-red` = varian MAROON (merah tua + emas) bagi `carousel-ivory` (bukan `carousel-red` komik). `sh skills/carousel-ivory-red/scripts/new_carousel.sh carousel-<topik>`.
- `pgjewel` = carousel produk PG Jewel (cincin/gelang/bangle…) gaya KRIM berpusat "Kini withdraw GAP boleh" (italic emas + merah tebal, pil 1/8, produk besar, jadual kiraan, 3 langkah "Bagaimana GAP ditolak?", formula+nota, contoh pengiraan) + slaid 8 CTA potret satin merah ceri. `sh skills/pgjewel/scripts/new_carousel.sh carousel-<topik>`. Taufik panggil "skill pgjewel" untuk copywriting tebus GAP → barang kemas. Varian analisis/edukasi (graf emas, DCA): cover satin merah gelap tanpa muka + slaid krim, rujuk SKILL.md.
- `carousel-script` = carousel senarai "N tanda/sebab" 1080x1080 (1:1, latar foto kabur, maroon gelap): teks atas (bar 01/07, tajuk besar, perenggan highlight), foto sebenar bawah dengan fade, slaid gelap/cerah berselang, CTA potret. Taufik panggil "carousel script". `sh skills/carousel-script/scripts/new_carousel.sh carousel-<topik>`.
- `carousel-notes` = gaya Apple Notes: kad putih (tajuk berpenanda kuning cerah + 5 item bernombor) atas foto emas penuh, cover angka gergasi, CTA kad + potret (rujukan "25 hooks", 7 slaid 1:1). Taufik panggil "carousel notes". `sh skills/carousel-notes/scripts/new_carousel.sh carousel-<topik>`.
- `carousel-doodle` = papan hitam + doodle kuning 1080x1440 (3:4): tajuk putih + berus kuning, watak orang-lidi hoodie kuning, tangga/bendera, kad kotak tanda, gelembung (rujukan "7 Levels of Vibe Coders", 8 slaid). Taufik panggil "gaya doodle". `sh skills/carousel-doodle/scripts/new_carousel.sh carousel-<topik>`.
- `carousel-neon` = hitam + lime neon 1080x1440 (3:4): tajuk Unbounded putih + *lime*, kad gelap, ikon garisan profesional (tiada watak/maskot, tiada piggy bank), "01/08" + @taufik.pg di setiap slaid (Taufik pilih gaya A; BUKAN doodle kuning). Taufik panggil "gaya neon". `sh skills/carousel-neon/scripts/new_carousel.sh carousel-<topik>`.
- `carousel-gradient` = krim #FFFEC5 + coklat gelap #39241F (palet Taufik, tiada gradien) 1080x1080: tajuk Poppins 800 + pil coklat, kad krim + jubin ikon, carta ilustrasi, footer gelombang "i/N", teks MINIMAL (rujukan gaya analisis "MetaNext"). Taufik panggil "gaya gradient". `sh skills/carousel-gradient/scripts/new_carousel.sh carousel-<topik>`.
- Potret/selfie Taufik HANYA di slaid TERAKHIR (CTA). Cover & slaid isi tanpa potret (nampak macam iklan).
- Baca SKILL.md skill tu dahulu; mula dengan `sh skills/<skill>/scripts/new_carousel.sh carousel-<topik> <pose...>`.
