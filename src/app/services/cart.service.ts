import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 

    products: {product:Product, count:number}[] = [] as any;

    private $productCountInCart = new Subject<[id:number, count:number]>();

    productCountInCart$ = this.$productCountInCart.asObservable();


  constructor() { }


  addToCart(product: Product, count: number) {

    if(count > 0) {
      const existingProduct = this.products.find(p => p.product.id === product.id);
    if (existingProduct) {
        existingProduct.count += count;
        this.$productCountInCart.next([existingProduct.product.id, existingProduct.count])

    } else {
      this.products.push({ product, count });
      this.$productCountInCart.next([product.id, count])
    }
    }

  }


}

