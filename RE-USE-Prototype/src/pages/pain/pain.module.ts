import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PainPage } from './pain';

@NgModule({
  declarations: [
    PainPage,
  ],
  imports: [
    IonicPageModule.forChild(PainPage),
  ],
})
export class PainPageModule {}
