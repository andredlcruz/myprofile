import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
     
      if(!value) return; 
       console.log(value)
      return value.reverse; 
  }

}
