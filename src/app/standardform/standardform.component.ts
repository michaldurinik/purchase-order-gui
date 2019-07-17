import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-standardform',
  templateUrl: './standardform.component.html',
  styleUrls: ['./standardform.component.css'],
})
export class StandardformComponent implements OnInit {
  title = 'LIT Purchase Order';
  constructor() { }

  ngOnInit() {
  }
}
