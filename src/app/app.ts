import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfComponent } from './ifComponent/ifComponent';
import { AgregarTareaComponent } from './agregar-tarea-component/agregar-tarea-component';
import { ForComponent } from './for-component/for-component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IfComponent, AgregarTareaComponent, ForComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hola Mundo ! Arnaldo Bonillo');
}
