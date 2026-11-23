import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: '/changedection.html'
})
export class AppComponent {
  count = 0;

  increase() {
    this.count++;
  }
}