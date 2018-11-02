import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openFragebogen(){
    this.navCtrl.push('ArmbewegungPage');
  }

  openGewicht(){
    this.navCtrl.push('GewichtPage');
  }

  openBegleittherapie(){
    this.navCtrl.push('BegleittherapiePage');
  }

  openBlutdruck(){
    this.navCtrl.push('BlutdruckPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
