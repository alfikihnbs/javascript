// No 1
console.log(" No 1")
const mahasiswa = ["Andrew,", "Bob,", "Clark,", "David,", "Ethan,", "Fernando,", "Gabriel."]; 

console.log("Semua nama mahasiswa:"); 
console.log(mahasiswa.join(" ")); 

// No 2
console.log(" No 2")
mahasiswa.push("Harold,", "Iglesias", "Jackson."); 
console.log("menambahkan tiga nama mahasiswa baru :"); 
console.log(mahasiswa); 

// No 3
console.log(" No 3")
const mahasiswa1 = mahasiswa.slice(1, 2) 
const mahasiswa2 = mahasiswa.slice(3, 4) 
const mahasiswa3 = mahasiswa.slice(5, 6) 
console.log(mahasiswa1.join(" "), mahasiswa2.join(" "), mahasiswa3.join(" ")) 

// No 4
console.log(" No 4")
mahasiswa.pop();
console.log("Menghapus nama mahasiswa terakhir :"); 
console.log(mahasiswa); 

// No 5
console.log(" No 5")
mahasiswa.shift(); 
console.log("Menghapus nama mahasiswa pertama :");
console.log(mahasiswa); 

// No 6
console.log(" No 6")
mahasiswa.unshift("Andy,"); 
console.log("Menambahkan nama Andy sebelum Bob :"); 
console.log(mahasiswa); 

// No 7
console.log(" No 7")
mahasiswa[5] = "Francesco,"; 
console.log("Nama Fernando di ubah menjadi Francesco :"); 
console.log(mahasiswa)

// No 8
console.log(" No 8")
mahasiswa[4] = delete 
console.log("Nama Ethan telah di hapus :") 
console.log(mahasiswa);