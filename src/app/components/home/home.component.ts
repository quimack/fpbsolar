import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  images: string[] = [
    '../../../assets/images/installations/Vilarmaior.jpeg',
    '../../../assets/images/installations/Cambados.jpeg',
    '../../../assets/images/installations/Baiona.jpg',
    '../../../assets/images/installations/Frades.jpeg',
    '../../../assets/images/installations/Oleiros.jpeg',
    '../../../assets/images/installations/Silleda.jpeg',
    '../../../assets/images/installations/Vigo.jpg',
    '../../../assets/images/installations/Vilarmaior.jpeg',
  ];

  @ViewChild('bckgrImg') bckgrImg!: ElementRef; // Agrega una referencia al elemento de la imagen


  currentImageIndex = 0;
  zoomed = false; // Agrega una variable para controlar el zoom

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.changeImage();
      console.log("chagne", this.zoomed)
    }, 5000);
  }

  changeImage() {
    this.zoomed = true; // Aplicar la clase 'zoomed' para iniciar la animación de zoom
    this.bckgrImg.nativeElement.addEventListener('transitionend', () => {
      this.zoomed = false;
    }, { once: true });

    setTimeout(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      console.log("timeout", this.zoomed)
      // Quitar la clase 'zoomed' después de la animación
    }, 5000); // Ajusta el tiempo para que coincida con la duración de la animación CSS
  }
}
