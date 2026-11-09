// Union types allow a variable to accept more than one type.

function display(value: string | number): void {
    console.log(value);
}

display("Krish");   
display(100);