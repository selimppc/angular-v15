import { Router } from '@angular/router';
import { AuthService } from './../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = "";
  password = "";
  errorMsg = "";

  constructor(
    private auth: AuthService,
    private router: Router
  ){
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
      // let res = this.auth.login(this.username, this.password);
      // if (res === 200) {
      //   this.router.navigate(['home']);
      // }
      // if (res === 403) {
      //   this.errorMsg = "Invalid Credentials";
      // }
    }
  }

}
