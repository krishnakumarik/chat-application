import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { service } from '../pages/service/service';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  AngularFireModule.initializeApp(FIREBASE_CONFIG),
  AngularFireDatabaseModule,
  AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
   SplashScreen,service,
   { provide: ErrorHandler, useClass: IonicErrorHandler },
    

  ]
})
export class AppModule { }
