import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the GewichtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gewicht',
  templateUrl: 'gewicht.html',
})
export class GewichtPage {


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

  // disables the "speichern" button
  private disableButton = true;

  /**
   * Enables the "speichern" button after a value is entered
   *
   * @param gewicht
   * @param bauch
   */
  enableButton(gewicht, bauch){
    let warningText = <HTMLParagraphElement>document.getElementById('warningGW');
    if(gewicht != null && bauch != null){
      if(gewicht > 20 && gewicht < 300 && bauch > 20 && bauch < 300){
        this.disableButton = false;
        warningText.innerHTML = " ";
      }else if(gewicht < 20 || gewicht > 300){
        warningText.innerHTML = "Bitte geben Sie bei <b>Gewicht</b> einen Wert zwischen 20 und 300 ein.";
        this.disableButton = true;
      }else if( bauch < 20 || bauch > 300){
        warningText.innerHTML = "Bitte geben Sie bei <b>Bauchumfang</b> einen Wert zwischen 20 und 300 ein.";
        this.disableButton = true;
      }
    }
  }

  /**
   * The goToHome function goes back to the root of the stack. In our Case this is the Home screen.
   */
  goToHome() {
    this.navCtrl.popToRoot();
  }

  /**
   * saves the entered values to the databank
   * and then it goes back to the root of the stack. In our Case this is the Home screen.
   *
   * @param gewicht
   * @param bauch
   */
  save(gewicht, bauch) {
    this.storage.set('gewicht', gewicht);
    this.storage.set('bauch', bauch);
    console.log("Data saved");
    this.storage.get('gwicht').then((val) => {
      console.log('The weight was:', val, 'and the key was');
    });
    this.storage.get('bauch').then((val) => {
      console.log('The bauchumfang was:', val, 'and the key was');
    });
    console.log("Data saved");
    this.navCtrl.popToRoot();
  }

  /**
   * the openLast function opens the last page in the stack
   */
  back() {
    this.navCtrl.pop();
  }

   /**
   * this function starts automaticly when this page is load.
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad GewichtPage');
  };

}
