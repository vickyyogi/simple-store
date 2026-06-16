const daftarProduk = JSON.parse(localStorage.getItem("products")) || [
  // --- KATEGORI ELEKTRONIK ---
  {
    id: "PRD-001", namaProduk: "Laptop Asus ROG Zephyrus", kategori: "Elektronik", harga: 25000000, stok: 12, isTersedia: true, varianWarna: ["Hitam", "Abu-abu"],
    penilaian: { skor: 4.8, jumlahUlasan: 125 }, spesifikasi: { berat: "2.1 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-002", namaProduk: "Smartphone Samsung Galaxy S23", kategori: "Elektronik", harga: 13500000, stok: 20, isTersedia: true, varianWarna: ["Putih", "Hitam", "Hijau"],
    penilaian: { skor: 4.9, jumlahUlasan: 340 }, spesifikasi: { berat: "168 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-003", namaProduk: "Mouse Wireless Logitech M330", kategori: "Elektronik", harga: 250000, stok: 50, isTersedia: true, varianWarna: ["Hitam", "Merah", "Biru"],
    penilaian: { skor: 4.7, jumlahUlasan: 890 }, spesifikasi: { berat: "91 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-004", namaProduk: "Keyboard Mechanical Keychron K2", kategori: "Elektronik", harga: 1200000, stok: 15, isTersedia: true, varianWarna: ["Abu-abu"],
    penilaian: { skor: 4.8, jumlahUlasan: 210 }, spesifikasi: { berat: "800 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-005", namaProduk: "Earphone TWS Sony WF-1000XM4", kategori: "Elektronik", harga: 3200000, stok: 8, isTersedia: true, varianWarna: ["Hitam", "Silver"],
    penilaian: { skor: 4.9, jumlahUlasan: 450 }, spesifikasi: { berat: "41 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-006", namaProduk: "Powerbank Anker 10000mAh", kategori: "Elektronik", harga: 450000, stok: 0, isTersedia: false, varianWarna: ["Hitam"],
    penilaian: { skor: 4.6, jumlahUlasan: 600 }, spesifikasi: { berat: "200 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-007", namaProduk: "Kabel Data Baseus Type C", kategori: "Elektronik", harga: 55000, stok: 200, isTersedia: true, varianWarna: ["Hitam", "Merah"],
    penilaian: { skor: 4.8, jumlahUlasan: 1200 }, spesifikasi: { berat: "50 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-008", namaProduk: "Adaptor Charger Apple 20W", kategori: "Elektronik", harga: 450000, stok: 35, isTersedia: true, varianWarna: ["Putih"],
    penilaian: { skor: 4.9, jumlahUlasan: 850 }, spesifikasi: { berat: "100 gram", kondisi: "Baru" }
  },

  // --- KATEGORI PAKAIAN & AKSESORIS ---
  {
    id: "PRD-009", namaProduk: "Sepatu Lari Nike Air Zoom", kategori: "Pakaian", harga: 1800000, stok: 5, isTersedia: true, varianWarna: ["Merah", "Biru"],
    penilaian: { skor: 4.5, jumlahUlasan: 89 }, spesifikasi: { berat: "400 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-010", namaProduk: "Kaos Polos Cotton Combed 30s", kategori: "Pakaian", harga: 45000, stok: 300, isTersedia: true, varianWarna: ["Hitam", "Putih", "Navy"],
    penilaian: { skor: 4.8, jumlahUlasan: 3200 }, spesifikasi: { berat: "150 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-011", namaProduk: "Jaket Denim Pria", kategori: "Pakaian", harga: 250000, stok: 40, isTersedia: true, varianWarna: ["Biru Muda", "Biru Tua"],
    penilaian: { skor: 4.6, jumlahUlasan: 150 }, spesifikasi: { berat: "600 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-012", namaProduk: "Celana Chino Slim Fit", kategori: "Pakaian", harga: 150000, stok: 60, isTersedia: true, varianWarna: ["Khaki", "Hitam", "Abu-abu"],
    penilaian: { skor: 4.5, jumlahUlasan: 430 }, spesifikasi: { berat: "350 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-013", namaProduk: "Topi Baseball Polos", kategori: "Pakaian", harga: 35000, stok: 100, isTersedia: true, varianWarna: ["Hitam", "Putih"],
    penilaian: { skor: 4.3, jumlahUlasan: 210 }, spesifikasi: { berat: "100 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-014", namaProduk: "Kacamata Anti Radiasi", kategori: "Aksesoris", harga: 120000, stok: 80, isTersedia: true, varianWarna: ["Hitam", "Gold"],
    penilaian: { skor: 4.7, jumlahUlasan: 540 }, spesifikasi: { berat: "150 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-015", namaProduk: "Jam Tangan Casio G-Shock", kategori: "Aksesoris", harga: 1500000, stok: 10, isTersedia: true, varianWarna: ["Hitam"],
    penilaian: { skor: 4.9, jumlahUlasan: 88 }, spesifikasi: { berat: "200 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-016", namaProduk: "Tas Ransel Polo Original", kategori: "Aksesoris", harga: 350000, stok: 25, isTersedia: true, varianWarna: ["Hitam", "Navy"],
    penilaian: { skor: 4.6, jumlahUlasan: 310 }, spesifikasi: { berat: "800 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-017", namaProduk: "Dompet Kulit Pria", kategori: "Aksesoris", harga: 180000, stok: 0, isTersedia: false, varianWarna: ["Coklat", "Hitam"],
    penilaian: { skor: 4.5, jumlahUlasan: 125 }, spesifikasi: { berat: "150 gram", kondisi: "Baru" }
  },

  // --- KATEGORI MAKANAN & MINUMAN ---
  {
    id: "PRD-018", namaProduk: "Biji Kopi Arabika Gayo Specialty", kategori: "Makanan & Minuman", harga: 85000, stok: 150, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.9, jumlahUlasan: 430 }, spesifikasi: { berat: "250 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-019", namaProduk: "Teh Hijau Matcha Bubuk", kategori: "Makanan & Minuman", harga: 65000, stok: 80, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.8, jumlahUlasan: 210 }, spesifikasi: { berat: "100 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-020", namaProduk: "Madu Hutan Asli Sumbawa", kategori: "Makanan & Minuman", harga: 125000, stok: 45, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.9, jumlahUlasan: 650 }, spesifikasi: { berat: "500 gram", kondisi: "Baru" }
  },

  // --- KATEGORI BUKU & ALAT TULIS ---
  {
    id: "PRD-021", namaProduk: "Buku Pemrograman JavaScript Modern", kategori: "Buku", harga: 150000, stok: 30, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.8, jumlahUlasan: 120 }, spesifikasi: { berat: "400 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-022", namaProduk: "Novel Bumi Manusia - Pramoedya", kategori: "Buku", harga: 95000, stok: 15, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.9, jumlahUlasan: 1500 }, spesifikasi: { berat: "350 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-023", namaProduk: "Buku Catatan Moleskine Ruled", kategori: "Alat Tulis", harga: 350000, stok: 0, isTersedia: false, varianWarna: ["Hitam", "Merah"],
    penilaian: { skor: 4.7, jumlahUlasan: 85 }, spesifikasi: { berat: "250 gram", kondisi: "Baru" }
  },

  // --- KATEGORI PERLENGKAPAN RUMAH & OLAHRAGA ---
  {
    id: "PRD-024", namaProduk: "Lampu Meja Belajar LED", kategori: "Perlengkapan Rumah", harga: 120000, stok: 40, isTersedia: true, varianWarna: ["Putih", "Hitam"],
    penilaian: { skor: 4.6, jumlahUlasan: 230 }, spesifikasi: { berat: "500 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-025", namaProduk: "Kursi Kantor Ergonomis", kategori: "Perlengkapan Rumah", harga: 850000, stok: 12, isTersedia: true, varianWarna: ["Hitam", "Abu-abu"],
    penilaian: { skor: 4.7, jumlahUlasan: 95 }, spesifikasi: { berat: "12 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-026", namaProduk: "Botol Minum Tumblr Stainless", kategori: "Perlengkapan Rumah", harga: 150000, stok: 75, isTersedia: true, varianWarna: ["Hitam", "Silver", "Putih"],
    penilaian: { skor: 4.8, jumlahUlasan: 410 }, spesifikasi: { berat: "300 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-027", namaProduk: "Blender Kaca Philips", kategori: "Perlengkapan Rumah", harga: 450000, stok: 20, isTersedia: true, varianWarna: ["Hijau", "Putih"],
    penilaian: { skor: 4.7, jumlahUlasan: 320 }, spesifikasi: { berat: "2 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-028", namaProduk: "Setrika Listrik Maspion", kategori: "Perlengkapan Rumah", harga: 110000, stok: 55, isTersedia: true, varianWarna: ["Abu-abu"],
    penilaian: { skor: 4.5, jumlahUlasan: 560 }, spesifikasi: { berat: "1 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-029", namaProduk: "Rak Sepatu Kayu Susun 4", kategori: "Perlengkapan Rumah", harga: 180000, stok: 18, isTersedia: true, varianWarna: ["Coklat Natural"],
    penilaian: { skor: 4.4, jumlahUlasan: 145 }, spesifikasi: { berat: "3 kg", kondisi: "Belum Dirakit" }
  },
  {
    id: "PRD-030", namaProduk: "Matras Yoga NBR 10mm", kategori: "Olahraga", harga: 120000, stok: 35, isTersedia: true, varianWarna: ["Ungu", "Pink", "Biru"],
    penilaian: { skor: 4.8, jumlahUlasan: 670 }, spesifikasi: { berat: "800 gram", kondisi: "Baru" }
  },
  //KATEGORI CAMPUR ---- PRODUK -----
  {
    id: "PRD-031", namaProduk: "Botol Minum Tumbler Stainless", kategori: "Peralatan Rumah", harga: 75000, stok: 55, isTersedia: true, varianWarna: ["Hitam", "Silver", "Putih"],
    penilaian: { skor: 4.8, jumlahUlasan: 610 }, spesifikasi: { berat: "250 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-032", namaProduk: "Lampu Meja Belajar LED", kategori: "Elektronik", harga: 125000, stok: 20, isTersedia: true, varianWarna: ["Putih"],
    penilaian: { skor: 4.7, jumlahUlasan: 280 }, spesifikasi: { berat: "300 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-033", namaProduk: "Rak Buku Kayu Susun 3", kategori: "Perabotan", harga: 185000, stok: 15, isTersedia: true, varianWarna: ["Coklat Kayu"],
    penilaian: { skor: 4.5, jumlahUlasan: 145 }, spesifikasi: { berat: "4500 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-034", namaProduk: "Speaker Bluetooth Mini Portable", kategori: "Elektronik", harga: 150000, stok: 35, isTersedia: true, varianWarna: ["Hitam", "Merah"],
    penilaian: { skor: 4.6, jumlahUlasan: 420 }, spesifikasi: { berat: "200 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-035", namaProduk: "Powerbank Fast Charging 10000mAh", kategori: "Aksesoris Handphone", harga: 199000, stok: 28, isTersedia: true, varianWarna: ["Hitam", "Putih"],
    penilaian: { skor: 4.8, jumlahUlasan: 850 }, spesifikasi: { berat: "250 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-036", namaProduk: "Kabel Data Type-C Braided", kategori: "Aksesoris Handphone", harga: 45000, stok: 120, isTersedia: true, varianWarna: ["Hitam", "Merah"],
    penilaian: { skor: 4.9, jumlahUlasan: 1100 }, spesifikasi: { berat: "50 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-037", namaProduk: "Charger Adaptor 20W PD", kategori: "Aksesoris Handphone", harga: 135000, stok: 40, isTersedia: true, varianWarna: ["Putih"],
    penilaian: { skor: 4.8, jumlahUlasan: 630 }, spesifikasi: { berat: "80 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-038", namaProduk: "Earphone TWS Low Latency", kategori: "Elektronik", harga: 225000, stok: 18, isTersedia: true, varianWarna: ["Hitam", "Putih"],
    penilaian: { skor: 4.7, jumlahUlasan: 390 }, spesifikasi: { berat: "100 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-039", namaProduk: "Smartwatch Fitness Tracker", kategori: "Elektronik", harga: 350000, stok: 12, isTersedia: true, varianWarna: ["Hitam", "Pink"],
    penilaian: { skor: 4.5, jumlahUlasan: 215 }, spesifikasi: { berat: "120 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-040", namaProduk: "Holder HP Meja Lipat", kategori: "Aksesoris Handphone", harga: 25000, stok: 80, isTersedia: true, varianWarna: ["Hitam", "Putih", "Hijau"],
    penilaian: { skor: 4.8, jumlahUlasan: 920 }, spesifikasi: { berat: "150 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-041", namaProduk: "Buku Panduan Database SQL & NoSQL", kategori: "Buku", harga: 115000, stok: 10, isTersedia: true, varianWarna: ["Biru"],
    penilaian: { skor: 4.8, jumlahUlasan: 76 }, spesifikasi: { berat: "350 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-042", namaProduk: "Flashdisk USB 3.0 64GB", kategori: "Aksesoris Komputer", harga: 85000, stok: 50, isTersedia: true, varianWarna: ["Silver"],
    penilaian: { skor: 4.9, jumlahUlasan: 430 }, spesifikasi: { berat: "20 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-043", namaProduk: "Jaket Windbreaker Anti Air", kategori: "Pakaian", harga: 175000, stok: 22, isTersedia: true, varianWarna: ["Hitam", "Navy", "Hijau Army"],
    penilaian: { skor: 4.6, jumlahUlasan: 180 }, spesifikasi: { berat: "300 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-044", namaProduk: "Sarung Tangan Motor Touchscreen", kategori: "Aksesoris Motor", harga: 45000, stok: 60, isTersedia: true, varianWarna: ["Hitam"],
    penilaian: { skor: 4.7, jumlahUlasan: 320 }, spesifikasi: { berat: "80 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-045", namaProduk: "Jas Hujan Ponco Kelelawar", kategori: "Aksesoris Motor", harga: 95000, stok: 0, isTersedia: false, varianWarna: ["Biru", "Hitam"],
    penilaian: { skor: 4.8, jumlahUlasan: 510 }, spesifikasi: { berat: "700 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-046", namaProduk: "Kipas Angin Portable USB", kategori: "Elektronik", harga: 65000, stok: 45, isTersedia: true, varianWarna: ["Putih", "Pink", "Biru"],
    penilaian: { skor: 4.5, jumlahUlasan: 260 }, spesifikasi: { berat: "200 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-047", namaProduk: "Humidifier Diffuser Aromaterapi", kategori: "Peralatan Rumah", harga: 110000, stok: 30, isTersedia: true, varianWarna: ["Kayu Terang", "Kayu Gelap"],
    penilaian: { skor: 4.7, jumlahUlasan: 480 }, spesifikasi: { berat: "350 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-048", namaProduk: "Essential Oil Peppermint 10ml", kategori: "Kesehatan", harga: 45000, stok: 25, isTersedia: true, varianWarna: ["Kuning Bening"],
    penilaian: { skor: 4.8, jumlahUlasan: 310 }, spesifikasi: { berat: "50 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-049", namaProduk: "Cangkir Kopi Keramik Estetik", kategori: "Peralatan Dapur", harga: 55000, stok: 16, isTersedia: true, varianWarna: ["Putih Tulang", "Hitam Doff"],
    penilaian: { skor: 4.9, jumlahUlasan: 145 }, spesifikasi: { berat: "250 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-050", namaProduk: "Buku Catatan A5 Dotted Notebook", kategori: "Alat Tulis", harga: 40000, stok: 75, isTersedia: true, varianWarna: ["Hitam", "Coklat Kraft"],
    penilaian: { skor: 4.8, jumlahUlasan: 580 }, spesifikasi: { berat: "200 gram", kondisi: "Baru" }
  },
  // --- KATEGORI OTOMOTIF ---
  {
    id: "PRD-051", namaProduk: "Helm Bogo Retro Kaca Datar", kategori: "Otomotif", harga: 150000, stok: 45, isTersedia: true, varianWarna: ["Hitam Doff", "Kuning", "Cream"],
    penilaian: { skor: 4.7, jumlahUlasan: 1250 }, spesifikasi: { berat: "1.2 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-052", namaProduk: "Oli Mesin Motul 3100 Gold 1L", kategori: "Otomotif", harga: 65000, stok: 120, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.9, jumlahUlasan: 3400 }, spesifikasi: { berat: "1 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-053", namaProduk: "Sarung Tangan Motor Touchscreen", kategori: "Otomotif", harga: 45000, stok: 80, isTersedia: true, varianWarna: ["Hitam", "Abu-abu"],
    penilaian: { skor: 4.5, jumlahUlasan: 670 }, spesifikasi: { berat: "150 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-054", namaProduk: "Kanebo Serat Microfiber Besar", kategori: "Otomotif", harga: 25000, stok: 200, isTersedia: true, varianWarna: ["Kuning", "Biru"],
    penilaian: { skor: 4.8, jumlahUlasan: 890 }, spesifikasi: { berat: "100 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-055", namaProduk: "Jas Hujan Setelan Axio Europe", kategori: "Otomotif", harga: 220000, stok: 30, isTersedia: true, varianWarna: ["Hitam", "Navy", "Maroon"],
    penilaian: { skor: 4.7, jumlahUlasan: 1100 }, spesifikasi: { berat: "1.5 kg", kondisi: "Baru" }
  },

  // --- KATEGORI KECANTIKAN & PERAWATAN ---
  {
    id: "PRD-056", namaProduk: "Sunscreen Wardah UV Shield SPF 50", kategori: "Kecantikan", harga: 55000, stok: 150, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.8, jumlahUlasan: 4500 }, spesifikasi: { berat: "50 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-057", namaProduk: "Serum Somethinc 5% Niacinamide", kategori: "Kecantikan", harga: 115000, stok: 0, isTersedia: false, varianWarna: [],
    penilaian: { skor: 4.9, jumlahUlasan: 8900 }, spesifikasi: { berat: "70 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-058", namaProduk: "Sabun Cuci Muka Cetaphil Gentle 250ml", kategori: "Kecantikan", harga: 150000, stok: 85, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.8, jumlahUlasan: 5600 }, spesifikasi: { berat: "300 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-059", namaProduk: "Lip Matte Make Over Powerstay", kategori: "Kecantikan", harga: 95000, stok: 60, isTersedia: true, varianWarna: ["Skye", "B01", "B04"],
    penilaian: { skor: 4.7, jumlahUlasan: 3200 }, spesifikasi: { berat: "40 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-060", namaProduk: "Parfum HMNS Orgasm 100ml", kategori: "Kecantikan", harga: 320000, stok: 15, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.9, jumlahUlasan: 1500 }, spesifikasi: { berat: "250 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-061", namaProduk: "Deodorant Roll On Nivea Extra Whitening", kategori: "Perawatan", harga: 22000, stok: 140, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.8, jumlahUlasan: 2100 }, spesifikasi: { berat: "80 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-062", namaProduk: "Shampo Pantene Anti Ketombe 300ml", kategori: "Perawatan", harga: 35000, stok: 200, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.7, jumlahUlasan: 1800 }, spesifikasi: { berat: "350 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-063", namaProduk: "Body Lotion Vaseline Healthy White", kategori: "Perawatan", harga: 48000, stok: 90, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.8, jumlahUlasan: 4100 }, spesifikasi: { berat: "450 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-064", namaProduk: "Masker Wajah Skintific Mugwort", kategori: "Kecantikan", harga: 85000, stok: 110, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.9, jumlahUlasan: 7200 }, spesifikasi: { berat: "100 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-065", namaProduk: "Catokan Rambut Philips Essential Care", kategori: "Perawatan", harga: 350000, stok: 25, isTersedia: true, varianWarna: ["Hitam"],
    penilaian: { skor: 4.6, jumlahUlasan: 850 }, spesifikasi: { berat: "600 gram", kondisi: "Baru" }
  },

  // --- KATEGORI ELEKTRONIK & GADGET TAMBAHAN ---
  {
    id: "PRD-066", namaProduk: "Smart TV Xiaomi Mi TV 4 43 Inch", kategori: "Elektronik", harga: 3500000, stok: 10, isTersedia: true, varianWarna: ["Hitam"],
    penilaian: { skor: 4.8, jumlahUlasan: 1450 }, spesifikasi: { berat: "8 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-067", namaProduk: "Kipas Angin Berdiri Miyako", kategori: "Elektronik", harga: 180000, stok: 45, isTersedia: true, varianWarna: ["Hitam", "Putih"],
    penilaian: { skor: 4.7, jumlahUlasan: 2300 }, spesifikasi: { berat: "3.5 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-068", namaProduk: "AC Daikin Standard 1/2 PK Thailand", kategori: "Elektronik", harga: 4200000, stok: 8, isTersedia: true, varianWarna: ["Putih"],
    penilaian: { skor: 4.9, jumlahUlasan: 890 }, spesifikasi: { berat: "25 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-069", namaProduk: "Kulkas Sharp 2 Pintu Plasmacluster", kategori: "Elektronik", harga: 3800000, stok: 5, isTersedia: true, varianWarna: ["Silver", "Hitam"],
    penilaian: { skor: 4.8, jumlahUlasan: 520 }, spesifikasi: { berat: "40 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-070", namaProduk: "Mesin Cuci LG Front Load 8kg", kategori: "Elektronik", harga: 5500000, stok: 0, isTersedia: false, varianWarna: ["Putih"],
    penilaian: { skor: 4.9, jumlahUlasan: 310 }, spesifikasi: { berat: "60 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-071", namaProduk: "Console Nintendo Switch OLED", kategori: "Elektronik", harga: 4800000, stok: 12, isTersedia: true, varianWarna: ["Neon", "White"],
    penilaian: { skor: 4.9, jumlahUlasan: 1800 }, spesifikasi: { berat: "1.5 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-072", namaProduk: "Controller PS5 DualSense", kategori: "Elektronik", harga: 1200000, stok: 20, isTersedia: true, varianWarna: ["White", "Midnight Black", "Cosmic Red"],
    penilaian: { skor: 4.8, jumlahUlasan: 2100 }, spesifikasi: { berat: "400 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-073", namaProduk: "Webcam Logitech C920 Pro HD", kategori: "Elektronik", harga: 1100000, stok: 15, isTersedia: true, varianWarna: ["Hitam"],
    penilaian: { skor: 4.8, jumlahUlasan: 4300 }, spesifikasi: { berat: "250 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-074", namaProduk: "Microphone Condenser Fifine K669B", kategori: "Elektronik", harga: 650000, stok: 35, isTersedia: true, varianWarna: ["Hitam", "Rose Gold"],
    penilaian: { skor: 4.7, jumlahUlasan: 1200 }, spesifikasi: { berat: "600 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-075", namaProduk: "Ring Light Vlogger 26cm + Tripod", kategori: "Elektronik", harga: 85000, stok: 80, isTersedia: true, varianWarna: ["Hitam"],
    penilaian: { skor: 4.5, jumlahUlasan: 3400 }, spesifikasi: { berat: "1 kg", kondisi: "Baru" }
  },

  // --- KATEGORI ALAT TULIS & KANTOR ---
  {
    id: "PRD-076", namaProduk: "Kertas HVS A4 70gsm Sinar Dunia", kategori: "Alat Tulis", harga: 55000, stok: 300, isTersedia: true, varianWarna: ["Putih"],
    penilaian: { skor: 4.9, jumlahUlasan: 5600 }, spesifikasi: { berat: "2.5 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-077", namaProduk: "Pulpen Kenko Gel Pen 0.5mm (1 Pack)", kategori: "Alat Tulis", harga: 35000, stok: 150, isTersedia: true, varianWarna: ["Hitam", "Biru", "Merah"],
    penilaian: { skor: 4.8, jumlahUlasan: 2100 }, spesifikasi: { berat: "200 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-078", namaProduk: "Spidol Papan Tulis Snowman Board Marker", kategori: "Alat Tulis", harga: 8500, stok: 500, isTersedia: true, varianWarna: ["Hitam", "Biru", "Merah"],
    penilaian: { skor: 4.9, jumlahUlasan: 3200 }, spesifikasi: { berat: "50 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-079", namaProduk: "Stapler Joyko HD-10 Sedang", kategori: "Alat Tulis", harga: 15000, stok: 120, isTersedia: true, varianWarna: ["Biru", "Pink", "Hijau"],
    penilaian: { skor: 4.7, jumlahUlasan: 850 }, spesifikasi: { berat: "150 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-080", namaProduk: "Papan Tulis Whiteboard Magnetik 60x90", kategori: "Alat Tulis", harga: 120000, stok: 20, isTersedia: true, varianWarna: ["Putih"],
    penilaian: { skor: 4.6, jumlahUlasan: 430 }, spesifikasi: { berat: "3 kg", kondisi: "Baru" }
  },

  // --- KATEGORI PAKAIAN & TAS TAMBAHAN ---
  {
    id: "PRD-081", namaProduk: "Kemeja Flanel Pria Lengan Panjang Kotak", kategori: "Pakaian", harga: 135000, stok: 60, isTersedia: true, varianWarna: ["Merah Hitam", "Biru Hitam", "Abu Hitam"],
    penilaian: { skor: 4.6, jumlahUlasan: 1800 }, spesifikasi: { berat: "300 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-082", namaProduk: "Celana Kulot Scuba Highwaist Wanita", kategori: "Pakaian", harga: 85000, stok: 110, isTersedia: true, varianWarna: ["Hitam", "Putih", "Mocca"],
    penilaian: { skor: 4.7, jumlahUlasan: 2500 }, spesifikasi: { berat: "350 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-083", namaProduk: "Hijab Bella Square Poly Cotton", kategori: "Pakaian", harga: 25000, stok: 400, isTersedia: true, varianWarna: ["Hitam", "Navy", "Dusty Pink", "Mocca"],
    penilaian: { skor: 4.9, jumlahUlasan: 8900 }, spesifikasi: { berat: "100 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-084", namaProduk: "Kaos Kaki Motif Lucu Semata Kaki (Set 3)", kategori: "Pakaian", harga: 35000, stok: 80, isTersedia: true, varianWarna: ["Mix Warna"],
    penilaian: { skor: 4.8, jumlahUlasan: 1200 }, spesifikasi: { berat: "150 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-085", namaProduk: "Rok Plisket Premium Import", kategori: "Pakaian", harga: 95000, stok: 45, isTersedia: true, varianWarna: ["Hitam", "Maroon", "Army"],
    penilaian: { skor: 4.7, jumlahUlasan: 3100 }, spesifikasi: { berat: "300 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-086", namaProduk: "Tas Selempang Kanvas Unisex", kategori: "Aksesoris", harga: 75000, stok: 65, isTersedia: true, varianWarna: ["Hitam", "Cream", "Hijau Army"],
    penilaian: { skor: 4.6, jumlahUlasan: 1500 }, spesifikasi: { berat: "250 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-087", namaProduk: "Tote Bag Canvas Resleting Aesthetic", kategori: "Aksesoris", harga: 45000, stok: 150, isTersedia: true, varianWarna: ["Putih Tulang", "Hitam"],
    penilaian: { skor: 4.8, jumlahUlasan: 4200 }, spesifikasi: { berat: "200 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-088", namaProduk: "Koper Hardcase Polo Fiber 20 Inch Kabin", kategori: "Aksesoris", harga: 450000, stok: 0, isTersedia: false, varianWarna: ["Silver", "Rose Gold", "Hitam"],
    penilaian: { skor: 4.7, jumlahUlasan: 890 }, spesifikasi: { berat: "2.5 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-089", namaProduk: "Sabuk Gesper Kulit Asli Pria", kategori: "Aksesoris", harga: 150000, stok: 35, isTersedia: true, varianWarna: ["Hitam", "Coklat Tua"],
    penilaian: { skor: 4.8, jumlahUlasan: 670 }, spesifikasi: { berat: "250 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-090", namaProduk: "Jam Tangan Wanita Analog Minimalis", kategori: "Aksesoris", harga: 250000, stok: 20, isTersedia: true, varianWarna: ["Rose Gold", "Silver"],
    penilaian: { skor: 4.5, jumlahUlasan: 340 }, spesifikasi: { berat: "150 gram", kondisi: "Baru" }
  },

  // --- KATEGORI OLAHRAGA & OUTDOOR ---
  {
    id: "PRD-091", namaProduk: "Tenda Camping Dome Double Layer 4 Orang", kategori: "Outdoor", harga: 450000, stok: 15, isTersedia: true, varianWarna: ["Biru", "Orange"],
    penilaian: { skor: 4.6, jumlahUlasan: 450 }, spesifikasi: { berat: "2.5 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-092", namaProduk: "Sleeping Bag Eiger Polar Tahan Dingin", kategori: "Outdoor", harga: 350000, stok: 25, isTersedia: true, varianWarna: ["Hitam", "Navy"],
    penilaian: { skor: 4.9, jumlahUlasan: 1200 }, spesifikasi: { berat: "900 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-093", namaProduk: "Dumbbell Barbel Neoprene 5kg (Sepasang)", kategori: "Olahraga", harga: 250000, stok: 10, isTersedia: true, varianWarna: ["Biru", "Merah", "Hitam"],
    penilaian: { skor: 4.7, jumlahUlasan: 890 }, spesifikasi: { berat: "10 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-094", namaProduk: "Raket Badminton Yonex Astrox", kategori: "Olahraga", harga: 650000, stok: 18, isTersedia: true, varianWarna: ["Merah Hitam", "Kuning Hitam"],
    penilaian: { skor: 4.8, jumlahUlasan: 1500 }, spesifikasi: { berat: "400 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-095", namaProduk: "Bola Basket Spalding NBA Original", kategori: "Olahraga", harga: 450000, stok: 12, isTersedia: true, varianWarna: ["Orange Coklat"],
    penilaian: { skor: 4.9, jumlahUlasan: 670 }, spesifikasi: { berat: "650 gram", kondisi: "Baru" }
  },

  // --- KATEGORI MAKANAN & MINUMAN TAMBAHAN ---
  {
    id: "PRD-096", namaProduk: "Mie Instan Indomie Goreng (1 Dus isi 40)", kategori: "Makanan & Minuman", harga: 115000, stok: 150, isTersedia: true, varianWarna: [],
    penilaian: { skor: 5.0, jumlahUlasan: 12500 }, spesifikasi: { berat: "3.5 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-097", namaProduk: "Susu UHT Ultra Milk Coklat 1000ml", kategori: "Makanan & Minuman", harga: 18000, stok: 200, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.9, jumlahUlasan: 8400 }, spesifikasi: { berat: "1 kg", kondisi: "Baru" }
  },
  {
    id: "PRD-098", namaProduk: "Selai Kacang Skippy Chunky 500g", kategori: "Makanan & Minuman", harga: 55000, stok: 45, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.8, jumlahUlasan: 2100 }, spesifikasi: { berat: "600 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-099", namaProduk: "Keripik Singkong Kusuka Balado 180g", kategori: "Makanan & Minuman", harga: 15000, stok: 100, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.7, jumlahUlasan: 1500 }, spesifikasi: { berat: "200 gram", kondisi: "Baru" }
  },
  {
    id: "PRD-100", namaProduk: "Minyak Goreng Bimoli Pouch 2 Liter", kategori: "Makanan & Minuman", harga: 38000, stok: 300, isTersedia: true, varianWarna: [],
    penilaian: { skor: 4.9, jumlahUlasan: 15600 }, spesifikasi: { berat: "2 kg", kondisi: "Baru" }
  }
];

//export default daftarProduk;
export default daftarProduk;