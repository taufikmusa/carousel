# Tiru Gaya Carousel Kegemaran Anda dengan Claude Code

Anda ada carousel Instagram yang anda suka gayanya? Lampirkan tangkapan skrin carousel itu, lampirkan gambar anda sendiri, tampal copywriting, taip satu arahan, dan Claude akan siapkan 7 slaid dalam gaya yang sama. Semuanya dari telefon, tanpa komputer.

Tutorial ini untuk anda yang belum ada Claude dan belum ada akaun GitHub. Kita mulakan dari kosong.

## Apa yang anda akan dapat

Anda lampirkan tiga perkara dalam sembang Claude, kemudian hantar satu arahan seperti ini:

> "Tiru gaya carousel rujukan ini. Guna gambar dan copywriting yang saya lampirkan. Siapkan 7 slaid."

Beberapa minit kemudian, 7 gambar siap (1080 x 1350, saiz sebenar Instagram) tersedia untuk di-download.

## Bagaimana ia berfungsi

Claude Code di telefon berjalan di awan (cloud), bukan di dalam telefon anda. Telefon hanya menjadi remote. Kerja berat dilakukan oleh komputer Claude di atas talian, dan pelayar (browser) untuk melukis slaid sudah tersedia di sana.

1. Anda lampirkan carousel rujukan, gambar anda dan copywriting dalam sembang
2. Anda hantar satu arahan lengkap
3. Claude menganalisis gaya rujukan (warna, fon, susunan), kemudian membina 7 slaid
4. Anda download hasilnya

> **Claude boleh nampak gambar secara terus.** Berbeza dengan video, tangkapan skrin carousel dibaca terus oleh Claude. Jadi peniruan gaya biasanya sangat hampir: susunan, warna, jenis huruf dan jarak boleh ditiru dengan baik. Gambar lukisan atau ilustrasi yang rumit dalam rujukan tidak boleh dijana semula, jadi Claude akan guna gambar anda sendiri di tempat itu.

## Apa yang perlu disediakan

- Telefon (iPhone atau Android) dengan internet
- Alamat email
- Langganan Claude berbayar (Pro atau Max). Claude Code tidak boleh digunakan dengan akaun percuma.
- Tiga jenis bahan (kita bincang di bawah)

## Persediaan sekali sahaja

Bahagian ini hanya perlu dibuat sekali. Selepas ini, setiap kali mahu buat carousel, anda terus ke bahagian **Hantar kepada Claude**.

### 1. Buat akaun GitHub

GitHub ibarat Google Drive untuk projek. Di sinilah Claude menyimpan carousel siap anda.

1. Buka browser telefon (Safari atau Chrome), pergi ke `github.com/signup`
2. Masukkan email, password, dan pilih username
3. Username akan jadi sebahagian daripada pautan anda, jadi pilih yang kemas. Contoh: `ahmad-carousel`
4. Selesaikan pengesahan (puzzle kecil) dan masukkan kod yang dihantar ke email anda
5. Jika ada soalan survey, pilih **Skip**
6. Pilih pelan **Free**. Memadai untuk tutorial ini.

> **Guna browser, bukan aplikasi GitHub.** Untuk tutorial ini, kita guna laman web github.com dalam browser. Aplikasi GitHub di telefon tidak sesuai untuk membuat repo.

**Anda berjaya jika** anda nampak halaman utama GitHub dengan ikon profil anda di penjuru atas.

### 2. Langgan Claude dan install aplikasi

1. Install aplikasi **Claude** daripada App Store (iPhone) atau Google Play (Android)
2. Buka aplikasi dan daftar akaun. Anda boleh guna email atau akaun Google/Apple.
3. Langgan pelan **Pro** (atau Max). Anda boleh buat melalui aplikasi, atau melalui `claude.ai` di browser.

**Anda berjaya jika** dalam aplikasi Claude, anda nampak menu atau tab **Code**. Jika tab itu tidak muncul, kemas kini aplikasi kepada versi terbaharu, dan pastikan langganan anda sudah aktif.

> **Nama menu boleh berubah.** Aplikasi dikemas kini dari semasa ke semasa, jadi nama atau kedudukan butang mungkin sedikit berbeza. Jika buntu, cari perkataan **Code**.

### 3. Buat repo

Repo ialah folder projek di GitHub. Kita buat satu repo khas untuk kerja carousel anda.

1. Dalam browser telefon, pergi ke `github.com/new`
2. Repository name: taip `carousel-saya`
3. Pilih **Private**, supaya hanya anda yang boleh melihat gambar anda
4. Tandakan **Add a README file**
5. Tekan **Create repository**

> **Jangan skip README.** Repo kosong akan menyukarkan Claude. Dengan README, repo anda sudah ada fail pertama dan Claude boleh terus bekerja.

**Anda berjaya jika** anda nampak halaman repo `carousel-saya` dengan fail `README.md`.

### 4. Sambung Claude ke GitHub

1. Buka aplikasi Claude, pergi ke tab **Code**
2. Tekan untuk menyambung ke GitHub (**Connect GitHub**)
3. Browser akan terbuka. Login ke GitHub jika diminta, dan tekan **Authorize**
4. Install **Claude GitHub App** apabila diminta. Pada bahagian repositori, pilih **Only select repositories**, kemudian pilih `carousel-saya`. Tekan **Install**.
5. Kembali ke aplikasi Claude dan pilih repo `carousel-saya` untuk memulakan sesi baharu

> **Kenapa pilih repo tertentu sahaja?** Lebih selamat. Claude hanya boleh melihat repo `carousel-saya`, bukan semua repo anda.

**Anda berjaya jika** anda nampak ruangan sembang untuk sesi baharu, dengan nama repo `carousel-saya` kelihatan.

## Sediakan tiga jenis bahan

Sebelum menghantar arahan, siapkan tiga jenis bahan ini dalam galeri telefon dan nota anda.

| Bahan | Fungsi | Tip |
|---|---|---|
| **1. Carousel rujukan** | Gaya yang anda mahu tiru | Tangkap skrin **setiap slaid mengikut susunan** (cover hingga penutup). Lebih lengkap, lebih tepat. Antara 5 hingga 7 gambar sudah memadai. |
| **2. Gambar anda** | Gambar yang mesti ada dalam carousel (produk, suasana, potret) | Pilih yang cerah dan jelas. Potret berlatar lutsinar (PNG) paling cantik. Beri nama fail yang mudah, contoh `produk-1.jpg`. |
| **3. Copywriting** | Teks untuk carousel | Tulis siap-siap: tajuk, poin 1 hingga 5, dan ayat penutup. Tampal terus dalam kotak mesej. |

> **Tangkapan skrin bersih.** Jika boleh, tutup pop-up dan butang suka/komen sebelum tangkap skrin. Itu tidak menjejaskan analisis, tetapi hasilnya lebih tepat jika rujukan bersih.

## Hantar kepada Claude

Inilah langkah utama. Dalam tab **Code**, dalam sesi repo `carousel-saya`:

1. Tekan butang lampir (ikon klip kertas atau **+**) di sebelah kotak mesej
2. Pilih semua tangkapan skrin rujukan **mengikut susunan**, kemudian gambar anda
3. Salin arahan di bawah, tukar bahagian dalam `[ ]`, dan tampal copywriting anda di hujung
4. Tekan hantar

### Arahan lengkap (salin semua)

```text
Saya lampirkan tiga jenis bahan:
1. CAROUSEL RUJUKAN: tangkapan skrin mengikut susunan slaid. Ini gaya yang saya mahu tiru.
2. GAMBAR SAYA: gambar yang mesti digunakan dalam carousel.
3. COPYWRITING: teks di hujung mesej ini.

Handle Instagram saya: [@USERNAME ANDA]

Tugas: bina carousel Instagram 7 slaid, saiz 1080x1350 setiap satu, dalam gaya yang sama seperti rujukan.

Ikut langkah ini:
1. Analisis carousel rujukan dahulu. Lihat setiap slaid dan catat dengan ringkas: warna latar dan tekstur, warna aksen, jenis dan berat fon (tajuk, perenggan, label kecil), saiz tajuk berbanding perenggan, jarak antara huruf, elemen yang berulang pada setiap slaid (nombor slaid, handle), cara gambar diletakkan (kotak, potongan, keluar tepi), hiasan, dan peranan setiap slaid (cover, isi, penutup).
2. Bahagikan copywriting kepada 7 slaid: 1 cover, 5 slaid isi, 1 slaid penutup. Jangan tambah fakta atau angka baharu. Boleh ringkaskan ayat. Tajuk pendek dan ayat tambahan yang kamu reka sendiri, senaraikan di akhir supaya saya boleh semak.
3. Bina setiap slaid menggunakan HTML dan CSS, kemudian render dengan Playwright (Chromium) kepada JPG 1080x1350. Guna fon yang sama atau paling hampir dengan rujukan. Jika fon tidak dapat dimuat turun, pilih ganti yang paling hampir dan beritahu saya.
4. Dalam teks perenggan setiap slaid, highlight 2 hingga 4 frasa penting (tebal dengan penanda warna aksen) supaya mata tidak bosan membaca.
5. Letak gambar saya pada slaid yang sesuai dengan potongan yang kemas. Potret saya, jika ada, hanya di slaid penutup. Letak handle dan nombor slaid seperti rujukan. Jangan ubah atau padam gambar asal saya.
6. Semak setiap slaid sendiri sebelum siap: teks terpotong, teks bertindih, atau terlalu rapat. Betulkan dahulu.
7. Simpan hasil akhir dalam folder "siap" dengan nama 01.jpg hingga 07.jpg.

Beritahu saya ringkasan analisis dan rancangan kamu dahulu, kemudian terus laksanakan tanpa menunggu jawapan saya. Jika ada elemen dalam rujukan yang tidak dapat ditiru dengan tepat (contohnya lukisan atau ilustrasi), beritahu saya apa yang kamu lakukan sebagai ganti.

COPYWRITING:
[TAMPAL COPYWRITING ANDA DI SINI]
```

## Apa yang berlaku selepas itu

1. Claude menerangkan apa yang dia nampak dalam carousel rujukan (warna, fon, susunan)
2. Claude membina dan merender 7 slaid di cloud
3. Jika Claude meminta kebenaran, baca dahulu dan pilih **Allow** atau **Yes** jika anda bersetuju
4. Claude menyimpan hasil dalam folder `siap`, dan menghantarnya ke GitHub

> **Peniruan gaya bersifat hampir, bukan salinan piksel demi piksel.** Susunan, warna, jenis huruf, jarak dan kedudukan elemen biasanya boleh ditiru dengan baik. Lukisan atau ilustrasi dalam rujukan tidak boleh dijana semula, jadi di tempat itu Claude akan guna gambar anda.

**Kalau butang lampir tidak menerima banyak gambar sekali gus**, lampirkan beberapa gambar dahulu, hantar mesej pendek seperti "ini rujukan bahagian 1", kemudian lampirkan baki dalam mesej seterusnya. Selepas semua dihantar, tampal arahan lengkap.

## Tambah baris ini jika perlu

Anda boleh tambah baris-baris ini di hujung arahan (sebelum copywriting):

- Jika mahu warna tertentu: "Guna warna aksen biru dan oren sebagai warna utama."
- Jika mahu bilangan slaid lain: "Buat 5 slaid sahaja: 1 cover, 3 isi, 1 penutup."
- Jika mahu gambar tertentu di slaid tertentu: "Letakkan `produk-1.jpg` pada slaid 2, dan potret saya pada slaid 7."
- Jika mahu tanpa label atau hiasan tertentu: "Jangan letak kotak warna atau kod hex di bawah gambar."

## Semak hasil dan minta ubah

Selepas Claude siap, anda boleh minta pembetulan dengan ayat biasa dalam sembang yang sama:

- "Slaid 3 tajuk terlalu besar, kecilkan sedikit."
- "Tukar gambar slaid 4 kepada `produk-2.jpg`."
- "Highlight terlalu banyak pada slaid 5, kurangkan kepada 2 frasa."
- "Guna warna tajuk yang lebih gelap pada slaid 2."
- "Cover kosong di bahagian atas, besarkan nombor."

Gambar asal anda tidak pernah diubah, jadi anda boleh mencuba berkali-kali tanpa risau.

## Ambil gambar yang siap

Claude menyimpan hasil kerja di GitHub, bukan terus dalam galeri telefon. Jadi kita download dari sana.

Claude biasanya menyimpan hasil dalam cabang (branch) berasingan, dengan nama bermula `claude/`.

1. Buka repo anda di browser: `github.com/<username anda>/carousel-saya`
2. Tekan menu cabang (biasanya tertulis `main`) dan pilih cabang yang bermula `claude/`
3. Buka folder `siap`
4. Tekan `01.jpg`. Anda boleh melihatnya terus di situ.
5. Tahan gambar dan pilih **Save to Photos** (iPhone), atau tekan ikon **Download** (Android). Ulang untuk semua 7 gambar.
6. Muat naik ke Instagram mengikut susunan 01 hingga 07

**Mahu hasil siap berada di cabang utama (`main`)?** Minta Claude: "Gabungkan cabang ini ke main."

## Naik taraf: simpan gaya sebagai skill

Kalau anda akan buat carousel dengan gaya yang sama berulang kali, jangan analisis rujukan setiap kali. Minta Claude simpan gaya itu sebagai **skill** dalam repo anda. Selepas itu, anda hanya perlu lampirkan gambar dan copywriting, dan Claude terus tahu gayanya.

Selepas carousel pertama siap dan anda berpuas hati, tampal arahan ini dalam sembang yang sama:

```text
Saya suka hasil carousel ini. Simpan gaya ini sebagai skill supaya lain kali saya hanya perlu lampirkan gambar dan copywriting.

Buat dalam repo ini:
1. Folder skills/carousel-gaya-saya/ dengan fail SKILL.md. Dalam SKILL.md tulis: huraian gaya (warna, fon, susunan, elemen yang berulang), peraturan yang kita putuskan dalam sembang ini (contoh: bilangan slaid, highlight 2 hingga 4 frasa, potret di slaid penutup sahaja), dan langkah kerja dari lampiran hingga hasil siap.
2. Simpan kod template yang kita guna (HTML/CSS dan skrip render) dalam folder yang sama, supaya boleh dipakai semula.
3. Simpan salinan tangkapan skrin rujukan dalam folder references/ di dalam skill itu.
4. Tambah satu baris dalam README.md repo ini: "Bila saya lampirkan gambar dan copywriting dan minta carousel, baca skills/carousel-gaya-saya/SKILL.md dahulu."

Jangan ubah atau padam folder "siap". Beritahu saya bila selesai.
```

Lain kali, buka sesi baharu dalam repo yang sama, lampirkan gambar, tampal copywriting, dan taip: "Buat carousel 7 slaid guna gaya saya."

## Masalah biasa

**Saya tidak nampak tab Code dalam aplikasi Claude.** Kemas kini aplikasi kepada versi terbaharu, dan pastikan langganan Pro atau Max sudah aktif. Akaun percuma tidak mempunyai Code.

**Repo `carousel-saya` tidak muncul bila saya mahu pilih.** Semasa memasang Claude GitHub App, anda mungkin tidak memilih repo itu. Buka `github.com/settings/installations`, tekan **Configure** pada Claude, dan tambah `carousel-saya` di bawah **Repository access**. Kemudian muat semula aplikasi.

**Lampiran gambar gagal atau tersekat.** Hantar sedikit demi sedikit (5 gambar setiap mesej). Pastikan sambungan internet stabil. Jika gambar terlalu besar, kecilkan atau tangkap skrin semula.

**Hasil carousel tidak seperti rujukan.** Pastikan tangkapan skrin dihantar mengikut susunan dan lengkap. Kemudian beritahu Claude secara spesifik apa yang berbeza, contohnya: "Rujukan guna huruf lebih tebal dan rapat", "Latar rujukan lebih krim, bukan putih". Semakin spesifik, semakin tepat pembetulan.

**Teks dalam slaid terpotong atau bertindih.** Minta: "Semak semula semua slaid, betulkan teks yang terpotong atau bertindih." Jika perenggan terlalu panjang, minta Claude ringkaskan ayat atau kecilkan saiz tulisan sedikit.

**Saya tidak jumpa gambar siap di GitHub.** Pastikan anda memilih cabang yang bermula `claude/`, bukan `main`. Folder `siap` hanya wujud dalam cabang itu, kecuali anda sudah minta Claude menggabungkannya ke `main`.

[Kembali ke atas](#tiru-gaya-carousel-kegemaran-anda-dengan-claude-code)
