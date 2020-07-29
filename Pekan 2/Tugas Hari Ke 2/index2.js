// soal nomor 2
var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

var waktu = 10000
var mulai = 0
function startRead() {
    readBooksPromise(waktu, books[mulai])
        .then(function(sisa) {
            if(books[mulai + 1] != null) {
                waktu = sisa
                mulai++
                startRead()
            }
        })
}

startRead()