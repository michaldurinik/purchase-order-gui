import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order';
import { BehaviorSubject, Observable } from 'rxjs';

const serverUrl = 'assets/data/orders.json';

@Injectable({
  providedIn: 'root'
})
export class OrdersHttpService {
  private orders: BehaviorSubject<Order[]>;

  constructor(private http: HttpClient) {
    this.orders = new BehaviorSubject<Order[]>([]);
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(serverUrl);
  }
}
