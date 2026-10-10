// function greet() {
//   console.log("hello world!");
// }

// function execute(fn) {
//   console.log("this is execute function");
//   fn();
// }

// execute(greet); // here "greet" is callback func.
// execute(greet()); // here "greet" is not callback func

// ===========================
//   Named Callback function
// ===========================

// function alpha() {
//   console.log("Hye! alpha");
// }

// function execute(fn) {
//   fn();
// }

// execute(alpha);

// ===============================
//   Anonymous Callback function
// ===============================

// function execute(fn) {
//   fn();
// }

// execute(function () {
//   console.log("Hussain");
// });

// ===========================
//   Arrow Callback function
// ===========================

// function execute(fn) {
//   fn();
// }

// execute(() => {
//   console.log("Hello from arrow CF");
// });

// ===================================================
// Callback function with parameters and return values
// ===================================================

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const product = (a, b) => a * b;

// function calculate(a, b, func) {
//   return func(a, b);
// }

// let result = calculate(20, 10, add);
// let result = calculate(20, 10, subtract);
// let result = calculate(20, 10, product);
// console.log(result);

// =======================================
// Callback functions with Event Listeners
// =======================================

// let btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   console.log("clicked!");
// });

// =============================
// Synchronous callback function
// =============================

// const nums = [1, 2, 3, 4, 5];

// nums.map(function (item) {
//   console.log(item);
// });

// ==============================
// Asynchronous callback function
// ==============================

console.log("first line");

setTimeout(function () {
  console.log("timer function");
}, 3000);

console.log("last line");
