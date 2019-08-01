import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms-home/forms.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableModule } from 'primeng/table';
import {MessagesModule, OverlayPanelModule, SplitButtonModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TravelFormComponent } from './travel-form/travel-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './services/navbar.service';
import { OrdersHttpService} from './services/orders.http.service';
import { OrdersService } from './services/orders.service';
import { StandardformComponent } from './standardform/standardform.component';
import { DefaultFormComponent } from './default-form/default-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { AuthenticationService } from './services/authentication.service';
import { SuppliersService } from './services/suppliers.service';
import { SuppliersHttpService } from './services/suppliers.http.service';
import { TrainingFormComponent } from './training-form/training-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormsComponent,
    OrdersComponent,
    HomeComponent,
    StandardformComponent,
    TravelFormComponent,
    NavbarComponent,
    DefaultFormComponent,
    TrainingFormComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule, SplitButtonModule,
    InputTextModule,
    PasswordModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    ToastModule,
    DialogModule,
    BrowserAnimationsModule,
    DropdownModule,
    MessagesModule,
  ],
  providers: [
    NavbarService,
    AuthenticationService,
    { provide: OrdersService, useClass: OrdersHttpService },
    { provide : SuppliersService, useClass: SuppliersHttpService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
