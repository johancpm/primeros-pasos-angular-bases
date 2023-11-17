import { Component, OnInit } from '@angular/core';

import { dbzService } from '../services/dbz.service';
import { characters } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

 constructor( private Dbzservice: dbzService){

 };

 get characterList (): characters[] {
  return [...this.Dbzservice.characterList]
 }

 onDeleteByid(id: string): void{
    this.Dbzservice.onDeleteByid(id);
 }

 chargerCharacter(character: characters):void{
    this.Dbzservice.chargerCharacter(character)
 }

}
