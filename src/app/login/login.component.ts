import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User} from '../model/user';
import { sampleUsers } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'LIT Purchase Order';

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  loginForm: FormGroup;
  isSubmitted = false;
  user: User;

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      nnumber: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login() {
  console.log(this.loginForm.value);
  this.router.navigateByUrl('/home');
  }
}
