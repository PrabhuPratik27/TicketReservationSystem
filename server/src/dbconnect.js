const mongoose = require('mongoose')

function connect () {
    mongoose.set('useCreateIndex', true);
    mongoose.connect('mongodb+srv://pratik:pratik@cluster0-ao5ty.mongodb.net/MovieReservation',{useNewUrlParser: true})
}

module.exports = connect