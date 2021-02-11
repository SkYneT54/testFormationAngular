import { Component,Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Personne } from 'src/app/cv/models/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() valueChangeItem=new EventEmitter<Personne>();
  constructor() {
    this.personne = new Personne();
  }

  loadDetail(): void{
    this.valueChangeItem.emit(this.personne);
  }

  ngOnInit(): void {
  }

}
