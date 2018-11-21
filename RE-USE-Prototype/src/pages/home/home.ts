import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
declare var cordova: any;


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public file: File, public storage: Storage, public platform: Platform) { }

  private count = 0;

  openFragebogen() {
    this.navCtrl.push('ArmbewegungPage');
  }

  openBegleittherapie() {
    this.navCtrl.push('BegleittherapiePage');
  }

  openGewicht() {
    this.navCtrl.push('GewichtPage');
  }

  openBlutdruck() {
    this.navCtrl.push('BlutdruckPage');
  }

  openSchlaf() {
    this.navCtrl.push('Schlaf1Page');
  }

  outcome() {
    this.storage.get('arm').then((val) => {
      console.log('Wert auf Armbewegung 1:', val);
    });
    this.storage.get('armb10').then((val) => {
      console.log('Wert auf Armbewegung 2:', val);
    });
    this.storage.get('arm7').then((val) => {
      console.log('Wert auf Armbewegung 3:', val);
    });
    this.storage.get('arm10').then((val) => {
      console.log('Wert auf Armbewegung 4:', val);
    });
    this.storage.get('aktiv7').then((val) => {
      console.log('Wert auf Armbewegung 5:', val);
    });
    this.storage.get('aktiv10').then((val) => {
      console.log('Wert auf Armbewegung 6:', val);
    });
    this.storage.get('pain').then((val) => {
      console.log('Wert auf Schmerzseite:', val);
    });
    this.storage.get('mood').then((val) => {
      console.log('Wert auf Stimmungsseite:', val);
    });
    this.storage.get('eq1').then((val) => {
      console.log('Wert auf EQ1:', val);
    });
    this.storage.get('eq2').then((val) => {
      console.log('Wert auf EQ2:', val);
    });
    this.storage.get('eq3').then((val) => {
      console.log('Wert auf EQ3:', val);
    });
    this.storage.get('eq4').then((val) => {
      console.log('Wert auf EQ4:', val);
    });
    this.storage.get('eq5').then((val) => {
      console.log('Wert auf EQ5:', val);
    });
    this.storage.get('eq6').then((val) => {
      console.log('Wert auf EQ6:', val);
    });
    this.storage.get('mud1').then((val) => {
      console.log('Wert auf Müdigkeit 1:', val);
    });
    this.storage.get('mud2').then((val) => {
      console.log('Wert auf Müdigkeit 2:', val);
    });
    this.storage.get('mud3').then((val) => {
      console.log('Wert auf Müdigkeit 3:', val);
    });
    this.storage.get('mud4').then((val) => {
      console.log('Wert auf Müdigkeit 4:', val);
    });
    this.storage.get('mud5').then((val) => {
      console.log('Wert auf Müdigkeit 5:', val);
    });
    this.storage.get('mud6').then((val) => {
      console.log('Wert auf Müdigkeit 6:', val);
    });
    this.storage.get('mud7').then((val) => {
      console.log('Wert auf Müdigkeit 7:', val);
    });
    this.storage.get('mud8').then((val) => {
      console.log('Wert auf Müdigkeit 8:', val);
    });
    this.storage.get('mud9').then((val) => {
      console.log('Wert auf Müdigkeit 9:', val);
    });
    this.storage.get('therapy').then((val) => {
      console.log('Art der Therapie:', val);
    });
    this.storage.get('begldate').then((val) => {
      console.log('Datum der Therapie:', val);
    });
    this.storage.get('beglstart').then((val) => {
      console.log('Geplante Zeit:', val);
    });
    this.storage.get('beglend').then((val) => {
      console.log('Effektive Zeit:', val);
    });
    this.storage.get('gewicht').then((val) => {
      console.log('Gewicht:', val);
    });
    this.storage.get('bauch').then((val) => {
      console.log('Bauchumfang:', val);
    });
    this.storage.get('sys').then((val) => {
      console.log('Systolisch:', val);
    });
    this.storage.get('dia').then((val) => {
      console.log('Diastolisch:', val);
    });
    this.storage.get('puls').then((val) => {
      console.log('Puls:', val);
    });
    this.storage.get('schl1herz').then((val) => {
      console.log('Herzbeschwerden:', val);
    });
    this.storage.get('schl1alle').then((val) => {
      console.log('Allergie:', val);
    });
    this.storage.get('schl1schi').then((val) => {
      console.log('Schilddruese:', val);
    });
    this.storage.get('schl1lung').then((val) => {
      console.log('Lungenerkrankung:', val);
    });
    this.storage.get('schl1stim').then((val) => {
      console.log('Stimmung:', val);
    });
    this.storage.get('schl1schmitt').then((val) => {
      console.log('Schlafmittel:', val);
    });
    this.storage.get('schl1weis').then((val) => {
      console.log('Weiss nicht:', val);
    });
    this.storage.get('schl1ande').then((val) => {
      console.log('Andere:', val);
    });
    this.storage.get('schl2radio').then((val) => {
      console.log('Schlafmittel nehmen:', val);
    });
    this.storage.get('textSchlaf2').then((val) => {
      console.log('Namen der Schlafmittel:', val);
    });
    this.storage.get('schl3').then((val) => {
      console.log('Wert Schlaf 3:', val);
    });
    this.storage.get('schl4').then((val) => {
      console.log('Wert Schlaf 3:', val);
    });
    this.storage.get('schl5').then((val) => {
      console.log('Wert Schlaf 5:', val);
    });
    this.storage.get('schl6fall').then((val) => {
      console.log('Wert Schlaf 6 Einschlafen:', val);
    });
    this.storage.get('schl6fall').then((val) => {
      console.log('Wert Schlaf 6 Aufgewacht:', val);
    });
    this.storage.get('schl7wake').then((val) => {
      console.log('Wert Schlaf 7 wachliegen:', val);
    });
    this.storage.get('schl7slee').then((val) => {
      console.log('Wert Schlaf 7 geschlafen:', val);
    });

  }

 /* clickcount() {
   this.count++;
    console.log(this.count);
    if (this.count >= 3) {
      if (this.platform.is('ios')) {
        const pltfrm: string = cordova.file.dataDirectory;
      } else if (this.platform.is('android')) {
        const pltfrm: string = cordova.file.dataDirectory;
      } else {
        const pltfrm: string = cordova.file.dataDirectory;
      }
      this.auswertung(pltfrm);
    }
  }

  auswertung(pltfrm) {
    this.count = 0;
    this.file.createFile(fs, 'export.csv', false);
    this.storage.get('arm').then((val) => {
      this.file.writeExistingFile(fs, 'export.csv', val);
    });

    console.log('pushed the button');
  }
*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }



}
