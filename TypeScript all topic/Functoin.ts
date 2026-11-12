//  Functions
// Functions perform specific tasks.

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));


// Function returning nothing:
function greet(name: string): void {
    console.log("Hello " + name);
}

greet("Krish");

//Arrow fuction is the shoter way of writting function

const add1=(a:number,b:number)=>{
    return a+b;

};
console.log(add1(10,20));


