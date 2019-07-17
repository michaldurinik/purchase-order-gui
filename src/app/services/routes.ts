import {Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {FormsComponent} from '../forms/forms.component';
import {OrdersComponent} from '../orders/orders.component';
import {HomeComponent} from '../home/home.component';
import {StandardformComponent } from '../standardform/standardform.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'standardform', component: StandardformComponent },
  { path: '**', redirectTo: ''},
];
