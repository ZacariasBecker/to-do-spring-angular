import { Component, inject } from '@angular/core';
import { TaskNoteComponent } from '../task-note/task-note.component';
import { TaskInterface } from '../task-interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToDoApiService } from '../to-do-api.service';

@Component({
  selector: 'app-task-book',
  standalone: true,
  imports: [TaskNoteComponent, CommonModule],
  templateUrl: './task-book.component.html',
  styleUrl: './task-book.component.css'
})
export class TaskBookComponent {
  toDoApiService: ToDoApiService = inject(ToDoApiService);

  tasks?: TaskInterface[] = [];

  constructor() {
    this.toDoApiService.getTasks<TaskInterface[]>().then((tasks: TaskInterface[]) => {
      this.tasks = tasks;
    });
  }
}
