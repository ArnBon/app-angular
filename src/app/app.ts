import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfComponent } from './ifComponent/ifComponent';
import { AgregarTareaComponent } from './agregar-tarea-component/agregar-tarea-component';
import { ForComponent } from './for-component/for-component';
import { Mensajeservice } from './mensajeservice';
import { ListadoUsuariosComponent } from './listado-usuarios-component/listado-usuarios-component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { provideHttpClient } from '@angular/common/http';
import { EjemploPipesComponent } from './ejemplo-pipes-component/ejemplo-pipes-component';
import { NavegacionComponent } from './navegacion-component/navegacion-component';





@Component({
  selector: 'app-root',
  imports: [
              RouterOutlet,
              IfComponent,
              AgregarTareaComponent,
              ForComponent,
              ListadoUsuariosComponent,
              EjemploPipesComponent,
              NavegacionComponent

           ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  protected readonly title = signal('Servicios en Angular');
  protected readonly title2 = signal('Servicios en Angular con Observables');
  mensaje: string | undefined;

  constructor( private mensajeService: Mensajeservice ){
    this.mensaje = this.mensajeService.obtenerMensaje();
  }
}
