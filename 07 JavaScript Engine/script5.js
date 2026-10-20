console.log("Start");

// *** It will go inside Task Queue (Low Priority) ***
setTimeout(() => {
  console.log("Callback B");
}, 0);

// *** It will go inside Microtask Queue (High Priority) ***
Promise.resolve().then(() => {
  console.log("promise A");
});

console.log("End");
