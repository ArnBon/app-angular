import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios-service';

@Component({
  selector: 'app-listado-usuarios-component',
  imports: [],
  templateUrl: './listado-usuarios-component.html',
  styleUrl: './listado-usuarios-component.css',
})
export class ListadoUsuariosComponent {

  usuarios: any[] = [];

  constructor(private usuarioService: UsuariosService){}

  ngOnInit(): void{
    this.usuarioService.obtenerDatos().subscribe((data) => {
      this.usuarios = data;
    });
  }

}
