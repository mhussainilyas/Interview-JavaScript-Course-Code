// ============================
//     Object Destructuring
// ============================

// let user = {
//   firstName: "muhammad",
//   lastName: "hussain",
//   "is married": false,
//   age: 21,
// };

// const { firstName, lastName, age, "is married": maritalStatus } = user;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(maritalStatus);

// ===============================================
//     Object Destructuring With Rest Operator
// ===============================================

// let user = {
//   firstName: "muhammad",
//   lastName: "hussain",
//   isMarried: false,
//   age: 21,
// };

// const { age, ...remainingProps } = user;

// console.log(age);
// console.log(remainingProps);

// ============================
//     Arrays Destructuring
// ============================

// let users = ["hussain", "suleman", "zaryab"];

// let [user1, user2, user3] = users;

// console.log(user1);
// console.log(user2);
// console.log(user3);

// ===============================================
//     Arrays Destructuring With Rest Operator
// ===============================================

let users = ["hussain", "suleman", "zaryab", "hamid"];

const [myName, ...remainingUsers] = users;

console.log(myName);
console.log(remainingUsers);
