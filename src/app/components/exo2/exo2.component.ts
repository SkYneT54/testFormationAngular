import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.css']
})
export class Exo2Component implements OnInit {
  name="ATOUILLANT";
  firstname="Mathieu";
  job="IT Manager";
  path="ITManager.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
