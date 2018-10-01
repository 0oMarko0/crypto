import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto';
  frequency = [];

  onFrequencyChange(event) {
    this.frequency = event;
    console.log('this.frequency', this.frequency);
  }
}
