import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuesday',
  templateUrl: './tuesday.component.html',
  styleUrls: ['./tuesday.component.css']
})
export class TuesdayComponent implements OnInit {

  status: string;
  buttonDisabled: boolean;
  constructor() {
    this.status = 'Awesome';
  }

  handle() {
    this.status = '';
  }

  ngOnInit() {
    setTimeout(() => {this.buttonDisabled = true;}, 2000);
  }

}
