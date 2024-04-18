function balok(p, l, t) {
    return p * l * t;
}

function bola(jari2) {
    return (4 / 3) * 3.14 * (jari2 ** 3);
}

function kerucut(jari_jari1, tinggi) {
    return (1 / 3) * 3.14 * (jari_jari1 ** 2) * tinggi;
}

const kubus = function(sisi) {
    return sisi ** 3;
};

const tabung = function(r, tinggi) {
    return 3.14 * (r ** 2) * tinggi;
};

let lanjut;

do {
    console.log("-- VOLUME BANGUN RUANG --");
    console.log(" Silahkan pilih menu dibawah : ");
    console.log("===============================================");
    console.log(" 1. Balok ");
    console.log(" 2. Bola ");
    console.log(" 3. Kerucut ");
    console.log(" 4. Kubus ");
    console.log(" 5. Tabung ");
    console.log("===============================================");

    const menu = prompt("Pilih menu: ");

    switch (menu) {
        case "1":
            let p = parseFloat(prompt("Masukkan Nilai p : "));
            let l = parseFloat(prompt("Masukkan Nilai l : "));
            let t = parseFloat(prompt("Masukkan Nilai t : "));
            console.log(" Hasil volume balok adalah " + balok(p, l, t));
            break;

        case "2":
            let jari2 = parseFloat(prompt("Masukkan Nilai jari jari : "));
            console.log(" Hasil volume bola adalah " + bola(jari2));
            break;

        case "3":
            let jari_jari1 = parseFloat(prompt("Masukkan Nilai jari jari : "));
            let tinggi_kerucut = parseFloat(prompt("Masukkan Nilai tinggi : "));
            console.log("Hasil volume kerucut adalah " + kerucut(jari_jari1, tinggi_kerucut));
            break;

        case "4":
            let sisi_kubus = parseFloat(prompt("Masukkan Nilai sisi : "));
            console.log("Hasil volume kubus adalah " + kubus(sisi_kubus));
            break;

        case "5":
            let r_tabung = parseFloat(prompt("Masukkan Nilai jari jari : "));
            let tinggi_tabung = parseFloat(prompt("Masukkan Nilai tinggi : "));
            console.log("Hasil volume tabung adalah " + tabung(r_tabung, tinggi_tabung));
            break;

        default:
            console.log("Menu yang anda pilih tidak tersedia!");
            break;
    }

    lanjut = prompt(" Mau pilih menu yang lain? (Y/T) ");
} while (lanjut === "Y" || lanjut === "y");

