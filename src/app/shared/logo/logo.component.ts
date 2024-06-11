import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  titulo: string = "Logo";
  
  medios: any[] = [
    { "texto": "Logo", "imagen": "assets/images (1).png" }
  ];
}