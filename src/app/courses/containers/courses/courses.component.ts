import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { CoursesListComponent } from '../../components/courses-list/courses-list.component';
import { Course } from '../../models/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    CoursesListComponent,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses$: Observable<Course[]> | null = null;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.refresh();
  }

  refresh() {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        this.onError('Error loading courses.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(course: Course) {
    this.router.navigate(['edit', course._id], { relativeTo: this.route });
  }

  onRemove(course: Course) {
    this.coursesService.remove(course._id).subscribe({
      next: () => {
        this.refresh();
        this._snackBar.open('Course removed successfully', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      },
      error: () => {
        this.onError('Error removing course.');
      },
    });
  }
}
