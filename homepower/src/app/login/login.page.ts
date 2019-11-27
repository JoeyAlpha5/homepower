import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private requests: RequestsService, private route: Router,private storage: Storage) { }

  ngOnInit() {
  }


  signIn(){
    let pass = <HTMLInputElement>document.getElementById("passwordInput");
    let username = <HTMLInputElement>document.getElementById("userInputdInput");
    console.log(pass.value,username.value);
    if(pass.value != "" && username.value != ""){
      let login_req = this.requests.login(username.value,pass.value);
      login_req.subscribe(x=>{
        console.log(x);
        if(x["authenticated"] == "user is authenticated"){
          this.route.navigate(['/home/tabs/tab1']);
          this.storage.set("username", x["username"]);
        }
      })
    }
  }
}
