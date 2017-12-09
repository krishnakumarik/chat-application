import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ProfilePage } from './profile';

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),IonicModule
  ],
  exports:[
    
  ]
})
export class ProfilePageModule {}
