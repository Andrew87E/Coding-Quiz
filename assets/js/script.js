var questionEl = $('#question');
var rootEl = $('.quiz');
var timeText = $('#timer');
var brattney = $('.brattney')
var startBtn = $('.start');
var answerBtns = $('.button');
var scoreArea = $('.score');
var timeLeft = 15;
var answer;
var userAnswer;
var questCount = 0;
var choices = [];
var score = 0;
var quest1 = { 
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "numbers","alerts"]
};
var quest2 = { 
    question: "The condition in an if / else statement is enclosed within .",
    choices: ["quotes", "curly brackets", "square brackets", "parentheses"]
};
var quest3 = {
    question: "Arrays in JavaScript can be used to store .",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ]
};
var quest4 = { 
    question: "String values must be enclosed within __ when being assigned to variables.",
    choices: ["commas", "curly brackets", "parentheses", "quotes"]
};
var quest5 = { 
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"]
};
var answers = ["alerts", "parentheses", "all of the above", "quotes", "console.log"]
var scores = {
    userName: [],
    highScore: []
};
var choices;
var questions = [quest1, quest2, quest3, quest4, quest5];

$('.button').hide();

function makeChoices() {
if (questCount < questions.length) {
    choices = questions[questCount].choices
}};

function shuffleChoices(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
}};

function quest(questCount) {
if (questCount > (questions.length-1)){
    questCount === 0
}};

function startQuiz () {
    makeChoices();
    shuffleChoices(choices);
    $('.button').show(1000);
    $('#question').text(questions[questCount].question);
    $('.answer1').text(choices[0]);
    $('.answer2').text(choices[1]);
    $('.answer3').text(choices[2]);
    $('.answer4').text(choices[3]);
};
$('.score').text("Your Score " + score);

$('.button').on('click', function(){
    console.log("answer button works");
    userAnswer = $(this).text();
    questCount++;
    quest(questCount);
    startQuiz();
    console.log(quest)
    console.log(questCount)
    for(let i = 0; i < answers.length; i++) {
        if(userAnswer[0, 1, 2, 3 ,4].indexOf(answers)) {
            score = score + 5
            break;
        }else if (userAnswer !== answers[i]){
            youGotThatShitWrong()
            break;
        }
}});

function youGotThatShitWrong() {
    timeLeft -= 5;
    console.log("yougotthatshitwrong")
}

function playAgain() {
    
}

function endTest () {
    questionEl.hide();
    answerBtns.hide();
    startBtn.text("Try Again")
    brattney.text('Would you like to try again? Because my wife told me to.')
    brattney.show();
    playAgain();
    questCount = 0;
}; 

function timer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        $('#timer').text(timeLeft + " seconds left for the test.");
          if(timeLeft <= 0) {
            clearInterval(timerInterval);
            timeLeft = 0;
            $('#timer').text("Good Job!");
            endTest();
        }
        }, 1000);
};

startBtn.on('click', function(){
    startQuiz();
    timer();
    console.log('on click works')
    timeLeft = 30;
    brattney.hide()
    questCount = 0;
    questionEl.show()
});