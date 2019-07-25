const Theater = require('../models/Theater')

module.exports = {

    async addTheater(req,res) {
        try {
            const theater = await Theater.create(req.body)

            res.send({
                theater: theater
            })
        } catch (err) {
            res.status(500).send({
                err: "We are experining some errors right now. Please try again after some time"
            })
        }
    },
    async getTheater(req,res) {
        try {
            const theater = await Theater.find({
                name: req.params.name
            })

            if(!theater) {
                return res.status(203).send({
                    err: "We could not find this theater"
                })
            }

            res.send({
                theater:theater
            })
        } catch (err) {
            res.status(500).send({
                err: "We are experining some errors right now. Please try again after some time"
            })
        }
    },
    async getAllTheaters(req,res) {
        try {
            const theaters = await Theater.find();

            res.send({
                theaters:theaters
            })
        } catch (err) {
            res.status(500).send({
                err: "We are experining some errors right now. Please try again after some time"
            })
        }
    }

}