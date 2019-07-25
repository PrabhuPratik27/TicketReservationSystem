const mongoose = require('mongoose')

const theater = new mongoose.Schema({
    name: String,
    city: String,
    region: String,
    address: String
})

const Theater = mongoose.model('theaters',theater)

module.exports = Theater