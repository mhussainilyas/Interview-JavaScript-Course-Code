console.log("Start");

function heavyTask() {
  const start = Date.now();

  while (Date.now() - start < 3000) {
    // Blocking the main thread
  }
}

heavyTask();
console.log("End");
