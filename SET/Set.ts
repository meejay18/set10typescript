//  Set Inteval

// const renderMyName = setInterval(() => {
//   console.log("My Name is Mije");
//   clearInterval(renderMyName);
// }, 1000);

// //  Set Timeout
// const welcomeUser = setTimeout(() => {
//   console.log("Welcome User");
// }, 1000);

// const displayNote = setImmediate(() => {
//   console.log("Render Immediate Function Now");
//   clearImmediate(displayNote);
// });
// console.log(displayNote);

// const displayName = (name) => {
//   const a = setInterval(() => {
//     console.log(name);
//   }, 5000);
//   return a;
// };

// console.log(displayName("peter"));

// const displayNumber = (number: number) => {
//   const num = setInterval(() => {
//     console.log(num);
//     // return num
//   }, 5000);
// };
// displayNumber(15);

// const priceGenerator = (amount: number) => {
//   const finalPrice = amount.toLocaleString();
//   const duration = setInterval(() => {
//     console.log(`#${finalPrice} is your charges`);
//   }, 5000);

//   return duration;
// };
// console.log(priceGenerator(1000000));

// a countdown from 10 to 0 after every 1 sec

// const num = (num: number) => {
//   const numbers = Array.from({ length: 10 });
//   setInterval(() => {
//     if (num <= 10) {
//       console.log("successful");
//     } else {
//       console.log("unsuccessful");
//     }
//   }, 1000);

//   return numbers;
// };

// console.log(num(5));

// const countdown = (num: number) => {
//   let count = num;

//   const timer = setInterval(() => {
//     console.log(count--);

//     if (count === 10) {
//       console.log("Time's up");
//       clearInterval(timer);
//     }
//   }, 1000);

//   return timer;
// };
// console.log(countdown(20));
