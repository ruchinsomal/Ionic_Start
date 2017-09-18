import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public lblUsername:any;
  public lblPassword:any;

  constructor(public navCtrl: NavController) {
  }
btnSignIn() {
        console.log('username is '+this.lblUsername);
        console.log('password is '+this.lblPassword);
        let data = {name:'demo',
        age:'15'};
        this.navCtrl.push(HomePage,data);
    }

}