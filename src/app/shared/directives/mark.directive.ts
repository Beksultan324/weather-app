import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMark]'
})
export class MarkDirective {
  @HostBinding('style') bg = {'color': 'yellow'};
  // @HostListener('click') onClick() {
  //   this.bg = 'yellow';
  // }

  constructor() { }

}
