import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  public title = new BehaviorSubject('set title in this component');

  constructor() { }

  setTitle(title: string) {
    this.title.next(title);
  }
}
