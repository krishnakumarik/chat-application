import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ContactPage } from './contact';

@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    IonicModule
  ],
  exports:[
    
  ]
})
export class ContactPageModule {}
