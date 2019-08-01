import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  public showOne = false;
  public showTwo = false;


  ngOnInit() {
    this.navbarService.setTitle(this.title);
    this.travellerForm = this.formBuilder.group({
      Currency: ['', Validators.required],
      order: this.formBuilder.group({
        purchaseOrderNo: ['', Validators.required],
        purchaseOrderDate: ['', Validators.required],
        requesterNnumber: ['', Validators.required],
        requesterName: ['', Validators.required],
        purchaseOrderLocation: ['', Validators.required],
        authorisedBy: ['', Validators.required],
        unitName: ['', Validators.required],
        nameSDL: ['', Validators.required]
      }),
      // company nested group
      company: this.formBuilder.group({
        companyName: ['', Validators.required],
        companyAddress: ['', Validators.required],
        companyPhoneNumber: ['', Validators.required],
        companyEmail: ['', Validators.required],
      }),
      // end nested group
      // Each Traveller has a hotel & flight and car of their own nested group
      traveller: this.formBuilder.array([this.buildTravellers()]),
      // end of group
      // purchase order nested group
      item: this.formBuilder.array([this.buildItems()]),
      // end group
      // course nested group
      course: this.formBuilder.array([this.buildCourses()]),
      // end group
    });
  }
  addItem(): void {
    this.item.push(this.buildItems());
  }
  addCourse(): void {
    this.course.push(this.buildCourses());
  }
  addTraveller(): void {
    this.traveller.push(this.buildTravellers());
  }
  removeTraveller(index): void {
    // tslint:disable-next-line:triple-equals
    if (this.traveller.length > 1) {
      this.traveller.removeAt(index);
    }
  }
  get order(): FormArray {
    return this.travellerForm.get('order') as FormArray;
  }
  get course(): FormArray {
    return this.travellerForm.get('course') as FormArray;
  }
  get item(): FormArray {
    return this.travellerForm.get('item') as FormArray;
  }
  get traveller(): FormArray {
    return this.travellerForm.get('traveller') as FormArray;
  }
  get formControls() { return this.travellerForm.controls; }
  update() {
    console.log(this.travellerForm.value);
  }
  buildTravellers() {
    return this.formBuilder.group({
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
    });
  }
  buildCourses() {
    return this.formBuilder.group({
      nameCourse: ['', Validators.required],
      dateCourseStart: ['', Validators.required],
      courseDuration: ['', Validators.required],
      courseLocation: ['', Validators.required],
      directorName: ['', Validators.required],
      coursePrice: ['', Validators.required],
      amountAttending: ['', Validators.required],
      priceIncludeHotel: [false, Validators.required]
    });
  }
  buildItems() {
    return this.formBuilder.group({
      itemQuantity: ['', Validators.required],
      itemDescription: ['', Validators.required],
      itemPricePerUnit: ['', Validators.required]
    });
  }
  toggle() {
    this.show = !this.show;
  }
  toggleOne() {
    this.showOne = !this.showOne;
  }
  toggleTwo() {
    this.showTwo = !this.showTwo;
  }
}


