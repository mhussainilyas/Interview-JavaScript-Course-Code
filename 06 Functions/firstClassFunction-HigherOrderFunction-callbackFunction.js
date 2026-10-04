// =================================
//    First Class Function (FCF)
// =================================

// function greet() {
//   console.log("Assalam o Alaikum!");
// }

// var fn = greet;

// fn();

// =================================
//    Higher Order Function (HOF)
// =================================
// execute() -> (HOF) -> In Example 01
// multiplier() -> (HOF) -> In Example 02

// function greet() {
//   console.log("Hye! How are you?");
// }

// function execute(fn) {
//   fn();
// }

// execute(greet);

// ===== Example 02 (HOF) =====

// function multiplier(x) {
//   return function (y) {
//     console.log(x * y);
//   };
// }

// let fn = multiplier(10);

// fn(5);

// ============================
//    Callback Function (CF)
// ============================

// setTimeout(function () {
//   console.log("Hussain");
// }, 2000);

// ===== Example 02 =====
// A() -> CF
// B() -> HOF

// function A() {
//   console.log("A");
// }

// function B(fn) {
//   console.log("B");
//   fn();
// }

// B(A);
