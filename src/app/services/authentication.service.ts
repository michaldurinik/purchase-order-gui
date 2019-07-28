import { Injectable } from '@angular/core';
import { User} from '../model/user';
import { sampleUsers } from '../model/user';
import { BehaviorSubject, config, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // login(username, password) {
  //   return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
  //     .pipe(map(user => {
  //       // store user details and jwt token in local storage to keep user logged in between page refreshes
  //       localStorage.setItem('currentUser', JSON.stringify(user));
  //       this.currentUserSubject.next(user);
  //       return user;
  //     }));
  // }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
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
