// soal nomor 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var upper = kataKeempat.toUpperCase();
var upper1 = kataKedua.charAt(0).toUpperCase()+ 
kataKedua.slice(1);
console.log(kataPertama.concat(" ",upper1).concat(" ",kataKetiga).concat(" ",upper))

// soal nomor 2
var kataPertama = Number("1");
var kataKedua = Number("2");
var kataKetiga = Number("4");
var kataKeempat = Number("5");
total= kataPertama + kataKedua + kataKetiga + kataKeempat
console.log("Jumlah", total)

// soal nomor 3
var kalimat = 'wah javascript itu keren sekali'; 
var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 15);
var kataKetiga = kalimat.substring(14, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25, 32); 
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal nomor 4
var nilai = Number("69");
    if (nilai >= 80){
        console.log("Indeks A")
    } else if(nilai >= 70 && nilai < 80) {
        console.log("Indeks B")
    } else if(nilai >= 60 && nilai < 70) {
        console.log("Indeks C")
    } else if(nilai >= 50 && nilai < 60) {
        console.log("Indeks D")
    } else if(nilai < 50) {
        console.log("Indeks E")
    }

// soal nomor 5
var tanggal = 3;
var bulan = 7;
var tahun = 1999;

switch (bulan) {
  case 1:
    var bulan = "Januari";
    break;
  case 2:
    var bulan = "Februari";
    break;
  case 3:
    var bulan = "Maret";
    break;
  case 4:
    var bulan = "April";
    break;
  case 5:
    var bulan = "Mei";
    break;
  case 6:
    var bulan = "Juni";
    break;
  case 7:
    var bulan = "Juli";
    break;
  case 8:
    var bulan = "Agustus";
    break;
  case 9:
    var bulan = "September";
    break;
  case 10:
    var bulan = "Oktober";
    break;
  case 11:
    var bulan = "November";
    break;
  case 12:
    var bulan = "Desember";
    break;
  default:
    var bulan = "Tidak terdefinisi";
    break;
}
console.log(tanggal, bulan, tahun);
