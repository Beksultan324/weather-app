import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let phoneNumber = '';
    let code = '996'; 
    if (args.length !== 0) {
      switch(args[0]) {
        case 'kg': 
          code = '996';
          break;
        case 'kz': 
          code = '997';
          break;
        case 'uz': 
          code = '998';
          break;
        default:
          code = 'Нет таких значений';
      }
    }
    return phoneNumber = `+ (${code}) ${value}`;
  }

}
