// original js written in vanilla js
//kept for posterity 
var scoreboard;
var questionArea = document.querySelector("#question")
var timeText = document.querySelector("#timer")
var startButton = document.querySelector(".start")
var answerButton1 = document.querySelector(".answer1")
var answerButton2 = document.querySelector(".answer2")
var answerButton3 = document.querySelector(".answer3")
var answerButton4 = document.querySelector(".answer4")
var scoreArea = document.querySelector(".score")
var allbtn = document.querySelectorAll(".button")
console.log(allbtn) //element target (if === answer)
var timeLeft = 65;
var answer;
var random = Number(Math.floor(Math.random * question.length));
var questCount = 0;
var choices = [];
var score = 0;

var quest1 = { 
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "numbers"],
    answer: "alerts"
};
var quest2 = { 
    question: "The condition in an if / else statement is enclosed within .",
    choices: ["quotes", "curly brackets", "square brackets"],
    answer: "parentheses"
};
var quest3 = {
    question: "Arrays in JavaScript can be used to store .",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
    ],
    answer: "all of the above"
};
var quest4 = { 
    question: "String values must be enclosed within __ when being assigned to variables.",
    choices: ["commas", "curly brackets", "parentheses"],
    answer: "quotes"
};
var quest5 = { 
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops"],
    answer: "console.log"
};

var scores = {
    userName: [],
    highScore: []
};

var questions = [quest1, quest2, quest3, quest4, quest5];

answerButton1.setAttribute("style", "visibility:hidden");
answerButton2.setAttribute("style", "visibility:hidden");
answerButton3.setAttribute("style", "visibility:hidden");
answerButton4.setAttribute("style", "visibility:hidden");
questionArea.setAttribute("style", "visibility:hidden");

function makeChoices() {
  if (questCount < questions.length) {
    choices = questions[questCount].choices.concat(questions[questCount].answer)
  } else {
    timeLeft -= timeLeft
  }
}

function shuffleChoices(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function quest(questCount) {
  if (questCount > (questions.length-1)){
    questCount === 0
  }
}

function showSomeQuestions (){
  makeChoices();
  shuffleChoices(choices);
  questionArea.textContent = questions[questCount].question
  answerButton1.textContent = choices[0]
  answerButton2.textContent = choices[1]
  answerButton3.textContent = choices[2]
  answerButton4.textContent = choices[3]
}

function answerCheck() {
  if (answer === questions[questCount].answer){
  score += 5;
} else {
    timeLeft -=5;
  }
}

startButton.addEventListener("click", function(){
  timer();
});

answerButton1.addEventListener("click", function(){
  answer = answerButton1.textContent;
  questCount++;
  quest(questCount);
  showSomeQuestions();
  answerCheck();
  console.log(answer)
});

answerButton2.addEventListener("click", function(){
  answer = answerButton2.textContent;
  questCount++;
  quest(questCount);
  showSomeQuestions();
  answerCheck();
  console.log(answer)
});

answerButton3.addEventListener("click", function(){
  answer = answerButton3.textContent;
  questCount++;
  quest(questCount);
  showSomeQuestions();
  answerCheck();
  console.log(answer);
});

answerButton4.addEventListener("click", function(){
  answer = answerButton4.textContent;
  questCount++;
  quest(questCount);
  showSomeQuestions();
  answerCheck();
  console.log(answer)
});

function timer() {
    startButton.setAttribute("style", "visibility:hidden");
    answerButton1.setAttribute("style", "visibility:visible");
    answerButton2.setAttribute("style", "visibility:visible");
    answerButton3.setAttribute("style", "visibility:visible");
    answerButton4.setAttribute("style", "visibility:visible");
    timeText.setAttribute("style", "visibility:visible");
    questionArea.setAttribute("style", "visibility:visible");
  showSomeQuestions();
  console.log(choices)
  
    var timerInterval = setInterval(function() {
    timeLeft--;
    timeText.textContent = timeLeft + " seconds left for the test.";
    scoreArea.textContent = "Your Score: " + score
  
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
};
 

//time subtracts from clock on wrong answer
//timer starts on question
//new question on answer
//save scoreboard
// answer buttons random order (swap array after completion??)  for(let i = 0; i < questions.question.length; i++) {}
// questions random order (swap array after completion??) question[Math.floor(Math.random() * questions.length)]
// store scoreboard server side