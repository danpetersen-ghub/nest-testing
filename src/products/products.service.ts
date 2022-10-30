import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

import { uuid } from 'uuidv4';

@Injectable()
export class ProductService {
  products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    //Log invoke
    console.log('this is:', 'Product Service');
    //created & updated Date
    const date = new Date().toISOString();
    //get new ID
    const productID = uuid();
    //create Product Object
    const newProduct = new Product(productID, title, desc, price, date, date);
    //add object to Array
    this.products.push(newProduct);
    //return response data (id)
    return productID;
  }

  getProducts() {
    /*
    We only want this.products Array to be editable within this function. 
    So we should not return this.products directly. 
    Better to return a copy, this is why we wrap it in an array with spread operator
    this means that our code is less error prone as other cant mess up our Data!
    */
    return [...this.products];
  }

  getProductByID(productID: string) {
    const product = this.products.find((prod) => prod.id === productID);
    if (!product) {
      throw new NotFoundException('No Product found.');
    }
    return { ...product };
  }

  updateProduct(
    productID: string,
    productTitle: string,
    productDescription: string,
    productPrice: string,
  ) {
    //Find Product
    const product = this.products.find((prod) => prod.id === productID);

    //Guard Clause is Product isn't found
    if (!product) {
      throw new NotFoundException('No Product found.');
    }

    //Get new Date as string
    const date = new Date().toISOString();

    //map new incoming values to product
    product.title = productTitle;
    product.description = productDescription;
    product.price = Number(productPrice);
    product.updated = date;

    return `Success: product ${productID} updated.`;
  }
}
