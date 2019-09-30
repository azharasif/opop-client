import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTrendsComponent } from './previous-trends.component';

describe('PreviousTrendsComponent', () => {
  let component: PreviousTrendsComponent;
  let fixture: ComponentFixture<PreviousTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
