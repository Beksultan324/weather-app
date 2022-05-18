import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: number, countryCode?: string): unknown {
    let phoneNumber = '';
    let number = String(value);
    let code = '996'; 
    phoneNumber = `+(${code}) ${number.slice(0, 3)} ${number.slice(3, 5)} ${number.slice(5, 7)} ${number.slice(7, 9)}` 
    if (countryCode) {
      switch(countryCode) {
        case 'kg': 
          code = '996';
          phoneNumber = `+(${code}) ${number.slice(0, 3)} ${number.slice(3, 5)} ${number.slice(5, 7)} ${number.slice(7, 9)}` 
          break;
        case 'kz': 
          code = '997';
          phoneNumber = `+(${code}) ${number.slice(0, 3)} ${number.slice(3, 5)} ${number.slice(5, 7)} ${number.slice(7, 9)}` 
          break;
        case 'uz': 
          code = '998';
          phoneNumber = `+(${code}) ${number.slice(0, 3)} ${number.slice(3, 5)} ${number.slice(5, 7)} ${number.slice(7, 9)}` 
          break;
        case 'ru':
          if (number.length == 10) {
            code = '7';
            number = String(value);
            phoneNumber = `+${code} (${number.slice(0, 3)}) ${number.slice(3, 6)} ${number.slice(6, 8)} ${number.slice(8, 10)}` 
          } else {
            phoneNumber = 'Не корректный номер';
          }
          break;
        default:
          phoneNumber = 'Нет таких значений';
      }
    }
    return phoneNumber;
  }

}
