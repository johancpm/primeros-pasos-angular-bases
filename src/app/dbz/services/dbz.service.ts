import { Injectable } from '@angular/core';
import { characters } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'
@Injectable({

  providedIn: 'root'

})
export class dbzService {


    public characterList: characters[] = [
      {
        id: uuid(),
        name: "Krillin",
        power: 40
      },
      {
        id: uuid(),
        name: "Goku",
        power: 10000
      },
      {
        id: uuid(),
        name: "Vegeta",
        power: 9000
      }
     ];

     chargerCharacter(character: characters): void {
       this.characterList.push({...character, id: uuid()});
     }

     /* onDelete(id: number):void {


        this.characterList.splice(id, 1);
     } */

     onDeleteByid(id: string): void{
         this.characterList = this.characterList.filter(character => character.id !== id);
     }



};
