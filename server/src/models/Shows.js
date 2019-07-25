const mongoose = require('mongoose')

const show = new mongoose.Schema({
    movie: String,
    cinema: String,
    price: Number,
    time: String,
    date: String,
    seats: [[Number]]
})

const Show = mongoose.model('shows',show)

module.exports = Show;