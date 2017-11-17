import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  loginPage:boolean=true;
  registerPage:boolean;
    
  constructor(public navCtrl: NavController) { }
 
  login(){
    this.loginPage=true;
    this.registerPage=false;
   
  }
  register(){
    this.loginPage=false;
    this.registerPage=true;
  }
login1(){
  this.navCtrl.setRoot(TabsPage);
}
}
