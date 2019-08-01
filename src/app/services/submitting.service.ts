import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const serverUrl = 'http://localhost:8080/receivepo';

@Injectable({
  providedIn: 'root'
})
export class SubmittingService {

  constructor(private http: HttpClient, private router: Router) {
  }

  sendPOdataToBackend(nnumber, secret, poData) {
    return this.http.post<any>(serverUrl, {nnumber, secret, poData});
  }
}
