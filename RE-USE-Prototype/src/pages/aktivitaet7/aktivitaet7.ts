import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Aktivitaet7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aktivitaet7',
  templateUrl: 'aktivitaet7.html',
})
export class Aktivitaet7Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToHome(){
    this.navCtrl.popToRoot();
  }

  openNext(){
    this.navCtrl.push('Aktivitaet10Page');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Aktivitaet7Page');
  }

  private knobValue = 0;
  onChange(data) {
    let test4 = <HTMLParagraphElement>document.getElementById('erklaerungText');
    if (data == 0) {
      console.log('nichts');
      document.querySelector("body").style.cssText = "--color: #D68018";
    } else if (data == 1) {
      console.log(1);
      test4.innerHTML = "1: Viel schlechter";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    } else if (data == 2) {
      console.log(2);
      test4.innerHTML = "2: Ein bisschen schlechter, relevant";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    } else if (data == 3) {
      console.log(3);
      test4.innerHTML = "3: Ein bisschen schlechter, nicht relevant";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    } else if (data == 4) {
      console.log(4);
      test4.innerHTML = "4: Ungefähr ungeändert";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    } else if (data == 5) {
      console.log(5);
      test4.innerHTML = "5: Ein bisschen besser, nicht relevant";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    } else if (data == 6) {
      console.log(6);
      test4.innerHTML = "6: Ein bisschen besser, relevant";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    } else if (data == 7) {
      console.log(7);
      test4.innerHTML = "7: Viel besser";
      document.querySelector("body").style.cssText = "--color: #25A33C";
    }

  }

}
