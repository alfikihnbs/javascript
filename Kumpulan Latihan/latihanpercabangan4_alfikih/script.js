const nama = prompt("Masukkan Nama Karyawan : ")
const gol = prompt ("Masukkan Golongan Kerja : ")
const jam_kerja = prompt ("Masukkan jam kerja (perminggu) : ")

let gaji_perjam;
switch (gol){
    case "A":
        gaji_perjam = 6000;
        break;
    case "B":
        gaji_perjam = 7000;
        break;
    case "C":
        gaji_perjam = 8000;
        break;
    case "D":
        gaji_perjam = 10000;
        break;
    default:
        console.log('golongan tidak tersedia');
        break;
}

let total_gaji_per_minggu = jam_kerja * gaji_perjam

let uang_lembur;

if (jam_kerja > 48){
    uang_lembur = (jam_kerja - 48) * 5000
}

let total_gaji = total_gaji_per_minggu + uang_lembur

console.log('Nama :'+nama+"\n Golongan: "+gol+"\n Jam Kerja: "+jam_kerja)
console.log(nama+" menerima gaji sebesar "+total_gaji + "per minggu.")