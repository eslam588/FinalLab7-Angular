import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FavouriteProductComponent } from './favourite-product/favourite-product.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductPipesComponent } from './product-pipes/product-pipes.component';
import { StringSlicePipe } from './_pips/string-slice.pipe';
import { FilterPipe } from './_pips/filter.pipe';
import { ColorsDirective } from './_directive/colors.directive';
import { ForDirective } from './_directive/for.directive';
import { ErrorComponent } from './error/error.component';
import { ProductDtlComponent } from './product-dtl/product-dtl.component';
import { UsersListComponent } from './users-list/users-list.component';
import { LoginFormComponent } from './forms/login-form/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    FavouriteProductComponent,
    ProductCartComponent,
    ProductPipesComponent,
    StringSlicePipe,
    FilterPipe,
    ColorsDirective,
    ForDirective,
    ErrorComponent,
    ProductDtlComponent,
    UsersListComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
