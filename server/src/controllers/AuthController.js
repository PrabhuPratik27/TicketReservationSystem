const User = require('../models/User')
const passwordhasher = require('password-hasher')

module.exports = {

    async register (req,res) {
        try {
            var {username,password} = req.body

            const usera = await User.findOne({
                username: username
            })

            if(usera) {
                return res.status(201).send({
                    err: "Username already exists"
                })
            }
            
            const hash = passwordhasher.createHash('ssha512',password,new Buffer('83d88386463f0625', 'hex'))

            const rfcHash = passwordhasher.formatRFC2307(hash)

            req.body.password = rfcHash
            
            const user = await User.create(req.body)

            res.send({
                user: user
            })
        } catch (err) {
            res.status(400).send({
                err: "Cannot signup User"
            })
        }
    },
    async login (req,res) {
        try {
            const {username,password} = req.body

            const user = await User.findOne({
                username: username
            })

            if(!user) {
                return res.status(201).send({
                   err: "Invalid login info" 
                })
            }

            const hash = passwordhasher.createHash('ssha512',password,new Buffer('83d88386463f0625', 'hex'))

            const rfcHash = passwordhasher.formatRFC2307(hash)

            if(rfcHash !== user.password) {
                return res.status(203).send({
                    err: "Invalid login info" 
                })
            }

            res.send({
                user: user
            })
        } catch (err) {
            res.status(400).send({
                err: "Cannot Login at the Moment"
            })
        }
    }

}