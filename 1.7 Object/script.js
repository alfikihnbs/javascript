const mahasiswa = {
    // key-value pair (pasangan kunci-nilai)
    // key : value 
    nama : "Alfikih Nur Banyu Segara", // property
    nim : "17613841",
    umur : 20,
};

console.log(mahasiswa.nama)
console.log(mahasiswa.nim)
console.log(mahasiswa.umur)

// Menambahkan properti kedalam object

mahasiswa["alamat"] = "Rawagabus Pos"
mahasiswa["no_telepon"] = "08561241768"
mahasiswa["sapa"] = function() {
    console.log("Hallo nama aku Alfi")
};
console.log(typeof mahasiswa);
console.log(typeof mahasiswa.alamat);
console.log(typeof mahasiswa.sapa());

// Menghapus properti pada objek
delete mahasiswa["umur"];

console.log(mahasiswa);

// Array of object
const siswaBLK = [
    {
        nama : "Cici",
        alamat : "Bandung",
        umur : 23,
    },
    {
        nama : "Kevin",
        alamat : "Tegal",
        umur : 24, 
    },
    {
        nama :"Sity",
        alamat:"Bekasi",
        umur : 22,
    },
];

console.log(" Hallo, nama saya " + siswaBLK[1]. nama + ", alamat di " + siswaBLK[1]. alamat + " , umur saya " + siswaBLK[1]. umur);

