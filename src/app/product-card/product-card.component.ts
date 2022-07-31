import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import {IProduct}  from '../_interface/iproduct'
import {ProductService} from '../_service/product.service'
import {Router} from '@angular/router'



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('productdata') product!: IProduct;
  @Output() onSelectedProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  constructor(private productService: ProductService , private router: Router) { }

  ngOnInit(): void {
  }
  // output way
  productselected(product : IProduct){
    this.onSelectedProduct.emit(product);
    console.log(product);
    
  }

  setproductdata(product : IProduct){
    this.productService.setProductdata(product);
  }


  viewdetails(id:any){
    this.router.navigate(['/productlist',id]);

  }

}
