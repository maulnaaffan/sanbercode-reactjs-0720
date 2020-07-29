// soal nomor 1
// luas lingkaran
const luaslingkaran = (r) => {
  return Math.PI * r * r;
}
console.log("Luas lingkaran: " + luaslingkaran(3));

// keliling lingkaran
let kelilinglingkaran = (r) => {
  return Math.PI * 2 * r;
}
console.log("Keliling lingkaran: " + kelilinglingkaran(3));
console.log('\n');

// soal nomor 2
var input = () => {
  const first = "saya"
  const second = "adalah"
  const third = "seorang"
  const fourth = "frontend"
  const last = "developer"
  const split = `${first} ${second} ${third} ${fourth} ${last}`
  return split 
} 

let kalimat = input();
console.log(kalimat);

// soal nomor 3
class Book {
  constructor(name) {
    this.name = name;
    this.totalPage = 100;
    this.price = 50000
  }
}

class Komik extends Book {
  constructor(name) {
    super(name)
    this.price = 70000
    this.isColorful = true;
  }
  yell() {
    console.log("Komik: " + this.name);
    console.log("Total Page: " + this.totalPage);
    console.log("Price: " + this.price);
    console.log("Colorful: " + this.isColorful);
  }
}

var kalkulus = new Book("Kalkulus");
console.log("Buku: " + kalkulus.name);
console.log("Total Page: " + kalkulus.totalPage);
console.log("Price: " + kalkulus.price) ;
console.log("\n");

var naruto = new Komik("Naruto")
naruto.yell();