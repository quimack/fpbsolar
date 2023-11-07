import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() iconSrc: string | null = null;
  @Input() txt: string = "";
  @Input() title: string = ""; 
   

  
  constructor() { }

  ngOnInit(): void {
  }

}
