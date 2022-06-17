// ***************      Math object *********

// console.log(Math.PI)
// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E 

//  ********* REFRENCE VS PRIMITVE TYPE
// primitive type

let scoreOne = 90;
let scoreTwo = 99;

console.log(`scoreOne : ${scoreOne} ` + `scoreTwo : ${scoreTwo}`)

//  refrence type

const userOne = {name : 'iry', age : 90};
const userTwo = userOne;
// userTwo = {name : 'piu', age: 98};
userTwo.age = 99

console.log(userOne,userTwo)