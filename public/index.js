$(document).ready(function(){
	$("#submit").click(function(){
		var question = $("textarea#question").val()
		var category = $("input#cate").val()
		var credit = $("input#credit").val()
		var time = $("input#time").val()
		var ans1 = $("#ans1").val()
		var ans2 = $("#ans2").val()
		var ans3 = $("#ans3").val()
		var ans4 = $("#ans4").val()

		
		$("input:checked").val(true) 
		var radio1 = $("#radio-1").val()
		var radio2 = $("#radio-2").val()
		var radio3 = $("#radio-3").val()
		var radio4 = $("#radio-4").val()

		var answer = [
			{answer: ans1, isCorrect: JSON.parse(radio1)},
			{answer: ans2, isCorrect: JSON.parse(radio2)},
			{answer: ans3, isCorrect: JSON.parse(radio3)},
			{answer: ans4, isCorrect: JSON.parse(radio4)}
		]
		var data = {
			question:question,
			category:category,
			time:time,
			credit:credit,
			answers:answer
		}

		//Post request
		$.post("http://localhost:3000/question/create",data,function(res, status){})

	})


	//when click on the logout botton
	
	$("#logout").click(function(){
		$.get("http://localhost:3000/logout",function(res,status){
			window.location.replace("http://localhost:3000/login")
		})
	})
})
	
	
