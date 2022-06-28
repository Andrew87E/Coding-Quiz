// if (!timer()){
//     answerButton.setAttribute("style", "display:none")
// }

var scoreboard;
var questionArea = document.querySelector("#question")
var timeText = document.querySelector("#timer")
var startButton = document.querySelector(".start")
var answerButton = document.getElementsByClassName(".buton")
var timeLeft = 75;
const question = ["How about this question?", "or this question??", "What about this one???", "aye dee kay aboot this guy?", "or this guy?", "this ques is sketch??"];
var random = Number(Math.floor(Math.random * question.length));
let counter = 5;
var scores = {
    userName: [],
    highScore: []
}


//time subtracts from clock on wrong answer
//timer starts on question
//new question on answer
//save scoreboard



function timer() {

    startButton.setAttribute("style", "display:none");
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeText.textContent = timeLeft + " seconds left for this question.";
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
        nextQuestion();
        startButton.setAttribute("style", "diplay:inline-block");
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

