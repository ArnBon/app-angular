import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { CapitalizePipe } from "../pipes/capitalize-pipe";

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-ejemplo-pipes-component',
  imports: [CommonModule, CapitalizePipe],
  providers:[{provide: LOCALE_ID, useValue: 'es'}], //esto configura el idioma de la fecha en español
  templateUrl: './ejemplo-pipes-component.html',
  styleUrl: './ejemplo-pipes-component.css',
})
export class EjemploPipesComponent {

  empleados = [ { nombre: 'Ricardo Suarez', sueldo: 12000, fechaNacimiento: new Date('2000-08-01') },
                { nombre: 'Laura Mejía', sueldo: 7000, fechaNacimiento: new Date('1988-09-05') },
                { nombre: 'Gilberto Anaya', sueldo: 8000, fechaNacimiento: new Date('1995-07-12') }
               ];
}


