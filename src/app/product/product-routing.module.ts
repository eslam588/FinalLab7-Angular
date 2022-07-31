import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import {ProductDtlComponent} from './product-dtl/product-dtl.component'

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'productdtl', component: ProductDtlComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
