import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Suppliers } from '../model/supplier-details';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {
  title = 'LIT Purchase Orders - FORMS'
  suppliers: Suppliers[];

  constructor(private http: HttpClient) {
    this.suppliers = [];

    this.http.get<Suppliers[]>('assets/data/suppliers.json')
      .subscribe(company => this.suppliers = company);
  }

  showSuppliers() {
    for (const company of this.suppliers) {
      console.log(company.name);
    }
  }
}
