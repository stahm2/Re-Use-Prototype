import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Eq_5d_5l6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eq-5d-5l6',
  templateUrl: 'eq-5d-5l6.html',
})
export class Eq_5d_5l6Page {

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
    this.storage.set('eq6', knobValue);
    console.log("Data saved");
    this.storage.get('eq6').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('ErklMuedPage');
  }

   /**
   * the openLast function opens the last page in the stack
   */
  openLast(){
    this.navCtrl.pop();
  }

   /**
   * this function starts automaticly when this page is load.
   * it sets the color of the point and the "erklärungsbox" to orange
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad Eq_5d_5l6Page');
    document.querySelector("body").style.cssText = "--color: #D68018";
  }

   //sets the knobValue to 0 this is the start value of the scale.
  private knobValue = 0;
  // sets the path to the smiley images
  private picSmiley ="../../assets/img/00.svg";
   //disables the "weiter" button
  private disableButton = true;

    /**
   * the onChange function sais what happens when the scale is set to a value.
   * if the value is 0 the button "weiter" is disabled and the color is orange and the explanation text is set
   * if the value is > 0 then the button "weiter" is enabled and the color is set to green and also the explanation image changes.
   * the param data is the value of the scale
   *
   * @param data
   */
  onChange(data) {
    let vas10Text = <HTMLParagraphElement>document.getElementById('eq6Text');
    if (data == 0) {
      this.disableButton = true;
      console.log('nichts');
      document.querySelector("body").style.cssText = "--color: #D68018";
      this.picSmiley= "../../assets/img/00.svg";
      vas10Text.innerHTML = "Bitte ziehen Sie den<br> Punkt auf den <br>entsprechenden Wert";
    } else if(data >= 0 && data <20){
      this.disableButton = false;
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/8.svg"
    }else if (data >= 20 && data <40){
      this.disableButton = false;
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/6.svg"
    }else if(data >= 40 && data <60){
      this.disableButton = false;
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/2.svg";
    }else if(data >=60 && data <80){
      this.disableButton = false;
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/4.svg";
    }else if(data >=80 && data ==100){
      this.disableButton = false;
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/0.svg";
    }
  }
}
