
var scoreboard;
var questionArea = document.querySelector("#question")
var timeText = document.querySelector("#timer")
var startButton = document.querySelector(".start")
var answerButton1 = document.querySelector(".answer1")
var answerButton2 = document.querySelector(".answer2")
var answerButton3 = document.querySelector(".answer3")
var answerButton4 = document.querySelector(".answer4")
var timeLeft = 5;
const question = ["How about this question?", "or this question??", "What about this one???", "aye dee kay aboot this guy?", "or this guy?", "this ques is sketch??"];
var random = Number(Math.floor(Math.random * question.length));
let counter = 5;
var scores = {
    userName: [],
    highScore: []
}
answerButton1.setAttribute("style", "visibility:hidden");
answerButton2.setAttribute("style", "visibility:hidden");
answerButton3.setAttribute("style", "visibility:hidden");
answerButton4.setAttribute("style", "visibility:hidden");

//time subtracts from clock on wrong answer
//timer starts on question
//new question on answer
//save scoreboard



function timer() {
    startButton.setAttribute("style", "visibility:hidden");
    answerButton1.setAttribute("style", "visibility:visible");
    answerButton2.setAttribute("style", "visibility:visible");
    answerButton3.setAttribute("style", "visibility:visible");
    answerButton4.setAttribute("style", "visibility:visible");
    timeText.setAttribute("style", "visibility:visible");

    var timerInterval = setInterval(function() {
      timeLeft--;
      timeText.textContent = timeLeft + " seconds left for this question.";
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
        startButton.setAttribute("style", "visibility:visible");
        answerButton1.setAttribute("style", "visibility:hidden");
        answerButton2.setAttribute("style", "visibility:hidden");
        answerButton3.setAttribute("style", "visibility:hidden");
        answerButton4.setAttribute("style", "visibility:hidden");
        timeText.setAttribute("style", "visibility:hidden");
      }
  
    }, 1000);
  }

  function presQuestion (){
    if(question === "How about this question?"){
        if(answer1()){
            //make this display true
            //next question
        } else {
            //minus time on clock
            //next question
        }
    }

  }

