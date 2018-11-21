import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { File } from '@ionic-native/file';

/**
 * Generated class for the MoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mood',
  templateUrl: 'mood.html',
})
export class MoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public file: File, private alertCtrl: AlertController) {}

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
    this.storage.set('mood', knobValue);
    console.log("Data saved");
    this.storage.get('mood').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Eq_5d_5l1Page');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoodPage');
    document.querySelector("body").style.cssText = "--color: #D68018";
  }


  private knobValue = 0;
  private picSmiley ="../../assets/img/00.svg";
  onChange(data) {
    let vas10Text = <HTMLParagraphElement>document.getElementById('moodText');
    if (data == 0) {
      console.log('nichts');
      vas10Text.innerHTML = "Bitte ziehen Sie den<br> Punkt auf den <br>entsprechenden Wert";
      document.querySelector("body").style.cssText = "--color: #D68018";
      this.picSmiley = "../../assets/img/00.svg";
    } else if(data >= 1 && data <3){
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/8.svg"
    }else if (data >= 3 && data <5){
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/6.svg"
    }else if(data >= 5 && data <7){
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/2.svg";
    }else if(data >=7 && data <9){
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/4.svg";
    }else if(data >=9 && data ==10){
      vas10Text.innerHTML = " ";
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/0.svg";
    }
  }
}
