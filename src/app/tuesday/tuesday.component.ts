import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tuesday',
  templateUrl: './tuesday.component.html',
  styleUrls: ['./tuesday.component.css']
})
export class TuesdayComponent implements OnInit {

  @Input() status: string;
  @Output() parEvent = new EventEmitter();
  buttonDisabled: boolean;
  constructor() {
    this.status = 'Awesome';
  }

  handle() {
    this.parEvent.emit();
    this.status = '';
    
  }

  onInputUpdate() {
    console.log('text entered in text box.');
  }

  ngOnInit() {
    setTimeout(() => {this.buttonDisabled = true;}, 2000);
  }

}
