// right click or contextmenu disable
window.oncontextmenu = function() { return false; }

// Declare variables
const countScore = document.querySelector('.count');
const finalResult = document.querySelector('.final-result');

const gameChoice = document.querySelector('.game-choice');
const gameResult = document.querySelector('.game-result');

const totalTry = document.querySelector('.try');
let tryCount = 0;

// count score
let score = 00;

// when user pick any answer
const pickAnswer = (pickedAns) => {
    let userAns = document.querySelector('.userAns');
    let cpAns = document.querySelector('.cpAns');

    let userPick = pickedAns;
    let cpPicked = cpAnswer();
    // console.log(`You picked : ${userPick} & Cp picked ${cpPicked}`);

    const loss = 'You lose..!';
    const won = 'You won..!';
    const tie = `It's tie..!`;

    // set images according user and pc choices...
    userAns.src = `./src/${userPick}.png`;
    cpAns.src = `./src/${cpPicked}.png`;

    if (userPick == cpPicked) {
        showResult(tie);
    }
    else if (userPick == 'rock' && cpPicked == 'paper') {
        showResult(loss);
    }
    else if (userPick == 'rock' && cpPicked == 'scissor') {
        showResult(won);
    }
    else if (userPick == 'paper' && cpPicked == 'scissor') {
        showResult(loss);
    }
    else if (userPick == 'paper' && cpPicked == 'rock') {
        showResult(won);
    }
    else if (userPick == 'scissor' && cpPicked == 'rock') {
        showResult(loss);
    }
    else if (userPick == 'scissor' && cpPicked == 'paper') {
        showResult(won);
    }

    // update total try
    tryCount++;
    if (tryCount <= 9) {
        totalTry.innerText = `Trial : 0${tryCount}`;
    }
    else {
        totalTry.innerText = `Trial : ${tryCount}`;
    }
}

// cp picked answer
const cpAnswer = () => {
    const choices = ['rock', 'paper', 'scissor'];
    let cpChoice = choices[parseInt(Math.random() * 3)];
    return cpChoice;
}

// Show result
const showResult = (result) => {
    if (result == 'You won..!') {
        score++;
        if (score <= 9) {
            countScore.innerText = `0${score}`;
        }
        else {
            countScore.innerText = `${score}`;
        }
    }
    gameChoice.style.display = 'none';
    gameResult.style.display = 'block';
    finalResult.innerText = result;
}

// play again
const playAgain = () => {
    gameResult.style.display = 'none';
    gameChoice.style.display = 'block';
}