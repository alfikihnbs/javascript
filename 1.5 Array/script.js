/*// cara bikin array

//cara pertama

const angka = new Array(1,3,5,7,9);
console.log(angka);

//cara kedua

const angka2 = new Array(5);
console.log(angka2);

//cara ketiga

const angka3 = [2,4,6,8,10]
console.log(angka3)


let angka4 =[]

//cara menampilkan isi Array

console.log(angka[0]) // 1
console.log(angka[1]) // 3

// cara menampilkan isi Array part 2

for (let i = 0; i < angka.length; i++){
    console.log("index ke-"+ i +" = " + angka[i]);
}

// cara menambahkan isi kedalam Array

angka2[0] = 5;
angka2[1] = 12;
angka2[2] = 17;
angka2[3] = 21;
angka2[4] = 28;

console.log(angka2);

// cara menghapus element Array part 1
// pake "undefined"

angka3[2] = undefined;
angka3[4] = undefined;

// cara menghapus element Array part 2
// pake keyword "delete"

delete angka3[0];
delete angka3[1];
delete angka3[3];

console.log(angka3)*/


const arr = [3,5,7,9,11]

//length = menampilkan jumlah isi dari array
console.log(arr.length) // 5

// join = menggabungkan isi array menjadi sebuah string
const word = ['K', 'A', 'T', 'A', 'K' ]
const word2 = ["Selamat", "Datang", "di", "BLK", ]
console.log(word.join(""))
console.log(word2.join(" ")) 

// push = menambahkan elemen array di bagian terakhir
arr.push(13, 15, 17)
word.push("B", "E", "R", "A", "C", "U", "N")
word2.push("Karawang")

console.log(arr)
console.log(word.join("")+ " \n" + word2.join(" "));

// unshift = menambahkan elemen di awal Array 
// [1,3,5,7,9,11,13,15]
arr.unshift(1)
console.log(arr)

// shift = menghapus elemen pertama di array
word.shift()
console.log(word)

//slice (indexAwal, indexAkhir) 
const siswa = ["Adeh", "Alfikih", "Miftah", "Ratna", "SITI.N"]

//slice = akan menghasilkan array baru
const siswa2 = siswa.slice(2, 4);
console.log(siswa2)

//splice = menyisipkan elemen di index tertentu
// splice(idxAwal, mauDihapusBerapa, elemen, elemen2, ...)
siswa.splice(2, 0, "yudha", "jabbar", "dani");
console.log(siswa);

// foreach = sama kaya perulangan "for"
const nilai = [70, 75, 82, 65, 58];

nilai.forEach(function (e, i) {
    console.log("index ke-" + i + "=" + e);
});

// sort mengurutkan array
console.log(nilai.sort())

// map
const dikaliDua = nilai.map(function (e) {
    return e * 2
});
console.log(dikaliDua)

// filter & find
const bilanganBulat = [2, 3, 1, 7, 6, 9, 11, 8];

const bilBul = bilanganBulat.filter(function (e) {
    return e > 5;
})
const bilBul2 = bilanganBulat.find(function (e) {
    return e > 5;
})

console.log(bilBul);
console.log(bilBul2);


