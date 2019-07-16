import { Component, OnInit } from '@angular/core';
import {Suppliers} from '../model/supplier-details';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  companies: Suppliers[];
  company = this.companies[0];


  constructor(private http: HttpClient) {

    this.http.get<Suppliers[]>('assets/data/Suppliers.json')
      .subscribe(company => this.companies = company);
  }
}
