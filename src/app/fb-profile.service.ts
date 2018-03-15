import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database/interfaces';

@Injectable()
export class FbProfileService {

  constructor(private fb: AngularFirestore, private db: AngularFireDatabase) {   }


 /*
 * Returns a reference list of all employment entries
 * that holds the key and payload. 
 * 
 * Modify the list to map the key and payload.
 * 
 * @return Observables list in reverse order
 */
  getAllEmployment(): Observable<any[]> {
    return this.db.list('employment').snapshotChanges()
    .map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()})).reverse();
    })
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
    
    return this.db.list('employment').snapshotChanges()
    .map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()})).reverse();
    })
     
     
  }
  

}
