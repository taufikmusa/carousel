#!/bin/sh
# Guna: sh skills/carousel-ivory/scripts/new_carousel.sh <nama-projek> [pose]     (pose potret dari assets/taufik/, default tunjuk-kamera)
# Salin template ke <repo>/<nama-projek>/, jana potret outline putih ke img/, letak gambar contoh img/produk.png.
set -e
SK=$(cd "$(dirname "$0")/.." && pwd); REPO=$(cd "$SK/../.." && pwd); P="$REPO/$1"; POSE="${2:-tunjuk-kamera}"
mkdir -p "$P/img"; cp -r "$SK/assets/template/." "$P/"; mv "$P/ring-contoh.png" "$P/img/produk.png"; printf 'out/\n' > "$P/.gitignore"
sh "$REPO/assets/sticker.sh" "$REPO/assets/taufik/taufik-$POSE.png" "$P/img/$POSE.png" 16
echo "siap: $P  (tukar img/produk.png dengan gambar produk sendiri, kemudian edit slides.js)"
