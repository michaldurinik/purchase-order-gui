import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrdersService } from './orders.service';

const serverUrl = 'http://localhost:8080/po';

@Injectable({
  providedIn: 'root'
})
export class OrdersHttpService extends OrdersService {
  private orders: BehaviorSubject<Order[]>;

  constructor(private http: HttpClient) {
    super();
    this.orders = new BehaviorSubject<Order[]>([]);
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(serverUrl);
  }
}
