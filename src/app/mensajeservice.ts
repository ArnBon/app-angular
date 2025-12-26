import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mensajeservice {

  private mensaje: string = 'Hola desde servicio de Mensajes';
  
  
  obtenerMensaje(): string {
    return this.mensaje;
  }
  
}
