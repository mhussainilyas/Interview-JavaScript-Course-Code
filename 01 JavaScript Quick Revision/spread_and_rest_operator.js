// =======================
//     Spread Operator
// =======================

// let arr = [1, 2, 3];
// let copyArr = [...arr];
// copyArr.push(100);
// console.log(arr);
// console.log(copyArr);

// const obj = { id: 101, name: "hussain", age: 21 };
// const copyObj = { ...obj };
// copyObj.city = "lahore";
// console.log(obj);
// console.log(copyObj);

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let mergedArr = [...arr1, 100, ...arr2, 200];
// console.log(mergedArr);

// let obj1 = { id: 101, name: "hussain" };
// let obj2 = { age: 21, city: "lahore" };
// let mergedObj = { ...obj1, ...obj2, passion: "development" };
// console.log(mergedObj);

// const sum = (a, b, c) => console.log(a + b + c);
// const arr = [10, 15, 20];
// sum(...arr);

// =====================
//     Rest Operator
// =====================

const sum = (...nums) => {
  return nums.reduce((acc, num) => {
    return acc + num;
  }, 0);
};

// let result = sum(1, 2);
// let result = sum(1, 2, 3);
// let result = sum(1, 2, 3, 4);
let result = sum(1, 2, 3, 4, 5);

console.log(result);
