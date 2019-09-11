$(document).ready(function () {
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var countdownTimer = 30;
    var remaining = 0;

    $("#questions, .finishPage").hide();
    $("#start-button").on("click", function () {
        $(".start, #topSpace").hide();
        playGame();
    });    

    function countDown(){
        countdownTimer--;
        $("#timer").text("Time Remaining: " + countdownTimer + " Seconds")
        if (countdownTimer === 0){
            $("#questions").hide();
            score();
        };
    };

    function playGame(){
        $("#questions").show();
        $("#timer").text("Time Remaining: " + countdownTimer + " Seconds")
        remaining = setInterval(countDown, 1000);
        $("#questionOne").text("Which of the following sports do teams score a touchdown?");
        $("#questionTwo").text("How many bases are used in baseball?");
        $("#questionThree").text("Which of the following is the name of a player position in ice hockey?");
        $("#questionFour").text("What year did the Philadelphia Phillies win their first World Series?");
        $("#questionFive").text("In golf, if the golfer scores one under par on a hole, the golfer got what?");
        $("#done-button").on("click", function () {
            $("#questions").hide();
            score();
        });
    };

    function score(){
        clearInterval(remaining);
        if (document.getElementById("questionOne-Answer2").checked){
            correctAnswers++;
        }
        else if (document.getElementById("questionOne-Answer1").checked || document.getElementById("questionOne-Answer3").checked || document.getElementById("questionOne-Answer4").checked){
            incorrectAnswers++;
        }
        else {
            unanswered++;
        };
        if (document.getElementById("questionTwo-Answer4").checked){
            correctAnswers++;
        }
        else if (document.getElementById("questionTwo-Answer1").checked || document.getElementById("questionTwo-Answer2").checked || document.getElementById("questionTwo-Answer3").checked){
            incorrectAnswers++;
        }
        else {
            unanswered++;
        };
        if (document.getElementById("questionThree-Answer2").checked){
            correctAnswers++;
        }
        else if (document.getElementById("questionThree-Answer1").checked || document.getElementById("questionThree-Answer3").checked || document.getElementById("questionThree-Answer4").checked){
            incorrectAnswers++;
        }
        else {
            unanswered++;
        };
        if (document.getElementById("questionFour-Answer4").checked){
            correctAnswers++;
        }
        else if (document.getElementById("questionFour-Answer1").checked || document.getElementById("questionFour-Answer2").checked || document.getElementById("questionFour-Answer3").checked){
            incorrectAnswers++;
        }
        else {
            unanswered++;
        };
        if (document.getElementById("questionFive-Answer1").checked){
            correctAnswers++;
        }
        else if (document.getElementById("questionFive-Answer2").checked || document.getElementById("questionFive-Answer3").checked || document.getElementById("questionFive-Answer4").checked){
            incorrectAnswers++;
        }
        else {
            unanswered++;
        };
        $(".finishPage").show();
        $("#finish").text("All Done!")
        $("#totalCorrect").text("Correct answers: " + correctAnswers);
        $("#totalIncorrect").text("Incorrect answers: " + incorrectAnswers);
        $("#totalUnanswered").text("Unanswered: " + unanswered);
    };
});