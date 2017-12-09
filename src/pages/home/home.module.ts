import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonicModule
  ],
  exports:[
    
  ]
})
export class HomePageModule {}
