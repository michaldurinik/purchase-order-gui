import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

const serverUrl = 'http://localhost:8080/po';

@Injectable({
  providedIn: 'root'
})
export class SubmittingService {

  constructor(private http: HttpClient, private router: Router) {
  }

  sendPoDataToBackend(nnumber, secret, poData) {
    return this.http.post<any>(serverUrl, {nnumber, secret, poData})
      .pipe(map(p => {
        console.log('sending PO');
        return p;
      }));
  }
}
