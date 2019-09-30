import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingOtherChannelComponent } from './visiting-other-channel.component';

describe('VisitingOtherChannelComponent', () => {
  let component: VisitingOtherChannelComponent;
  let fixture: ComponentFixture<VisitingOtherChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitingOtherChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitingOtherChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
