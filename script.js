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
