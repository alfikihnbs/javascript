const nilaiMahasiswa = [36, 66, 82, 53, 76, 17, 50, 38, 93, 29, 78, 57, 22, 53, 78, 38, 20, 46, 80, 79];
const nilai1 = [];

function tentukanIndexNilai(nilai) {
    if (nilai > 80) {
        nilai1.push("A");
    } else if (nilai >= 70 && nilai <= 80) {
        nilai1.push("B");
    } else if (nilai >= 55 && nilai < 70) {
        nilai1.push("C");
    } else if (nilai >= 45 && nilai < 55) {
        nilai1.push("D");
    } else {
        nilai1.push("E");
    }
}

function tampilkanNilaiDanIndex(nilaiArray) {
    console.log("============================================");
    console.log("No\tNilai Ujian\tIndex Nilai");
    console.log("============================================");
    for (let i = 0; i < nilaiArray.length; i++) {
        const nilai = nilaiArray[i];
        tentukanIndexNilai(nilai); // Mengubah array nilai di dalam fungsi
        console.log((i + 1) + "\t\t" + nilai + "\t\t\t" + nilai1[i]); // Menggunakan nilai langsung dari array nilai
    }
    console.log("=============================================");
}

tampilkanNilaiDanIndex(nilaiMahasiswa);