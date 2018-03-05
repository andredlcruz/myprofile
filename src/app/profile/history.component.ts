import { Component, OnInit } from '@angular/core';
import {FbProfileService } from "../fb-profile.service"; 
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

import { AngularFireList } from 'angularfire2/database/interfaces';


@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  providers: [FbProfileService],
  styleUrls: ['./profile.component.css']
})
export class HistoryComponent implements OnInit {

  list;
   

  constructor(private db: FbProfileService) { }

  ngOnInit() {

    this.db.getAllEmployment()
    .subscribe(x => {this.list = x.reverse()}); 

      
    
   // this.list = this.db.getAllEmployementTest(); 
  }

}