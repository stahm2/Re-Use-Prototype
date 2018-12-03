import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

import { fileController } from '../../services/fileController';
import { analyzeAndValidateNgModules } from '@angular/compiler';


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
              public fc: fileController) { }

  private count = 0;

  values = [];



  openFragebogen() {
    this.navCtrl.push('ErklArmPage');
  }

  openBegleittherapie() {
    this.navCtrl.push('ErklBegleitPage');
  }

  openGewicht() {
  this.navCtrl.push('ErklGewichtPage');
  }

  openBlutdruck() {
    this.navCtrl.push('ErklBlutPage');
  }

  openSchlaf() {
    this.navCtrl.push('ErklSchlafPage');
  }

  outcome(): Promise<any> {
    let ts = Date.now().toLocaleString();

    let headers = "";
    let values = "";

    let p1 = this.storage.get('arm').then((val) => {
      headers += "Armbewegung 1: ";
      values += `${val}` + "; ";
      console.log('Wert auf Armbewegung 1:', val);

    });
     let p2 = this.storage.get('armb10').then((val) => {
      headers += "Armbewegung 2:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Armbewegung 2:', val);
    });
    let p3 = this.storage.get('arm7').then((val) => {
      headers += "Armbewegung 3:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Armbewegung 3:', val);

    });
    let p4 = this.storage.get('arm10').then((val) => {
      headers += "Armbewegung 4:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Armbewegung 4:', val);

    });
    let p5 = this.storage.get('aktiv7').then((val) => {
      headers += "Armbewegung 5:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Armbewegung 5:', val);

    });
    let p6 = this.storage.get('aktiv10').then((val) => {
      headers += "Armbewegung 6:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Armbewegung 6:', val);

    });
    let p7 = this.storage.get('pain').then((val) => {
      headers += "Schmerz:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Schmerzseite:', val);

    });
    let p8 = this.storage.get('mood').then((val) => {
      headers += "Stimmung:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Stimmungsseite:', val);

    });
    let p9 = this.storage.get('eq1').then((val) => {
      headers += "EQ1:; ";
      values += `${val}` + "; ";
      console.log('Wert auf EQ1:', val);

    });
    let p10 = this.storage.get('eq2').then((val) => {
      headers += "EQ2:; ";
      values += `${val}` + "; ";
      console.log('Wert auf EQ2:', val);

    });
    let p11 = this.storage.get('eq3').then((val) => {
      headers += "EQ3:; ";
      values += `${val}` + "; ";
      console.log('Wert auf EQ3:', val);

    });
    let p12 = this.storage.get('eq4').then((val) => {
      headers += "EQ4:; ";
      values += `${val}` + "; ";
      console.log('Wert auf EQ4:', val);

    });
    let p13 = this.storage.get('eq5').then((val) => {
      headers += "EQ5:; ";
      values += `${val}` + "; ";
      console.log('Wert auf EQ5:', val);

    });
    let p14 = this.storage.get('eq6').then((val) => {
      headers += "EQ6:; ";
      values += `${val}` + "; ";
      console.log('Wert auf EQ6:', val);

    });
    let p15 = this.storage.get('mud1').then((val) => {
      headers += "Müdigkeit 1:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Müdigkeit 1:', val);

    });
    let p16 = this.storage.get('mud2').then((val) => {
      headers += "Müdigkeit 1:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Müdigkeit 2:', val);

    });
    let p17 = this.storage.get('mud3').then((val) => {
      headers += "Müdigkeit 3:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Müdigkeit 3:', val);

    });
    let p18 = this.storage.get('mud4').then((val) => {
      headers += "Müdigkeit 4:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Müdigkeit 4:', val);

    });
    let p19 = this.storage.get('mud5').then((val) => {
      headers += "Müdigkeit 5:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Müdigkeit 5:', val);

    });
    let p20 = this.storage.get('mud6').then((val) => {
      headers += "Müdigkeit 6:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Müdigkeit 6:', val);

    });
    let p21 = this.storage.get('mud7').then((val) => {
      headers += "Müdigkeit 7:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Müdigkeit 7:', val);

    });
    let p22 = this.storage.get('mud8').then((val) => {
      headers += "Müdigkeit 8:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Müdigkeit 8:', val);

    });
    let p23 = this.storage.get('mud9').then((val) => {
      headers += "Müdigkeit 9:; ";
      values += `${val}` + "; ";
      console.log('Wert auf Müdigkeit 9:', val);

    });
    let p24 = this.storage.get('therapy').then((val) => {
      headers += "Therapieart:; ";
      values += `${val}` + "; ";
      console.log('Art der Therapie:', val);

    });
    let p25 = this.storage.get('begldate').then((val) => {
      headers += "Therapiedatum:; ";
      values += `${val}` + "; ";
      console.log('Datum der Therapie:', val);

    });
    let p26 = this.storage.get('beglstart').then((val) => {
      headers += "Geplante Therapiezeit:; ";
      values += `${val}` + "; ";
      console.log('Geplante Zeit:', val);

    });
    let p27 = this.storage.get('beglend').then((val) => {
      headers += "Effektive Therapiezeit:; ";
      values += `${val}` + "; ";
      console.log('Effektive Zeit:', val);

    });
    let p28 = this.storage.get('gewicht').then((val) => {
      headers += "Gewicht:; ";
      values += `${val}` + "; ";
      console.log('Gewicht:', val);

    });
    let p29 = this.storage.get('bauch').then((val) => {
      headers += "Bauchumfang:; ";
      values += `${val}` + "; ";
      console.log('Bauchumfang:', val);

    });
    let p30 = this.storage.get('sys').then((val) => {
      headers += "BP Sys:; ";
      values += `${val}` + "; ";
      console.log('Systolisch:', val);

    });
    let p31 = this.storage.get('dia').then((val) => {
      headers += "BP Dia:; ";
      values += `${val}` + "; ";
      console.log('Diastolisch:', val);

    });
    let p32 = this.storage.get('puls').then((val) => {
      headers += "Puls:; ";
      values += `${val}` + "; ";
      console.log('Puls:', val);

    });
    let p33 = this.storage.get('schl1herz').then((val) => {
      headers += "Medi Herz:; ";
      values += `${val}` + "; ";
      console.log('Herzbeschwerden:', val);

    });
    let p34 = this.storage.get('schl1alle').then((val) => {
      headers += "Medi Allergie:; ";
      values += `${val}` + "; ";
      console.log('Allergie:', val);

    });
    let p35 = this.storage.get('schl1schi').then((val) => {
      headers += "Medi Schilddrüse:; ";
      values += `${val}` + "; ";
      console.log('Schilddruese:', val);

    });
    let p36 = this.storage.get('schl1lung').then((val) => {
      headers += "Medi Lunge:; ";
      values += `${val}` + "; ";
      console.log('Lungenerkrankung:', val);

    });
    let p37 = this.storage.get('schl1stim').then((val) => {
      headers += "Medi Psychopharmakon:; ";
      values += `${val}` + "; ";
      console.log('Stimmung:', val);

    });
    let p38 = this.storage.get('schl1schmitt').then((val) => {
      headers += "Medi Schlaf:; ";
      values += `${val}` + "; ";
      console.log('Schlafmittel:', val);

    });
    let p39 = this.storage.get('schl1weis').then((val) => {
      headers += "Medi Weiss nicht:; ";
      values += `${val}` + "; ";
      console.log('Weiss nicht:', val);

    });
    let p40 = this.storage.get('schl1ande').then((val) => {
      headers += "Medi andere:; ";
      values += `${val}` + "; ";
      console.log('Andere:', val);

    });
    let p41 = this.storage.get('schl2radio').then((val) => {
      headers += "Einnahme Schlafmittel:; ";
      values += `${val}` + "; ";
      console.log('Schlafmittel nehmen:', val);

    });
    let p42 = this.storage.get('textSchlaf2').then((val) => {
      headers += "Schlafmittel Namen:; ";
      values += `${val}` + "; ";
      console.log('Namen der Schlafmittel:', val);

    });
    let p43 = this.storage.get('schl3').then((val) => {
      headers += "Schlaf 3:; ";
      values += `${val}` + "; ";
      console.log('Wert Schlaf 3:', val);

    });
    let p44 = this.storage.get('schl4').then((val) => {
      headers += "Schlaf 4:; ";
      values += `${val}` + "; ";
      console.log('Wert Schlaf 4:', val);

    });
    let p45 = this.storage.get('schl5').then((val) => {
      headers += "Schlaf 5:; ";
      values += `${val}` + "; ";
      console.log('Wert Schlaf 5:', val);

    });
    let p46 = this.storage.get('schl6fall').then((val) => {
      headers += "Schlaf 6 Einschlafzeit:; ";
      values += `${val}` + "; ";
      console.log('Wert Schlaf 6 Einschlafen:', val);

    });
    let p47 = this.storage.get('schl6wake').then((val) => {
      headers += "Schlaf 6 Aufwachzahl:; ";
      values += `${val}` + "; ";
      console.log('Wert Schlaf 6 Aufgewacht:', val);

    });
    let p48 = this.storage.get('schl7wake').then((val) => {
      headers += "Schlaf 7 wach liegen:; ";
      values += `${val}` + "; ";
      console.log('Wert Schlaf 7 wachliegen:', val);

    });
    let p49 = this.storage.get('schl7slee').then((val) => {
      headers += "Schlaf 7 Schlafdauer:; ";
      values += `${val}` + "; ";
      console.log('Wert Schlaf 7 geschlafen:', val);

    });

    return Promise.all([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
                        p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
                        p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,
                        p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,
                        p41, p42, p43, p44, p45, p46, p47, p48, p49
                      ]).then(() => {
      return {
        headerRow: headers,
        contentRow: values
      }
    });
  }

 clickcount() {
   this.count++;
    console.log(this.count);
    if (this.count >= 3) {
      this.outcome().then(res => {
        this.auswertung(res);
      })
    }
  }

  auswertung(res: any) {
    this.count = 0;
    //create test file
    console.log("this is our path:", this.fc.getPath());
      this.fc.createAndWriteFile(res)
    }

  goDown(item){
    this.fc.goDown(item);
  }

  goUp(){
    this.fc.goUp;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }



}
