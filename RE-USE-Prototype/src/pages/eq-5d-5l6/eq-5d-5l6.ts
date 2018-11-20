import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  leavePage() {
    let alert = this.alertCtrl.create({
      title: 'Seite verlassen',
      message: 'Möchten Sie auf die Startseite zurückkehren?',
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

  goToHome(){
    this.navCtrl.popToRoot();
  }

  openNext(){
    this.navCtrl.push('Muedigkeit1Page');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Eq_5d_5l6Page');
    document.querySelector("body").style.cssText = "--color: #D68018";
  }

  private knobValue = 0;
  private picSmiley ="../../assets/img/00.svg";
  onChange(data) {
    if (data == 0) {
      console.log('nichts');
      document.querySelector("body").style.cssText = "--color: #D68018";
      this.picSmiley= "../../assets/img/00.svg";
    } else if(data >= 0 && data <20){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/8.svg"
    }else if (data >= 20 && data <40){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/6.svg"
    }else if(data >= 40 && data <60){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/2.svg";
    }else if(data >=60 && data <80){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/4.svg";
    }else if(data >=80 && data ==100){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/0.svg";
    }
  }
}
