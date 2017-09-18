import { Component } from '@angular/core';
import { NavController, NavParams, Events, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public event: Events) {
  
  }

  ionViewDidLoad() {
  	console.log("name is "+this.navParams.get('name'))
  	let data = {name:'my nottification',
        myClass:'home page'};
        this.event.publish('addme',data);
  }

}
