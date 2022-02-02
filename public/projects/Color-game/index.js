// let's create this awesome game !

// first of all I created this colors list (array)...
let someColors = ["Blue", "White", "Yellow", "Red", "Pink", "Green", "Purple"];
let someHashColors = ["#3DB2FF", "#F5F5F5", "#FFF323", "#FF1700", "#FA4EAB", "#06ff00", "#8A39E1"];

// make these 2 variables to use to select random color from someColors array...
let myColor1 = "";
let myColor2 = "";

// make variables for displaying score to user...
let winScore = 0;
let lossScore = 0;

// made this function for showing scoreboard to user...
function scoreBoard() {
  document.getElementById("winScore").innerText = winScore;
  document.getElementById("lossScore").innerText = lossScore;
  if (winScore == 15 && lossScore == 0) {
    alert("Well played !");
    document.getElementById("gameWin").play();
  }
}

// made this function for user choose right answer or not !
function myResult() {
  //   console.log(`userColor : ${userColor} & myColor : ${myColor2}`);
  if (userColor == someColors[someHashColors.indexOf(`${myColor2}`)]) {
    winScore += 1;
    document.getElementById("win").play();
    // console.log('you won !', userColor, winScore);
  } else {
    lossScore += 1;
    document.getElementById("lose").play();
    // console.log('you loss !', userColor, lossScore);
  }
}

// made this variable to grap classlist of colors...
let myColors = document.getElementsByClassName("colors");

// call this randomcolors function...
forRandomColors();

function forRandomColors() {
  myColor1 = someColors[parseInt(Math.random() * someColors.length)];
  myColor2 = someHashColors[parseInt(Math.random() * someColors.length)];

  document.getElementById("showTxt").innerText = myColor1;
  document.getElementById("showTxt").style.color = myColor2;

  let randomHashColors = someHashColors.slice().sort(() => Math.random() - 0.5);

  // graping all font from colors classname (list) for apply random colors...
  for (let i = 0; i < randomHashColors.length; i++) {
    myColors[i].style.color = randomHashColors[i];
  }
  //   Array.from(myColors).forEach(function (element) {
  //     element.style.color = someHashColors[parseInt(Math.random() * someColors.length)];
  //   });
}

// made this variable for choose userColor
let userColor = "";

// creat some function for choose color is what ?
function blue() {
  userColor = "Blue";
  myResult();
  forRandomColors();
  scoreBoard();
  highestScore();
}
function white() {
  userColor = "White";
  myResult();
  forRandomColors();
  scoreBoard();
  highestScore();
}
function yellow() {
  userColor = "Yellow";
  myResult();
  forRandomColors();
  scoreBoard();
  highestScore();
}
function red() {
  userColor = "Red";
  myResult();
  forRandomColors();
  scoreBoard();
  highestScore();
}
function pink() {
  userColor = "Pink";
  myResult();
  forRandomColors();
  scoreBoard();
  highestScore();
}
function green() {
  userColor = "Green";
  myResult();
  forRandomColors();
  scoreBoard();
  highestScore();
}
function purple() {
  userColor = "Purple";
  myResult();
  forRandomColors();
  scoreBoard();
  highestScore();
}
document.getElementById("howToPlay").innerHTML = `
<p id="NoticeHowToPlay">How to play?</p>
<div class="note12">
<p>
Refresh this page...
</p>
<p>
The text is ${document.getElementById("showTxt").innerText} but text color is ${someColors[someHashColors.indexOf(`${myColor2}`)]} then you choose ${someColors[someHashColors.indexOf(`${myColor2}`)]} word from above buttons...
</p>
</div>
`;

// now this is the important part form me !

// now i want to add heighest score function using local storage...

// create a variable for heighest Score...
let hScore = 0;

// set this condition for when local storage clear then hscore set to 0
// otherwise when user first select wrong answere then its print null so...
if (localStorage.length === 0) {
  localStorage.setItem("hScore", 0);
  // console.log('local storage cleared');
}
function highestScore() {
  hScore = JSON.parse(localStorage.getItem("hScore"));
  if (lossScore < 1) {
    if (winScore > hScore) {
      hScore += 1;
      hScore = localStorage.setItem("hScore", JSON.stringify(hScore));
    }
  } else {
    let highestScore = document.getElementById("highestScore");
    highestScore.innerHTML = `Your highest winning score : ${hScore}`;
  }
  localStorage.getItem("hScore");
}
