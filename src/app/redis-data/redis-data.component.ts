import { RedisDataService } from './../service/redis/redis-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redis-data',
  templateUrl: './redis-data.component.html',
  styleUrls: ['./redis-data.component.css']
})
export class RedisDataComponent implements OnInit {

  redisData: any;

  constructor(private redisDataService: RedisDataService){}

  ngOnInit(){

    this.redisDataService.getAllRedisDataFromApi()
    .subscribe(data => {
      this.redisData = data;

      console.log(this.redisData);
    })

  }

}
