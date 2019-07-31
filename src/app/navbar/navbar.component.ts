import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = '';
  loggedUserEmail: string;

  constructor(private navbarService: NavbarService, private authenticationService: AuthenticationService) {
    this.loggedUserEmail = authenticationService.currentUserValue.email;
  }

  ngOnInit() {
    this.navbarService.title.subscribe(updatedTitle => {
      this.title = updatedTitle;
    });
  }

  logout() {
    this.authenticationService.logout();
  }
}
