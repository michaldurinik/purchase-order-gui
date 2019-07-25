import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export abstract class OrdersService {
  abstract getAllOrders(): Observable<Order[]>;
}
