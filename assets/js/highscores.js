//store some high scores here
var listEl = ('.scores')
var defaultScores = [];
var defaultNames = [];
updateLeaderboardView();
// function makeCurrent () {
//     getScores();
//     currentUser = [userName, score];
// }

// function getScores(){
//     return localStorage.getItem(userName, score);
// }

function updateLeaderboardView() {
    let currentUser = localStorage.getItem('userName')
    let currentScore = localStorage.getItem('score')
    console.log(currentUser)
    console.log(currentScore)

    let tableRow = $('<tr>','<td>', currentUser, '</td>','<td>', currentScore, '</tr>');
    let tabEl = $('#floor')
    tabEl.append(tableRow);
};



function generateLeaderboard() {
    playerArray.sort(sortDec)
    

}






// for(i = 0; i <playerArray.length; i++) {
//     if (currentUser[1] > playerArray.score) {

//     }
// }






//for loop to checkhigh scores
//order scores big to small
//func print to score list

//store scores.name
//print scores.highscore

