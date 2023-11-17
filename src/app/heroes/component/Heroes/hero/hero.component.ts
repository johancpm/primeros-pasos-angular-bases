import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
 public nameHero: string = 'Iron Man';
 public edadHero: number = 45


 get capitalizarNameHero():string {
   return this.nameHero.toUpperCase();

 }
MetodoHeroDate (): string {
  return `${this.nameHero} - ${this.edadHero}`
}

chargeName(name: string):string {
  return this.nameHero = name;
}
chargeAge(age: number):number{
 return this.edadHero =  age;
}

ResetHero():void{
  this.nameHero = 'Iron Man';
  this.edadHero = 45
}

}
