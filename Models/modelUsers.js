var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    nama        : String,
    username    : String,
    password    : String,
    admin       : Number
})

var modelUsers = mongoose.model('users', userSchema)

module.exports = modelUsers