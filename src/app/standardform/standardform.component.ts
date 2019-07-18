import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-standardform',
  templateUrl: './standardform.component.html',
  styleUrls: ['./standardform.component.css'],
})
export class StandardformComponent  {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companyPhone: ['', Validators.required],
      companyEmail: ['', Validators.required],

    });
  }
  Submit() {
    console.log(this.form.value);
  }
}

/*
import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Company } from '../model/company';

@Component({
  selector: 'app-standardform',
  templateUrl: './standardform.component.html',
  styleUrls: ['./standardform.component.css'],
})

export class StandardformComponent implements OnInit {
  companyForm: FormGroup;
  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];
  constructor(private formBuilder: FormBuilder) {
    this.companyForm = this.formBuilder.group({
      companyName: [''],
      companyAddress: [''],
      companyPhone: [''],
      companyEmail: ['']
    });
  }
  ngOnInit() {
    this.companyForm  =  this.formBuilder.group({
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companyPhone: ['', Validators.required],
      companyEmail: ['', Validators.required]
    });
}}
*/
