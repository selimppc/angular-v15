import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface RedisData {
  id: string,
  title: string,
  description: string
}


@Injectable({
  providedIn: 'root'
})
export class RedisDataService {

  private url = "http://localhost:8080/api/v1/resources";

  constructor(private http: HttpClient) { }

  getAllRedisDataFromApi(): Observable<RedisData[]> {

    return this.http.get<RedisData[]>(this.url);

  }
}
