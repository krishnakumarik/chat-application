import { Component } from '@angular/core';
import {ContactPage} from '../contact/contact';
import {MessagesPage} from '../messages/messages';
import {ProfilePage} from '../profile/profile';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

 
  tab3Root = ContactPage;
   tab7Root = MessagesPage;
  tab8Root = ProfilePage;
  constructor() { }
}
