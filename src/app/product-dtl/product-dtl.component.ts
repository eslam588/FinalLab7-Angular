import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_service/product.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {IProduct} from '../_interface/iproduct'

@Component({
  selector: 'app-product-dtl',
  templateUrl: './product-dtl.component.html',
  styleUrls: ['./product-dtl.component.css']
})
export class ProductDtlComponent implements OnInit {
  // productdtldata?:IProduct;
  productid:number = 0;
  // productdtl!:IProduct;
  detailsproduct? : any;

  constructor(private productService: ProductService,private arout: ActivatedRoute , private location:Location) { }

  ngOnInit(): void {
    this.arout.params.subscribe(parm=>{
      this.productid=parm['id'];
       this.detailsproduct=this.productService.getProductByID(this.productid);
      
    })
  }

  goback(){
    this.location.back(); 
  }

}
