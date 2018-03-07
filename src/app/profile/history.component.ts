import { Component, OnInit } from '@angular/core';
import {FbProfileService } from "../fb-profile.service"; 
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

import { AngularFireList } from 'angularfire2/database/interfaces';
import { Console } from '@angular/core/src/console';


@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  providers: [FbProfileService],
  styleUrls: ['./profile.component.css']
})
export class HistoryComponent implements OnInit {

  list;
  duties; 
  test;  
   

  constructor(private db: FbProfileService) { }

  ngOnInit() {

    this.db.getAllEmployment()
    .subscribe(x => {this.list = x.reverse()}); 

   this.db.getJobDuties()
  .subscribe(  x => { this.duties = x[0] } ); 

  // this.db.getJobDutiesTest().
  // snapshotChanges(['child_added'])
  // .subscribe( actions => {
  //             actions.forEach(x => {console.log(x.key + JSON.stringify(x.payload.val()))})
             
  // });  

  this.db.getJobDutiesTest()
  .snapshotChanges(['child_added'])
  .subscribe(actions => {
   actions.filter(x =>  x.key === '001').forEach(x => this.test = x.payload.val())  }
  
  )
 
    
      
   //JSON.stringify(x) 
    }

}