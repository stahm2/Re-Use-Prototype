import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the ArmbewegungPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-armbewegung',
  templateUrl: 'armbewegung.html',
})
export class ArmbewegungPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private alertCtrl: AlertController) {}

  private knobValue = 0;
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
  goToHome() {
    this.navCtrl.popToRoot();
  }

  openNext(knobValue) {
    this.storage.set('arm', knobValue);
    console.log("Data saved");
    this.storage.get('arm').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Armbewegung10Page');
  }

  openLast() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArmbewegungPage');
    document.querySelector("body").style.cssText = "--color: #D68018";

  }

 private disableButton = true;

  onChange(data) {
    let test4 = <HTMLParagraphElement>document.getElementById('erklaerungText');
    if (data == 0) {
      this.disableButton = true;
      test4.innerHTML = "Bitte ziehen Sie den Punkt auf den entsprechenden Wert";
      console.log('nichts');
      document.querySelector("body").style.cssText = "--color: #D68018";
    } else if (data == 1) {
      this.disableButton = false;
      console.log(1);
      test4.innerHTML = "1: Viel schlechter";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    } else if (data == 2) {
      this.disableButton = false;
      console.log(2);
      test4.innerHTML = "2: Ein bisschen schlechter, relevant";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    } else if (data == 3) {
      this.disableButton = false;
      console.log(3);
      test4.innerHTML = "3: Ein bisschen schlechter, nicht relevant";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    } else if (data == 4) {
      this.disableButton = false;
      console.log(4);
      test4.innerHTML = "4: Ungefähr ungeändert";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    } else if (data == 5) {
      this.disableButton = false;
      console.log(5);
      test4.innerHTML = "5: Ein bisschen besser, nicht relevant";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    } else if (data == 6) {
      this.disableButton = false;
      console.log(6);
      test4.innerHTML = "6: Ein bisschen besser, relevant";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    } else if (data == 7) {
      this.disableButton = false;
      console.log(7);
      test4.innerHTML = "7: Viel besser";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    }

  }

  start(data): void {
    console.log("load");
  }

}
