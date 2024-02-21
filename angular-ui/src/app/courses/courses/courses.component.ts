import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Course[] = [
    {
      _id: '1',
      name: 'Angular',
      category: 'Front-end',
    },
  ];

  displayedColumns: string[] = ['name', 'category'];
}
