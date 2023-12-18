import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyStatisticsComponent } from './money-statistics.component';

describe('MoneyStatisticsComponent', () => {
  let component: MoneyStatisticsComponent;
  let fixture: ComponentFixture<MoneyStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyStatisticsComponent]
    });
    fixture = TestBed.createComponent(MoneyStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
