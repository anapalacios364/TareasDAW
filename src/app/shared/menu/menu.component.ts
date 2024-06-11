import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems: any[] = [
    { "texto": "Inicio", "link": "/" },
    { "texto": "Nosotros", "link": "/about" },
    { "texto": "Servicios", "link": "/services" },
    { "texto": "Contacto", "link": "/contact" }
  ];
}
