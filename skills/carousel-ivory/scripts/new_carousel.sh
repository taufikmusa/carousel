#!/bin/sh
# Guna: sh skills/carousel-ivory/scripts/new_carousel.sh <nama-projek>
# Salin template ke <repo>/<nama-projek>/ (img/ kosong; letak gambar produk di situ).
set -e
SK=$(cd "$(dirname "$0")/.." && pwd); REPO=$(cd "$SK/../.." && pwd); P="$REPO/$1"
mkdir -p "$P/img"; cp -r "$SK/assets/template/." "$P/"; mv "$P/ring-contoh.png" "$P/img/produk.png"; printf 'out/\n' > "$P/.gitignore"
echo "siap: $P  (tukar img/produk.png dengan gambar produk sendiri, kemudian edit slides.js)"
