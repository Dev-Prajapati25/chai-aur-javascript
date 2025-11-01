//! How to get array of prototypes
console.log(Object.getOwnPropertyNames(Array.prototype));

// String can be declared as
// let userName = "Dev P" or 'Dev P'
// Another way ->
const gameName = new String("TLOU2")
console.log(gameName);          // [String: 'TLOU2']
console.log(typeof gameName);   // object

// If you log gameName in browser console you will get

// String {'TLOU2'}
// 0: "T"
// 1: "L"
// 2: "O"
// 3: "U"
// 4: "2"
// length: 5
// [[Prototype]]: Stringanchor: ƒ anchor()at: ƒ at()big: ..... and other methods
// PrimitiveValue]]: "TLOU2"


//* Indexing and Methods
console.log(gameName[1]);
console.log(gameName.length);

//! Methods do not change the string in-place as string is stored in a stack and is passed by value 
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('2'));
console.log(gameName.split('O'));

console.log(gameName.substring(0,3));   // No negative indexing (if given, 0 is taken), End is excluded

let anotherstr = gameName.slice(-4,5)
console.log(anotherstr);      // Negative indexing is allowed, End is excluded

let newStr = "   hey     "
console.log(newStr);
console.log(newStr.trim());

newStr = "https://devx.com/dev%20prajapati"
console.log(newStr.replace("%20", "_"));

console.log(newStr.includes("dev"));
console.log(newStr.includes("hey"));

console.log(newStr.split("/"));

