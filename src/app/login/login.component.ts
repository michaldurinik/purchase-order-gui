import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User} from '../model/user';
// import { sampleUsers } from '../model/user';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'LIT Purchase Order';
  loginForm: FormGroup;
  isSubmitted = false;
  user: User;
  // userList = sampleUsers();
  msgs = [];
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      nnumber: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/home'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
  }

  get formControls() { return this.loginForm.controls; }

  onSubmit() {
    this.isSubmitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // this.loading = true;
    this.authenticationService.login(this.formControls.nnumber.value, this.formControls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigateByUrl('/home');
        },
        error => {
          // this.alertService.error(error);
          // this.loading = false;
        });
  }
  // getUser(nnumber): User {
  //   for (const user of this.userList) {
  //     if (user.nnumber === nnumber) {
  //       return user;
  //     }
  //   }
  //   return null;
  // }

  showError() {
    this.msgs = [];
    this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Invalid name or Password'});
  }

  // login() {
  //   this.isSubmitted = true;
  //   const currentUser = this.getUser(this.loginForm.value.nnumber);
  //   if (currentUser != null) {
  //     if (currentUser.password === this.loginForm.value.password) {
  //       currentUser.authenticate();
  //     }
  //   } else {
  //     return;
  //   }
  //   if (currentUser.isAuthenticated) {
  //     this.router.navigateByUrl('/home');
  //   }
  // }
  //
  // logout() {
  //   this.getUser(this.loginForm.value.nnumber).deauthenticate();
  //   this.router.navigateByUrl('/login');
  // }
}
