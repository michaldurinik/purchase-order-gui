import { TestBed } from '@angular/core/testing';
import {SuppliersHttpService} from './suppliers.http.service';




describe('SuppliersHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuppliersHttpService = TestBed.get(SuppliersHttpService);
    expect(service).toBeTruthy();
  });
});
