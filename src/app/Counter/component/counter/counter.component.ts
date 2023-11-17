import { Component } from '@angular/core';

@Component({
  selector: 'root-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="incrementNum(1)">+1</button>
    <button (click)="Reset()">Reset</button>
    <button (click)="incrementNum(-1)">-1</button>

  `
})
export class counteComponent{
  public counter: number = 10;


 incrementNum (value: number):void  {
   this.counter += value
 }

Reset(){
  this.counter = 10
}
}
