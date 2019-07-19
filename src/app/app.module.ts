import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './services/routes';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StandardformComponent } from './standardform/standardform.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule, SplitButtonModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TravelFormComponent } from './travel-form/travel-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormsComponent,
    OrdersComponent,
    HomeComponent,
    StandardformComponent,
    TravelFormComponent
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
