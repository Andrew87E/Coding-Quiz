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
        score: 30
    },
    {
        place: 0,
        user: 'Wedge Antilles',
        score: 20
    },
    {
        place: 0,
        user: 'Grand Admiral Thrawn',
        score: 5
    },
    {
        place: 0,
        user: currentUser,
        score: currentScore,
    }
];
// loop to sort the array of scores
var sorted = allScores.sort((a, b) => b.score - a.score)
for (i = 0; i < sorted.length; i++) {
    sorted[i].place = i + 1;
};
// loop to add the scores to the table
for (i = 0; i < allScores.length; i++) {
    tableEl.append('<tr>' + '<td>' + sorted[i].place + '</td>' + '<td>' + sorted[i].user + '</td>' + '<td>' + sorted[i].score + '</td>' + '</tr>')
};