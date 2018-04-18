import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsResumeComponent } from './meetings-resume.component';

describe('MeetingsResumeComponent', () => {
  let component: MeetingsResumeComponent;
  let fixture: ComponentFixture<MeetingsResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingsResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
