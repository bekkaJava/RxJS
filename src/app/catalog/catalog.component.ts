import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

   products: Product[] = [];


  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.initProducts();
    
  }
  
    initProducts() {
      this.productService.get().subscribe (
        data => this.products = data
      )
  
    }
}
