#!/bin/sh
# Guna: sh skills/carousel-ivory-red/scripts/new_carousel.sh <nama-projek> [pose]
# Sama seperti carousel-ivory tetapi tema dikunci MAROON (merah tua + emas).
set -e
SK=$(cd "$(dirname "$0")/.." && pwd); REPO=$(cd "$SK/../.." && pwd)
sh "$REPO/skills/carousel-ivory/scripts/new_carousel.sh" "$@"
sed -i "s/^var THEME = '[a-z]*';/var THEME = 'maroon';/" "$REPO/$1/slides.js"
echo "tema: maroon (merah)"
