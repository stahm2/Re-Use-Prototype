import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pain',
  templateUrl: 'pain.html',
})
export class PainPage {

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
    this.navCtrl.push('MoodPage');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PainPage');
    document.querySelector("body").style.cssText = "--color: #D68018";
  }

  private knobValue = 0;
  private picSmiley ="../../assets/img/00.svg";
  onChange(data) {
    if (data == 0) {
      console.log('nichts');
      document.querySelector("body").style.cssText = "--color: #D68018";
      this.picSmiley ="../../assets/img/00.svg";
    } else if(data >= 1 && data <3){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/8.svg"
    }else if (data >= 3 && data <5){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/6.svg"
    }else if(data >= 5 && data <7){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/2.svg";
    }else if(data >=7 && data <9){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/4.svg";
    }else if(data >=9 && data ==10){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/0.svg";
    }
  }
}
