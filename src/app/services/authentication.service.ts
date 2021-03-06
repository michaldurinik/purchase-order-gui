import { Injectable } from '@angular/core';
import { User} from '../model/user';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { placeholdersToParams } from '@angular/compiler/src/render3/view/i18n/util';
import { __param } from 'tslib';
import { Router } from '@angular/router';

const serverUrl = 'http://localhost:8080/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public authed = false;
  private user: User;

  constructor(private http: HttpClient, private router: Router) {
    // TODO
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUserSubject = new BehaviorSubject<User>(this.user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  giefAuth() {
    return this.authed;
  }
  doAuth() {
    this.authed = true;
  }

  loggingOut() {
    this.authed = false;
  }

  login(nnumber, password) {
    return this.http.post<any>(serverUrl, {nnumber, password})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('currentUser', user);
        this.currentUserSubject.next(user);

        // TODO
        // this.currentUserSubject.value.isValid();
        console.log(user);
        this.doAuth();
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.loggingOut();
    this.router.navigate(['/']);
  }

  // getUser(nnumber): User {
  //   for (const user of this.userList) {
  //     if (user.nnumber === nnumber) {
  //       return user;
  //     }
  //   }
  //   return null;
  // }

  // showError() {
  //   this.msgs = [];
  //   this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Invalid name or Password'});
  // }

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
