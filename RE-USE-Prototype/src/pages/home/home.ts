import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

import { fileController } from '../../services/fileController';


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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public platform: Platform,
              public fc: fileController) {

                document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(this.flie);
}
              }

  private count = 0;
  vals: Array<{timestamp: string, value: string}>;
  timestamp = Date.now();
  filename: string = null;

  openFragebogen() {
    this.navCtrl.push('ErklArmPage');
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
      this.vals.push(null, val);
    });
    this.storage.get('armb10').then((val) => {
      console.log('Wert auf Armbewegung 2:', val);
      this.vals.push(null, val);
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

 clickcount() {
   this.count++;
    console.log(this.count);
    let pltfrm: string;
    if (this.count >= 3) {
      // if (this.platform.is('ios')) {
      //   //pltfrm = this.file.dataDirectory;
      // } else if (this.platform.is('android')) {
      //   //pltfrm = this.file.dataDirectory;
      // } else {
      //   //pltfrm = this.file.dataDirectory;
      // }
      this.auswertung();
    }
  }

  auswertung() {
    this.count = 0;
    //create test file
    console.log("this is our path:", this.fc.getPath());

    this.outcome();
    console.warn("saved to array");
    this.storage.get('arm10').then((res) => {
      console.log("this is our storage item:", res);
      let str = <string> res;

      let filename = "File_" + Date.now();
      this.fc.writeFile(filename, this.vals);


    });

  }

  // chechIfExists(path: string, val: string) {
  //   console.log("check if file exists:");
  //   this.flie.checkFile(path, "FILE.txt").then((exists) => {
  //     console.log("does file exists?", exists);
  //     if(exists) {
  //       this.writeThisNow(path, val)
  //       //this.removeFile(path, val);
  //     } else {
  //       this.writeThisNow(path, val)
  //     }
  //   }).catch((err) => {
  //     console.log("elloololol:", err)
  //   });
  // }

  // removeFile(path: string, val: string) {
  //   console.log("try to romive file:");
  //   this.flie.removeFile(path, "FILE.txt").then((res) => {
  //     console.log("file removed:", res);
  //     this.writeThisNow(path, val);
  //   });
  // }

  // writeThisNow(path: string, val: string){
  //   console.log("now write:");
  //   let a: IWriteOptions = {
  //     append: true,
  //     replace: false,
  //   }
  //   this.flie.writeFile(path, "FILE.txt", val, a).then(res => {
  //     console.log("we could save:", res);

  //     this.flie.readAsText(path, "FILE.txt").then(res => {
  //       console.log("we could read: ", res);
  //     }).catch(err => {
  //       console.warn("error during reading:", err);
  //     } );
  //   }).catch(err => {
  //     console.warn("error during write", err);
  //   });
  // }

  // auswertung(pltfrm) {
  //   this.count = 0;
  //   this.file.createFile(pltfrm, 'export.csv', false).catch((err) =>{
  //     console.warn("Create file error:", err);
  //   });
  //   this.storage.get('arm').then((val) => {
  //     this.file.writeExistingFile(pltfrm, 'export.csv', val);
  //   }).catch((err) =>{
  //     console.warn("Write file error:", err);
  //   });

  //   console.log('pushed the button');
  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }



}
