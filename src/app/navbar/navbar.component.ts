import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginComponent: LoginComponent;
  title = '';
  currentUser = 'john.doe@gmail.com';

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.title.subscribe(updatedTitle => {
      this.title = updatedTitle;
    });
  }

  logout() {
    this.loginComponent.logout();
  }
}
