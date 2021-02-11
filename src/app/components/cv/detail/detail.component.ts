import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/cv/models/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  constructor() {
  this.personne = new Personne();
   }

  ngOnInit(): void {
  }

}
