import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  name: string;
  conatct: number;
  constructor(public navCtrl: NavController) { }
  Names = [{
    name: "kiran",
    contact: 65486452
  },
  {
    name: "Narendra",
    contact: 65486452
  },{
    name: "Narsimha",
    contact: 65486452
  },{
    name: "Sharath",
    contact: 65486452
  },{
    name: "Murali",
    contact: 65486452
  },{
    name: "Manik",
    contact: 65486452
  },{
    name: "Teja",
    contact: 65486452
  },{
    name: "Padmavathi",
    contact: 65486452
  },{
    name: "Sowjanya",
    contact: 65486452
  },{
    name: "Ashok",
    contact: 65486452
  },{
    name: "Jatesh",
    contact: 65486452
  },{
    name: "Prudvi",
    contact: 65486452
  },{
    name: "Krishnakumari",
    contact: 65486452
  }]
}
//Names=["Kiran","Narendra","Narsimha","Sharath",
//"Murali","Manik","Teja","Padmavathi","Sowjanya",
//"Ashok","Jatesh","Prudvi","Krishnakumari"]
