import { Routes } from '@angular/router';
import { courseResolver } from './courses/guards/course.resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'courses',
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./courses/containers/courses/courses.component').then(
        (m) => m.CoursesComponent
      ),
  },
  {
    path: 'courses/new',
    loadComponent: () =>
      import('./courses/containers/course-form/course-form.component').then(
        (m) => m.CourseFormComponent
      ),
    resolve: {
      course: courseResolver,
    },
  },
  {
    path: 'courses/edit/:id',
    loadComponent: () =>
      import('./courses/containers/course-form/course-form.component').then(
        (m) => m.CourseFormComponent
      ),
    resolve: {
      course: courseResolver,
    },
  },
];
