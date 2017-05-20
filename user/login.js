var express = require('express')
var assert = require('assert')
    //var bcrypt = require('bcrypt')
var adminModel = require("../models/model").adminModel
var path = require('path')
var router = express.Router()
module.exports = router

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, './login.html'))
})
router.post('/', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password

    // instant
    if (username === process.env.USERNAME && password === process.env.PASSWORD) {
        req.session.username = username
        res.redirect("/")
    } else {
        res.send("Try again Please!")
    }


    // adminModel.findOne({
    // 	email:username

    // },function(err,user){
    // 	if(err) next(err)

    // 	if(user){
    // 		if(bcrypt.compareSync(password,user.password)){
    // 			req.session.username = req.body.username
    // 			res.redirect('/')
    // 		}else{
    // 			res.send('Please try again!')
    // 		}
    // 	}else{
    // 		res.send('Cannot Find any user')
    // 	}

    // })
})