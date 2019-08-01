import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import {Message, MessageService} from 'primeng/api';

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
  selector: 'app-standardform',
  templateUrl: './standardform.component.html',
  styleUrls: ['./standardform.component.css'],
  providers: [MessageService]
})
export class StandardformComponent {
  standardForm: FormGroup;
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  currencies: Currency[];
  paymentMethod: Payment[];
  approvers: Approver[];
  isSubmitted = false;
  public show = false;
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {
    this.standardForm = this.formBuilder.group({
      currency: ['', Validators.required],
      payment: ['', Validators.required],
      approver: ['', Validators.required],
   /*   orderDetails: this.formBuilder.group({
          accountUse: ['', Validators.required],
          orderQuantity: ['', Validators.required],
          orderDescription: ['', Validators.required],
          orderCost: ['', Validators.required],
          orderTotal: ['', Validators.required],
          selectedCurrency: ['', Validators.required],
          unitName: ['', Validators.required],
          nameSDL: ['', Validators.required]
      }),*/
      // company nested group
      company: this.formBuilder.group({
        companyName: ['', Validators.required],
        companyAddress: ['', Validators.required],
        companyPhone: ['', Validators.required],
        companyEmail: ['', Validators.required],
      }),
      // end nested group
      // purchase order nested group
      order: this.formBuilder.array([this.buildOrders()]),
      // end group
    })
    ;
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
      {name: 'Iron-man', code: '$'}
      ];
  }
  showConfirm() {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }
  addItem(): void {
    this.order.push(this.buildOrders());
  }
  get order(): FormArray {
    return this.standardForm.get('order') as FormArray;
  }
  submit() {
    console.log(this.standardForm.value);
    this.messageService.clear('c');
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    this.standardForm.reset();
  }
  get formControls() { return this.standardForm.controls;
  }
  removeItem(index): void {
    // tslint:disable-next-line:triple-equals
    if (this.order.length > 1) {
      this.order.removeAt(index);
    }
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
