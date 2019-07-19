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
  userList = sampleUsers();
  msgs = [];

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      nnumber: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  findUser(nnumber): User {
    for (const user of this.userList) {
      if (user.nnumber === nnumber) {
        return user;
      }
    }
    return null;
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Invalid name or Password'});
  }

  login() {
    this.isSubmitted = true;
    const currentUser = this.findUser(this.loginForm.value.nnumber);
    if (currentUser != null) {
      if (currentUser.password === this.loginForm.value.password) {
        currentUser.authenticate();
      }
    } else {
      return;
    }
    if (currentUser.isAuthenticated) {
      this.router.navigateByUrl('/home');
    }
  }
}
