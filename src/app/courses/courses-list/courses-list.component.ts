import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryPipe } from '../../shared/pipes/category.pipe';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CategoryPipe, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss',
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];

  readonly displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
