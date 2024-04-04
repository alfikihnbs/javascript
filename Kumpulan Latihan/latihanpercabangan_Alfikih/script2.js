// 2. NILAI

const nilai_grade = prompt("Masukkan nilai anda: ")

 if (nilai_grade >=85 && nilai_grade <=100){
    console.log("Nilai anda Grade A")
 } else if (nilai_grade >= 75 && nilai_grade <=85){
    console.log("Nilai anda Grade B")
 } else if (nilai_grade >= 65 && nilai_grade <=75) {
    console.log("Nilai anda Grade C")
 } else if (nilai_grade >= 55 && nilai_grade <=65) {
    console.log("Nilai anda Grade D")
 } else if (nilai_grade<= 55) {
    console.log("Nilai anda Grade E")
 }