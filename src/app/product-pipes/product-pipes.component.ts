import { Component, OnInit } from '@angular/core';
import {ProductService} from '../_service/product.service'
import {IProduct} from '../_interface/iproduct'

@Component({
  selector: 'app-product-pipes',
  templateUrl: './product-pipes.component.html',
  styleUrls: ['./product-pipes.component.css']
})
export class ProductPipesComponent implements OnInit {
   productlist!:  IProduct [];
   filtertext='';
  constructor(private productService: ProductService) { 

  }

  ngOnInit(): void {
    this.productlist=this.productService.getAllProduct();
  }

}
