// Example JavaScript program for working with arrays and their methods

// Creating an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// 1. Accessing elements
console.log("First fruit:", fruits[0]); // Apple
console.log("Last fruit:", fruits[fruits.length - 1]); // Orange

// 2. Adding elements to the end of the array
fruits.push("Grapes");
console.log("After push:", fruits); // ["Apple", "Banana", "Mango", "Orange", "Grapes"]

// 3. Removing the last element
let lastFruit = fruits.pop();
console.log("After pop:", fruits); // ["Apple", "Banana", "Mango", "Orange"]
console.log("Removed fruit:", lastFruit); // Grapes

// 4. Adding elements to the beginning
fruits.unshift("Pineapple");
console.log("After unshift:", fruits); // ["Pineapple", "Apple", "Banana", "Mango", "Orange"]

// 5. Removing the first element
let firstFruit = fruits.shift();
console.log("After shift:", fruits); // ["Apple", "Banana", "Mango", "Orange"]
console.log("Removed fruit:", firstFruit); // Pineapple

// 6. Finding the index of an element
let index = fruits.indexOf("Mango");
console.log("Index of Mango:", index); // 2

// 7. Removing elements using splice
fruits.splice(index, 1); // Removes "Mango"
console.log("After splice:", fruits); // ["Apple", "Banana", "Orange"]

// 8. Slicing the array
let slicedFruits = fruits.slice(0, 2);
console.log("Sliced array:", slicedFruits); // ["Apple", "Banana"]

// 9. Iterating over an array using forEach
console.log("Iterating using forEach:");
fruits.forEach((fruit, idx) => console.log(`${idx}: ${fruit}`));

// 10. Mapping over an array
let uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase fruits:", uppercaseFruits); // ["APPLE", "BANANA", "ORANGE"]

// 11. Filtering an array
let filteredFruits = fruits.filter(fruit => fruit.startsWith("A"));
console.log("Filtered fruits:", filteredFruits); // ["Apple"]

// 12. Sorting an array
fruits.sort();
console.log("Sorted fruits:", fruits); // ["Apple", "Banana", "Orange"]

// 13. Reversing an array
fruits.reverse();
console.log("Reversed fruits:", fruits); // ["Orange", "Banana", "Apple"]

// 14. Checking if an array includes an element
let hasApple = fruits.includes("Apple");
console.log("Includes 'Apple':", hasApple); // true

// 15. Reducing an array to a single value
let concatenatedFruits = fruits.reduce((acc, fruit) => acc + " " + fruit, "Fruits:");
console.log("Concatenated fruits:", concatenatedFruits); // "Fruits: Orange Banana Apple"

// 16. Creating a new array with Array.of
let numbers = Array.of(10, 20, 30);
console.log("Array.of example:", numbers); // [10, 20, 30]

// 17. Checking if it's an array
console.log("Is 'fruits' an array?", Array.isArray(fruits)); // true
