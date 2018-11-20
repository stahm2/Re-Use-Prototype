import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

  }

  leavePage() {
    let alert = this.alertCtrl.create({
      title: 'Seite verlassen',
      message: 'Möchten Sie auf die Startseite zurückkehren?',
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

  save() {
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
