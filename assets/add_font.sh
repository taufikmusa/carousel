#!/bin/sh
# Tambah font Google Fonts ke assets/fonts/ (fail TTF).
# Guna: sh assets/add_font.sh "Nama Font" [berat=400] [i]      cth: sh assets/add_font.sh "Bebas Neue"
#                                                              cth: sh assets/add_font.sh "DM Serif Display" 400 i   (italic)
# Hasil: assets/fonts/NamaFont-<berat>[i].ttf  (font variable: satu fail boleh pelbagai berat)
set -e
FAM="$1"; W="${2:-400}"; IT="$3"; [ -n "$FAM" ] || { echo "Guna: sh assets/add_font.sh \"Nama Font\" [berat] [i]"; exit 1; }
DIR=$(cd "$(dirname "$0")" && pwd)/fonts; Q=$(printf %s "$FAM" | sed 's/ /+/g')
if [ -n "$IT" ]; then SPEC="ital,wght@1,$W"; SUF="${W}i"; else SPEC="wght@$W"; SUF="$W"; fi
CSS=$(curl -fsS --max-time 30 -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120 Safari/537.36" "https://fonts.googleapis.com/css2?family=$Q:$SPEC") || { echo "Font '$FAM' tak jumpa / berat $W tak wujud"; exit 1; }
URL=$(printf %s "$CSS" | grep -o 'https://[^)]*' | head -1)
OUT="$DIR/$(printf %s "$FAM" | tr -d ' ')-$SUF.ttf"
curl -fsS --max-time 60 -o "$OUT" "$URL" && echo "siap: $OUT ($(wc -c <"$OUT") bait)"
