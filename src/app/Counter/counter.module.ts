import { NgModule } from "@angular/core";
import { counteComponent } from "./component/counter/counter.component";

@NgModule({
  declarations:[
    counteComponent,
  ],

  exports:[
    counteComponent
  ]
})
export class ModulesCounter {

}
