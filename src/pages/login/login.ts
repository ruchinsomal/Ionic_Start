import { Component } from '@angular/core';
import { NavController, ModalController, Events} from 'ionic-angular';
import { HomePage } from '../home/home';
import { MyListPage } from '../my-list/my-list';
import { SignUpPage } from '../sign-up/sign-up';
import { SideBarPage } from '../side-bar/side-bar';
import { TabsPage } from '../tabs/tabs';
import { MyCustomListPage } from '../my-custom-list/my-custom-list';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public lblUsername:any;
  public lblPassword:any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public userP: UserProvider, public event: Events) {
  }
	btnSignIn() {
        console.log('username is '+this.userP.username);
        console.log('password is '+this.lblPassword);
        let data = {name:'demo',
        age:'15'};
        // let modal = this.modalCtrl.create(HomePage);
        // modal.onDidDismiss((data) => {
        // console.log('data is ' + data);
        // });
        // modal.present();
        // this.navCtrl.push(HomePage,data);
        this.navCtrl.setRoot(SideBarPage);
    }
    btnSignUp() {
        this.navCtrl.push(SignUpPage);
    }
    btnGetNotification() {
    	this.event.subscribe('addme',(data) => {
    		console.log("my notification is"+data);
    	});
    }

    btnShowList() {
        this.navCtrl.push(MyListPage);
    }

	btnShowCustomList() {
	        this.navCtrl.push(MyCustomListPage);
	}    

}