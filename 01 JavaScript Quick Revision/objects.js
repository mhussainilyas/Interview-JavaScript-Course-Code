// =========================
//     Basics Of Objects
// =========================

// let user = {
//   id: 101,
//   name: "hussain",
//   city: "lahore",
//   "is student": true,
// };

// console.log(user);

// console.log(user.name);

// console.log(user["is student"]);

// =========================
//      Object Methods
// =========================

// let user = {
//   id: 101,
//   name: "hussain",
//   city: "lahore",
//   "is student": true,
// };

// let objKeys = Object.keys(user);
// console.log(objKeys);

// let objValues = Object.values(user);
// console.log(objValues);

// let objKeyValArr = Object.entries(user);
// console.log(objKeyValArr);

// let hasProp = user.hasOwnProperty("city");
// console.log(hasProp);

// =============================
//      Loop Through Objects
// =============================

let obj = {
  id: 101,
  name: "hussain",
  age: 21,
};

for (let key in obj) {
  console.log(`${key} - ${obj[key]}`);
}
