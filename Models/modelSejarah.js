var mongoose = require('mongoose')

var sejarahSchema = new mongoose.Schema({
    title   : String,
    content : String,
    foto    : String
    
})

var modelSejarah = mongoose.model('sejarah', sejarahSchema)

module.exports = modelSejarah;