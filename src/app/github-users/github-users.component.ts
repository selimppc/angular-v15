import { GithubUser, GithubUserService } from './../service/github/github-user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit{

  gUsers: GithubUser[] = [];
  labelPosition: string = "right";

  constructor(
    private githubUserService:  GithubUserService
    ){}


  ngOnInit(){
    this.githubUserService
      .getGithubUsers()
      .subscribe(data => {
        this.gUsers = data;
      });
  }

}
