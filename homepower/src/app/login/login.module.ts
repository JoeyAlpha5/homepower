import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestsService } from '../services/requests.service';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HttpClientModule,

  ],
  providers: [
    RequestsService
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
