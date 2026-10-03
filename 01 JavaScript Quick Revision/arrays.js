// ========================
//     Basics Of Arrays
// ========================

// let data = [101, "hussain", true];

// console.log(data);

// ====================
//     Array Length
// ====================

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.length);

// ====================
//     Array Index
// ====================

// let users = ["Hussain", "Suleman", "Zaryab"];

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);

// ========================
//     Array Mutability
// ========================

// let users = ["Hussain", "Suleman", "Zaryab"];

// console.log(users);

// users[0] = "Hussain Ilyas";

// console.log(users);

// ==========================
//     Loop Through Array
// ==========================

// let users = ["Hussain", "Suleman", "Zaryab"];

// for (let name of users) {
//   console.log(name);
// }

// ======================
//     Array Mathods
// ======================

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let subArr = arr.slice(1, 5);
// console.log(subArr);

// arr.splice(1, 1);
// arr.splice(1, 0, 1.1, 1.2);
// arr.splice(1, 1, 10);
// console.log(arr);

// arr.push(100);
// console.log(arr);

// let deletedElem = arr.pop();
// console.log(arr, deletedElem);

// arr.unshift(200);
// console.log(arr);

// let deletedElem = arr.shift();
// console.log(arr, deletedElem);

// ===============================
//     Array Iteration Mathods
// ===============================

// let arr = [1, 2, 3, 4, 5];

// ***** arr.map() *****

// let newArr = arr.map((elem, index, fullArr) => {
//   return elem + `${elem}`;
// });

// console.log(newArr);

// ***** arr.filter() *****

// let oddNums = arr.filter((elem, index, fullArr) => {
//   return elem % 2 !== 0;
// });

// console.log(oddNums);

// ***** arr.reduce() *****

// let sum = arr.reduce((acc, elem, index, fullArr) => {
//   return (acc += elem);
// }, 0);

// console.log(sum);

// =====================
//     Array Sorting
// =====================

let nums = [7, 10, 4, 8];

let users = ["hussain", "hamid", "ali", "bilal"];

// ***** string sorting *****

// let ascSortArr = users.sort();
// let decSortedArr = users.sort().reverse();
// console.log(sortedArr);

// ***** string sorting *****

// let ascSortArr = nums.sort((a, b) => {
//   return a - b;
// });

let decSortArr = nums.sort((a, b) => {
  return b - a;
});

console.log(decSortArr);
