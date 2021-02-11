import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component implements OnInit {
  readonly _INIT_COLOR: string = 'white';
  bgColor = this._INIT_COLOR;


  constructor() {
  }

  ngOnInit(): void {
  }

  changeColor(newColor: string): void{
    this.bgColor = newColor;
  }
}
