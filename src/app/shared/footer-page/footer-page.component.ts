import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterComponent {
  medios: any[] = [
    { "texto": "En Instragram", "imagen": "assets/instagram.svg" , "red": "instagram.com"},
    { "texto": "En Facebook", "imagen": "assets/facebook.svg", "red": "facebook.com" },
    { "texto": "Por correo electronico", "imagen": "assets/envelope.svg", "red": "outlook.com" }
  ];
}
