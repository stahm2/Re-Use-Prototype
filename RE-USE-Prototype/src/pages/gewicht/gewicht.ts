import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WheelSelector } from '@ionic-native/wheel-selector';

/**
 * Generated class for the GewichtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gewicht',
  templateUrl: 'gewicht.html',
})
export class GewichtPage {
  selector: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  const jsonData = {
    numbers: [
     { description: "1" },
      { description: "2" },
      { description: "3" }
    ]
  };
  selectANumber() {
    this.selector.show({
      title: "How Many?",
      items: [
        this.jsonData.numbers
      ],
    }).then(
      result => {
        console.log(result[0].description + ' at index: ' + result[0].index);
      },
      err => console.log('Error: ', err)
      );
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GewichtPage');
  }

}
