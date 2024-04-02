import { Component } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss',
})
export class StudentsPageComponent {

  students: Student[] = [
    new Student(
      1,
      'carlos@.com',
      'Carlos',
      'https://reqres.in/img/faces/7-image.jpg',
      true
    ),
    new Student(
      2,
      'maria@.com',
      'Maria',
      'https://reqres.in/img/faces/7-image.jpg',
      false
    ),
    new Student(
      3,
      'sofia@.com',
      'Sofia',
      'https://reqres.in/img/faces/7-image.jpg',
      true
    ),
  ];
}
