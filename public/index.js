$(document).ready(function() {
    var apiHost = "http://52.197.181.118:3000"
    $("#submit").click(function() {
        var question = $("textarea#question").val().trim()
        var category = $("#cate").val().trim()
        var credit = $("input#credit").val().trim()
        var time = $("#time").val().trim()
        var ans1 = $("#ans1").val().trim()
        var ans2 = $("#ans2").val().trim()
        var ans3 = $("#ans3").val().trim()
        var ans4 = $("#ans4").val().trim()


        $("input:checked").val(true)
        var radio1 = $("#radio-1").val()
        var radio2 = $("#radio-2").val()
        var radio3 = $("#radio-3").val()
        var radio4 = $("#radio-4").val()

        var answer = [
            { answer: ans1, isCorrect: JSON.parse(radio1) },
            { answer: ans2, isCorrect: JSON.parse(radio2) },
            { answer: ans3, isCorrect: JSON.parse(radio3) },
            { answer: ans4, isCorrect: JSON.parse(radio4) }
        ]
        var data = {
            question: question,
            category: category,
            time: time,
            credit: credit,
            answers: answer
        }

        //Post request
        $.post(`${apiHost}/question/create`, data, function(res, status) {
            alert(res)
        })

    })


    //when click on the logout botton

    $("#logout").click(function() {
        $.get(`${apiHost}/logout`, function(res, status) {
            window.location.replace(`${apiHost}/login`)
        })
    })
})