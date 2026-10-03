// ========================
//       Example Code
// ========================

var num = 2;

function firstFunc() {
  var y = 5;
  console.log(y);
}

function secondFunc() {
  var x = 7;
  firstFunc();
  console.log(x);
}

secondFunc();

console.log(num);
