import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {

  public text: string;

  constructor() { }

  ngOnInit(): void {
    this.text = 'exercice1 works!';
  }

  public clickEvent(event): void {
    console.log(`exercice1 clicked`);
  }

}
