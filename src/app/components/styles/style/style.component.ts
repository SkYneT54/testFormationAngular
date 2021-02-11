import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  color = "black";
  fontFamily = "Arial";
  fontSize = "25px";

  constructor() { }

  ngOnInit(): void {
  }

}
