import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import {NavbarService} from '../services/navbar.service';
import {Message, MessageService} from 'primeng/api';

interface Currency {
  name: string;
}
interface Payment {
  name: string;
}
interface Approver {
  name: string;
}

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.css'],
  providers: [MessageService],
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
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private navbarService: NavbarService, private messageService: MessageService) {
    this.navbarService.setTitle(this.title);
    this.trainingForm = this.formBuilder.group({
      currency: ['', Validators.required],
      payment: ['', Validators.required],
      approver: ['', Validators.required],
      // company nested group
      company: this.formBuilder.group({
        companyName: ['', Validators.required],
        companyAddress: ['', Validators.required],
        companyPhone: ['', Validators.required],
        companyEmail: ['', Validators.required],
      }),
      // course nested group
      course: this.formBuilder.array([this.buildCourses()]),
      // end group
    });
    this.currencies = [
      {name: '€ - Euro'},
      {name: '£ - Sterling'},
      {name: '$ - Dollar'},
    ];
    this.paymentMethod = [
      {name: 'Credit Card - Visa'},
      {name: 'Credit Card - Master'},
      {name: 'Cash'},
      {name: 'Cheque'},
    ];
    this.approvers = [
      {name: 'Peter Parker'},
      {name: 'Tony Stark'},
      {name: 'Bruce Wayne'}
    ];
  }
  showConfirm() {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }
  submit() {
    console.log(this.trainingForm.value);
    this.messageService.clear('c');
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    this.trainingForm.reset();
  }

  onReject() {
    this.messageService.clear('c');
  }

  addItem(): void {
    this.order.push(this.buildOrders());
  }
  addCourse(): void {
    this.course.push(this.buildCourses());
  }
  removeItem(index): void {
    // tslint:disable-next-line:triple-equals
    if (this.item.length > 1) {
      this.item.removeAt(index);
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
