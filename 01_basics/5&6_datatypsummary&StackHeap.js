// 7 Primitive Datatypes
//* Stored in a stack    
// number, string, boolean, symbol, bigInt, null, undefined

// When you use, these, they are 
    //? Passed by value

let scoreOne = 21
let scoreTwo = scoreOne
scoreTwo += 9

console.log(scoreOne);  // 21
console.log(scoreTwo);  // 30


// Reference Types
// Arrays (type => object), Objects (type => object), Functions (type => function or function object)
let myArray = [0,1,2]
let myObj = {
    email: "dev@google.com",
    id : 231
}
let myFunction = function () {
    console.log("Hello from myFunction");
}
console.log(typeof myArray);
console.log(typeof myObj);
console.log(typeof myFunction);

//* Stored in a heap

// When you use, these, they are 
    //? Passed by reference

let userOne = ["dev", 21]
let userTwo = userOne

userTwo[0] = "justdev"

console.log(userOne);
console.log(userTwo);
