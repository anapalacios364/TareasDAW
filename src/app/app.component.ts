import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecursosService } from './servicios/recursos.service';
import { LogoComponent } from './shared/logo/logo.component';
import { FooterComponent } from './shared/footer-page/footer-page.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { Foto } from './interfaz/foto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, LogoComponent, FooterComponent, MenuComponent],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tarea';
  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>;
    })
  }
}
