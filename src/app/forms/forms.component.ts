import { Component, OnInit } from '@angular/core';
import {SlideMenuModule} from 'primeng/slidemenu';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  title = 'LIT Purchase Orders - FORMS'

  constructor() { }

  ngOnInit() {
  }

}
