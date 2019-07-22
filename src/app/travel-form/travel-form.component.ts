import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css']
})

export class TravelFormComponent implements OnInit {
  title = 'Travel Form';

  constructor(private formBuilder: FormBuilder, private navbarService: NavbarService) {}
  travellerForm: FormGroup;
  isSubmitted = false;
  public show = false;


  ngOnInit() {
    this.navbarService.setTitle(this.title);
    this.travellerForm = this.formBuilder.group({
      travellerName: ['', Validators.required],
      travellerNnumber: ['', Validators.required],
      hotelName: ['', Validators.required],
      hotelCheckIn: ['', Validators.required],
      hotelCheckOut: ['', Validators.required],
      hotelCost: ['', Validators.required],
      hotelAccountUse: ['', Validators.required],
      flightAirline: ['', Validators.required],
      departureAirport: ['', Validators.required],
      arrivalAirport: ['', Validators.required],
      flightCheckIn: ['', Validators.required],
      flightCheckOut: ['', Validators.required],
      flightCost: ['', Validators.required],
      flightAccountUse: ['', Validators.required],
      addCarName: ['', Validators.required],
      addCarEmail: ['', Validators.required],
      addCarCompany: ['', Validators.required],
      addCarAdditional: ['', Validators.required]
    });
  }
  get formControls() { return this.travellerForm.controls; }
  toggle() {
    this.show = !this.show;
  }
  update() {
    console.log(this.travellerForm.value);
  }
}

