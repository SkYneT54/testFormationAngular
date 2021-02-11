import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/cv/models/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personne: Personne;
  constructor() {
    this.personne = new Personne();
   }

  ngOnInit(): void {
  }
  notifyCV(value: Personne): void{
    this.personne = value;
  }
}
