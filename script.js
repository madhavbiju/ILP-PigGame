// Ashna

document.addEventListener('DOMContentLoaded', function () {
  let scores, currentScore, activePlayer, isPlaying;

  const diceElement = document.querySelector('.dice');
  const rollButton = document.querySelector('.btn--roll');

  function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isPlaying = true;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
  }

  init();
  function rollDice() {
    if (isPlaying) {
      const dice = Math.floor(Math.random() * 6) + 1;
      diceElement.style.display = 'block';
      diceElement.src = 'dice-' + dice + '.png';

      if (dice !== 1) {
        currentScore += dice;
        document.getElementById('current--' + activePlayer).textContent =
          currentScore;
      }
    }
  }
  rollButton.addEventListener('click', rollDice);
});

// Navya

// JavaScript code
const myImg = document.getElementById('dice');

let randomValue = 6;
// console.log(randomValue)
function buttonClick() {
  const myImg = document.querySelector('img');
  if (randomValue == 1) myImg.src = 'assets/dice-1.png';
  else if (randomValue == 2) myImg.src = 'assets/dice-2.png';
  else if (randomValue == 3) myImg.src = 'assets/dice-3.png';
  else if (randomValue == 4) myImg.src = 'assets/dice-4.png';
  else if (randomValue == 5) myImg.src = 'assets/myImg-5.png';
  else if (randomValue==6) myImg.src = 'assets/dice-6.png';
  
}
