import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

/**
 * Generated class for the BegleittherapiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-begleittherapie',
  templateUrl: 'begleittherapie.html',
})
export class BegleittherapiePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker1: DatePicker/*, private datePicker2: DatePicker, private datePicker3: DatePicker*/) {
  }

  selectDate() {
    this.datePicker1.show({
      date: new Date(),
      mode: 'date',
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occured: ', err)
    );

  }

  save() {
    console.log("Data saved");
    this.navCtrl.popToRoot();
  }


  back() {
    this.navCtrl.pop();
  }

  goToHome() {
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BegleittherapiePage');
  }

  choice(){
  }

}
