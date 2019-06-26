import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.css']
})
export class ScriptsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class ReadOnlyClass {
  readonly variable: string;

  constructor(variable: string) {
    //this.variable = variable;
  }
}
