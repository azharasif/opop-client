import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTrendComponent } from './display-trend.component';

describe('DisplayTrendComponent', () => {
  let component: DisplayTrendComponent;
  let fixture: ComponentFixture<DisplayTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
