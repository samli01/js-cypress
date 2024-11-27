const name = "samim"
const age = "24"

console.log(`hello my name id ${name} and i am ${age} years old`);


const myName = new String("samim")

console.log(myName.toUpperCase());
console.log(myName.charAt(3)); // 3rd position ma k xa vanera 
console.log(myName.indexOf("i"));   //i ko position k ho 


const sliceName = myName.substring(0,4) //Slicing the string (yesma "sami" print hunxa)
console.log(sliceName);

//Slice garne arko tarika 

const sliceName1 = myName.slice(-4,2)
console.log(sliceName1);
