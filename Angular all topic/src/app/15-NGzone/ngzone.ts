import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: '/ng.html'
})
export class AppComponent {

  count = 0;

  constructor(private zone: NgZone) {

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {

        this.zone.run(() => {
          this.count++;
        });

      }, 2000);
    });

  }
}