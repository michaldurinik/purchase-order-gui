import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'LIT Purchase Order';
  display = false;

  showDialog() {
    this.display = true;
  }
  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.setTitle(this.title);
  }
}
