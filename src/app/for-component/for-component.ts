import { Component } from '@angular/core';

@Component({
  selector: 'app-for-component',
  imports: [],
  templateUrl: './for-component.html',
  styleUrl: './for-component.css',
})
export class ForComponent {
  tareas: string[] = [
    'Aprender Angular',
    'Aprender Java',
    'Aprender PHP',
  ];

  agregarTarea(nuevaTarea: string): void {
    if (nuevaTarea) {
      this.tareas.push(nuevaTarea)      
    }
  }

}
