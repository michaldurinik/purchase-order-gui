import { TestBed } from '@angular/core/testing';

import { SuppliersService } from './suppliers.service';

describe('SuppliersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuppliersService = TestBed.get(SuppliersService);
    expect(service).toBeTruthy();
  });
});
