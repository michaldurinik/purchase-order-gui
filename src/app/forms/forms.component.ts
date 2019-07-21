import { Component, OnInit } from '@angular/core';
import { Suppliers } from '../model/supplier-details';
import { HttpClient } from '@angular/common/http';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {
  title = 'Purchase Orders - FORMS';
  suppliers: Suppliers[];

  constructor(private http: HttpClient, private navbarService: NavbarService) {
    this.suppliers = [];

    this.http.get<Suppliers[]>('assets/data/suppliers.json')
      .subscribe(company => this.suppliers = company);
  }

  ngOnInit() {
    this.navbarService.setTitle(this.title);
  }

  showSuppliers() {
    for (const company of this.suppliers) {
      console.log(company.name);
    }
  }
}
