import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuesday',
  templateUrl: './tuesday.component.html',
  styleUrls: ['./tuesday.component.css']
})
export class TuesdayComponent implements OnInit {

  status: string;
  constructor() {
    this.status = 'Awesome';
  }

  ngOnInit() {
  }

}
