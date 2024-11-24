const accountId = 786
let accountEmail = "samim@gmail.com" //defined variable
var accountPassword = "12345"
accountCity = "gaighat"
let accountState; // not defined variable 


// accountId = 1  Not allowed, we cannot change the value of constant  
 accountEmail = "ali@gmail.com"
 accountPassword = "5432d1"
 accountCity = "Triyuga"

console.log(accountId);

/*
    Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
