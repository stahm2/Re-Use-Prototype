import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Armbewegung10Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-armbewegung10',
  templateUrl: 'armbewegung10.html',
})
export class Armbewegung10Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

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

  openNext() {
    this.navCtrl.push('Armgebrauch7Page');
  }

  openLast() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    document.querySelector("body").style.cssText = "--color: #D68018";
    console.log('ionViewDidLoad Armbewegung10Page');


  }

  private knobValue = 0;
  onChange(data) {
    let likert10Text = <HTMLParagraphElement>document.getElementById('erklaerungTextAB10');
    if (data == 0) {
      console.log('nichts');
      likert10Text.innerHTML = "Bitte ziehen Sie den Punkt auf den entsprechenden Wert";
      document.querySelector("body").style.cssText = "--color: #D68018";
    } else {
      likert10Text.innerHTML = "10 sehr wichtig <br>--><br>1 gar nicht wichtig";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    }
  }
}
