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

  openBegleittherapie(){
    this.navCtrl.push('BegleittherapiePage');
  }

  openGewicht(){
    this.navCtrl.push('GewichtPage');
  }

  openBlutdruck(){
    this.navCtrl.push('BlutdruckPage');
  }

  openSchlaf(){
    this.navCtrl.push('Schlaf1Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }



}
