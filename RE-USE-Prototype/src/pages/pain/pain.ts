import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  private picSmiley ="";
  onChange(data) {
    if (data == 0) {
      console.log('nichts');
      document.querySelector("body").style.cssText = "--color: #D68018";
      this.picSmiley ="";
    } else if(data >= 1 && data <3){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/8.jpg"
    }else if (data >= 3 && data <5){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/6.jpg"
    }else if(data >= 5 && data <7){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/4.jpg";
    }else if(data >=7 && data <9){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/2.jpg";
    }else if(data >=9 && data ==10){
      document.querySelector("body").style.cssText = "--color: #25A33C";
      this.picSmiley ="../../assets/img/0.png";
    }
  }
}
