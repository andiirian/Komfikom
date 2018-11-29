var mongoose = require('mongoose')

var beritaSchema = new mongoose.Schema({
    userid  : String,
    name    : String,
    title   : String,
    content : String,
    foto    : String,
    date    : String, 
    status  : Number,
    comment : []
})

var modelBerita = mongoose.model('berita', beritaSchema)

module.exports = modelBerita