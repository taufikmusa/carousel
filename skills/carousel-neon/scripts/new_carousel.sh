#!/bin/sh
# Guna: sh skills/carousel-neon/scripts/new_carousel.sh <nama-projek> [pose]   (potret outline putih -> img/me.png, default thumbs-up)
set -e
SK=$(cd "$(dirname "$0")/.." && pwd); REPO=$(cd "$SK/../.." && pwd); P="$REPO/$1"; POSE="${2:-thumbs-up}"
mkdir -p "$P/img"; cp -r "$SK/assets/template/." "$P/"; printf 'out/\n' > "$P/.gitignore"
sh "$REPO/assets/sticker.sh" "$REPO/assets/taufik/taufik-$POSE.png" "$P/img/me.png" 16
echo "siap: $P"
