import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  fruits = ['apple', 'orange', 'banana'];

  constructor() { }

  ngOnInit(): void {
  }

}
