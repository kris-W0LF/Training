// Services in React and Angular mean writing reusable code for tasks that are separate from the UI (user interface).

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
];

export function getProduct(): Product[] {
    return products;
}

export function getProductCount(): number {
    return products.length;
}