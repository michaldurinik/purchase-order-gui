import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-default-form',
  templateUrl: './default-form.component.html',
  styleUrls: ['./default-form.component.css']
})
export class DefaultFormComponent implements OnInit {
  title = 'Default Form';

  constructor(private formBuilder: FormBuilder, private navbarService: NavbarService) {}
  defaultForm: FormGroup;
  isSubmitted = false;
  public show = false;

  ngOnInit() {
    this.navbarService.setTitle(this.title);
    this.defaultForm = this.formBuilder.group({
      purchaseOrderNo: ['', Validators.required],
      purchaseOrderDate: ['', Validators.required],
      requesterNnumber: ['', Validators.required],
      requesterName: ['', Validators.required],
      purchaseOrderLocation: ['', Validators.required],
      // company nested group
      company: this.formBuilder.group({
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companyPhoneNumber: ['', Validators.required],
      companyEmail: ['', Validators.required]
      }),
      // end nested group
      // Each Traveller has a hotel & flight and car of their own nested group
      traveller: this.formBuilder.group({
        travellerName: ['', Validators.required],
        travellerNnumber: ['', Validators.required],
        hotel: this.formBuilder.group({
          hotelName: ['', Validators.required],
          hotelCheckIn: ['', Validators.required],
          hotelCheckOut: ['', Validators.required],
          hotelCost: ['', Validators.required],
          hotelAccountUse: ['', Validators.required]
        }),
        flight: this.formBuilder.group( {
          flightAirline: ['', Validators.required],
          departureAirport: ['', Validators.required],
          arrivalAirport: ['', Validators.required],
          flightCheckIn: ['', Validators.required],
          flightCheckOut: ['', Validators.required],
          flightCost: ['', Validators.required],
          flightAccountUse: ['', Validators.required]
        }),
        car: this.formBuilder.group({
          addCarName: ['', Validators.required],
          addCarCollectionDate: ['', Validators.required],
          addCarReturnDate: ['', Validators.required],
          addCarPricePerDay: ['', Validators.required]
        })
      }),
      // end of group
      // purchase order nested group
      item: this.formBuilder.group({
        itemQuantity: ['', Validators.required],
        itemDescription: ['', Validators.required],
        Currency: ['', Validators.required],
        itemPricePerUnit: ['', Validators.required]
      }),
      // end group
      // course nested group
      course: this.formBuilder.group({
      nameCourse: ['', Validators.required],
      dateCourseStart: ['', Validators.required],
      courseDuration: ['', Validators.required],
      courseLocation: ['', Validators.required],
      directorName: ['', Validators.required],
      coursePrice: ['', Validators.required],
      priceIncludeHotel: ['', Validators.required]
      }),
      // end group
      authorisedBy: ['', Validators.required],
      unitName: ['', Validators.required],
      nameSDL: ['', Validators.required]
    });
  }

  get formControls() { return this.defaultForm.controls; }
  toggle() {
    this.show = !this.show;
  }
  update() {
    console.log(this.defaultForm.value);
  }
}
