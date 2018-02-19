import { Component, OnInit } from '@angular/core';
import {FbProfileService } from "../fb-profile.service"; 
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  providers: [FbProfileService],
  styleUrls: ['./profile.component.css']
})
export class HistoryComponent implements OnInit {

  list: Observable<any[]>; 

  constructor(private db: FbProfileService) { }

  ngOnInit() {

    this.list = this.db.getAllEmployment();
    console.log(this.list); 

  }

}