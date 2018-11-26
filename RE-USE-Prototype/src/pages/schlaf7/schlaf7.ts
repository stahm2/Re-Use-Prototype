import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Schlaf7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schlaf7',
  templateUrl: 'schlaf7.html',
})
export class Schlaf7Page {

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

  goToHome(){
    this.navCtrl.popToRoot();
  }

  private disableButton = true;
  enableButton(wakeTime, sleepTime){
    if(sleepTime != null && wakeTime != null){
      this.disableButton = false;
    }
  }

  openNext(wakeTime, sleepTime){
    this.storage.set('schl7wake', wakeTime);
    this.storage.set('schl7slee', sleepTime);
    console.log("Data saved");
    this.storage.get('schl7wake').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl7slee').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.popToRoot();
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Schlaf7Page');
  }

}
