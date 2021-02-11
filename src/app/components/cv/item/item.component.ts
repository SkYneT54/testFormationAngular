import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Personne } from 'src/app/cv/models/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne = new Personne();
  @Input() height = 50;
  @Input() width = 50;
  @Input() isDiv = true;
  @Output() valueChangeItem = new EventEmitter<Personne>();
  constructor() {

  }

  loadDetail(): void {
    this.valueChangeItem.emit(this.personne);
  }

  ngOnInit(): void {
  }

}
