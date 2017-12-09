import { Component } from '@angular/core';
import { NavController, IonicPage , NavParams } from 'ionic-angular';
import { Data } from '../../model/data';
import { service } from '../service/service';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  shopingList: Observable<Data[]>;
   RegisteredUsers:Observable<Data[]>;
  constructor(public navCtrl: NavController ,
    public svc:service,
  public navParams:NavParams) {
  //this.RegisteredUsers.push(this.svc.getData());  // to push to an array

  //this.loginEmail = localStorage.getItem("user"); for local storage
this.RegisteredUsers = this.svc
  .getData() //this wil return DB list
  .snapshotChanges()//this wil giv key n value
  //.valueChanges is for only value.
  .map(
  changes => {
    return changes.map(c => ({
      key: c.payload.key, ...c.payload.val()
    }))
  })  
 // this.RegisteredUsers=this.svc.getData().snapshotChanges().map(chnages=>{
  //    return chnages.map(c=>({
  //      key:c.payload.key,...c.payload.val()
  //   }))
  //  })
  //this.svc.getData().then(data=>{            //    one method of calling a methos from service and then can bind
  //    this.RegisteredUsers=this.data;       //     .but now it wont works.coz angularfire wont allow then()
  //   });
  // //   console.log('pinky');
  
  console.log(this.shopingList)
   }
data:Data={ 
fullName: '',
phoneNumber: '',
Email: '',
password: ''
};

}

