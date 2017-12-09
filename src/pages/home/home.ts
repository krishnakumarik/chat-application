import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Data } from '../../model/data';
import { service } from '../service/service';
import {AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  userName:any;
  userpassword:any;

  constructor(public navCtrl: NavController,
    public navparams: NavParams,
    public svc: service,
    public afauth: AngularFireAuth,
    public toast: ToastController) { }

  data: Data = {
    fullName: '',
    phoneNumber: '',
    Email: '',
    password: ''
  };

  loginPage: boolean = true;
  registerPage: boolean;

  login() {
    this.loginPage = true;
    this.registerPage = false;
  }

  register() {
    this.loginPage = false;
    this.registerPage = true;
  }

   addItem(data:Data){
     this.svc.addData(data).then(ref=>{
       console.log(ref.key);
       //console.log(data);

      // var data=(ref.key);
  //     this.toast.show(`${item.name} added`,1000)
   //this.navCtrl.setRoot('',{key:ref.key})
  //   })
     })
  }
  
  async registerauth(data: Data) {
    
    try {
      const result = await this.afauth.auth.createUserWithEmailAndPassword(data.Email, data.password);
      console.log(result);
      this.submit();
    }
    catch (err) {
      console.error(err);
    }
  }

  async loginauth(data:Data) {
  try {
      const result = await this.afauth.auth.signInWithEmailAndPassword(data.Email,data.password);
      console.log(result)
    //  this.loginEmail = result.email;

    //localStorage.setItem("user", result.email);
      this.toast.create({ message: `welcome to chating`, duration: 3000 }).present();
      this.navCtrl.setRoot('TabsPage');


      // this.afauth.authState.subscribe(data => {
      //   if (data && data.email && data.uid) {
      //     this.toast.create({ message: `welcome to chating`, duration: 3000 }).present();
      //     this.navCtrl.setRoot('TabsPage');
      //   }
      //   else {
      //     this.toast.create({ message: `sorry could not find your datails`, duration: 3000 }).present();
      //   }
      // });
    
    }
    catch (err)
    {
      this.toast.create({ message: err.message, duration: 3000 }).present();
      console.log(err)
    }
  }

  submit() {
    this.loginPage = true;
    this.registerPage = false;
   this.addItem(this.data);
  }
}
