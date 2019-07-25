import { TestBed } from '@angular/core/testing';

import { OrdersHttpService } from './orders.http.service';

describe('OrdersHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersHttpService = TestBed.get(OrdersHttpService);
    expect(service).toBeTruthy();
  });
});
