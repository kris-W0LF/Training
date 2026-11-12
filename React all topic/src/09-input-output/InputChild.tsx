

type ChildProps = {
    name: string;
    age: number;
};
// Destructuring in JavaScript means extracting values from an object or array and storing them directly in variables.
// function Child({ name, age }: ChildProps) {
//     return (
//         <h2>Hello {name}, Age: {age}</h2>
//     );
// }
// //normal

function Child(prop:ChildProps){
    return(
        <h2>Hello{prop.name},Age:{prop.age}</h2>
    );
}

export default Child;