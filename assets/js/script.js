//variables to be used later
var questionEl = $('#question');
var rootEl = $('.quiz');
var timeText = $('#timer');
var brattney = $('.brattney')
var startBtn = $('.start');
var answerBtns = $('.button');
var scoreArea = $('.score');
var inputEl = ('#input')
//starting time
var timeLeft = 60;
var answer;
var correctCount = 0;
var incorrectCount = 0;
var userName = $('#input').text;
var userAnswer;
//counter to keep track of what question youre on
var questCount = 0;
//empty array to store answers for questions
var choices = [];
//final score var
var score = 0;
//vars to hold quesitons and answers

var quest1 = {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<scripting>", "<script>", "<javascript>"]
};
var quest2 = {
    question: '"What is the correct JS syntax to change the content of the HTML element below? " " <p id="demo">This is a demonstration.</p>"',
    choices: ['"document.getElementByName("p").innerHTML = "Hello World!";', 'document.getElement("p").innerHTML = "Hello World!";', '#demo.innerHTML - "Hello World!";', 'document.getElementByld("demo").innerHTML "Hello World!";']
};
var quest3 = {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
        "The <head> section",
        "The <body> section",
        "The <footer> section",
        "Both the <head> section and the <body> section are correct"
    ]
};
var quest4 = {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    choices: ['<script name="xxx.js">', '<script src="xxx.js">', '<script href="xxx.js">', '<script id= "xxx.js">']
};
var quest5 = {
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    choices: ['if (i != 5)', 'if (i <> 5)', 'if (i =! 5) then ', 'if i <> 5']
};
var quest6 = {
    question: 'How do you write "Hello World" in an alert box?',
    choices: ['msgBox("Hello World");', 'msg("Hello World");', 'alertBox("Hello World ");', 'alert("Hello World");']
};
var quest7 = {
    question: 'How does a FOR loop start?',
    choices: ['for (i = 0; i <= 5)', 'for (i <= 5; i++)', 'for i = 1to5', 'for (i=0; i <= 5; i++)']
};
var quest8 = {
    question: 'How do you write a comment in JS?',
    choices: ['//This is a comment', '`This is a comment`', '<--This is a comment-->', '~This is a comment']
};
var quest9 = {
    question: 'How do you write an IF statement in JS?',
    choices: ['if i = 5 then', 'if i == 5 then', 'if i = 5', 'if (i == 5)']
};
var scores = {
    userName: [],
    highScore: []
};
var choices;
// array to hold all questions need to combine******
var questions = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9];
//hide elements not being used yet
$('.button').hide();
$('#input').hide();
questionEl.text('Click the button to start!');
//func to select a question and pull the choices from
function makeChoices() {
    if (questCount < questions.length) {
        choices = questions[questCount].choices
    }
};
//shuffle the order of the choices so theyre not the same whenretaking the quiz
function shuffleChoices(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] =
            [array[randomIndex], array[currentIndex]];
    }
};
//check the user input against the array of answers using question counter
function answerCheck() {
    if (userAnswer == answers[questCount]) {
        score = score + 5
        correctCount++
    } else if (userAnswer !== answers[questCount]) {
        timeLeft -= 5;
        incorrectCount++
    }
    questCount++;
};
// main quiz start and next question function
function startQuiz() {
    makeChoices();
    shuffleChoices(choices);
    $('.start').hide(800);
    $('.button').show(1000);
    $('#question').text(questions[questCount].question);
    $('.answer1').text(choices[0]);
    $('.answer2').text(choices[1]);
    $('.answer3').text(choices[2]);
    $('.answer4').text(choices[3]);
};
// listener takes the value of the button and checks it in the answer check func 
// also updates score on click
$('.button').on('click', function () {
    userAnswer = $(this).text();
    answerCheck();
    startQuiz();
    scoreArea.text("Your Score : " + score);
    if (questCount === 8) {
        endTest();
    }
});
//answer array to check against
var answers = ["<script>", 'document.getElementByld("demo").innerHTML "Hello World!";', 'Both the <head> section and the <body> section are correct', '<script src="xxx.js">', 'if (i != 5)', 'alert("Hello World");', 'for (i=0; i <= 5; i++)', '//This is a comment', 'if (i == 5)'];
// listener to store user initials and score in local storage
$('#input').keypress(function (event) {
    if (event.key === 'Enter') {
        if (userName === ' ' || userName === null) {
            window.alert('Please enter your initials. Press enter when finished.')
        } else {
            userName = (this).value;
            localStorage.setItem('userName', userName);
            localStorage.setItem('score', score);
        }
    }
});
//function runs at the end of the test
// hides answer butttons adds element to anounce end of test and final score
// brings up an input to enter initials
function endTest() {
    answerBtns.hide(800);
    startBtn.text("Try Again")
    brattney.text(
        'Your score was ' + score + '! ' +
        ' You got ' + correctCount + ' right and ' + incorrectCount + ' wrong!' +
        ' Would you like to try again?');
    brattney.show(800);
    $('#input').show(800);
    questCount = 0;
    $('.start').show(800)
    questionEl.text('Enter your initials to save your score!');
    timeLeft = 0;
};
// main timer function controls the timer
//ends test on timer end
function timer() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        $('#timer').text(timeLeft + " seconds left for the test.");
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeLeft = 0;
            $('#timer').text("Good Job!");
            endTest();
            questCount = 0;
        }
    }, 1000);
};
//listener to run funcs on start button press
// starts game and hides itself
// also serves as try again button 
startBtn.on('click', function () {
    startQuiz();
    timer();
    timeLeft = 60;
    brattney.hide()
    questCount = 0;
    questionEl.show()
    $('#input').hide();
    scoreArea.text("Your Score : " + score);
});