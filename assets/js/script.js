var questionEl = $('#question');
var rootEl = $('.quiz');
var timeText = $('#timer');
var brattney = $('.brattney')
var startBtn = $('.start');
var answerBtns = $('.button');
var scoreArea = $('.score');
var inputEl = ('#input')
var timeLeft = 15;
var answer;
var correctCount = 0;
var incorrectCount = 0;
var userName = $('#input').text;
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
var answers = ["alerts", "parentheses", "all of the above", "quotes", "console.log"];
var scores = {
    userName: [],
    highScore: []
};
var choices;
var questions = [quest1, quest2, quest3, quest4, quest5];

$('.button').hide();
$('#input').hide();

function makeChoices() {
if (questCount < questions.length) {
    choices = questions[questCount].choices
}};

function shuffleChoices(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = 
        [array[randomIndex], array[currentIndex]];
}};

console.log(questCount)

function answerCheck() {
    console.log(userAnswer);
    if(userAnswer == answers[questCount]) {
        score = score + 5
        correctCount++
    }else if (userAnswer !== answers[questCount]){
        timeLeft -= 5;
        incorrectCount++
}
 questCount++;
 console.log(score)
}

function startQuiz () {
    makeChoices();
    shuffleChoices(choices);
    $('.start').hide(800)
    $('.button').show(1000);
    $('#question').text(questions[questCount].question);
    $('.answer1').text(choices[0]);
    $('.answer2').text(choices[1]);
    $('.answer3').text(choices[2]);
    $('.answer4').text(choices[3]);
};

$('.button').on('click', function(){
    console.log("answer button works");
    userAnswer = $(this).text();
    answerCheck();
    console.log(questCount);
    startQuiz();
    $('.score').text("Your Score " + score);
});

$('#input').keypress(function(event){
    if(event.key === 'Enter') {
        if(userName === ' ' || userName === null){
            window.alert('Please enter your initials. Press enter when finished.')
        } else {
            userName = (this).value;
        localStorage.setItem('userName', userName);
        localStorage.setItem('score', score);
        console.log(userName);
        console.log(score);
}}});


function endTest () {
    answerBtns.hide(800);
    startBtn.text("Try Again")
    brattney.text('Your score was ' + score + '! ' + ' Would you like to try again?')
    brattney.show(800);
    $('#input').show(800);
    questCount = 0;
    $('.start').show(800)
    scoreBoard();
}; 

function scoreBoard() {
    questionEl.text('Enter your initials to save your score!');
    questionEl.append(makeInput)
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
            questCount = 0;
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
    $('#input').hide();
});




/*
TO-DO
randomize question order
store high scores server side
*/