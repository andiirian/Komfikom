var mongoose = require('mongoose')

var beritaSchema = new mongoose.Schema({
    title   : String,
    content : String,
    foto    : String,
    date    : String, 
    comment : []
})

var modelBerita = mongoose.model('berita', beritaSchema)

module.exports = modelBerita