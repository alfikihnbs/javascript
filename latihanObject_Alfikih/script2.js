    console.log("======================================================================");
    console.log("Kode Barang\t\tNama product\t\tHarga\t\tStock");
    console.log("=======================================================================");

do {
    const kode_barang = prompt("Masukkan Kode Barang");
    const nama_products = prompt("Masukkan Nama Products");
    const harga = parseFloat(prompt("Masukkan Harga"));
    const stock = parseFloat(prompt("Masukkan Stock"));

    
    console.log(
        kode_barang + "\t\t\t" + nama_products + "\t\t\t" + harga + "\t\t" + stock
    );

    lanjut = prompt("Apakah Anda ingin melanjutkan? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");
