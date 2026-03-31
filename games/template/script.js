// STATE
let gameRunning = false;

// START GAME
function startGame() {
  gameRunning = true;
  setStatus("Game started!");

  initGame();
}

// INITIALIZE GAME
function initGame() {
  const game = document.getElementById("game");

  game.innerHTML = `
    <p>Game content goes here</p>
  `;
}

// UPDATE STATUS TEXT
function setStatus(text) {
  document.getElementById("status").innerText = text;
}