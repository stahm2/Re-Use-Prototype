import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Muedigkeit9Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-muedigkeit9',
  templateUrl: 'muedigkeit9.html',
})
export class Muedigkeit9Page {

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

  endQuestion(knobValue){
    this.storage.set('mud9', knobValue);
    console.log("Data saved");
    this.storage.get('mud9').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.popToRoot();
  }

  openLast(){
    this.navCtrl.pop();
    document.querySelector("body").style.cssText = "--color: #25A33C";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Muedigkeit9Page');
    document.querySelector("body").style.cssText = "--color: #D68018";
  }

  private knobValue = 0;
  private disableButton = true;
  onChange(data) {
    let likert10Text = <HTMLParagraphElement>document.getElementById('erklaerungTextM9');
    if (data == 0) {
      this.disableButton = true;
      console.log('nichts');
      likert10Text.innerHTML = "Bitte ziehen Sie den Punkt auf den entsprechenden Wert";
      document.querySelector("body").style.cssText = "--color: #D68018";
    } else {
      this.disableButton = false;
      likert10Text.innerHTML = "7 volle Übereinstimmung<br>---><br>1 Ablehnung";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    }
  }
}
