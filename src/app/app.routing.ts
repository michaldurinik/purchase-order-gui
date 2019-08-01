import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms-home/forms.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { StandardformComponent } from './standardform/standardform.component';
import { TravelFormComponent } from './travel-form/travel-form.component';
import { DefaultFormComponent } from './default-form/default-form.component';
import { AuthGuard } from './services/auth.guard';
import { TrainingFormComponent } from './training-form/training-form.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'forms', component: FormsComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'standardform', component: StandardformComponent, canActivate: [AuthGuard] },
  { path: 'training-form', component: TrainingFormComponent, canActivate: [AuthGuard] },
  { path: 'travel-form', component: TravelFormComponent, canActivate: [AuthGuard] },
  { path: 'default-form', component: DefaultFormComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: ''},
];
