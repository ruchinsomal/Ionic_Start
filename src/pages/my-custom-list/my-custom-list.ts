import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyCustomListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-custom-list',
  templateUrl: 'my-custom-list.html',
})
export class MyCustomListPage {
	items: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  	this.items = [];
    console.log('ionViewDidLoad MyCustomListPage');
    for (var i = 0; i < 10; i++) {
    	this.items.push({
    		text:'ruchin ' + i,
    		subText:'somal ' + i,
    		id:i
    	})
    }
  }

  itemSelected(item) {
  	alert(item.text);
  }

}
