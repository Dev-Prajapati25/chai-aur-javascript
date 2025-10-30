// Conversion
// let score = 33
// console.log(typeof score, score);

// let strScore = String(score)
// console.log(typeof strScore, strScore);

// let boolScore = Boolean(score)
// console.log(typeof boolScore, boolScore);

// // NaN
// let age = "21ab"
// console.log(age, typeof age);

// JS doesn't throw error
// on conversion like below and does convert it 
// but the value will be Nan
// let numAge = Number(age)
// console.log(numAge, typeof numAge); // Shows Nan number
//? same as above happens for 'undefined' and 'string'

//? If age = null
age = null
// console.log(Number(age), typeof Number(age));

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


// OPERATORS


// Donot rely on JS for type conversions
// console.log("1" + 2);   // 12
// console.log(1 + "2");   // 12
// console.log('1' + 2 + 2);   // 122
// console.log(1 + 2 + '2');   // 32 number


// Prefix and Postfix increment

// Postfix first returns the value and then increments it
let x = 10
let y = x++;
console.log("x = ", x, "| y = ", y)


// Prefix first increments the value and then returns it
let a = 1
let b = ++a
console.log("a = ", a, "| b = ", b)
