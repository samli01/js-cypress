// Declare numbers
let num1 = 25;
let num2 = 7;

// Basic arithmetic operations
console.log("Addition:", num1 + num2); // Output: 32
console.log("Subtraction:", num1 - num2); // Output: 18
console.log("Multiplication:", num1 * num2); // Output: 175
console.log("Division:", num1 / num2); // Output: 3.5714285714285716
console.log("Modulus (remainder):", num1 % num2); // Output: 4

// Math object functions
console.log("Power (num1^num2):", Math.pow(num1, 2)); // Output: 625
console.log("Square root:", Math.sqrt(num1)); // Output: 5
console.log("Absolute value:", Math.abs(-num2)); // Output: 7
console.log("Random number (0-1):", Math.random()); // Output: Random number between 0 and 1
console.log("Round off:", Math.round(4.6)); // Output: 5
console.log("Ceiling:", Math.ceil(4.1)); // Output: 5
console.log("Floor:", Math.floor(4.9)); // Output: 4

// Parsing strings into numbers
let strNum = "123.45";
console.log("String to Integer:", parseInt(strNum)); // Output: 123
console.log("String to Float:", parseFloat(strNum)); // Output: 123.45

// Checking if a value is a number
console.log("Is NaN ('hello'):", isNaN("hello")); // Output: true
console.log("Is NaN (123):", isNaN(123)); // Output: false

// Fixed number of decimals
let decimalNum = 123.456789;
console.log("Fixed to 2 decimals:", decimalNum.toFixed(2)); // Output: 123.46

// Converting numbers to strings
let numToStr = 99;
console.log("Number to String:", numToStr.toString()); // Output: "99"

// Maximum and Minimum
console.log("Maximum value:", Math.max(10, 20, 30)); // Output: 30
console.log("Minimum value:", Math.min(10, 20, 30)); // Output: 10
