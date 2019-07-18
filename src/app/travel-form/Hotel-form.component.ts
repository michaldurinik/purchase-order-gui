import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-hotel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css']
})

export class HotelFormComponent implements OnInit {
  title = 'Hotel Form';

  constructor(private formBuilder: FormBuilder) {}
  hotelForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.hotelForm  =  this.formBuilder.group({
      hotelName: ['',  Validators.required],
      departureAirport: ['',  Validators.required],
      arrivalAirport: ['',  Validators.required],
    });
  }
  get formControls() { return this.hotelForm.controls; }
  update() {
    console.log(this.hotelForm.value);
  }
}
