import { TokenInterceptor } from './service/auth/TokenInterceptor';
import { AuthGuard } from './service/auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './static/about/about.component';
import { ContactComponent } from './static/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxComponent } from './ui/checkbox/checkbox.component'; 
import { MaterialModules } from '../material.module';
import { GithubUsersComponent } from './github-users/github-users.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'; // importing the http module
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './uitools/button/button.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TableComponent } from './molecules/table/table.component';
import { ListComponent } from './list/list.component';
import { CookieService } from 'ngx-cookie-service';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CheckboxComponent,
    GithubUsersComponent,
    ButtonComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    ListComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModules,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
