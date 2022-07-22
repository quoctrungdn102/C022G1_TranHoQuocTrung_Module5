import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  deleteProduct(id: number) {
    this.products.splice(this.findIndex(id), 1);
  }

  findById(id: number): Product {
    return this.products.find(product => product.id === id)
  }

  findIndex(id: number): number {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return i
      }
    }
  }

  editProduct(product: Product) {
    this.products.splice(this.findIndex(product.id), 1, product)
  }

  constructor() {
  }


}
