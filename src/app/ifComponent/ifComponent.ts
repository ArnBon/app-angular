import { Component } from '@angular/core';

@Component({
  selector: 'app-if-component',
  imports: [],
  templateUrl: './ifComponent.html',
  styleUrl: './ifComponent.css',
})
export class IfComponent {

  isAutenticado: boolean = false;

  alternarAutenticacion(): void {
    this.isAutenticado = !this.isAutenticado;
  }
}
