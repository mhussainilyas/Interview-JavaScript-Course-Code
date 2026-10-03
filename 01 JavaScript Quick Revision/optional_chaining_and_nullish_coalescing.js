// ==========================
//     Optional Chaining
// ==========================

// let obj = {
//   id: 101,
//   name: "hussain",
//   age: 21,
// };

// obj = null;

// console.log(obj);

// console.log(obj?.id);
// console.log(obj?.name);
// console.log(obj?.age);

// ==========================
//     Nullish Coalescing
// ==========================
// works on "null" or "undefined" only

// let value = 0 ?? "Hussain";

// let value = "" ?? "Hussain";

// let value = null ?? "Hussain";

let value = undefined ?? "Hussain";

console.log(value);
