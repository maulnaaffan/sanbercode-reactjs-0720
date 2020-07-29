 // soal nomor 1
var readBooks = require('./callback.js')
 
var books = [
     {name: 'LOTR', timeSpent: 3000}, 
     {name: 'Fidas', timeSpent: 2000}, 
     {name: 'Kalkulus', timeSpent: 4000},
     {name: 'komik', timeSpent: 1000}
]
 
var waktu = 10000;
var mulai = 0
function startRead() {
     readBooks(waktu, books[mulai], function(sisa){
         if(books[mulai + 1] != null){
             waktu = sisa
             mulai++
             startRead()
         }
     })
}
 
startRead()