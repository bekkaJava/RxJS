import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, filter, map, tap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() product:Product | null = null;
   countFC = new FormControl();

  countInCart$ = this.cartService.productCountInCart$.pipe (

    filter(p => p[0] == this.product?.id),
    map(p => p[1]),

  )

    

  constructor(private cartService:CartService) { }

  ngOnInit(): void {


    
    
  }

  filter() {
   
  }

  addToCart() {
    this.cartService.addToCart(this.product!, this.countFC.value)
  }

  
}
