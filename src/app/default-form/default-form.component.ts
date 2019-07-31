import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NavbarService } from '../services/navbar.service';
import { SuppliersService } from '../services/suppliers.service';
import { Suppliers } from '../model/supplier-details';

@Component({
  selector: 'app-default-form',
  templateUrl: './default-form.component.html',
  styleUrls: ['./default-form.component.css']
})
export class DefaultFormComponent implements OnInit {
  title = 'Default Form';
  suppliers: Suppliers[];
  constructor(private formBuilder: FormBuilder, private navbarService: NavbarService, private supplierService: SuppliersService) {
    this.suppliers = [];
    this.getSuppliers();
  }
  defaultForm: FormGroup;
  isSubmitted = false;
  public show = false;


  ngOnInit() {
    console.log(this.suppliers);
    this.navbarService.setTitle(this.title);
    this.defaultForm = this.formBuilder.group({
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
  displaySuppliers() {
    console.log(this.suppliers);
  }
  getSuppliers() {
    this.supplierService.getAllSuppliers()
      .subscribe(data => this.suppliers = data);
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
  get course(): FormArray {
    return this.defaultForm.get('course') as FormArray;
  }
  get item(): FormArray {
    return this.defaultForm.get('item') as FormArray;
  }
  get traveller(): FormArray {
    return this.defaultForm.get('traveller') as FormArray;
  }
  get formControls() { return this.defaultForm.controls; }
  toggle() {
    this.show = !this.show;
  }
  update() {
    console.log(this.defaultForm.value);
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
}

