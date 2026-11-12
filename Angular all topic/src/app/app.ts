// import { Component } from '@angular/core';
// import { ClickEvent } from './03-events/clickevent';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [ClickEvent],
//   template: `
//     <app-click-event />
//   `
// })
// export class App {}

// import { Component } from '@angular/core';
// import { FormComponent } from './07-Form/form';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormComponent],
//   template: `<app-form />`
// })
// export class App {}


//HTTP 

// import { Component } from '@angular/core';
// import { HttpComponent } from './08-http/Http';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [HttpComponent],
//   template: `
//     <h1>Angular HTTP Practice</h1>
//     <app-http />
//   `
// })
// export class App {}

//Input
// import { Component } from "@angular/core";
// import { ChildComponent } from "./09-input-output/InputChild";

// @Component({
//   selector:'app-root',
//   standalone:true,
//   imports:[ChildComponent],
//   templateUrl:'./app.html'
// })
// export class App{

// }

//Output

// import { Component } from "@angular/core";
// import { ChildComponent } from "./09-input-output/OutputChild";

// @Component({
//   selector:'app-root',
//   standalone:true,
//   imports:[ChildComponent],
//   templateUrl:'./app.html'
// })

// export class App{
//   message:string="";

//   receiveData(data:string):void{
//     this.message=data;
//   }
// }

//DataBinding

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   templateUrl: './app.html'
// })
// export class App {
//   name: string = "Krish";
// }

//pipes

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './app.html',
 
// })
// export class App {
//   name = "krish";
//   message = "HELLO WORLD";
//   price = 5000;
//   marks = 0.85;
//   today = new Date();
//   numbers = [10, 20, 30, 40, 50];

// }


//directive

import { Component } from '@angular/core';
import { Directives } from './12-directives/directives';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Directives],
  template: `<app-directives />`
})
export class App {}


// //routes
// import { Component } from '@angular/core';
// import { RouterOutlet, RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, RouterLink],
//   templateUrl: './app.html'
// })
// export class App {}