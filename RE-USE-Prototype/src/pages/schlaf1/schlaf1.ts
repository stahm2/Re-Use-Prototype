import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Schlaf1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schlaf1',
  templateUrl: 'schlaf1.html',
})
export class Schlaf1Page {

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
   * tracks the entered text in the text input and print in to the console.
   *
   * @param data
   */
  onChange(data) : void {
    console.log("text: " + data);
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
   * @param schlaf1
   * @param Herzbeschwerden
   * @param Allergien
   * @param Schliddruesenprobleme
   * @param Lungenerkrankungen
   * @param Stimmung
   * @param Schlafmittel
   * @param Weissnicht
   * @param nameText
   */
  enableButton(schlaf1, Herzbeschwerden, Allergien, Schliddruesenprobleme, Lungenerkrankungen, Stimmung, Schlafmittel, Weissnicht, nameText) {
    if (schlaf1 == "nein") {
      this.disableButton = false;
      this.disableBox = true;
      this.disableText = true;
      document.querySelector("body").style.cssText = "--vaBorder: none";
    }else if(schlaf1 == "ja"){
      this.disableBox = false;
      if(Herzbeschwerden != null || Allergien != null || Schliddruesenprobleme != null || Lungenerkrankungen != null || Stimmung != null || Schlafmittel != null || Weissnicht != null){
      this.disableText = false;
      document.querySelector("body").style.cssText = "--vaBorder: 1px solid black";
        if(nameText != null){
          this.disableButton = false;
        }
      }
    }
  }

  /**
   * Opens the next page and saves the entered values in the databank
   *
   * navCtrl.push opens the page in the ().
   * The name in the () is the name of the ts class, where it will link to.
   *
   * @param Herzbeschwerden
   * @param Allergien
   * @param Schliddruesenprobleme
   * @param Lungenerkrankungen
   * @param Stimmung
   * @param Schlafmittel
   * @param Weissnicht
   * @param nameText
   */
  openNext(Herzbeschwerden, Allergien, Schliddruesenprobleme, Lungenerkrankungen, Stimmung, Schlafmittel, Weissnicht, nameText){
    this.storage.set('schl1herz', Herzbeschwerden);
    this.storage.set('schl1alle', Allergien);
    this.storage.set('schl1schi', Schliddruesenprobleme);
    this.storage.set('schl1lung', Lungenerkrankungen);
    this.storage.set('schl1stim', Stimmung);
    this.storage.set('schl1schmitt', Schlafmittel);
    this.storage.set('schl1weis', Weissnicht);
    this.storage.set('schl1ande', nameText);
    console.log("Data saved");
    this.storage.get('schl1herz').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1alle').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1schi').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1lung').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1stim').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1schmitt').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1weis').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl1ande').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Schlaf2Page');
  }

   /**
   * this function starts automaticly when this page is load.
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad Schlaf1Page');
  }

}
