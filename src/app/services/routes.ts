import {Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {AppComponent} from '../app.component';
import {FormsComponent} from '../forms/forms.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: AppComponent },
  { path: 'forms', component: FormsComponent },
  { path: '', component: AppComponent },
  { path: '**', redirectTo: ''},
];
