#!/bin/sh
# Guna: sh skills/carousel-notes/scripts/new_carousel.sh <nama-projek> [pose]   (potret outline putih -> img/me.png, default thumbs-up)
# Letak foto bawah slaid: img/p1.jpg .. p7.jpg (dari assets/emas/ atau gambar Taufik). Cover = p1.
set -e
SK=$(cd "$(dirname "$0")/.." && pwd); REPO=$(cd "$SK/../.." && pwd); P="$REPO/$1"; POSE="${2:-thumbs-up}"
mkdir -p "$P/img"; cp -r "$SK/assets/template/." "$P/"; printf 'out/\n' > "$P/.gitignore"
sh "$REPO/assets/sticker.sh" "$REPO/assets/taufik/taufik-$POSE.png" "$P/img/me.png" 16
echo "siap: $P  (salin foto: cp $REPO/assets/emas/<fail>.jpg $P/img/p1.jpg ... p6.jpg)"
