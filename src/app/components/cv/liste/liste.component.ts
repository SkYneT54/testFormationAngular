import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { Personne } from 'src/app/cv/models/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})

export class ListeComponent implements OnInit {
  @Output() valueChangeListe = new EventEmitter<Personne>();
  constructor() {

  }
  personnes:Personne[] = [];

  ngOnInit(): void {
    this.personnes =
    [
      new Personne(1,"ATOUILLANT","Mathieu","IT Manager","ITManager.jpg",1,36),
      new Personne(2,"POMMES","Samuel","Developer","Developer.jpg",2,24),
      new Personne(3,"GASIOROWSKI","Loic","Developer","Developer.jpg",3,24),
      new Personne(4,"VERMANDE","Valentin","Developer","Developer.jpg",3,17)
    ];
  }

  notify(value: Personne): void{
    //alert(value.firstname);
    this.valueChangeListe.emit(value);
  }
}
