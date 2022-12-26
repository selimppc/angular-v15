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
  
  { path:"gusers", component: GithubUsersComponent },


  { path:"", component: HomeComponent },
  // last element
  { path:"**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
