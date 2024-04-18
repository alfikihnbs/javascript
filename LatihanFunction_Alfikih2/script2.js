const jumlahArray = parseInt(prompt("Masukkan Jumlah Array : "));
const angka2 = [];

for (let i = 0; i < jumlahArray; i++) {
    angka2[i] = parseInt(prompt("Masukkan Nilai " + (i + 1) + " : "));
}

console.log(angka2);

function hitungratarata(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}

let ratarata = hitungratarata(angka2);
console.log(ratarata);

