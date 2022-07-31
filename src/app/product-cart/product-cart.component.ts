import { Component, OnInit } from '@angular/core';
import {ProductService} from '../_service/product.service'
import {IProduct} from '../_interface/iproduct'

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  productdata: IProduct [] = []; ; 
  constructor(private productServic: ProductService) { }

  ngOnInit(): void {
    this.productServic.getProductData().subscribe((data) => {
      console.log(data);
      this.productdata.push(data)
    })
  }

  deleteproduct(product : IProduct){
        this.productdata=this.productdata.filter(item =>{
          return item.id !== product.id
        });
  }

}
