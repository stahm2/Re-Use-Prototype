import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CheckboxControlValueAccessor } from '@angular/forms';

/**
 * Generated class for the BlutdruckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blutdruck',
  templateUrl: 'blutdruck.html',
})
export class BlutdruckPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private alertCtrl: AlertController) {}

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
   * @param sys
   * @param dia
   * @param puls
   */
  enableButton(sys, dia, puls){
    let warningText = <HTMLParagraphElement>document.getElementById('warning');
    if(sys != null && dia != null && puls != null){
      console.log(+sys);
      if(sys >20 && sys < 300 && dia > 20 && dia < 300 && puls > 20 && puls < 300){
        warningText.innerHTML = " ";
        console.log("richtig");
        this.disableButton = false;
      } else if(sys <20 || sys > 300){
        warningText.innerHTML = "Bitte geben Sie bei <b>Systolisch</b> einen Wert zwischen 20 und 300 ein.";
        console.log("fals sys");
        this.disableButton = true;
      }else if(dia < 20 || dia > 300){
        warningText.innerHTML = "Bitte geben Sie bei <b>Diastolisch</b> einen Wert zwischen 20 und 300 ein.";
        console.log("falsch dia");
        this.disableButton = true;
      }else if(puls < 20 || puls > 300){
        warningText.innerHTML = "Bitte geben Sie bei <b>Puls</b> einen Wert zwischen 20 und 300 ein.";
        console.log("falsch puls");
        this.disableButton = true;
      }
    }
  }

  /**
   * saves the entered values to the databank
   * and then it goes back to the root of the stack. In our Case this is the Home screen.
   *
   * @param sys
   * @param dia
   * @param puls
   */
  save(sys, dia, puls) {

    if(this.checkvalues(sys,dia,puls)){
    this.storage.set('sys', sys);
    this.storage.set('dia', dia);
    this.storage.set('puls', puls);
    console.log("Data saved");
    this.storage.get('begldate').then((val) => {
      console.log('seems to work: ', val);
    });
    this.navCtrl.popToRoot();
  } else {

  }
  }

  checkvalues(sys,dia,puls){

    if(sys)

    return null;
  }

  /**
   * the openLast function opens the last page in the stack
   */
  back(){
    this.navCtrl.pop();
  }

  /**
   * The goToHome function goes back to the root of the stack. In our Case this is the Home screen.
   */
  goToHome(){
    this.navCtrl.popToRoot();
  }

   /**
   * this function starts automaticly when this page is load.
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad BlutdruckPage');
  }

}
