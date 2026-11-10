import { Component } from '@angular/core';

@Component({
  selector: 'app-click-event',
  standalone: true,
  template: `
    <h2>Count: {{ count }}</h2>
    <button (click)="handleClick()">Click Me</button>
  `
})
export class ClickEvent {
  count = 0;

  handleClick() {
    this.count++;
  }
}