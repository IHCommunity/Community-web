import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveFeedbackComponent } from './positive-feedback.component';

describe('PositiveFeedbackComponent', () => {
  let component: PositiveFeedbackComponent;
  let fixture: ComponentFixture<PositiveFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositiveFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
