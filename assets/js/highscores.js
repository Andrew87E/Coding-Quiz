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
        place: 1,
        user: 'General Kenobi',
        score: 400
    },
    {
        place: 2,
        user: 'General Grievous',
        score: 350
    },
    {
        place: 3,
        user: 'Wedge Antilles',
        score: 300
    },
    {
        place: 4,
        user: 'Grand Admiral Thrawn',
        score: 120
    },
    {
        place: 5,
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