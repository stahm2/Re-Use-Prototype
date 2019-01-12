import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WheelSelector } from '@ionic-native/wheel-selector';

/**
 * Generated class for the BegleittherapiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-begleittherapie',
  templateUrl: 'begleittherapie.html',
})

export class BegleittherapiePage {



  constructor(public navCtrl: NavController, public navParams: NavParams, private wheel: WheelSelector, private datePicker1: DatePicker, private storage: Storage, private alertCtrl: AlertController) {}


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
   * saves the entered values to the database
   * and then it goes back to the root of the stack. In our Case this is the Home screen.
   *
   * @param myDate
   * @param startTime
   * @param therapy
   * @param endTime
   */
  save(myDate, startTime,therapy, endTime) {
    this.storage.set('begldate', myDate);
    this.storage.set('beglstart', startTime);
    this.storage.set('beglend', endTime);
    this.storage.set('therapy', therapy);
    console.log("Data saved");
    this.storage.get('begldate').then((val) => {
      console.log('The date was:', val, 'and the key was');
    });
    this.storage.get('beglstart').then((val) => {
      console.log('The plantime was:', val, 'and the key was');
    });
    this.storage.get('beglend').then((val) => {
      console.log('The effectivetime was:', val, 'and the key was');
    });
    this.navCtrl.popToRoot();
  }


  /**
   * the openLast function opens the last page in the stack
   */
  back() {
    this.navCtrl.pop();
  }

  /**
   * The goToHome function goes back to the root of the stack. In our Case this is the Home screen.
   */
  goToHome() {
    this.navCtrl.popToRoot();
  }

   /**
   * this function starts automaticly when this page is load.
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad BegleittherapiePage');
  }

}
