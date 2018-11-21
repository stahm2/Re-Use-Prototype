import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Schlaf1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schlaf1',
  templateUrl: 'schlaf1.html',
})
export class Schlaf1Page {

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

  onChange(data) : void {
    console.log("text: " + data);
  }
  goToHome(){
    this.navCtrl.popToRoot();
  }

  openNext(Herzbeschwerden, Allergien, Schliddruesenprobleme, Lungenerkrankungen, Stimmung, Schlafmittel, Weissnicht, nameText){
    this.storage.set('schl1herz', Herzbeschwerden);
    this.storage.set('schl1alle', Allergien);
    this.storage.set('schl1schi', Schliddruesenprobleme);
    this.storage.set('schl1lung', Lungenerkrankungen);
    this.storage.set('schl1stim', Stimmung);
    this.storage.set('schl1schmitt', Schlafmittel);
    this.storage.set('schl1weis', Weissnicht);
    this.storage.set('schl1ande', nameText);
    console.log("Data saved");
    this.storage.get('schl1herz').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1alle').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1schi').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1lung').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1stim').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1schmitt').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1weis').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1ande').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Schlaf2Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Schlaf1Page');
  }

}
