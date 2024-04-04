 // If statement

 const total_belanja = 85000

 if(total_belanja > 100000){
    console.log("Selamat anda menedapatkan hadiah!");
 }

 console.log("Terimakasih sudah berbelanja")

 
 // if ... else ststement

 const Total_belanja = prompt("Maukkan total belanja: ");

 
 if (total_belanja > 100000){
    console.log("Selamat anda mendapatkan piring cantik !")
 } else {
    console.log("Mohon maaf anda belum dapat hadiah")
 }

 console.log("Terimakasih sudah berbelanja!")

// 2. Login
 const password = "legendofaang"

 if (password === "legendofaang"){
    console.log("Silahkan masuk, Aang!")
 } else {
    console.log("Password salah, silahkan coba lagi!")
 }

 // if ...else If ...else statement

 const nilai = prompt("Masukkan nilai anda: ")

 if (nilai >=80){
    console.log("Nilai anda berpredikat BAIK")
 } else if (nilai >= 65){
    console.log("Nilai anda berpredikat CUKUP")
 } else if (Nilai >= 50) {
    console.log("Nilai anda berpredikat BURUK")
 } else {
    console.log("Nilai anda berpredikat SANGAT BURUK")
 }

 // Switch statement

 const warna = "merah"
 let pesan = "";

 switch (warna) {
    case "merah"
        pesan = "Anda memilih warna merah"
        break;

    case "biri"
        pesan = "Anda memilih warna biru"
        break;
    
    case = "Orange"
        pesan ="Anda memilih warna orange"
        break;

    default:
        pesan = "warna yang anda pilih tidak ada"
        break;

 }

 console.log(pesan);

 