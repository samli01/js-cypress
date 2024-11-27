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


const trimName = "  samim    "
console.log(trimName.trim()); // yesle spaces hatai dinxa both side bata 
console.log(trimName.trimStart()); // agadi ko space 
console.log(trimName.trimEnd());  // paxadi ko spaces 

//replace 

const url = "https://redesigned-space-adventure-9w66v4g6g57h9vxj.github.dev/"
console.log(url.replace("space","samim")); //space lai samim sanga replace garidinxa 


