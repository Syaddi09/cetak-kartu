function buatKartuAnggota() {
    var nama = document.getElementById("nama").value;
    var nomorAnggota = document.getElementById("nomorAnggota").value;
    var tanggalBergabung = document.getElementById("tanggalBergabung").value;

    // Tampilkan kartu anggota dengan informasi yang diisi
    document.getElementById("outputNama").textContent = nama;
    document.getElementById("outputNomorAnggota").textContent = nomorAnggota;
    document.getElementById("outputTanggalBergabung").textContent = tanggalBergabung;

    // Sembunyikan formulir dan tampilkan kartu anggota
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("kartuAnggota").classList.remove("d-none");
}
