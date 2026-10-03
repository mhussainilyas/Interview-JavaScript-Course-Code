// =========================
//     Basics Of Strings
// =========================

// let str = "I'm Muhammad Hussain";

// console.log(str);

// ============================
//     String Concatination
// ============================

// let str = "hussain";

// let resultantStr = str + 7 + "dhikna chikna" + (6 + 7);

// console.log(resultantStr);

// ============================
//      Template Literals
// ============================

// let userName = "hussain";
// let userAge = 21;
// let userCity = "lahore";
// let userInfo = `${userName} is ${userAge} years old and lives in ${userCity}`;
// console.log(userInfo);

// let num = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }

// ========================
//     Length Of String
// ========================

// let str = "This is a string";

// console.log(str.length);

// ========================
//     Methods Of String
// ========================

let str = "Muhammad Hussain";

// let upperStr = str.toUpperCase();

// let lowerStr = str.toLowerCase();

// let subStr = str.slice(2, 8);

// let strArr = str.split("");
// let strArr = str.split(" ");
// let strArr = str.split("a");

// let strWithoutSpace = str.trim();
// let strWithoutSpace = str.trimStart();
// let strWithoutSpace = str.trimEnd();

// let newStr = str.replace("a", "AA");

let newStr = str.replaceAll("a", "AA");

console.log(newStr);
