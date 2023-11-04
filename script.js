// Ashna Randomizer

var scores, currentScore, activePlayer, isPlaying, dice;

const diceElement = document.querySelector('.dice');
const rollButton = document.querySelector('.btn--roll');

document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

scores = [0, 0];
currentScore = 0;
activePlayer = 0;
isPlaying = true;

function rollDice() {
  if (isPlaying) {
    dice = Math.floor(Math.random() * 6) + 1;
    diceRoll(dice);
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById('current--' + activePlayer).textContent =
        currentScore;
    }
  }
}

// Navya Dice Image
const myImg = document.getElementById('dice');
// JavaScript code

function diceRoll(randomValue) {
  const myImg = document.querySelector('img');
  if (randomValue == 1) myImg.src = 'assets/dice-1.png';
  else if (randomValue == 2) myImg.src = 'assets/dice-2.png';
  else if (randomValue == 3) myImg.src = 'assets/dice-3.png';
  else if (randomValue == 4) myImg.src = 'assets/dice-4.png';
  else if (randomValue == 5) myImg.src = 'assets/dice-5.png';
  else if (randomValue == 6) myImg.src = 'assets/dice-6.png';
}

// Aljo Result

// var flag = 0;
var score0 = 0;
var score1 = 0;
function btnHold() {
  if (activePlayer == 0) {
    // var current0 = document.getElementById('current--0');
    score0 = score0 + currentScore;
    activePlayer = 1;
    currentScore = 0;
    // console.log(score0);
    document.getElementById('score--0').textContent = `${score0}`;
    document.getElementById('current--0').textContent = `${currentScore}`;
    // document.getElementById('score--0') = score0;
    // console.log(score0);
    changeColor(activePlayer);
  } else if (activePlayer == 1) {
    // var current1 = document.getElementById('current--1');

    score1 = score1 + currentScore;
    activePlayer = 0;
    currentScore = 0;
    document.getElementById('score--1').textContent = `${score1}`;
    document.getElementById('current--1').textContent = `${currentScore}`;
    changeColor(activePlayer);
  }
}

// Mathew Visual

function changeColor(flag) {
  if (flag == 0) {
    var p1 = document.querySelector(`.player--1`);
    p1.classList.remove('player--active');
    var p2 = document.querySelector(`.player--0`);
    p2.classList.add('player--active');
  } else {
    var p2 = document.querySelector(`.player--0`);
    p2.classList.remove('player--active');
    var p1 = document.querySelector(`.player--1`);
    p1.classList.add('player--active');
  }
}
