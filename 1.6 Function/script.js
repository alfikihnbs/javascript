const s1 = 8;
const s2 = 5;
const s3 = 10;
const s4 = 6;
const s5 = 7;
const s6 = 3;


const volumeS1 = s1 * s1 *s1; // 512
const volumeS2 = s2 * s2 *s2; // 125
const volumeS3 = s3 * s3 *s3; // 
const volumeS4 = s4 * s4 *s4; // 
const volumeS5 = s5 * s5 *s5; // 
const volumeS6 = s6 * s6 *s6; // 

let total = volumeS1 + volumeS2;
total = volumeS3 + volumeS4;
total = volumeS5 + volumeS6;
console.log(total);

//fungsi undifinied
function namaFungsi(a, b,) {
    console.log(a + " suka " + b);
}

namaFungsi("aku", "kamu");

/*//function Kalkulator sederhana

function penjumlahan(a, b){
    const c = a + b
    return c;
}*/


// fungsi deklarasi
function penjumlahan(a, b){
    return a + b;
}

function pengurangan(a, b){
    return a - b;
}


function perkalian(a, b){
    return a * b;
}

// fungsi Ekspresi
const pembagian = function(a, b){
    return a / b;
}
let lanjut

do {
console.log("-- APLIKASI KALKULATOR SEDERHANA --")
console.log(" Silahkan pilih menu dibawah : ")
console.log("===============================================")
console.log(" 1. Penjumlahan ")
console.log(" 2. Pengurangan ")
console.log(" 3. Perkalian ")
console.log(" 4. Pembagian ")
console.log("===============================================")

const menu = prompt("Pilih menu: ")
let a,b

switch (menu) {
    case "1":
        a = parseInt(prompt("Masukkan Nilai a : "));
        b = parseInt(prompt("Masukkan Nilai b : "));
        console.log(penjumlahan(a,b));
        break;

    case "2":
        a = prompt("Masukkan Nilai a : ");
        b = prompt("Masukkan Nilai b : ");
        console.log(parseInt(pengurangan(a,b)));
        break;
    case "3":
        a = prompt("Masukkan Nilai a : ");
        b = prompt("Masukkan Nilai b : ");
        console.log(parseInt(perkalian(a,b)));
        break;
    case "4":
        a = prompt("Masukkan Nilai a : ");
        b = prompt("Masukkan Nilai b : ");
       console.log(parseFloat(pembagian(a,b)));
        break;

    default:
        alert("Menu yang anda pilih tidak tersedia!")
        break;
}
lanjut = prompt( " Mau pilih menu yang lain? (Y/T) ")
} while (lanjut === "Y" || lanjut === "y")


/*
//arrow function

//const modulus = (a,b) => {
    return a % b;
}*/

const total1 = penjumlahan(9, 5) + penjumlahan(8, 7);
console.log(total1)