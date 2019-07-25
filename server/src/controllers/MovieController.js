const Movie = require('../models/Movie')

module.exports = {

    async addMovie (req,res) {
        try {
            const movie = await Movie.create(req.body)

            res.send({
                movie: movie
            })
        } catch (err) {
            res.status(500).send({
                err: "The movie could not be added right now"
            })
        }
    },
    async getMovie (req,res) {
        try {
            const movie = await Movie.findOne({
                title: req.params.title
            })

            if(!movie) {
                return res.status(201).send({
                    err: "The movie does not exist"
                })
            }

            res.send({
                movie: movie
            })
        } catch (err) {
            res.status(500).send({
                err: "We are experining some errors right now. Please try again after some time"
            })
        }
    },
    async getAllMovies (req,res) {
        try {
            const movies = await Movie.find();

            res.send({
                movies:movies
            })
        } catch (err) {
            res.status(500).send({
                err: "We are experining some errors right now. Please try again after some time"
            })
        }
    }

}