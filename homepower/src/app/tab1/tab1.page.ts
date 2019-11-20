import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private sms: SMS) {}

  turnPower(state){
    // Send a text message using default options
    this.sms.send('+27630547090', 'SetRDo');
  }
}
