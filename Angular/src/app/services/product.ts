import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  getProducts() {
    return this.products;
  }

  getProductCount() {
    return this.products.length;
  }
}