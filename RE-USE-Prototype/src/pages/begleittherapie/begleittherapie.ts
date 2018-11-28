import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WheelSelector } from '@ionic-native/wheel-selector';

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

  DataField = {
    numbers: [
     { description: "1" },
      { description: "2" },
      { description: "3" }
    ],
    fruits: [
      { description: "Apple" },
      { description: "Banana" },
      { description: "Tangerine" }
    ],
    firstNames: [
      { name: "Fred", id: '1' },
      { name: "Jane", id: '2' },
      { name: "Bob", id: '3' },
      { name: "Earl", id: '4' },
      { name: "Eunice", id: '5' }
    ],
    lastNames: [
      { name: "Johnson", id: '100' },
      { name: "Doe", id: '101' },
      { name: "Kinishiwa", id: '102' },
      { name: "Gordon", id: '103' },
      { name: "Smith", id: '104' }
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private wheel: WheelSelector, private datePicker1: DatePicker, private storage: Storage, private alertCtrl: AlertController) {}



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

  selectANumber() {
    this.wheel.show({
      title: "How Many?",
      items: [
        this.DataField.numbers
      ],
    }).then(
      result => {
        console.log(result[0].description + ' at index: ' + result[0].index);
      },
      err => console.log('Error: ', err)
      );
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

  private disableButton = true;
  enableButton(therapy, myDate, startTime, endTime){
    console.log(therapy);
    if(therapy == "Logo" || therapy == "Physio" || therapy == "Ergo" || therapy == "Andere"){
      if(myDate != null && startTime != null && endTime != null){
        this.disableButton = false;
      }
    }
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

  choice(data){
    console.log(data);
  }

}
