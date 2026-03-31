// GAME VAR
const WORDS = ["apple", "brick", "crane", "plant", "ghost", "flame", "shark"];

let answer = WORDS[new Date().getDate() % WORDS.length];
let attempts = [];
let maxAttempts = 6;

// STATE
let gameRunning = false;

// START GAME
function startGame() {
  gameRunning = true;
  attempts = [];
  answer = WORDS[Math.floor(Math.random() * WORDS.length)];
  
  setStatus("Game started!");
  setStart("Reset");

  initGame();
  renderGrid();
  updateColors();
  
}

// INITIALIZE GAME
function initGame() {
  const game = document.getElementById("game");

  game.innerHTML = `
    <div id="grid"></div>

    <input id="guessInput" maxlength="5" placeholder="Enter 5-letter word" />
    <br><br>
    <button onclick="submitGuess()">Submit</button>

  `;
}

// UPDATE STATUS TEXT
function setStatus(text) {
  document.getElementById("status").innerText = text;
}
function setStart(text) {
  document.getElementById("start").innerText = text;
}

function renderGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (let i = 0; i < maxAttempts; i++) {
    let row = document.createElement("div");
    row.className = "row";

    let guess = attempts[i] || "";

    for (let j = 0; j < 5; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";

      cell.innerText = guess[j] || "";
      row.appendChild(cell);
    }

    grid.appendChild(row);
  }
}

function submitGuess() {
  const input = document.getElementById("guessInput");
  let guess = input.value.toLowerCase();

  if (guess.length !== 5) {
    setStatus("Enter a 5-letter word");
    return;
  }

  if (attempts.length >= maxAttempts) {
    setStatus("No more attempts!");
    return;
  }

  attempts.push(guess);
  input.value = "";

  renderGrid();
  updateColors();

  if (guess === answer) {
    setStatus("🎉 You win!");
    setStart("Try Again");
  } else if (attempts.length === maxAttempts) {
    setStatus("❌ Game over. Answer was: " + answer);
    setStart("Try Again");
  }
}

function updateColors() {
  const rows = document.querySelectorAll(".row");

  rows.forEach((row, rowIndex) => {
    const guess = attempts[rowIndex];
    if (!guess) return;

    const cells = row.children;

    for (let i = 0; i < 5; i++) {
      let letter = guess[i];

      if (letter === answer[i]) {
        cells[i].style.background = "green";
      } else if (answer.includes(letter)) {
        cells[i].style.background = "goldenrod";
      } else {
        cells[i].style.background = "#444";
      }

      cells[i].style.color = "white";
    }
  });
}