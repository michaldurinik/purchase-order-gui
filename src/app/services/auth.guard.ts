import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    // console.log('user authenticated? ' + currentUser.isAuthenticated);
    // if (currentUser.isValid()) {
    if (this.authenticationService.giefAuth()) {
      // authorised so return true
      console.log('authenticated, CanActivate: True');
      return true;
    }
    console.log('NOT authenticated, CanActivate: False');
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    // this.router.navigate(['/login']);
    return false;
  }
}
