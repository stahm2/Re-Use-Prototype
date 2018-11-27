import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public storage: Storage) {}

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

  openNext(knobValue){
    this.storage.set('armb10', knobValue);
    console.log("Data saved");
    this.storage.get('armb10').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Armgebrauch7Page');
  }

  openLast() {
    this.navCtrl.pop();
    document.querySelector("body").style.cssText = "--color: #25A33C";
  }

  ionViewDidLoad() {
    document.querySelector("body").style.cssText = "--color: #D68018";
    console.log('ionViewDidLoad Armbewegung10Page');


  }

  private knobValue = 0;
  private disableButton = true;
  private hidePfeil= true;
  onChange(data) {
    let likert10Text = <HTMLParagraphElement>document.getElementById('erklaerungTextAB10');
    if (data == 0) {
      this.disableButton = true;
      console.log('nichts');
      likert10Text.innerHTML = "Bitte ziehen Sie den Punkt auf den entsprechenden Wert";
      document.querySelector("body").style.cssText = "--color: #D68018";
      this.hidePfeil = true;
    } else {
      this.disableButton = false;
      this.hidePfeil = false;
      likert10Text.innerHTML = "10 sehr wichtig <br><br>1 gar nicht wichtig";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    }
  }
}
