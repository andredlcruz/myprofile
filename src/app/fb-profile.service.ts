import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database/interfaces';

@Injectable()
export class FbProfileService {

  constructor(private fb: AngularFirestore, private db: AngularFireDatabase) {   }

  getAllEmployment(): Observable<any[]> {
    //  return this.db.collection('employment').valueChanges(); 
    return this.db.list('employment').valueChanges(); 
    
  }

  getJobDutiesbyID(keyID: string): Observable<any[]> {
    return this.db.list('functions/' + keyID).valueChanges(); 
  }
  getJobDuties(): Observable<any[]> {
  return this.db.list('functions').valueChanges(); 
  }

getJobDutiesTest(): AngularFireList<any[]>  {
  return this.db.list('functions'); 
}

  getAllEmployementTest(): Observable<any[]> {
    return this.db.list('employment', ref => ref.orderByChild('position')).valueChanges();   
  }
  

}
