// STATE
let gameRunning = false;

let button;
let message;
let randomTime;
let timeoutId;
let startTime;
let colorContainer;

//setInterval() → runs something repeatedly every X milliseconds
//setTimeout() → runs something once after a delay
//Date.now() → measure elapsed time

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
  randomTime = Math.floor(Math.random() * 3000) + 3000;

  game.innerHTML = `
    <div id="color" style="width: 100px; height: 100px; background-color: green; margin: auto; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
      WAIT...
    </div>
    <button id="button">CLICK HERE</button>
    <p id="message"></p>
  `;

  colorContainer = document.getElementById("color");
  button = document.getElementById("button");
  message = document.getElementById("message");

  timeoutId = setTimeout(() => {
    colorContainer.style.backgroundColor = "red";
    colorContainer.innerText = "NOW!!";
    startTime = Date.now(); // Start the timer ONLY when it turns red
    setStatus("CLICK NOW!");
  }, randomTime);

  button.onclick = checkTime;
}

// UPDATE STATUS TEXT
function setStatus(text) {
  document.getElementById("status").innerText = text;
}
function setStart(text) {
  document.getElementById("start").innerText = text;
}

function checkTime() {
  if (!gameRunning) return;

  if (!startTime) {
    // If startTime hasn't been set, they clicked TOO EARLY
    clearTimeout(timeoutId); // Stop the color from ever changing
    message.textContent = "Too early!";
    colorContainer.style.backgroundColor = "yellow";
    colorContainer.style.color = "black";
    colorContainer.innerText = "FAIL";
  } else {
    // Success! Calculate reaction time
    const elapsed = (Date.now() - startTime) / 1000;
    message.textContent = `Reaction Time: ${elapsed.toFixed(3)}s`;
    colorContainer.innerText = "DONE";
  }

  clearTimeout(timeoutId);
  startTime = null;
  gameRunning = false;
}