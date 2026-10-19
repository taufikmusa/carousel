#!/bin/sh
# Guna: sh skills/pgjewel/scripts/new_carousel.sh <nama-projek> [pose]   (potret outline putih dari assets/taufik/, default thumbs-up)
# Letak gambar produk di <projek>/img/produk.jpg (potong rapat produk daripada app/pgjewel.my).
set -e
SK=$(cd "$(dirname "$0")/.." && pwd); REPO=$(cd "$SK/../.." && pwd); P="$REPO/$1"; POSE="${2:-thumbs-up}"
mkdir -p "$P/img"; cp -r "$SK/assets/template/." "$P/"; printf 'out/\nout-*/\n' > "$P/.gitignore"
sh "$REPO/assets/sticker.sh" "$REPO/assets/taufik/taufik-$POSE.png" "$P/img/$POSE.png" 16
echo "siap: $P  (salin gambar produk -> $P/img/produk.jpg, edit slides.js)"
