// JS Automatically converts the type to number

// console.log("2" > 1);
// console.log("2" > '1');
// make sure you dont rely on this,
// do type conversion yourself

console.log(null > 0);      // false - correct
console.log(null == 0);     // false - incorrect
console.log(null >= 0);     // true - correct

// this is because equality operator (==) and comparison operator (>, >= etc) work differently
// Comparison operator converts null -> 0 (number) and hence evaluates correct result whereas equality operator doesn't

// ! Strict equality | == vs === 
// == ~ only value is compared
console.log("2" == 2);      // true | Type conversion of "2" -> 2(number) happens 

// === ~ value and datatype is compared
console.log("2" === 2);     // false

