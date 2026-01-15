import { Routes } from '@angular/router';
import { ListadoUsuariosComponent } from './listado-usuarios-component/listado-usuarios-component';
import { AgregarTareaComponent } from './agregar-tarea-component/agregar-tarea-component';
import { EjemploPipesComponent } from './ejemplo-pipes-component/ejemplo-pipes-component';
import { IfComponent } from './ifComponent/ifComponent';
import { ForComponent } from './for-component/for-component';

export const routes: Routes = [
  { path: '', component: ListadoUsuariosComponent },
  { path: 'agregar-tarea', component: AgregarTareaComponent },
  { path: 'mostrar-pipes', component: EjemploPipesComponent },

  {path: 'varios', children: [
    { path: 'IfComponent', component: IfComponent },
    { path: 'ForComponent', component: ForComponent }
  ]}
];
