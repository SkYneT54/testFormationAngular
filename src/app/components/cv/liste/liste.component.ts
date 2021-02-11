import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { Personne } from 'src/app/cv/models/personne';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})

export class ListeComponent implements OnInit {
  @Output() valueChangeListe = new EventEmitter<Personne>();
  personnes: Personne[] = [];
  constructor(
    private cvService: CvService
  ) {

  }


  ngOnInit(): void {
      this.personnes = this.cvService.getPersonnes();
  }

  notify(value: Personne): void{
    this.valueChangeListe.emit(value);
  }
}
