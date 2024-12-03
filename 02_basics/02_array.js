const marvel_heros = ["Thor", "Iron man", "spiderman"]
const dc_heros = ["superman", 'Flash', "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros); //Array vitra array 

// console.log(marvel_heros[3][0]); // 3rd element ko jun ki aafai ma 1 array ho tesko 0th element access gareko 




const all_heros = marvel_heros.concat(dc_heros); // yesma 2 tai array merge hunxa 

console.log(all_heros);
console.log(all_heros[4]);

const all_heros2 = [...marvel_heros, ...dc_heros] //yo spread operator ho same array concat ko jasto kaam garxa 
console.log(all_heros2);

