let score = 33
let score1= "33"
let score2= "33abc" // k yeslai pani number ma change garxa?
let score3= null

console.log(typeof score)
console.log(typeof score1)

let valueInNumber1 = Number(score1) //Conversion "aba score1 ko data type number ma change vayo"
console.log(typeof valueInNumber1)

let valueInNumber2 = Number(score2) // lau yeslai pani garo ta. 
console.log(typeof valueInNumber2)
console.log(valueInNumber2) // yeslai print gari herum tw kasto number print vako xa raixa. // "NaN" print vayo ta, tara yo ta number hoina ani kina number data type number vanera aayo?

let valueInNumber3 = Number(score3) // null lai number ma convert gardo raixa ki nai ?
console.log(typeof valueInNumber3) // number nai dekhayo 
console.log(valueInNumber3) // 0 value print vayo 

// yestai gari boolean datatype pani change garera 0 ra 1 print garxa.

// Converting number into boolean

let isLoggedIn = 1
let isLoggedIn1= ""
let isLoggedIn2= "samim"

let booleanIsLoggedIn = Boolean(isLoggedIn) // Converting number into boolean.
console.log(booleanIsLoggedIn) //true value print vayo 
console.log(typeof booleanIsLoggedIn); // data type boolean vanera print vayo.

let booleanIsLoggedIn1= Boolean(isLoggedIn1) // empty string converted to boolean 
console.log(booleanIsLoggedIn1); // string empty huda value false print vayo

let booleanIsLoggedIn2= Boolean(isLoggedIn2) // String empty na vako bela convert garda 
console.log(booleanIsLoggedIn2); // String empty na vako case ma value true aauxa. 

/*
1=> true
0=> false
"" => false
"samim" => true

*/

// yestai gari hami string ma pani convert garna sakinxa.


