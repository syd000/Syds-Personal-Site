// STATE
let gameRunning = false;

let randomNumber;
let guessInput;
let guessBtn;
let message;
let guessCount;
let countDisplay;

// START GAME
function startGame() {
  gameRunning = true;
  setStatus("Game started!");
  setStart("Reset");

  initGame();
}

// INITIALIZE GAME
function initGame() {
  const game = document.getElementById("game");
  randomNumber = Math.floor(Math.random() * 100) + 1;

  game.innerHTML = `
    <h1>Number Guessing Game</h1>

    <input id="guessInput" type="number" placeholder="Enter number 1-100">

    <button id="guessBtn">Guess</button>

    <p id="message"></p>
    <p id="count"></p>
  `;

  guessInput = document.getElementById("guessInput");
  guessBtn = document.getElementById("guessBtn");
  message = document.getElementById("message");
  countDisplay = document.getElementById("count");

  guessCount = 0;

  guessBtn.addEventListener("click", checkGuess);
}

// UPDATE STATUS TEXT
function setStatus(text) {
  document.getElementById("status").innerText = text;
}
function setStart(text) {
  document.getElementById("start").innerText = text;
}


function checkGuess() {

  guessCount++;
  let guess = Number(guessInput.value);

  if (guess === randomNumber) {
    message.textContent = guess + " is Correct!";
  }
  else if (guess < randomNumber) {
    message.textContent = guess + " is too low!";
  }
  else {
    message.textContent = guess + " is too high!";
  }

  countDisplay.textContent = "Guesses: " + guessCount;



}