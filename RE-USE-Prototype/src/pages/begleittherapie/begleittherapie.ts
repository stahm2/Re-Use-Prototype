import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker1: DatePicker, private storage: Storage) {
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

  save(myDate, startTime,therapy, endTime) {
    this.storage.set('begldate', myDate);
    this.storage.set('beglstart', startTime);
    this.storage.set('beglend', endTime);
    this.storage.set('therapy', therapy);
    console.log("Data saved");
    this.storage.get('begldate').then((val) => {
      console.log('The date was:', val, 'and the key was');
    });
    this.storage.get('beglstart').then((val) => {
      console.log('The plantime was:', val, 'and the key was');
    });
    this.storage.get('beglend').then((val) => {
      console.log('The effectivetime was:', val, 'and the key was');
    });
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

  choice() {
  }

}
