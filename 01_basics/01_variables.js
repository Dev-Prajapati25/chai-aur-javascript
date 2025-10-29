const userId = 4543     // cannot change const

// userId = 4546    Throws error
// console.log(userId);

let penColor = "red"
var penSize = 10
penType = "Brush"   // This works because JS is safe language but preferred to not do this

/*
It is preferred to use let and const only 
due to functional and block scope issue in var
*/

console.table([userId, penColor, penSize, penType])