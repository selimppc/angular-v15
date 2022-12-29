import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedisDataComponent } from './redis-data.component';

describe('RedisDataComponent', () => {
  let component: RedisDataComponent;
  let fixture: ComponentFixture<RedisDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedisDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedisDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
