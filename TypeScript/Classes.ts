// Classes
// A class is a programming structure that defines the properties and methods of objects. Objects are created from classes using the new keyword.

class Student{

    name:string;
    age:number;


    constructor(name:string,age:number){
        //A constructor is a special method that automatically runs when you create an object using new.
        this.name=name;
        this.age=age;
    }

    display():void{
        // display() is a method (function inside a class).
        console.log(this.name)
        console.log(this.age);


    }


}

let Student1= new Student("krish",21); //creating a object using new keyword
let Student2= new Student("raj",21);

Student1.display();
Student2.display();


