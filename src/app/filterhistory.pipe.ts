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
       let duties = []; 
       if(!value) return; 
    
       for(let key in value){
       //  console.log(value[key].duty)
         duties.push(value[key].duty)
       }

       //console.log(duties); 
    
   
      return duties; 
 
  }
  
}
