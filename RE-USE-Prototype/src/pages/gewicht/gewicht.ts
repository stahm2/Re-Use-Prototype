import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private alertCtrl: AlertController) {}

  leavePage() {
    let alert = this.alertCtrl.create({
      title: 'Eingabe abbrechen',
      message: 'Möchten Sie die eingabe wircklich abbrechen?',
      buttons: [
        {
          text: 'Ja',
          role: 'yes',
          handler: () => {
            this.goToHome();
            console.log('yes clicked');
          }
        },
        {
          text: 'Nein',
          handler: () => {
            console.log('no clicked');
          }
        }
      ]
    });
    alert.present();
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
