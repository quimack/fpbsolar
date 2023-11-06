import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  images: string[] = [
    '../../../assets/images/installations/Vilarmaior.jpeg',
    '../../../assets/images/installations/Frades.jpeg',
    '../../../assets/images/installations/Cambados.jpeg',
    '../../../assets/images/installations/Baiona.jpg',
    '../../../assets/images/installations/Silleda.jpeg',
    '../../../assets/images/installations/Vigo.jpg',
  ];

  currentImageIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 7000);
  }
}
