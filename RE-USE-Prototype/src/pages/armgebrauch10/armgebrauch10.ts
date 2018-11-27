import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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

  openNext(knobValue){
    this.storage.set('arm10', knobValue);
    console.log("Data saved");
    this.storage.get('arm10').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Aktivitaet7Page');
  }

  openLast(){
    this.navCtrl.pop();
    document.querySelector("body").style.cssText = "--color: #25A33C";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Armgebrauch10Page');
    document.querySelector("body").style.cssText = "--color: #D68018";
  }

  private disableButton = true;
  private knobValue = 0;
  private hidePfeil= true;
  onChange(data) {
    let likert10Text = <HTMLParagraphElement>document.getElementById('erklaerungTextAG10');
    if (data == 0) {
      this.hidePfeil = true;
      this.disableButton = true;
      console.log('nichts');
      likert10Text.innerHTML = "Bitte ziehen Sie den Punkt auf den entsprechenden Wert";
      document.querySelector("body").style.cssText = "--color: #D68018";
    } else {
      this.hidePfeil = false;
      this.disableButton = false;
      likert10Text.innerHTML = "10 sehr wichtig <br><br>1 gar nicht wichtig";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    }
  }
}
