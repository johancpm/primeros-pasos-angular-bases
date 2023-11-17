import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 public HeroesName: string[] = ['Batman','SpiderMan','SuperMan','Thor','Hulk']
 public HeroDelete?: string = ""

 DeleteLastName (): void {
  this.HeroDelete = this.HeroesName.pop();
 }
}
