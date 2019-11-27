import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { RequestsService } from '../services/requests.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  username:any;
  result: Observable<any>;
  showBtn: boolean;
  constructor(private platform: Platform,private statusBar: StatusBar,private route: Router,private requests: RequestsService, private storage: Storage,private location: Location) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');

    this.platform.backButton.subscribe(() => {
      this.ionViewDidEnter();
    });
  }

  turnPower(state){
    // Send a text message using default options
   let req = this.requests.Power(state);
   req.subscribe();
    
  }

  ionViewDidEnter(){
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.storage.get("username").then(x=>{
      console.log(x);
      this.username = x;
      this.result = this.requests.getResidence(x);
      this.result.subscribe();
      this.showBtn = false;

    }).catch(x=>{
      this.route.navigate(['']);
    })
  }


  back(){
    this.storage.get("username").then(x=>{
      console.log(x);
      this.username = x;
      this.result = this.requests.getResidence(x);
      this.result.subscribe();
      this.showBtn = false;
    }).catch(x=>{
      this.route.navigate(['']);
    })
  }

  getUnits(residence_id){
    console.log(residence_id);
    this.result = this.requests.getUnit(residence_id);
    this.result.subscribe();
    this.showBtn = true;
  }
}
