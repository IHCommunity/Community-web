import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePaymentComponent } from './single-payment.component';

describe('SinglePaymentComponent', () => {
  let component: SinglePaymentComponent;
  let fixture: ComponentFixture<SinglePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
