import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {
  colors = ['black', 'yellow', 'green', 'blue', 'purple'];
  @HostBinding('style.color') color = '';
  @HostBinding('style.borderColor') borderColor = '';

  @HostListener('keyup') onKeyUp(): void {
    // var indice = Math.floor(Math.random()*5);
    // this.color = this.colors[indice]:

    this.color = this.getRandomColor();
    this.borderColor = this.getRandomColor();
  }



  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  constructor() { }

}
