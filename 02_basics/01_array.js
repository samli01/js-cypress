const myArray = [1,2,3,4,5]
console.log(myArray);

const brothers = ['Samim', 'Sahil']
console.log(brothers[0]);

const arr2 = new Array(1,2,3,4,5)
console.log(arr2[2]);

const newArr = myArray.join() //changes into string 
console.log(newArr);

// Slice and splice

console.log("A ", myArray);
const arr1 =  myArray.slice(1,3)
console.log("This is Slice array: ", arr1);


console.log("B ", myArray );
const arr3 = myArray.splice(1,3)
console.log("This is splice array",arr3);
console.log("This is after splicing ",myArray);






