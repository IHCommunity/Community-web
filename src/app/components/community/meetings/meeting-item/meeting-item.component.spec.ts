import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingItemComponent } from './meeting-item.component';

describe('MeetingItemComponent', () => {
  let component: MeetingItemComponent;
  let fixture: ComponentFixture<MeetingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
