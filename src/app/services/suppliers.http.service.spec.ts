import { TestBed } from '@angular/core/testing';

import { Suppliers.HttpService } from './suppliers.http.service';

describe('Suppliers.HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Suppliers.HttpService = TestBed.get(Suppliers.HttpService);
    expect(service).toBeTruthy();
  });
});
