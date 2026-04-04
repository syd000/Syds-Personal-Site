// STATE
let gameRunning = false;

let randomChoice;
let choiceConvert;
let chooseRock;
let choosePaper;
let chooseScissors;
let message;
let winCount;
let tieCount;
let loseCount;
let displayCount;

// START GAME
function startGame() {
  gameRunning = true;
  setStatus("Game started!");
  setStart("Reset");

  initGame();
}

// INITIALIZE GAME
function initGame() {
  choiceConvert = ["Rock🪨", "Paper📄", "Scissors✂️"]
  const game = document.getElementById("game");
  randomChoice = Math.floor(Math.random() * 3) + 1;

  game.innerHTML = `
    <p>Choose Rock Paper or Scissors</p>

    <button id="chooseRock">🪨</button>
    <button id="choosePaper">📄</button>
    <button id="chooseScissors">✂️</button>

    <p id="message"></p>
    <p id="displayCount"></p>
  `;

  chooseRock = document.getElementById("chooseRock");
  choosePaper = document.getElementById("choosePaper");
  chooseScissors = document.getElementById("chooseScissors");
  message = document.getElementById("message");
  displayCount = document.getElementById("displayCount");

  winCount = 0;
  tieCount = 0;
  loseCount = 0;

  chooseRock.onclick = () => checkWin(1);
  choosePaper.onclick = () => checkWin(2);
  chooseScissors.onclick = () => checkWin(3);
}

// UPDATE STATUS TEXT
function setStatus(text) {
  document.getElementById("status").innerText = text;
}
function setStart(text) {
  document.getElementById("start").innerText = text;
}

function checkWin(choice) {
  message.innerHTML = "You chose " + choiceConvert[choice - 1] + "<br>Computer chose " + choiceConvert[randomChoice - 1];
  if (randomChoice === choice) {
    message.innerHTML += "<br> = TIE!";
    tieCount++;
  } else if ((randomChoice - choice + 3) % 3 === 1) {
    message.innerHTML += "<br> = LOSE!";
    loseCount++;
  } else {
    message.innerHTML += "<br> = WIN!";
    winCount++;
  }
  displayCount.textContent = "Wins: " + winCount + " | Ties: " + tieCount + " | Loses: " + loseCount;
  randomChoice = Math.floor(Math.random() * 3) + 1;
}