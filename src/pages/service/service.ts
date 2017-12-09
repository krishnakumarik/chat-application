import { Injectable } from "@angular/core";
import { Data } from "../../model/data";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class service{
    public usersRef = this.db.list<Data>('userlist')
constructor(public db:AngularFireDatabase){}

addData(data:Data){
  return this.usersRef.push(data);
}     
getData(){
  console.log(this.usersRef)
  return this.usersRef;
}

}