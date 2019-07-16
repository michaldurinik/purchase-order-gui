import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

=======
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { OrdersComponent } from './orders/orders.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './services/routes';
import { HomeComponent } from './home/home.component';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormsComponent,
    OrdersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
<<<<<<< HEAD
    InputTextModule,
    PasswordModule,
=======
    RouterModule,
    RouterModule.forRoot(appRoutes)
>>>>>>> master
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
