let x = 10;

function outer() {
  let x = 20;
  inner();
}

function inner() {
  console.log(x);
}

outer();
