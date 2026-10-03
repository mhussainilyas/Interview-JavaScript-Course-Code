// ================================
//     Block Variable Shadowing
// ================================

// let alpha = 10;

// if (true) {
//   let alpha = 20;
//   console.log(alpha); // 20
// }

// console.log(alpha); // 10

// ===================================
//     Function Variable Shadowing
// ===================================

// let alpha = 10;

// function greet() {
//   let alpha = 20;
//   console.log(alpha); // 20
// }

// greet();

// console.log(alpha); // 10

// ========================
//     Legal Shadowing
// ========================

// let alpha = 100;

// if (true) {
//   let alpha = 200;
//   console.log(alpha); // 200
// }

// console.log(alpha); // 100

// =========================
//     Illegal Shadowing
// =========================

// let myName = "HSN";

// if (true) {
//   var myName = "JVR"; // Error Occurs
//   console.log(myName);
// }

// console.log(myName);
