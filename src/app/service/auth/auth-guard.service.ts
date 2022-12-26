import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}
  

  canActivate() {
    
    console.log('canActivate');
    console.log('isLoggedIn', this.authService.isLoggedIn());

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/users']);
    }

    console.log(this.authService.isLoggedIn());

    // return false; //!this.authService.isLoggedIn();
    return !this.authService.isLoggedIn();
  }

}
