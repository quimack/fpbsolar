import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fpbsolar';
    showArrow: boolean = false;

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event): void {
      if(window.scrollY >= 1100){
        this.showArrow = true;
      }else{
        this.showArrow = false;
      }
    }

    ngOnInit(){
      AOS.init();
      window.addEventListener("load", AOS.refresh)
    }

}

