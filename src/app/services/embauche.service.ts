import { Injectable } from '@angular/core';
import { Personne } from '../cv/models/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  embauches: Personne[] = [];
  constructor() { }

  embaucher(personne: Personne): boolean {
    // Vérifier que la personne n'existe pas déjà
    if (this.embauches.indexOf(personne) !== -1) {
      return false;
    }
    this.embauches.push(personne);
    return true;
  }

  getEmbauches(): Personne[]{
    return this.embauches;
  }
}
