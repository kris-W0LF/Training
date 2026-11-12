//Generics allow us to create reusable code that works with different data types while maintaining type safety

function display<T>(value: T): T {
    return value;
}

console.log(display<string>("Krish"));

console.log(display<number>(100));
