import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { MessagesPage } from './messages';

@NgModule({
  declarations: [
    MessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesPage),
    IonicModule
  ],
  exports:[
    
  ]
})
export class MessagesPageModule {}
