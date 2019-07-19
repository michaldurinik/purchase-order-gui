import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'LIT Purchase Order';
  display: boolean = false;

  showDialog() {
    this.display = true;
  }
  constructor() { }

  ngOnInit() {
  }
}
