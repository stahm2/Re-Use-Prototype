import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Eq_5d_5l1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eq-5d-5l1',
  templateUrl: 'eq-5d-5l1.html',
})
export class Eq_5d_5l1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public storage: Storage) {
  }

    /**
   * leavePage generates the alert wehn the homebutton is cliked.
   * title is the title of the alert, message is the main text of the alert.
   * buttons generate the yes and no button, and the hander sais what happens when this button is cliked.
   * when the homebutton is cliked the function goToHome will be started.
   * With alert.present the alert is shown on the screen.
   */
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

  /**
   * The goToHome function goes back to the root of the stack. In our Case this is the Home screen.
   */
  goToHome() {
    this.navCtrl.popToRoot();
  }

  // disables the "weiter" button
  private disableButton = true;

  /**
   * Enables the "weiter" button after a value is entered
   *
   * @param eq1
   */
  enableButton(eq1) {
    if (eq1 >= 1) {
      this.disableButton = false;
    }
  }

  /**
   * Opens the next page and saves the entered values in the databank
   *
   * navCtrl.push opens the page in the ().
   * The name in the () is the name of the ts class, where it will link to.
   *
   * @param eq1
   */
  openNext(eq1) {
    this.storage.set('eq1', eq1);
    console.log("Data saved");
    this.storage.get('eq1').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Eq_5d_5l2Page');
  }

   /**
   * the openLast function opens the last page in the stack
   * it sets the color of the point and the "erklärungsbox" to green
   */
  openLast() {
    this.navCtrl.pop();
    document.querySelector("body").style.cssText = "--color: #25A33C";
  }

   /**
   * this function starts automaticly when this page is load.
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad Eq_5d_5l1Page');
  }

}
