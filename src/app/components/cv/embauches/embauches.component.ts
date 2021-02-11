import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/cv/models/personne';
import { EmbaucheService } from 'src/app/services/embauche.service';

@Component({
  selector: 'app-embauches',
  templateUrl: './embauches.component.html',
  styleUrls: ['./embauches.component.css']
})
export class EmbauchesComponent implements OnInit {
  embauches: Personne[] = [];
  constructor(
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit(): void {
    this.embauches = this.embaucheService.getEmbauches();
  }



}
