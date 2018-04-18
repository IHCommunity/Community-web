import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalsFormComponent } from './proposals-form.component';

describe('ProposalsFormComponent', () => {
  let component: ProposalsFormComponent;
  let fixture: ComponentFixture<ProposalsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
