// ===========================
//     Function Declaration
// ===========================
// Function declaration is also called "function statement"

// greet();

// function greet() {
//   console.log("Hye! HSN");
// }

// ===========================
//     Function Expression
// ===========================

// greetFunc();

// const greetFunc = function () {
//   console.log("Assalam-o-alaikum!");
// };

// ==========================
//     Fat Arrow Function
// ==========================

// greet();

// var greet = () => {
//   console.log("Hello from fat arrow func.");
// };

// ===================================================
//     Function Declaration v/s Fat Arrow Function
// ===================================================
// 1) Syntax
// 2) Hoisting
// 3) Implicit return in arrow func
// 4) single parameter
// 5) arguments in function declaration
// 6) "this" keyword
// 7) object return

// let obj = {
//   name: "HSN",
//   greet: function () {
//     console.log("Hye!", this.name);
//   },
//   info: () => {
//     console.log(this.name);
//   },
// };

// obj.greet(); // Hye! HSN
// obj.info(); // ""

// ***** Function Declaration *****

// console.log(greet(1, 2, 3, 4, 5));

// function greet() {
//   return arguments;
// }

// ***** Fat Arrow Function *****

// var greet = name => name;

// console.log(greet("HSN"));

// var funcObj1 = () => ({
//   id: 101,
//   name: "HSN",
//   age: 21,
// });

// Or

// var funcObj2 = () => {
//   return {
//     id: 101,
//     name: "HSN",
//     age: 21,
//   };
// };

// ===================================================
//     Function Declaration v/s Function Expression
// ===================================================
// 1) Hoisting

// ***** Function Declaration *****

// greet();

// function greet() {
//   console.log("Hussain");
// }

// ***** Function Expression *****

// greetFunc();

// var greetFunc = function () {
//   console.log("Hussain");
// };
