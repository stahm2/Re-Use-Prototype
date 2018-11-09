import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the GewichtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gewicht',
  templateUrl: 'gewicht.html',
})
export class GewichtPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

  }


  goToHome() {
    this.navCtrl.popToRoot();
  }

  save(gewicht, bauch) {
    this.storage.set('gewicht', gewicht);
    this.storage.set('bauch', bauch);
    console.log("Data saved");
    this.storage.get('gwicht').then((val) => {
      console.log('The weight was:', val, 'and the key was');
    });
    this.storage.get('bauch').then((val) => {
      console.log('The bauchumfang was:', val, 'and the key was');
    });
    console.log("Data saved");
    this.navCtrl.popToRoot();
  }


  back() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad GewichtPage');
  };

}
