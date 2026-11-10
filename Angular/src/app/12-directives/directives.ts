import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directive.html',
  styleUrl: './directive.css'
})
export class Directives {

    // ngIf 
  isLoggedIn = true;

    // ngFor 
  names = ['Krish', 'Rahul', 'Aman'];

    // ngClass 
  isActive = true;

    // ngModel 
  username = '';

}