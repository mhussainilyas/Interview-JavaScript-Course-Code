// ==================
//    Block Scope
// ==================

// if (true) {
//   let blockLet = 10;
//   console.log(blockLet);

//   const blockConst = 20;
//   console.log(blockConst);

//   var blockVar = 30;
//   console.log(blockVar);
// }

// console.log(blockVar); // 30
// console.log(blockConst); // Error
// console.log(blockLet); // Error

// ====================
//    Function Scope
// ====================

// function greet() {
//   let funcLet = "HSN";
//   console.log(funcLet);

//   const funcConst = "JVR";
//   console.log(funcConst);

//   var funcVar = "HSNJVR";
//   console.log(funcVar);
// }

// greet();

// console.log(funcVar); // Error
// console.log(funcConst);  // Error
// console.log(funcLet); // Error

// ===================
//    Global Scope
// ===================

// var globalVar = 10;
// let globalLet = 20;
// const globalConst = 30;

// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// function addNumbers() {
//   let sum = globalConst + globalLet + globalVar;
//   return sum;
// }

// console.log("sum = ", addNumbers());

// if (true) {
//   console.log(globalConst);
//   console.log(globalLet);
//   console.log(globalVar);
// }
