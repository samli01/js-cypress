// Define some example strings
let str1 = "Hello";
let str2 = "World";

// Concatenate strings
let combined = str1 + " " + str2;
console.log("Concatenated String:", combined); // Output: Hello World

// Find the length of the string
console.log("Length of the string:", combined.length); // Output: 11

// Convert to uppercase and lowercase
console.log("Uppercase:", combined.toUpperCase()); // Output: HELLO WORLD
console.log("Lowercase:", combined.toLowerCase()); // Output: hello world

// Extract a substring
let substring = combined.slice(0, 5); // Extracts "Hello"
console.log("Substring:", substring);

// Replace part of a string
let replaced = combined.replace("World", "JavaScript");
console.log("Replaced String:", replaced); // Output: Hello JavaScript

// Check if a string contains a word
let contains = combined.includes("World");
console.log("Does the string contain 'World'?", contains); // Output: true
