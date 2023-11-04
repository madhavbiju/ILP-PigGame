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
