
var mongoose = require('mongoose')
 var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId
var db = mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
	console.log('Databases are connected!')

});
var random = require('mongoose-random')

//admin schema
var adminSchema = new Schema({
	name: String,
	email: String,
	password:String
});

module.exports.adminModel = mongoose.model('adminModel',adminSchema);

//question schema
var quizeSchema = new Schema({
	question: String,
	category: String,
	answers:[
		{
			answer: String,
			isCorrect:Boolean
		}
	],
	credit:String,
	created_at:{
		type:Date,
		default:Date.now
	},
	time:Number

});

module.exports.quizeModel = mongoose.model('quizeModel',quizeSchema);



