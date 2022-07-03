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
    choices: ["<js>", "<scripting>", "<script>","<javascript>"]
};
var quest2 = { 
    question: "What is the correct ",
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
// array to hold all questions need to combine******
var questions = [quest1, quest2, quest3, quest4, quest5];
//hide elements not being used yet
$('.button').hide();
$('#input').hide();
questionEl.hide();
//func to select a question and pull the choices from
function makeChoices() {
if (questCount < questions.length) {
    choices = questions[questCount].choices
}};
//shuffle the order of the choices so theyre not the same whenretaking the quiz
function shuffleChoices(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = 
        [array[randomIndex], array[currentIndex]];
}};
//check the user input against the array of answers using question counter
function answerCheck() {
    if(userAnswer == answers[questCount]) {
        score = score + 5
        correctCount++
    }else if (userAnswer !== answers[questCount]){
        timeLeft -= 5;
        incorrectCount++
}
 questCount++;
}
// main quiz start and next question function
function startQuiz () {
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
$('.button').on('click', function(){
    userAnswer = $(this).text();
    answerCheck();
    startQuiz();
    scoreArea.text("Your Score : " + score);
    if(questCount === 4) {
        endTest();
}});
// listener to store user initials and score in local storage
$('#input').keypress(function(event){
    if(event.key === 'Enter') {
        if(userName === ' ' || userName === null){
            window.alert('Please enter your initials. Press enter when finished.')
        } else {
            userName = (this).value;
        localStorage.setItem('userName', userName);
        localStorage.setItem('score', score);
        }
}});
//function runs at the end of the test
// hides answer butttons adds element to anounce end of test and final score
// brings up an input to enter initials
function endTest () {
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
    // questionEl.append(makeInput)
}; 
// main timer function controls the timer
//ends test on timer end
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
//listener to run funcs on start button press
// starts game and hides itself
// also serves as try again button 
startBtn.on('click', function(){
    startQuiz();
    timer();
    timeLeft = 60;
    brattney.hide()
    questCount = 0;
    questionEl.show()
    $('#input').hide();
    scoreArea.text("Your Score : " + score);
});




/*
TO-DO
randomize question order
*/