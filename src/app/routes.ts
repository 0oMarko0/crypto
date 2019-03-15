import { Routes } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OldComponent } from './pages/old/old.component';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'old', component: OldComponent },
  { path: '**', component: NotFoundComponent }
];
