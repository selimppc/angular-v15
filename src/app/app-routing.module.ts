import { RedisDataComponent } from './redis-data/redis-data.component';
import { AuthGuard } from './service/auth/auth-guard.service';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './static/contact/contact.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './static/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path:"about", component: AboutComponent },
  { path:"contact", component: ContactComponent },
  { path:"home", component: HomeComponent },
  
  { path:"github-users", component: GithubUsersComponent },
  
  
  { path:"login", component: LoginComponent },
  { path:"list", component: ListComponent },
  {
    path: 'users', component: UsersComponent, canActivate:[AuthGuard],
  },
  {
    path: 'redis-data', component: RedisDataComponent
  },


  { path:"", component: HomeComponent, pathMatch:"full" },
  // last element
  { path:"**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
