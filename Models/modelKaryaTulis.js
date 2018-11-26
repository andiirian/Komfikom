var mongoose = require('mongoose')

var karyaTulisSchema = new mongoose.Schema({
    userid : String,
    title   : String,
    content : String,
    penulis : String,
    date    : String

})

var modelKaryaTulis = mongoose.model('karyatulis', karyaTulisSchema)

module.exports = modelKaryaTulis