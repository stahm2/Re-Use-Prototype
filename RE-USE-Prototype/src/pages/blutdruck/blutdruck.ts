import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the BlutdruckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blutdruck',
  templateUrl: 'blutdruck.html',
})
export class BlutdruckPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private alertCtrl: AlertController) {}

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

  save(sys, dia, puls) {
    this.storage.set('sys', sys);
    this.storage.set('dia', dia);
    this.storage.set('puls', puls);
    console.log("Data saved");
    this.storage.get('begldate').then((val) => {
      console.log('seems to work: ', val);
    });
    this.navCtrl.popToRoot();
  }


  back(){
    this.navCtrl.pop();
  }

  goToHome(){
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlutdruckPage');
  }

}
