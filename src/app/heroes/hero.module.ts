import { NgModule } from '@angular/core';
import { HeroComponent } from './component/Heroes/hero/hero.component';
import { ListComponent } from './component/Heroes/list/list.component';
import {CommonModule} from '@angular/common'
@NgModule({
  declarations:[
   HeroComponent,
   ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],

  imports:[
    CommonModule,
  ]

})
export class ModuleHeroes{

}
