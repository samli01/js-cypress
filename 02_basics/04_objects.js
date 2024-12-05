const user = {
    name : "samim",
    age : 18,
    email : "samim@f1soft.com"
}

console.log(user) //full object print hunxa 
console.log(user.name); // yesma name display hunxa 
console.log(user["name"]); // yesma pani name nai display hunxa 


//changing the value of 

user.age = 19 
console.log(user); //yesma age updated aauxa 

// yadi tapai objects ko value change garna chanu hunna vane freeze use garnu parxa 

Object.freeze(user)
//aba change garna khojda change hunxa ki hudaina hernu parxa 
user.age=20
console.log(user); // yesma updated aaudaina 


