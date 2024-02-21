import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule],
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
