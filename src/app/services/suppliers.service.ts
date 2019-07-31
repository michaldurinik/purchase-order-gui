import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suppliers } from '../model/supplier-details';


@Injectable({
  providedIn: 'root'
})
export abstract class SuppliersService {
  abstract getAllSuppliers(): Observable<Suppliers[]>;
}
