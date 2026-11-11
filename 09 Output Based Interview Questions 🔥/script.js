// =================
//   Question # 01
// =================

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// =================
//   Question # 02
// =================

setTimeout(() => {
  console.log("DONE");
}, 0);

function repeat() {
  console.log("Microtask queue is running...");
  queueMicrotask(repeat);
}

repeat();

// =================
//   Question # 03
// =================

console.log(1);

new Promise((resolve) => {
  console.log(2);
  resolve();
}).then(() => console.log(3));

console.log(4);

// =================
//   Question # 04
// =================

async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

console.log("C");
test();
console.log("D");

// =================
//   Question # 05
// =================

Promise.resolve().then(() => {
  console.log("A");
  queueMicrotask(() => {
    console.log("B");
  });
});

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
