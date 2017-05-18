const bcrypt = require('bcrypt')
var adminModel= require("../models/model").adminModel
// register
exports.register = (req,res)=>{
	const saltRounds = 11
	var salt = bcrypt.genSaltSync(saltRounds)
	var hash = bcrypt.hashSync(req.body.password,salt)
	var name = req.body.name
	var email= req.body.email
	var password = hash
	var user = new adminModel({
	name : name,
	email :email,
	password : password
	})
	adminModel.find().count(function(err,count){
		console.log("number of docs:",count)
		if(count>=1){
			console.log("you cannot Register")
		}else{
			adminModel.findOne({email:email},function(err,data){

				if(err){
				return console.log(String(err))
					}
				if(data){
					console.log('your email is existed!')
				}else{
					user.save(function(err){
						console.log('Data Saved!')
					})
				}
			})
		}
	})
}
