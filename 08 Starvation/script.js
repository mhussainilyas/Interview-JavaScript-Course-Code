console.log("start");

setTimeout(() => {
  console.log("Timer function");
}, 1000);

let count = 0;
function repeat() {
  console.log(count);
  queueMicrotask(repeat);
  count++;
}

repeat();

console.log("end");
