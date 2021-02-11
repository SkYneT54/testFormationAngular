import { Injectable } from '@angular/core';
import { Personne } from '../cv/models/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[] = [];
  constructor() {
    this.personnes =
      [
        new Personne(1, "ATOUILLANT", "Mathieu", "IT Manager", "ITManager.jpg", 1, 36),
        new Personne(2, "POMMES", "Samuel", "Developer", "Developer.jpg", 2, 24),
        new Personne(3, "GASIOROWSKI", "Loic", "Developer", "Developer.jpg", 3, 24),
        new Personne(4, "VERMANDE", "Valentin", "Developer", " ", 3, 17)
      ];
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
