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

   //sets the knobValue to 0 this is the start value of the scale.
  private knobValue = 0;

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

    /**
   * The openNext function opens the next page.
   * The knobValue saves the entered Value in the likert Scale.
   * The Value will be saved in the databank with storage.set
   *
   * navCtrl.push opens the page in the ().
   * The name in the () is the name of the ts class, where it will link to.
   * @param knobValue
   */
  openNext(knobValue) {
    this.storage.set('arm', knobValue);
    console.log("Data saved");
    this.storage.get('arm').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Armbewegung10Page');
  }

   /**
   * the openLast function opens the last page in the stack
   */
  openLast() {
    this.navCtrl.pop();
  }

   /**
   * this function starts automaticly when this page is load.
   * it sets the color of the point and the "erklärungsbox" to orange
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArmbewegungPage');
    document.querySelector("body").style.cssText = "--color: #D68018";

  }

   //disables the "weiter" button
  private disableButton = true;

    /**
   * the onChange function sais what happens when the scale is set to a value.
   * if the value is 0 the button "weiter" is disabled and the color is orange and the explanation text is set
   * if the value is > 0 then the button "weiter" is enabled and the color is set to green and also the explanation text changes.
   * the param data is the value of the scale
   *
   * @param data
   */
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
