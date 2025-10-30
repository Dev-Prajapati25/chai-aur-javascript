// Conversion
let score = 33
console.log(typeof score, score);

let strScore = String(score)
console.log(typeof strScore, strScore);

let boolScore = Boolean(score)
console.log(typeof boolScore, boolScore);

// NaN
let age = "21ab"
console.log(age, typeof age);

// JS doesn't throw error
// on conversion like below and does convert it 
// but the value will be Nan
let numAge = Number(age)
console.log(numAge, typeof numAge); // Shows Nan number
//? same as above happens for 'undefined' and 'string'

//? If age = null
age = null
console.log(Number(age), typeof Number(age));

//* Summary
/*
! Conversion to number
"32" => 32 | number
"23ads" => Nan | number
true => 1; false => 0 | number
undefined => NaN | number
null => 0 | number

! Conversion to boolean
Here, 'falsy' values convert to false and 'truthy' values convert to true

Falsy values
> false
> 0 or -0
> ""
> null
> NaN
> undefined

Truthy Values
> values other that falsy ones
> objects are also truthy
*/
