const anak_ayam = parseInt(prompt("Masukkan Jumlah Ayam : "));
console.log("Anak ayam " + anak_ayam);

for (let i = anak_ayam; i > 0; i--)
if (i > 1 ) {
   console.log(" Anak ayam turun " + i + " Mati satu tinggal " + (i - 1));
 } else {
   console.log(" Anak ayam turun 1, " + i + " Mati satu tinggal induknya");
 }