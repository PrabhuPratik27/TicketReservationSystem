const Theater = require('../models/Theater')
const Movie = require('../models/Movie')
const Show = require('../models/Shows')

module.exports = {

    async addShow (req,res) {

        try {    
            const movie = await Movie.find({
                title: req.movie
            })

            if(!movie) {
                return res.status(203).send({
                    err: "The movie does not exist"
                })
            }

            const theater = await Theater.find({
                name: req.cinema
            })

            if(!theater) {
                return res.status(203).send({
                    err: "The theater does not exist"
                })
            }

            const show = await Show.create(req.body)

            res.send({
                show: show
            })
            
        } catch (err) {
            res.status(500).send({
                err: "We are experining some errors right now. Please try again after some time"
            })
        }

    }

}