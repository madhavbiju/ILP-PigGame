// let current0= document.getElementById("current--0");
// let current1= document.getElementById("current--1");

// let score1 = 49;
// document.getElementById('score--0').textContent = `${score1}`;

// let score2 = 89;
// document.getElementById('score--1').textContent = `${score2}`;

// let flag=0;
// if (flag==0){
//     score1=score1+
// }
// var score0 = 8;
// var current0 = 9;
// var flag = 0;
function btnHold() {
  if (flag == 0) {
    var current0 = document.getElementById('current--0');
    var score0 = score0 + current0;
    flag = 1;
    current0 = 0;
    // console.log(score0);
  } else if (flag == 1) {
    var current1 = document.getElementById('current--1');
    var score1 = score1 + current1;
    flag = 0;
    current1 = 0;
  }
}
console.log(score0);
