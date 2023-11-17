import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fpbsolar';
    showArrow: boolean = false;

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event): void {
      console.log("scrooool", window.scrollY)
      if(window.scrollY >= 1100){
        this.showArrow = true;
        console.log(this.showArrow)
      }else{
        this.showArrow = false;
      }
    }

}

