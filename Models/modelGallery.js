var mongoose = require('mongoose')

var gallerySchema = new mongoose.Schema({
    foto    : String
})

var modelGallery = mongoose.model('gallery', gallerySchema)

module.exports = modelGallery