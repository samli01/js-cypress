const accountId = 786
let accountEmail = "samim@gmail.com"
var accountPassword = "12345"
accountCity = "gaighat"
let accountState;


// accountId = 1  Not allowed 
 accountEmail = "ali@gmail.com"
 accountPassword = "5432d1"
 accountCity = "Triyuga"

console.log(accountId);

/*
    Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
