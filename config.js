const DATA_UNDANGAN = {
    // 1. DATA MEMPELAI
    pengantin: {
        namaPanggilanPria: "Romeo",
        namaLengkapPria: "Romeo Montague, S.Kom",
        anakKePria: "Putra Pertama Dari",
        ortuPria: "Bapak H. Ahmad Montague & Ibu Hj. Siti Fatimah",

        namaPanggilanWanita: "Juliet",
        namaLengkapWanita: "Juliet Capulet, S.E",
        anakKeWanita: "Putri Kedua Dari",
        ortuWanita: "Bapak Drs. Budi Capulet & Ibu Rina Marlina",

        foto: "fotopengantin.png" // Nama file foto di repo GitHub
    },

    // 2. WAKTU & HITUNG MUNDUR (COUNTDOWN)
    waktu: {
        // Format wajib: YYYY-MM-DDTHH:MM:SS (untuk hitung mundur otomatis)
        tanggalCountdown: "2026-12-20T08:00:00",
        hariTanggalTampil: "Sabtu, 20 Desember 2026",

        // Detail Akad
        tanggalAkad: "Sabtu, 20 Desember 2026",
        jamAkad: "08.00 - 10.00 WIB",
        tempatAkad: "Masjid Agung An-Nur",
        alamatAkad: "Jl. Hangtuah Ujung, Kota Pekanbaru, Riau",

        // Detail Resepsi
        tanggalResepsi: "Sabtu, 20 Desember 2026",
        jamResepsi: "11.00 - 15.00 WIB",
        tempatResepsi: "Gedung Ballroom Hotel Pangeran",
        alamatResepsi: "Jl. Jend. Sudirman No. 371, Pekanbaru, Riau"
    },

    // 3. LOKASI GOOGLE MAPS
    lokasi: {
        // Ambil link dari dalam src="..." pada menu Embed Map di Google Maps
        embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.664446431952!2d101.4452223!3d0.5037218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ac1a27cd9011%3A0x2035b186613e1592!2sPekanbaru%2C%20Riau!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
        // Link tombol buka aplikasi Google Maps
        directMapUrl: "https://maps.google.com/?q=Pekanbaru+Riau"
    },

    // 4. AMPLOP DIGITAL / REKENING
    rekening: {
        namaBank: "BANK TRANSFER", // Bisa diganti BCA, BRI, Mandiri, dll.
        nomorRekening: "1234566790",
        atasNama: "Calon Pengantin"
    },

    // 5. KONFIRMASI WHATSAPP (RSVP)
    whatsapp: {
        nomorTujuan: "6281234567890" // Wajib diawali 62 (tanpa tanda + atau spasi)
    }
};
