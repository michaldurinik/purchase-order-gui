import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginComponent: LoginComponent;
  title = 'Title of the page';

  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.loginComponent.logout();
  }
}
