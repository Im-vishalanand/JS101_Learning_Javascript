//Problem 4: Given 3 numbers (all different values), print which is greatest


let num1 = 112;
let num2 = 98;
let num3 = 76;

// if (num1>num2) {
//   if (num2>num3) {
//     console.log(num1, "is greatest");
//   }
//   else{
//     console.log(num3, "is greatest");
//   }
// }
// else{
//   console.log(num2, "is greatest");
// }

// console.log(((num1>num2&&num2>num3)?num1:num2>num1?num2:num1), "is greatest");

((num1>num2&&num2>num3)?console.log(num1, "is greatest"):num2>num1?console.log(num2, "is greatest"):console.log(num1, "is greatest"));

