function persegi(s1, s2){
    return s1 * s2
}

function persegi_panjang(p, l){
    return p * l
}


function lingkaran(jari_jari){
    return 3.14 * (jari_jari*jari_jari);
}

// fungsi Ekspresi
const segitiga = function(alas, tinggi){
    return alas * tinggi;
}
let lanjut

do {
console.log("-- APLIKASI KALKULATOR SEDERHANA --")
console.log(" Silahkan pilih menu dibawah : ")
console.log("===============================================")
console.log(" 1. Persegi ")
console.log(" 2. Persegi Panjang ")
console.log(" 3. Lingkaran ")
console.log(" 4. Segitiga ")
console.log("===============================================")

const menu = prompt("Pilih menu: ")
let a,b

switch (menu) {
    case "1":
        s1 = prompt("Masukkan Nilai s1 : ");
        s2 = prompt("Masukkan Nilai s2 : ");
        console.log(parseInt(persegi(s1,s2)));
        break;

    case "2":
        p = prompt("Masukkan Nilai p : ");
        l = prompt("Masukkan Nilai l : ");
        console.log(parseInt(persegi_panjang(p,l)));
        break;
    case "3":
       
        jari_jari= prompt("Masukkan Nilai jari_jari : ");
        console.log(parseFloat(lingkaran( jari_jari )));
        break;
    case "4":
        alas = prompt("Masukkan Nilai alas : ");
        tinggi = prompt("Masukkan Nilai tinggi : ");
       console.log(parseFloat(segitiga(alas,tinggi)));
        break;

    default:
        alert("Menu yang anda pilih tidak tersedia!")
        break;
}
lanjut = prompt( " Mau pilih menu yang lain? (Y/T) ")
} while (lanjut === "Y" || lanjut === "y")
