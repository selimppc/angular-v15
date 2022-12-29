import { TestBed } from '@angular/core/testing';

import { RedisDataService } from './redis-data.service';

describe('RedisDataService', () => {
  let service: RedisDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedisDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
