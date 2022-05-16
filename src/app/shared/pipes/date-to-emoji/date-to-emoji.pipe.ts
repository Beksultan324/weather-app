import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToEmoji'
})
export class DateToEmojiPipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    const time = value.getHours();
    let emoji = '';
    if (time <=6 || time >= 18) {
      emoji = '🌙';
    } else {
      emoji = '☀️';
    }
    return emoji;
  }
}
