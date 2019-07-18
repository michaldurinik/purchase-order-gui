import { Component, Injectable, OnInit} from '@angular/core';
import { Orders } from '../model/orders';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

@Injectable()
export class OrdersComponent implements OnInit {
  title = 'Order details';
  orders: Orders[];
  cols: any[];

  constructor(private http: HttpClient) {
    this.orders = [];

    this.http.get<Orders[]>('assets/data/orders.json')
      .subscribe(data => this.orders = data);
  }

  ngOnInit() {
    this.cols = [
      { field: 'poNumber', header: 'PO number' },
      { field: 'date', header: 'Date' },
      { field: 'subDepartment', header: 'Sub Department' },
      { field: 'requestedBy', header: 'Requested By' },
      { field: 'status', header: 'Status' }
    ];
  }
}
