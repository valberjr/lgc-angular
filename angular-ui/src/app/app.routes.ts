import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'courses',
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./courses/courses/courses.component').then(
        (m) => m.CoursesComponent
      ),
  },
];
