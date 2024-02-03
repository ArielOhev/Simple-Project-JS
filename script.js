const img = document.querySelector(".dice");
const Roll = document.querySelector(".roll");
const player1 = document.querySelector(".PLAYER--1");
const player0 = document.querySelector(".PLAYER--0");
const current1 = document.getElementById("current--1");
const current0 = document.getElementById("current--0");

let active_player = 1;
let current, score;
let playing = true;

function switchPlayer() {
  if (active_player === 1) {
    active_player = 0;
  } else {
    active_player = 1;
  }
}

function rollDice() {
  const dice = Math.trunc(Math.random() * 6) + 1;

  return dice;
}

Roll.addEventListener("click", function () {
  if (playing) {
  } else {
    switchPlayer();
  }
});

Roll.addEventListener("click", function () {
  const dice = rollDice();
  img.src = `dice-${dice}.png`;
  if (dice !== 1) {
    current += dice;
    if (active_player === 1) {
      player1.innerHTML = current;
    } else {
      player0.innerHTML = current;
    }
  } else {
    console.log(dice);
  }
});
