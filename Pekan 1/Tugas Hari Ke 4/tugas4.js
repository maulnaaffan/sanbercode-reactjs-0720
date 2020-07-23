// soal nomor 1
var kata1 = "LOOPING PERTAMA";
console.log(kata1);
var loop1 = 2;
  while(loop1 <= 20) {
    console.log(loop1 + " - I love coding");
    loop1 += 2;
  }

var kata2 = "LOOPING KEDUA";
console.log(kata2);
var loop2 = 20;
  while(loop2 >= 2) {
    console.log(loop2 + " - I will become a frontend developer");
    loop2 -= 2;
  }

// soal nomor 2
var ganjil = "Santai";
var genap = "Berkualitas";
var both = "I Love Coding";
for(var i = 1; i <= 20; i++) {
  if(i % 3 == 0 && i % 2 == 1) {
    console.log(i + " - " + both)
  } else if(i % 2 == 0) {
    console.log(i + " - " + genap)
  } else if(i % 1 ==0) {
    console.log(i + " - " + ganjil)
  }
}

// soal nomor 3
var tag = '';
for (var i = 1; i <=7 ; i++) {
  for (var j = 1; j<=i; j++) {
    tag += '#';
  }
  tag+= '\n';
}
console.log(tag)

// soal nomor 4
var kalimat="saya sangat senang belajar javascript";
var array = kalimat.split(" ");
console.log(array);

// soal nomor 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var daftarbaru = daftarBuah.sort();
for (i in daftarbaru){
  console.log(daftarbaru[i]);
}