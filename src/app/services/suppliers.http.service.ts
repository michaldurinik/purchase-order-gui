import { Injectable } from '@angular/core';
import {SuppliersService} from './suppliers.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Suppliers} from '../model/supplier-details';

const serverUrl = 'assets/data/suppliers.json';
@Injectable({
  providedIn: 'root'
})
export class SuppliersHttpService extends SuppliersService {
  private Suppliers: BehaviorSubject<Suppliers[]>;

  constructor(private http: HttpClient) {
    super();
    this.Suppliers = new BehaviorSubject<Suppliers[]>([]);
  }

  getAllSuppliers(): Observable<Suppliers[]> {
    return this.http.get<Suppliers[]>(serverUrl);
  }
}
