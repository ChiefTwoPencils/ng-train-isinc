import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  appStatus = "status : good";
  content: string;

  onTuesdayUpdate(event: Object) {
    this.content = Object.keys(event).join('<b/>');
  }
}
