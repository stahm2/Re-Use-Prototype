import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Armgebrauch10Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-armgebrauch10',
  templateUrl: 'armgebrauch10.html',
})
export class Armgebrauch10Page {

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

  goToHome(){
    this.navCtrl.popToRoot();
  }

  openNext(){
    this.navCtrl.push('Aktivitaet7Page');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Armgebrauch10Page');
    document.querySelector("body").style.cssText = "--color: #D68018";
  }

  private knobValue = 0;
  onChange(data) {
    if (data == 0) {
      console.log('nichts');
      document.querySelector("body").style.cssText = "--color: #D68018";
    } else {
      document.querySelector("body").style.cssText = "--color: #25A33C";
    }
  }
}
