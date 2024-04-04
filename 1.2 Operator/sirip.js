// opoerator terdiri dari

// 1. Operator Aritmatika
//+,-,/,*,**.%

//operator unary
//+,-,++,--


// Operator Logika
//&& (AND), || (OR), ! (Negasi) = akan menghasilkan TRUE / FALSE

console.log(10%2=== 0 && 10/5 === 2)


// operator ternary
const password = "luwakwhitecoffe"
const isLogin=
password === "luwakwhitecoffe"
        ? "Anda mendapatkan 2 juta"
        : "Lo bayar gue";
console.log(isLogin);

let alas = prompt("masukkan alas:")
console.log("Alas segitiga: "+alas )

let tinggi = prompt("Masukkan tinggi:")
console.log("Tinggi segitiga: "+tinggi)

let segitiga= (alas*tinggi)/2;

console.log(" luas segitiga " +segitiga);
