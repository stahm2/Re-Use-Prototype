import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Schlaf2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schlaf2',
  templateUrl: 'schlaf2.html',
})
export class Schlaf2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private alertCtrl: AlertController) {}

  leavePage() {
    let alert = this.alertCtrl.create({
      title: 'Eingabe abbrechen',
      message: 'Möchten Sie die Eingabe wirklich abbrechen?',
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
  private disableBox = true;
  private disableText = true;
  enableButton(radioSchlaf2, nameText) {
    if (radioSchlaf2 == "selten" || radioSchlaf2 == "manchmal" || radioSchlaf2 == "oft" || radioSchlaf2 == "fastimmer") {
      this.disableText = false;
      this.disableBox = false;
      this.disableButton = true;
      document.querySelector("body").style.cssText = "--vaBorder: 1px solid black";
      if(nameText != null){
        this.disableButton = false;
      }
    }else if(radioSchlaf2 == "nie"){
      this.disableButton = false;
      this.disableText = true;
      this.disableBox = true;
      document.querySelector("body").style.cssText = "--vaBorder: none";
    }
  }

  openNext(radioSchlaf2,textSchlaf2){
    this.storage.set('schl2radio', radioSchlaf2);
    this.storage.set('textSchlaf2', textSchlaf2);
    console.log("Data saved");
    this.storage.get('schl2').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Schlaf3Page');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Schlaf2Page');
  }

}
