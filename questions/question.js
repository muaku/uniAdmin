var quizeModel = require("../models/model").quizeModel

//create question
exports.create = (req,res)=>{
	var data = req.body
	var questionModel = new quizeModel({
		question:data.question,
		category:data.category,
		answers:data.answers,
		credit:data.credit,
		time:data.time
	})

	quizeModel.findOne({
		question:req.body.question
	},function(err,data){
		if(!data){
			questionModel.save(function(err,success){
				if(err){
					console.log('Error got' + err)
				}else{
					console.log("Request got: " + success)
					res.status(201).send()
				}
			});
		}else{
			console.log("Question exists")
		}
	})
}

//question update
exports.edite=(req,res)=>{
	let questionId = req.params.id
	quizeModel.findById(questionId,function(err,data){
		data.question = req.body.question;
		data.category = req.body.category;
		data.credit = req.body.credit
		data.time = req.body.time
		data.answers = req.body.answers
		console.log(data)
		data.save(function(err,data){
			if(err){
				res.status(500).send(err)
			}
			console.log('update:',data)
			res.status(200).send()
		})

	})
}

//delete question
exports.delete = (req,res)=>{
	let questionId = req.params.id
	console.log(questionId);

	quizeModel.findByIdAndRemove(questionId,function(err,data){
		if(err){
			console.log("got error from questionId")
		}else{
			console.log("deleted success question:",data)
			res.status(204).send()
		}
	})
}

//get question by category
exports.get = (req,res)=>{
	let qcategory = req.params.category
	console.log(qcategory)
	quizeModel.find({'category':qcategory},function(err,doc){
		if(err) return next(err)
		console.log(doc)
		res.status(200).send(doc)
	})
}

//get question by cateogory and Id
exports.getLimit = (req,res)=>{
	let category = req.params.category
	let value = parseInt(req.params.limit)
	console.log(typeof(value))
	console.log(category)
	console.log(value)
	quizeModel.find({"category":category}).limit(value).exec(function(err, data){
		console.log(data)
		res.status(200).send(data)
	})
}




