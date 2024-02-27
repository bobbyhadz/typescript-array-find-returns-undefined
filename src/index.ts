export {};

// Array.find() possibly undefined in TypeScript

// EXAMPLE 1 - Use a type guard to solve the error

const arr = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bobby Hadz' },
  { id: 3, name: 'Carl' },
];

const result = arr.find((element) => {
  return element.id === 2;
});

// 👇️ result is object or undefined here

if (result !== undefined) {
  // 👇️ result is an object here
  console.log(result.name.toUpperCase()); // 👉️ BOBBY HADZ
}

// ---------------------------------------------------

// // EXAMPLE 2 - Forgetting to return a value from the callback function

// const arr = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bobby Hadz' },
//   { id: 3, name: 'Carl' },
// ];

// const result = arr.find((element) => {
//   element.id === 2;
// });

// console.log(result); // 👉️ undefined

// ---------------------------------------------------

// // EXAMPLE 3 - Make sure to return a value from the callback function

// const arr = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bobby Hadz' },
//   { id: 3, name: 'Carl' },
// ];

// // 👇️ implicit return
// const result = arr.find((element) => element.id === 2);
// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 4 - Solve the error using the optional chaining operator

// const arr = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bobby Hadz' },
//   { id: 3, name: 'Carl' },
// ];

// const result = arr.find((element) => element.id === 2);

// // 👇️ "BOBBY HADZ"
// console.log(result?.name.toUpperCase());
