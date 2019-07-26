const mongoose = require('mongoose') 

const movie = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    genre: {
        type: String
    },
    directors: [String],
    cast: [String],
    status: String,
    imageurl: String
})

const Movie = mongoose.model('movies',movie);

module.exports = Movie