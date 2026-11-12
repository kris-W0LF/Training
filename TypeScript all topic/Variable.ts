//static typing and dynamic typing 
//static typing :Meaning: You must define the data type of a variable, and the type is checked before the program runs (during compilation).
//dynamic typing : Meaning: You don't need to define the data type. JavaScript automatically determines the type at runtime.

// 1. Declaration
let age:number;

// 2. Initialization
age = 21;

// 3. Reassignment
age = 22;

// 4. Redeclaration
// let age = 25; // Error: Cannot redeclare block-scoped variable

// var allows redeclaration
var city = "Bhopal";
var city = "Delhi"; // Allowed

console.log(age);  // 22
console.log(city); // Delhi