import { TestBed, inject } from '@angular/core/testing';

import { AgreementsService } from './agreements.service';

describe('AgreementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgreementsService]
    });
  });

  it('should be created', inject([AgreementsService], (service: AgreementsService) => {
    expect(service).toBeTruthy();
  }));
});
