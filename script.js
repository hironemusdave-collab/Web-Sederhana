// Mendapatkan elemen tombol dari HTML menggunakan ID
const tombol = document.getElementById('tombolAksi');

// Mendefinisikan fungsi yang akan dijalankan saat tombol diklik
function ubahTeks() {
    // Mencari elemen <h2> pertama di halaman
    const judul = document.querySelector('h2');
    
    // Mengubah konten teks dari elemen tersebut
    judul.textContent = 'Aksi Berhasil!';
    
    // Memberikan peringatan (alert) kepada pengguna
    alert('Tombol telah diklik! Lihat perubahannya.');
}

// Menambahkan 'event listener' ke tombol. Ketika diklik, jalankan fungsi ubahTeks.
tombol.addEventListener('click', ubahTeks);

console.log('Script JavaScript berhasil dimuat.');
