import { Router } from '@angular/router';
import { AuthService } from './../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = "";
  password = "";
  errorMsg = "";

  loginForm = new FormGroup(
    {
      "username": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required),
    }
  );
  matcher = new LoginErrorStateMatcher();

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
