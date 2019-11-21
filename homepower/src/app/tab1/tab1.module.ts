import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { RequestsService } from '../services/requests.service';
import { HttpClientModule } from '@angular/common/http';
// import { HTTP } from '@ionic-native/http/ngx';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],providers: [
    RequestsService
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
