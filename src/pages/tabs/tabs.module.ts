import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { TabsPage } from './tabs';

@NgModule({
  declarations: [
    TabsPage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    IonicModule
  ],
  exports:[
    
  ]
})
export class TabsPageModule {}
