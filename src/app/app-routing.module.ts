import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from '../app/product-list/product-list.component';
import {ProductDtlComponent} from '../app/product-dtl/product-dtl.component';
import {UsersListComponent} from '../app/users-list/users-list.component';
import {ErrorComponent} from '../app/error/error.component'
import { LoginFormComponent } from './forms/login-form/login-form/login-form.component';
import {AddProductComponent } from './forms/add-product/add-product/add-product.component';


const routes: Routes = [
  {path:'productlist',title:'Product List',component:ProductListComponent},
  {path:'productlist/:id',title:'Product details' ,component:ProductDtlComponent},
  { path: 'login', component: LoginFormComponent },
  { path: 'addproduct', component: AddProductComponent },
  {path:'', redirectTo:'productlist',pathMatch:'full'},
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  {path:'userlist', title:'userlist',component:UsersListComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
