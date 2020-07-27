// soal nomor 1
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objDaftarPeserta = {
    nama : "Asep",
    "jenis kelamin" : "laki-laki",
    hobi : "baca buku",
    "tahun lahir" : 1992
}
console.log(objDaftarPeserta.nama);

// soal nomor 2
var buah = [{nama: "strawberry", warna: "merah", adabijinya: "tidak", harga: 9000}, {nama: "jeruk", warna: "oranye", adabijinya: "ada", harga: 8000}, {nama: "Semangka", warna: "Hijau & Merah", adabijinya: "ada", harga: 10000}, {nama: "Pisang", warna: "Kuning", adabijinya: "tidak", harga: 5000}]
var arraybuahfilter = buah.filter(function(item){
    return item.nama == "strawberry";
})
console.debug(arraybuahfilter);

// soal nomor 3
var dataFilm = []
function inputfilm(nama,durasi,genre,tahun){
    var film ={
        nama : nama,
        durasi : durasi,
        genre : genre,
        tahun : tahun,
    }
    dataFilm.push(film)
}
inputfilm("Warkop DKI", "3h 20m", "Comedy", "2019");
inputfilm("Jumanji", "3h 10m", "Adventure", "2020");
dataFilm.forEach(function(item){
    console.log(item)
})

// soal nomor 4
// release 0
class Animal {
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// release 1
class Ape extends Animal {
    constructor(name) {
        super(name)
        this.legs = 2;
    }
    yell() {
        console.log(this.name,"Auooo");
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name)
        this.legs = 4;
    }
    jump() {
        console.log(this.name,"hop hop");
    }
}
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
console.log();

// soal nomor 5
class Clock {
    constructor({template}){
        this.template = template;
    }
    render() {
        var date = new Date();
    
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        var output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
      }
    
      stop() {
        clearInterval();
      }
    
      start() {
        this.render();
        setInterval(this.render.bind(this), 1000);
      }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();