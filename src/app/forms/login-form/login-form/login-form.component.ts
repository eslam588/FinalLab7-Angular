import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @ViewChild("usernameRef") usernameRef!: FormControl;

  constructor() { }

  isAdded = false;

  login = {
    username: "",
    password: "",
  }

  userlist = [
    { id: 1,
      username: "eslam",
      password: "871125556" }
  ]

  ngOnInit(): void {
  }


  loginFn(input: any) {

    let newUser = {
      id: this.userlist[this.userlist.length - 1].id + 1,
      ...input
    };

    this.isAdded = true;

    this.userlist.push(newUser);

    this.login.username = "";

    this.login.password = "";
  }
}
