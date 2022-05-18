import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input() fruits: string[];
  isPrimary = true;
  count = 3

  constructor() { }

  ngOnInit(): void {
    console.log( (this.isPrimary) ? {name: 'Kate'} : 'b');
  }


}
