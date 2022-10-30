import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addProduct(
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ): any {
    //Log it out
    console.log('This is:', 'Add Product');

    //Create the Product Object
    const id = this.productService.insertProduct(
      productTitle,
      productDescription,
      productPrice,
    );
    return { id };
  }

  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProductByID(@Param('id') prodID: string) {
    return this.productService.getProductByID(prodID);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodID: string,
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: string,
  ) {
    return this.productService.updateProduct(
      prodID,
      productTitle,
      productDescription,
      productPrice,
    );
  }
}
