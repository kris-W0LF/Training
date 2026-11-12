// 1. Global Scope
// A variable declared outside all functions and blocks can be accessed throughout its accessible code.


let na:string="Krish";

function hello(){
    console.log(na);

}


hello();
console.log(na);



// Function Scope:
// A variable declared inside a function can only be accessed inside that function.

function greet1() {
    var age = 21; // Function scope

    console.log(age); // 21
}

greet1();

// console.log(age); // Error

//Block Scope
// A variable declared inside { } using let or const can only be accessed inside those curly braces.

if(true){
    let city="Bhopal";
    console.log(city);

};
// console.log(city);
