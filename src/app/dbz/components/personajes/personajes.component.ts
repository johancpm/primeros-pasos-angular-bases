import { Component, EventEmitter, Input, Output } from '@angular/core';
import { characters } from '../../interfaces/character.interface';

@Component({
  selector: 'app-personajes-dbz',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponentDbz {

  @Input()
  public charactersReal: characters[] = [{
    name:'picoro',
    power: 200
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter() ;

  onDeleteCharacter (id:string): void {
      console.log({id});

      this.onDelete.emit(id);

  };
}
