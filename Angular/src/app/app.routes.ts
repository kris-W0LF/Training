import { Routes } from '@angular/router';
import { routingRoutes } from './13-Routes/routes';

export const routes: Routes = [
  {
    path: 'routing',
    children: routingRoutes
  }
];