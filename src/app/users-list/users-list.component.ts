import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  alluserfromapi: any=[];
  currentpage:number=1;

  constructor(private productService: ProductService) { }
  newuser:any;
  ngOnInit(): void {
    this.getallUserFromApi(1); 
  }

  getallUserFromApi(page=1){
    this.productService.getallUsersFromApi(page).subscribe(user =>{
      this.alluserfromapi=user;
      console.log(user);
      this.currentpage=page
      
    })
  }

  addnewuser(){
    this.productService.setusertoapi({
      
        "id": 20,
        "fname": "Karn",
        "lname": "Yong",
        "username": "karn.yong@mecallapi.com",
        "avatar": "https://www.mecallapi.com/users/1.png"
    
  }).subscribe(data=>{
    this.newuser=data;
  })
  }

}
