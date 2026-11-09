//  Interfaces
// An interface defines the structure of an object.
// Instead of writing the object structure repeatedly, we can create an interface.

interface User{
    name:string;
    age:number;
    isStudent:boolean;
}

let user1:User={
    name:"Krish",
    age:21,
    isStudent:true
};

console.log(user1);