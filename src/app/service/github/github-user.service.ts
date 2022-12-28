import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface GithubUser {
    avatar_url: string,
    login: string,
    node_id: string,
    site_admin: boolean,
    type: string
}


@Injectable({
  providedIn: 'root'
})
export class GithubUserService {

  private url : string ='https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getGithubUsers(): Observable<GithubUser[]>{
    return this.http.get<GithubUser[]>(this.url)
  }


}
