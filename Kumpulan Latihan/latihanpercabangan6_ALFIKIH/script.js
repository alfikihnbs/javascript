console.log("PROGRAM KALKULATOR SEDERHANA")
console.log("1. PENJUMLAHAN")
console.log("2. PENGURANGAN")
console.log("3. PERKALIAN")
console.log("4. PEMBAGIAN")
console.log("5. KELUAR PROGRAM")
console.log();

 let angka_pertama;
 let angka_kedua;

const menu = prompt("Masukkan menu : ")
if (menu <=4) {
    angka_pertama =parseInt (prompt ("Masukkan Angka pertama : "));
    angka_kedua = parseInt (prompt ("Masukkan Angka kedua : "))
    console.log("angka pertama : " + angka_pertama)
    console.log("angka kedua : " + angka_kedua)
}

console.log();


let nominal;
switch (menu){
    case "1":
        nominal = (angka_pertama+angka_kedua)
        console.log("hasil dari "+angka_pertama+"+"+angka_kedua+"="+nominal)
        break;
    case "2":
        nominal = (angka_pertama-angka_kedua)
        console.log("hasil dari "+angka_pertama+"-"+angka_kedua+"="+nominal)
        break;
    case "3":
        nominal = (angka_pertama*angka_kedua)
        console.log("hasil dari "+angka_pertama+"*"+angka_kedua+"="+nominal)
        break;
    case "4":
        nominal = (angka_pertama/angka_kedua)
        console.log("hasil dari "+angka_pertama+"/"+angka_kedua+"="+nominal)
        break;
    case "5":

        console.log("Keluar program... Terimakasih")
        break;
   
}

