process.env['USERNAME'] = "unitest"
process.env['PASSWORD'] = "testuni"

var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var path = require('path')
var session = require('express-session')
var randomString = require('randomstring')
var app = express()
var cors = require('cors')
var helmet = require('helmet')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quizapp')
var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
})
var sessionCheck = require('./middle_ware/middleware')
var router = require('./routers/route.js')
var login = require('./user/login.js')

app.use(helmet())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cookieParser());
//console.log(randomString.generate())
app.use(session({
    secret: randomString.generate(),
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 30 * 60 * 1000
    }
}));
console.log(session)
app.use('/login', login);
app.use('/', sessionCheck, router);
//app.use('/',router)