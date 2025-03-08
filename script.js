"use strict";

const diceEl = document.querySelector(".dice");
// const current_score0 = document.getElementById(".curscore--0");
// const current_score1 = document.getElementById(".curscore--1");
const total_score0 = document.getElementById(".totalscore--0");
const total_score1 = document.getElementById(".totalscore--1");
const button_roll_dice = document.querySelector(".roll_dice");
const button_hold = document.querySelector(".HOLD");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const button_new_game = document.querySelector(".new_game");

let activePlayer, cur_score, totalscores, playing;

function init() {
  activePlayer = 0;
  cur_score;
  totalscores = [0, 0];
  playing = true;
}
init();

function SetCurrentScore(score) {
  document.getElementById(`curscore--${activePlayer}`).textContent = score;
}

function TogglePlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("active");
  player1.classList.toggle("active");
  // diceEl.classList.add("hidden");
}

function SetTotalScore(score) {
  if (score !== 0) {
    totalscores[activePlayer] += score;
    document.getElementById(`totalscore--${activePlayer}`).textContent =
      totalscores[activePlayer];
  } else {
    document.getElementById(`totalscore--${activePlayer}`).textContent = 0;
  }
}

button_roll_dice.addEventListener("click", function () {
  if (playing) {
    const currentscore_activePlayer = document.getElementById(
      `curscore--${activePlayer}`
    ).textContent;
    // Roll the dice
    const random_num = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${random_num}.png`;
    // Check if the rolled dice is 1
    console.log(
      "before loop random number and cur score" + random_num,
      currentscore_activePlayer
    );
    if (random_num !== 1 && currentscore_activePlayer < 20) {
      // Add the numbers
      cur_score = Number(currentscore_activePlayer) + random_num;
      SetCurrentScore(cur_score);
      console.log(
        "after loop random number" + random_num,
        currentscore_activePlayer
      );
    } else {
      // set the current score to 0
      console.log("Entering else block");
      SetCurrentScore(0);
      TogglePlayer();
    }
  }
});

button_hold.addEventListener("click", function () {
  if (playing) {
    SetTotalScore(cur_score);
    SetCurrentScore(0);

    if (totalscores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("active");
      playing = false;
      diceEl.classList.add("hidden");
    } else {
      TogglePlayer();
      diceEl.classList.add("hidden");
    }
  }
});

button_new_game.addEventListener("click", function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  SetCurrentScore(0);
  document.getElementById("totalscore--0").textContent = 0;
  // activePlayer = activePlayer === 0 ? 1 : 0;
  SetCurrentScore(0);
  document.getElementById("totalscore--1").textContent = 0;
  player0.classList.remove("active");
  player1.classList.remove("active");
  player0.classList.add("active");
  diceEl.classList.add("hidden");
  init();
});

const poulomi = {
  firstName: "Poulomi",
  LastName: "Adhikary",
};

const poulomi2 = Object.assign({}, poulomi);
poulomi2.LastName = "Bhattacharya";

console.log(poulomi);
console.log(poulomi2);
