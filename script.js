function changeColor(flag) {
  if (flag == 0) {
    var p1 = document.querySelector(`.player--0`);
    p1.classList.remove('player--active');
    var p2 = document.querySelector(`.player--1`);
    p2.classList.add('player--active');
  } else {
    var p2 = document.querySelector(`.player--0`);
    p2.classList.remove('player--active');
    var p1 = document.querySelector(`.player--1`);
    p1.classList.add('player--active');
  }
}
