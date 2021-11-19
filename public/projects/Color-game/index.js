// let's create this awesome game !

// first of all I created this colors list (array)...
let someColors = ['blue', 'white', 'yellow', 'red', 'pink', 'green', 'purple'];

// make these 2 variables to use to select random color from someColors array...
let myColor1 = '';
let myColor2 = '';

// make variables for displaying score to user...
let winScore = 0;
let lossScore = 0;

// made this function for showing scoreboard to user...
function scoreBoard() {
    document.getElementById('winScore').innerText = winScore;
    document.getElementById('lossScore').innerText = lossScore;
    if ((winScore == 15) && (lossScore == 0)) {
        alert('Well played !')
        document.getElementById('gameWin').play();
    }
}

// made this function for user choose right answere or not !
function myResult() {
    if (userColor == myColor2) {
        winScore += 1;
        document.getElementById('win').play();
        // console.log('you won !', userColor, winScore);
    }
    else {
        lossScore += 1;
        document.getElementById('lose').play();
        // console.log('you loss !', userColor, lossScore);
    }
}

// made this variable to grap classlist of colors...
let myColors = document.getElementsByClassName('colors');

// call this randomcolors function...
forRandomColors();

function forRandomColors() {
    myColor1 = (someColors[parseInt(Math.random() * someColors.length)]);
    myColor2 = (someColors[parseInt(Math.random() * someColors.length)]);

    document.getElementById('showTxt').innerText = myColor1;
    document.getElementById('showTxt').style.color = myColor2;

    // graping all font from colors classname (list) for apply random colors...
    Array.from(myColors).forEach(function (element) {
        element.style.color = (someColors[parseInt(Math.random() * someColors.length)]);
    })
}

// made this variable for choose userColor
let userColor = '';

// creat some function for choose color is what ?
function blue() {
    userColor = 'blue';
    myResult();
    forRandomColors();
    scoreBoard();
    highestScore();
}
function white() {
    userColor = 'white';
    myResult();
    forRandomColors();
    scoreBoard();
    highestScore();
}
function yellow() {
    userColor = 'yellow';
    myResult();
    forRandomColors();
    scoreBoard();
    highestScore();
}
function red() {
    userColor = 'red';
    myResult();
    forRandomColors();
    scoreBoard();
    highestScore();
}
function pink() {
    userColor = 'pink';
    myResult();
    forRandomColors();
    scoreBoard();
    highestScore();
}
function green() {
    userColor = 'green';
    myResult();
    forRandomColors();
    scoreBoard();
    highestScore();
}
function purple() {
    userColor = 'purple';
    myResult();
    forRandomColors();
    scoreBoard();
    highestScore();
}
document.getElementById('howToPlay').innerHTML =
    `How to play?
    <br>
    <br>
    1. Refresh this page...
    <br>
    2. The text is ${document.getElementById('showTxt').innerText} but text color is ${myColor2} then you choose ${myColor2} word from above buttons...`


// now this is the important part form me !

// now i want to add heighest score function using local storage...

// create a variable for heighest Score...
let hScore = 0;

// set this condition for when local storage clear then hscore set to 0
// otherwise when user first select wrong answere then its print null so...
if (localStorage.length === 0) {
    localStorage.setItem('hScore', 0)
    // console.log('local storage cleared');

}
function highestScore() {

    hScore = JSON.parse(localStorage.getItem('hScore'));
    if (lossScore < 1) {
        if (winScore > hScore) {
            hScore += 1;
            hScore = localStorage.setItem('hScore', JSON.stringify(hScore));
        }
    }
    else {
        let highestScore = document.getElementById('highestScore');
        highestScore.innerHTML = `Your highest winning score : ${hScore}`;
    }
    localStorage.getItem('hScore');

}