import { Component, Injectable, OnInit} from '@angular/core';
import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from 'primeng/api';
import { NavbarService } from '../services/navbar.service';
import { OrdersService } from '../services/orders.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

@Injectable()
export class OrdersComponent implements OnInit {
  title = 'Order details';
  orders: Order[];
  cols: any[];
  actionMenu: MenuItem[];

  constructor(private http: HttpClient,
              private navbarService: NavbarService, private ordersService: OrdersService,
              private authenticationService: AuthenticationService) {
    this.orders = [];
    this.getOrders();
  }

  ngOnInit() {
    this.navbarService.setTitle(this.title);
    console.log(this.authenticationService.currentUserValue.nnumber);
    console.log(this.authenticationService.currentUserValue.secret);
    this.cols = [
      {field: 'poNumber', header: 'PO number'},
      {field: 'date', header: 'Date'},
      {field: 'subDepartment', header: 'Sub Department'},
      {field: 'requestedBy', header: 'Requested By'},
      {field: 'status', header: 'Status'}
    ];

    this.actionMenu = [
      {label: 'Edit', icon: 'pi pi-pencil', command: () => {
          this.edit();
        }},
      {label: 'Approve', icon: 'pi pi-check', command: () => {
          this.approve();
        }},
      {label: 'Reject', icon: 'pi pi-times', command: () => {
          this.reject();
        }},
      {label: 'Close', icon: 'pi pi-lock', command: () => {
          this.close();
        }},
    ];
  }

  getOrders() {
    this.ordersService.getAllOrders()
      .subscribe(data => this.orders = data);
  }

  getCurrentPO(poNumber): Order {
    for (const order of this.orders) {
      if (order.poNumber === poNumber) {
        return order;
      }
    }
    return null;
  }

  edit() {
    console.log('will allow user to edit');
  }

  approve() {
    this.getCurrentPO('1683485').status = 'approved';
  }

  reject() {
    this.getCurrentPO('1683485').status = 'rejected';
  }

  close() {
    this.getCurrentPO('1683485').status = 'closed';
  }
}
