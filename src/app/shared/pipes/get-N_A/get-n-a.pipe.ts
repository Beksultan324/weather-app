import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getNA'
})
export class GetNAPipe implements PipeTransform {

  transform(value: any): any {
    return (value == undefined || value == null) ? 'N/A' : value; 
  }

}
