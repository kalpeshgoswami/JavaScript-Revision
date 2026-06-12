function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();

// const global = "global";

// function outer() {
//   const outer = "outer";

//   function inner() {
//     const inner = "inner";

//     console.log(inner);
//     console.log(outer);
//     console.log(global);
//   }

//   inner();
// }

// outer();

