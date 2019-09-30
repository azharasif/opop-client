import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingVideoComponent } from './creating-video.component';

describe('CreatingVideoComponent', () => {
  let component: CreatingVideoComponent;
  let fixture: ComponentFixture<CreatingVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
