import { Component } from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';
import { RequestsService } from '../services/requests.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private statusBar: StatusBar,private requests: RequestsService) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
  }

  turnPower(state){
    // Send a text message using default options
   let req = this.requests.Power(state);
   req.subscribe();
    
  }

  ionViewDidEnter(){
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
  }
}
