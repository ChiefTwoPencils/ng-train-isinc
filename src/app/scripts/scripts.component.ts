import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.css']
})
export class ScriptsComponent implements OnInit {
  name: string;
  email: string;
  uses = [""]

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(`Bound {Name: ${this.name}, Email: ${this.email}}`);
    console.log(`Formed {Name: ${form.name}, Email: ${form.email}}`);
  }

}

export class ReadOnlyClass {
  readonly variable: string;

  constructor(variable: string) {
    //this.variable = variable;
  }
}
