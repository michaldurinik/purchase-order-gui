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
import {AutoCompleteModule} from 'primeng/autocomplete';
import { StandardformComponent } from './standardform/standardform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormsComponent,
    OrdersComponent,
    HomeComponent,
    StandardformComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
