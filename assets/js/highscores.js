//store some high scores here
var listEl = ('.scores')
var tableEl = $('#floor')
var defaultScores = [];
var emptyScores = [];
var defaultNames = [];
var currentUser = localStorage.getItem('userName');
var currentScore = localStorage.getItem('score');
var allScores = [
    {
        place: 0,
        user: 'General Kenobi',
        score: 40
    },
    {
        place: 0,
        user: 'General Grievous',
        score: 35
    },
    {
        place: 0,
        user: 'Roger Roger',
        score: 30
    },
    {
        place: 0,
        user: 'Dooku',
        score: 12
    },
    {
        place: 0,
        user: currentUser,
        score: currentScore,
    }  
];

for (i = 0; i < allScores.length; i++){
    tableEl.append('<tr>' + '<td>' + allScores[i].place + '</td>' + '<td>' + allScores[i].user + '</td>' + '<td>' + allScores[i].score + '</td>' + '</tr>')
};

// for (i = 0; i < allScores.length; i++){
// allScores.sort(function (a, b) {
//     if (a.score > b.score){
//         emptyScores.unshift[allScores];
//     } else {
//         emptyScores.push[allScores];
//     };
//     console.log(emptyScores)
// });
// };