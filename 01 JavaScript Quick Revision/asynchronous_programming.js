// =============================
//    Synchronous Programming
// =============================

// console.log("statement 01");
// console.log("statement 02");
// console.log("statement 03");
// console.log("statement 04");
// console.log("statement 05");

// =======================================
//    Error In Synchronous Programming
// =======================================

// console.log("Task 01");
// console.log("Task 02");
// throw new Error("something something!");
// console.log("Task 03");

// ==============================
//    Asynchronous Programming
// ==============================

// console.log("statement 01");

// setTimeout(() => {
//   console.log("statement 02");
// }, 4000);

// setTimeout(() => {
//   console.log("statement 03");
// }, 2000);

// setTimeout(() => {
//   console.log("statement 04");
// }, 3000);

// console.log("statement 05");

// =================================================
//    Error Handling In Asynchronous Programming
// =================================================

// console.log("Task 01");
// console.log("Task 02");

// try {
//   throw new Error("ya error mera apna ha!");
// } catch (err) {
//   console.error(err.message);
// }

// console.log("Task 03");

// ====================
//    async / await
// ====================

async function fetchData(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
}

fetchData("https://jsonplaceholder.typicode.com/users");
