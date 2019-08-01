import { TestBed } from '@angular/core/testing';

import { SubmittingService } from './submitting.service';

describe('SubmittingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmittingService = TestBed.get(SubmittingService);
    expect(service).toBeTruthy();
  });
});
