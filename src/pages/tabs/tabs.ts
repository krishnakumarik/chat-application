import { Component } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  loginEmail:any;

  tab3Root = 'ContactPage';
  tab7Root = 'MessagesPage';
  tab8Root = 'ProfilePage';
  constructor(public afauth: AngularFireAuth, public toast: ToastController) { 


    
  }

  view() {
    // this.afauth.authState.subscribe(data => {
    //   if (data && data.email && data.uid) {
    //     this.toast.create({ message: `welcome to chating`, duration: 3000 }).present();
    //   }
    //   else {
    //     this.toast.create({ message: `sorry could not find your datails`, duration: 3000 }).present();
    //   }
    // });
  }

}
