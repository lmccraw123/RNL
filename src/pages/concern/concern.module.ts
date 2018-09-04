import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConcernPage } from './concern';

@NgModule({
  declarations: [
    ConcernPage,
  ],
  imports: [
    IonicPageModule.forChild(ConcernPage),
  ],
})
export class ConcernPageModule {}
