import { Component, OnInit } from '@angular/core';
import {IProduct} from '../_interface/iproduct'
import {ProductService}  from '../_service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   allProduct! : IProduct [];
   productdata : IProduct [] = [];
   filtertext='';
  constructor( private productService : ProductService) { }

  ngOnInit(): void {
    this.allProduct = this.productService.getAllProduct();
  }

  getSelectedProduct(product: IProduct){
    this.productdata.push(product);
    console.log(this.productdata); 
  }

}
