# randomvideo-template

Template peribadi (private) untuk video motion graphics + carousel Taufik. Setiap folder = satu projek.

## Isi
- `skills/` — carousel-thumbnail (default), pastel, red, maroon, editorial, video-timeline
- `assets/` — potret Taufik, kartun keluarga, foto emas, screenshot app, fonts. Baca `assets/README.md`
- `platypus/` — contoh projek video (canvas `engine.js`/`scenes.js` + `music.py` + `render.js`)
- `carousel-sabar/` — contoh projek carousel (`index.html` + `render.js`)
- `CLAUDE.md` — peraturan kerja untuk Claude

## Guna
1. GitHub → **Use this template** → Create a new repository (kekalkan Private).
2. Carousel baru: `sh skills/<skill>/scripts/new_carousel.sh carousel-<topik> <pose...>`
3. Render video: `cd <projek> && python3 music.py && node render.js`
4. Contoh projek boleh dipadam bila dah faham strukturnya.

## Nota
- Kekalkan repo ni private. `assets/` ada gambar peribadi/keluarga.
- Hasil MP4 jangan commit ke template; commit dalam repo hasil sahaja.
