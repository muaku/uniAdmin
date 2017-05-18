var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var sessionCheck = function(req,res,next){
	if(req.session.username){
		next();
	}else{
		res.redirect('/login')
	}
}
module.exports = sessionCheck