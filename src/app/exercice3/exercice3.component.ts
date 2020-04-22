import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.scss']
})
export class Exercice3Component implements OnInit {

  public status: boolean;

  constructor() { }

  ngOnInit(): void {
    this.status = true;
  }

  public changeStatus(): void {
    this.status = !this.status;
  }

}
