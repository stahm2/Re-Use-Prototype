import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
/**
 * Generated class for the Muedigkeit4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-muedigkeit4',
  templateUrl: 'muedigkeit4.html',
})
export class Muedigkeit4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public storage: Storage) {}

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
  goToHome(){
    this.navCtrl.popToRoot();
  }

    /**
   * The openNext function opens the next page.
   * The knobValue saves the entered Value in the likert Scale.
   * The Value will be saved in the databank with storage.set
   *
   * navCtrl.push opens the page in the ().
   * The name in the () is the name of the ts class, where it will link to.
   * @param knobValue
   */
  openNext(knobValue){
    this.storage.set('mud4', knobValue);
    console.log("Data saved");
    this.storage.get('mud4').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Muedigkeit5Page');
  }

   /**
   * the openLast function opens the last page in the stack
   * it sets the color of the point and the "erklärungsbox" to green
   */
  openLast(){
    this.navCtrl.pop();
    document.querySelector("body").style.cssText = "--color: #25A33C";
  }

   /**
   * this function starts automaticly when this page is load.
   * it sets the color of the point and the "erklärungsbox" to orange
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad Muedigkeit4Page');
    document.querySelector("body").style.cssText = "--color: #D68018";
  }

   //sets the knobValue to 0 this is the start value of the scale.
  private knobValue = 0;
   //disables the "weiter" button
  private disableButton = true;
  //hides the arrow in the "Erklärungstext"
  private hidePfeil= true;

    /**
   * the onChange function sais what happens when the scale is set to a value.
   * if the value is 0 the button "weiter" is disabled and the color is orange and the explanation text is set
   * if the value is > 0 then the button "weiter" is enabled and the color is set to green and also the explanation text changes.
   * the param data is the value of the scale
   *
   * @param data
   */
  onChange(data) {
    let likert10Text = <HTMLParagraphElement>document.getElementById('erklaerungTextM4');
    if (data == 0) {
      this.hidePfeil = true;
      this.disableButton = true;
      console.log('nichts');
      likert10Text.innerHTML = "Bitte ziehen Sie den Punkt auf den entsprechenden Wert";
      document.querySelector("body").style.cssText = "--color: #D68018";
    } else {
      this.hidePfeil = false;
      this.disableButton = false;
      likert10Text.innerHTML = "7 volle Übereinstimmung<br><br>1 Ablehnung";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    }
  }
}
