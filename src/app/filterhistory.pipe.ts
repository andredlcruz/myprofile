import { Pipe, PipeTransform } from '@angular/core';
import {FbProfileService } from "./fb-profile.service"; 
import { Component } from '@angular/core/src/metadata/directives';

@Pipe({
  name: 'filterhistory'
})

export class FilterhistoryPipe implements PipeTransform {
   list; 
  
  constructor(private db: FbProfileService){}
  transform(value: any, args?: any): any {
    
       if(!value) return; 
    
 
 
    //return   value.filter(x => console.log (x.key === args ) ); 
    this.list = this.db.getJobDuties(); 
    console.log(this.list); 
    return this.db.getJobDuties(); 

   // return Array.from(this.list);
  }
  
}
