import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.scss']
})
export class Exercice4Component implements OnInit {

  public texts: string[];

  constructor() { }

  ngOnInit(): void {
    this.texts = ['un', 'deux', 'trois'];
  }

}
