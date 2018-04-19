import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalsNewsComponent } from './proposals-news.component';

describe('ProposalsNewsComponent', () => {
  let component: ProposalsNewsComponent;
  let fixture: ComponentFixture<ProposalsNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalsNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
