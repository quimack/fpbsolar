import { Component, OnInit } from '@angular/core';
import { fadeInOutAnimation } from 'src/assets/animations';

@Component({
  selector: 'app-whoareus',
  templateUrl: './whoareus.component.html',
  styleUrls: ['./whoareus.component.scss'],
  animations: [fadeInOutAnimation],
})
export class WhoareusComponent implements OnInit {
  shortView: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showMore(){
    this.shortView = false;
  }
}
