import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css']
})

export class TravelFormComponent implements OnInit {
  title = 'Travel Form';

  constructor(private formBuilder: FormBuilder) {}
  travellerForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.travellerForm  =  this.formBuilder.group({
      travellerName: ['', Validators.required],
      travellerNnumber: ['',  Validators.required],
      hotelName: ['',  Validators.required],
      departureAirport: ['',  Validators.required],
      arrivalAirport: ['',  Validators.required],
    });
  }
  get formControls() { return this.travellerForm.controls; }
  update() {
    console.log(this.travellerForm.value);
  }
}

