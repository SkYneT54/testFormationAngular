import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  nom = 'Mathieu';
  isHidden = false;
  autreNom: string;
  message = '';

  constructor() {
    this.autreNom = 'TRUC';
   }

  ngOnInit(): void {
  }

  sayCoucou(): void{
    alert('CC :D');
  }

  afficherCacher(): void{
    this.isHidden = !this.isHidden;
  }

  changeMessage(inputMessage: string): void{
      this.message = inputMessage;
  }

}
