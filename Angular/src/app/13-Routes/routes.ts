import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Contact } from './contact/contact';

export const routingRoutes: Routes = [
  {
    path: 'home',
    component: Home
  },
 
  {
    path: 'contact',
    component: Contact
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];