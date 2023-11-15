import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = false; // Variable para controlar si el menú está abierto o cerrado

  constructor() { }

  ngOnInit(): void {
  }

  // Función para alternar la apertura/cierre del menú en vista móvil
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
