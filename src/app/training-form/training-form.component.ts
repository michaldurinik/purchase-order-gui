import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import {NavbarService} from '../services/navbar.service';

interface Currency {
  name: string;
  code: string;
}
interface Payment {
  name: string;
  code: string;
}
interface Approver {
  name: string;
  code: string;
}

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.css'],
})
export class TrainingFormComponent {
  trainingForm: FormGroup;
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  currencies: Currency[];
  paymentMethod: Payment[];
  approvers: Approver[];
  isSubmitted = false;
  public show = false;
  title = 'Training Form';

  constructor(private formBuilder: FormBuilder, private navbarService: NavbarService) {
    this.navbarService.setTitle(this.title);
    this.trainingForm = this.formBuilder.group({
      currency: ['', Validators.required],
      payment: ['', Validators.required],
      approver: ['', Validators.required],
      orderDetails: this.formBuilder.group({
        accountUse: ['', Validators.required],
        orderQuantity: ['', Validators.required],
        orderDescription: ['', Validators.required],
        orderCost: ['', Validators.required],
        orderTotal: ['', Validators.required],
        selectedCurrency: ['', Validators.required],
        unitName: ['', Validators.required],
        nameSDL: ['', Validators.required]
      }),
      // company nested group
      company: this.formBuilder.group({
        companyName: ['', Validators.required],
        companyAddress: ['', Validators.required],
        companyPhone: ['', Validators.required],
        companyEmail: ['', Validators.required],
      }),
      // end nested group
      // Each Traveller has a hotel & flight and car of their own nested group
      traveller: this.formBuilder.array([this.buildTravellers()]),
      // end of group
      // purchase order nested group
      order: this.formBuilder.array([this.buildOrders()]),
      // end group
      // course nested group
      course: this.formBuilder.array([this.buildCourses()]),
      // end group
    });
    this.currencies = [
      {name: '€ - Euro', code: '€'},
      {name: '£ - Sterling', code: '£'},
      {name: '$ - Dollar', code: '$'},
    ];
    this.paymentMethod = [
      {name: 'Credit Card - Visa', code: '1'},
      {name: 'Credit Card - Master', code: '2'},
      {name: 'Cash', code: '3'},
      {name: 'Cheque', code: '4'},
    ];
    this.approvers = [
      {name: 'Batman', code: '€'},
      {name: 'Superman', code: '£'},
      {name: 'Iron-man', code: '$'}];
  }

  addItem(): void {
    this.order.push(this.buildOrders());
  }
  addCourse(): void {
    this.course.push(this.buildCourses());
  }
  addTraveller(): void {
    this.traveller.push(this.buildTravellers());
  }
  removeItem(index): void {
    // tslint:disable-next-line:triple-equals
    if (this.item.length > 1) {
      this.item.removeAt(index);
    }
  }
  removeTraveller(index): void {
    // tslint:disable-next-line:triple-equals
    if (this.traveller.length > 1) {
      this.traveller.removeAt(index);
    }
  }
  removeCourse(index): void {
    // tslint:disable-next-line:triple-equals
    if (this.course.length > 1) {
      this.course.removeAt(index);
    }
  }
  get course(): FormArray {
    return this.trainingForm.get('course') as FormArray;
  }
  get order(): FormArray {
    return this.trainingForm.get('order') as FormArray;
  }
  get traveller(): FormArray {
    return this.trainingForm.get('traveller') as FormArray;
  }
  get item(): FormArray {
    return this.trainingForm.get('item') as FormArray;
  }
  Submit() {
    console.log(this.trainingForm.value);
  }
  update() {
    console.log(this.trainingForm.value);
  }
  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }
  get formControls() { return this.trainingForm.controls;
  }
  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
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
      flight: this.formBuilder.group({
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

  buildOrders() {
    return this.formBuilder.group({
      accountUse: ['', Validators.required],
      orderQuantity: ['', Validators.required],
      orderDescription: ['', Validators.required],
      orderCost: ['', Validators.required],
      orderTotal: ['', Validators.required]
    });
  }
}
