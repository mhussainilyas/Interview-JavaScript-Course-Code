// ======================
//    Normal Function
// ======================

// function generateRandomNumber() {
//   let num = Math.floor(Math.random() * 10);
//   return num;
// }

// console.log(generateRandomNumber());

// =========================
//    Function Expression
// =========================

// let generateRandomNum = function () {
//   let num = Math.floor(Math.random() * 10);
//   return num;
// };

// console.log(generateRandomNum());

// =========================
//    Fat Arrow Function
// =========================

// const generateRandomNum = () => {
//   let num = Math.floor(Math.random() * 10);
//   return num;
// };

// console.log(generateRandomNum());

// =========================
//    Anonymous Function
// =========================

// setTimeout(function () {
//   console.log("Hussain");
// }, 2000);

// =====================
//    IIFE Functions
// =====================

// (function () {
//   console.log("hussain");
// })();

// =============================
//    Parameters & Arguments
// =============================

function addTwoNumbers(a, b) {
  let sum = a + b;
  return sum;
}

let result = addTwoNumbers(10, 20);

console.log(result);
