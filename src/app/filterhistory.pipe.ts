import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterhistory'
})
export class FilterhistoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
