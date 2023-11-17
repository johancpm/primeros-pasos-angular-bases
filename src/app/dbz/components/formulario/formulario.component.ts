import { Component, EventEmitter, Output } from '@angular/core';
import { characters } from '../../interfaces/character.interface';


@Component({
  selector: 'app-formulario-dbz',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponentDbz {

  @Output()
  public chargerCharacter: EventEmitter<characters> = new EventEmitter()

  public formCharacter: characters ={
    name: '',
    power: 0
  }

  emitCharacter(): void {


    if(this.formCharacter.name.length === 0 ) return;
    this.chargerCharacter.emit(this.formCharacter);

    this.formCharacter = {name: '', power: 0};

  };
}
