import { Router } from '@angular/router';
import { AuthService } from './../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = "";
  password = "";
  errorMsg = "";
  buttonLabel: string = "Allow me to Login";
  buttonColor: string = "primary";
  buttonType: string = "submit";

  clearButtonLabel: string = "Reset";
  clearButtonColor: string = "";
  clearButtonType: string = "reset";


  loginForm = new FormGroup(
    {
      "username": new FormControl('', [Validators.required, Validators.minLength(5)]),
      "password": new FormControl('', [Validators.required, Validators.minLength(6)]),
    }
  );

  constructor(
    private auth: AuthService,
    private router: Router
  ){
  }

  ngOnInit(): void {
    //this.buttonColor = "primary";
    //this.buttonLabel = "Login";
    //throw new Error('Method not implemented.');
  }


  onSubmit(){
    console.log(this.loginForm.get('username')?.errors);

  }


}
