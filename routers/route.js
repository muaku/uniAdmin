const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')
const router = express.Router()
module.exports = router
    //var user = require('../user/register.js')
var question = require('../questions/question')
var logoutCall = require('../user/logout.js')
router.use(bodyParser.urlencoded({ extended: true }))

// //question page
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/dashboard.html'))
})

//admin register
//router.post('/register',user.register)

router.get('/logout', logoutCall.logout)

//create question
router.post('/question/create', question.create)

//get question by category
router.get('/question/get/category/:category', question.get)

//get question by category and limit
router.get('/question/get/category/:category/limit/:limit', question.getLimit)

//router edite
router.put('/question/update/:id', question.edite)

//delete route
router.delete('/question/delete/:id', question.delete)