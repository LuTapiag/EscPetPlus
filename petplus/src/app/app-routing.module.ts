import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarfichaComponent } from './buscarficha/buscarficha.component';
import { CrearfichaComponent } from './crearficha/crearficha.component';
import { HoraComponent } from './hora/hora.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent},
  {path:'menu', component:MenuComponent},
  {path:'hora', component:HoraComponent},
  {path:'crearficha', component:CrearfichaComponent},
  {path:'buscarficha', component:BuscarfichaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
