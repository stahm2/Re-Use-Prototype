import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WheelSelector } from '@ionic-native/wheel-selector';
import { HttpClientModule } from '@angular/common/http';

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


    constructor(public navCtrl: NavController, public navParams: NavParams, public selector: WheelSelector, private toastCtrl: ToastController) {
  
    }

    weightDataJSON = {
      numbers: [
          {description: '45'},
          {description: '46'},
          {description: '47'},
          {description: '48'},
          {description: '49'}
        ] 
  }
    selectWeight(){
        this.selector.show({
          title: 'Gewicht eingeben',
          positiveButtonText: 'Bestätigen',
          negativeButtonText: 'Abbrechen',
          items: [
            this.weightDataJSON.numbers
          ],
          defaultItems: [
            { index: 0, value: this.weightDataJSON.numbers[4].description }
          ]
        }).then(
          result => {
            let msg = 'Select ${result[0].description}';
            let toast = this.toastCtrl.create({
              message: msg, 
              duration: 4000
            });
            toast.present();
        },
        err => console.log('Error: ', err)
        );
      }
      
       
      
      goToHome(){
        this.navCtrl.popToRoot();
      }
    
      ionViewDidLoad() {
    
        console.log('ionViewDidLoad GewichtPage');
        this.selectWeight();
      };

 }