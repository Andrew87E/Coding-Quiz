
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
var counter = 31;
var questions = [
  { // 0
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  { // 1
    question: "The condition in an if / else statement is enclosed within .",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  { // 2
    question: "Arrays in JavaScript can be used to store .",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  { // 3
    question: "String values must be enclosed within __ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  { // 4
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

var scores = {
    userName: [],
    highScore: []
}
console.log(questions)
console.log(questions[0])
console.log(questions[0].question)
console.log(questions.question)
answerButton1.setAttribute("style", "visibility:hidden");
answerButton2.setAttribute("style", "visibility:hidden");
answerButton3.setAttribute("style", "visibility:hidden");
answerButton4.setAttribute("style", "visibility:hidden");
questionArea.setAttribute("style", "visibility:hidden")


function timer() {
    startButton.setAttribute("style", "visibility:hidden");
    answerButton1.setAttribute("style", "visibility:visible");
    answerButton2.setAttribute("style", "visibility:visible");
    answerButton3.setAttribute("style", "visibility:visible");
    answerButton4.setAttribute("style", "visibility:visible");
    timeText.setAttribute("style", "visibility:visible");
    questionArea.setAttribute("style", "visibility:visible");

  askSomeQuestions()

    var timerInterval = setInterval(function() {
    timeLeft--;
    timeText.textContent = timeLeft + " seconds left for the test.";
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
        startButton.setAttribute("style", "visibility:visible");
        answerButton1.setAttribute("style", "visibility:hidden");
        answerButton2.setAttribute("style", "visibility:hidden");
        answerButton3.setAttribute("style", "visibility:hidden");
        answerButton4.setAttribute("style", "visibility:hidden");
        timeText.setAttribute("style", "visibility:hidden");
        questionArea.setAttribute("style", "visibility:hidden");
      }
  
    }, 1000);
}

function askSomeQuestions (){
  var questCount = 0; 

  var quest1 = ()=> {
    questionArea.textContent = questions[0].question;
    answerButton1.textContent = questions[0].choices[0];
    answerButton2.textContent = questions[0].choices[1];
    answerButton3.textContent = questions[0].choices[2];
    answerButton4.textContent = questions[0].choices[3];
    questCount++;
  }

  var quest2 = ()=> {
    questionArea.textContent = questions[1].question;
    answerButton1.textContent = questions[1].choices[0];
    answerButton2.textContent = questions[1].choices[1];
    answerButton3.textContent = questions[1].choices[2];
    answerButton4.textContent = questions[1].choices[3];
    questCount++;
  }

  var quest3 = ()=> {
    questionArea.textContent = questions[2].question;
    answerButton1.textContent = questions[2].choices[0];
    answerButton2.textContent = questions[2].choices[1];
    answerButton3.textContent = questions[2].choices[2];
    answerButton4.textContent = questions[2].choices[3];
    questCount++;
    }

  var quest4 = ()=> {
    questionArea.textContent = questions[3].question;
    answerButton1.textContent = questions[3].choices[0];
    answerButton2.textContent = questions[3].choices[1];
    answerButton3.textContent = questions[3].choices[2];
    answerButton4.textContent = questions[3].choices[3];
    questCount++;
    }

  var quest5 = ()=> {
    questionArea.textContent = questions[4].question;
    answerButton1.textContent = questions[4].choices[0];
    answerButton2.textContent = questions[4].choices[1];
    answerButton3.textContent = questions[4].choices[2];
    answerButton4.textContent = questions[4].choices[3];
    questCount++;
    }

answerButton1.addEventListener("click", function(event){
  event.preventDefault();
  if (answerButton1.textContent === questions[0].answer) {
    quest2();
  } else if (answerButton1.textContent === questions[1].answer)
  
});

answerButton2.addEventListener("click", function(event){
  event.preventDefault();
  if () {

  }
});

answerButton3.addEventListener("click", function(event){
  event.preventDefault();
  if ()
});

answerButton4.addEventListener("click", function(event){
  event.preventDefault();
  if ()
});

console.log(questCount)
console.log(questionArea)
};
function generateScore() {
  
}

 

//time subtracts from clock on wrong answer
//timer starts on question
//new question on answer
//save scoreboard
// answer buttons random order (swap array after completion??)  for(let i = 0; i < questions.question.length; i++) {}
// questions random order (swap array after completion??) question[Math.floor(Math.random() * questions.length)]
// store scoreboard server side
