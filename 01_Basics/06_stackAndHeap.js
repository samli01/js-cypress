// Stack  (primitive)

let myName = "samim"


let anotherName = myName
console.log(anotherName);

anotherName = "mimas"
console.log(myName); // yaha puranai value print garxa, samim
console.log(anotherName); // yaha naya value print garxa, mimas, kina ki yesle myName ko copy lai edit gareko ho 


//Heap (Non primitive)
let user1 = {
    company : "f1Soft"
}

let user2 = user1

user2.company = "f1Soft International"
console.log(user1); //yaha 2 tai ma change vako xa value kini ki yo non primitive data type ho yesma direct data change ko access dinxa 
console.log(user2);

