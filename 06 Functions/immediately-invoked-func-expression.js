// =============================================
//    Immediately Invoked Function Expression
// =============================================

// (function () {
//   console.log("Hye! Hussain");
// })();

// ***** Interniew Concept *****

// let addFunc = (function (a) {
//   return function () {
//     let sum = a + 2;
//     console.log(sum);
//   };
// })(10);

// addFunc();

// ***** Practicle Use Case *****

// if (true) {
//   let obj = (function () {
//     var count = 0;

//     return {
//       increment: () => {
//         return ++count;
//       },
//       getCount: () => {
//         return count;
//       },
//     };
//   })();

//   console.log(obj.getCount());
//   console.log(obj.increment());
// }
