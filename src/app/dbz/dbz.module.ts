import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import {PersonajesComponentDbz} from './components/personajes/personajes.component'
import { FormularioComponentDbz } from './components/formulario/formulario.component';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponentDbz,
    FormularioComponentDbz
  ],
  exports:[
    MainPageComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
