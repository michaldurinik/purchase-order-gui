import {Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {FormsComponent} from '../forms-home/forms.component';
import {OrdersComponent} from '../orders/orders.component';
import {HomeComponent} from '../home/home.component';
import {StandardformComponent } from '../standardform/standardform.component';
import {TravelFormComponent} from '../travel-form/travel-form.component';
import {DefaultFormComponent} from '../default-form/default-form.component';
import {TrainingFormComponent} from '../training-form/training-form.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'standardform', component: StandardformComponent },
  { path: 'travel-form', component: TravelFormComponent },
  { path: 'training-form', component: TrainingFormComponent },
  { path: 'default-form', component: DefaultFormComponent },
  { path: '**', redirectTo: ''},
];
