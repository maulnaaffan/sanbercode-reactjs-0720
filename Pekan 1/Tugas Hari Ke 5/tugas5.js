// soal nomor 1
function halo(){
    return "Halo Sanbers!"
}
var halo = halo;
console.log(halo());

// soal nomor 2
function kalikan(num1,num2){
    return num1 * num2
}
var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1,num2);
console.log(hasilKali);

// soal nomor 3
function introduce(name,age,address,hobby){
    return "Nama saya " + name + "," + 
    " umur saya " + age + " tahun" + ", " +
    "alamat saya di " + address + ", " + 
    "dan saya punya hobby yaitu " + hobby + "!"
}
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);