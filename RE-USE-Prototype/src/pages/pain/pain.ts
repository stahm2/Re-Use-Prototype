import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private alertCtrl: AlertController) {}

  leavePage() {
    let alert = this.alertCtrl.create({
      title: 'Eingabe abbrechen',
      message: 'Möchten Sie die eingabe wircklich abbrechen?',
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

  openNext(knobValue){
    this.storage.set('pain', knobValue);
    console.log("Data saved");
    this.storage.get('pain').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('MoodPage');
  }

  openLast(){
    this.navCtrl.pop();
    document.querySelector("body").style.cssText = "--color: #25A33C";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PainPage');
    document.querySelector("body").style.cssText = "--color: #D68018";
  }

  private knobValue = 0;
  private picSmiley ="../../assets/img/00.svg";
  private disableButton = true;
  onChange(data) {
    let vas10Text = <HTMLParagraphElement>document.getElementById('painText');
    if (data == 0) {
      this.disableButton = true;
      console.log('nichts');
      vas10Text.innerHTML = "Bitte ziehen Sie den<br> Punkt auf den <br>entsprechenden Wert";
      document.querySelector("body").style.cssText = "--color: #D68018";
      this.picSmiley ="../../assets/img/00.svg";
    } else if(data >= 1 && data <3){
      this.disableButton = false;
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/8.svg"
    }else if (data >= 3 && data <5){
      this.disableButton = false;
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/6.svg"
    }else if(data >= 5 && data <7){
      this.disableButton = false;
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/2.svg";
    }else if(data >=7 && data <9){
      this.disableButton = false;
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/4.svg";
    }else if(data >=9 && data ==10){
      this.disableButton = false;
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/0.svg";
    }
  }
}
