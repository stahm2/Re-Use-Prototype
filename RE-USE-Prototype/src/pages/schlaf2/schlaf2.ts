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

  // disables the "weiter" button
  private disableButton = true;
  // disables the text input box
  private disableBox = true;
  // hides the label of the text input
  private disableText = true;

  /**
   * Enables the "weiter" button after a value is entered
   *
   * @param radioSchlaf2
   * @param nameText
   */
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

  /**
   * Opens the next page and saves the entered values in the databank
   *
   * navCtrl.push opens the page in the ().
   * The name in the () is the name of the ts class, where it will link to.
   *
   * @param radioSchlaf2
   * @param textSchlaf2
   */
  openNext(radioSchlaf2,textSchlaf2){
    this.storage.set('schl2radio', radioSchlaf2);
    this.storage.set('textSchlaf2', textSchlaf2);
    console.log("Data saved");
    this.storage.get('schl2').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Schlaf3Page');
  }

   /**
   * the openLast function opens the last page in the stack
   */
  openLast(){
    this.navCtrl.pop();
  }

   /**
   * this function starts automaticly when this page is load.
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad Schlaf2Page');
  }

}
