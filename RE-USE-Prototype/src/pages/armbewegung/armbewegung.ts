import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goToHome(){
    this.navCtrl.popToRoot();
  }

  openNext(){
    this.navCtrl.push('Armbewegung10Page');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArmbewegungPage');
  }

 onChange(data) {
    if(data == 0){
      console.log('nichts');
      return 'nichts';
    }else if(data == 1){
      console.log(1);
      return 'test1';
    }else if(data == 2){
      console.log(2);
      return 'test2';
    }
   // return console.log("text: " + data);
  }

  start(data):void{
    console.log("load");
  }

}
