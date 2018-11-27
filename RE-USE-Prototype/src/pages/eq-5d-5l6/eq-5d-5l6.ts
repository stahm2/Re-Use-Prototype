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
    this.storage.set('eq6', knobValue);
    console.log("Data saved");
    this.storage.get('eq6').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('ErklMuedPage');
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
  private disableButton = true;
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
