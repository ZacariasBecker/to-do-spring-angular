import { Component } from '@angular/core';
import { TaskNoteComponent } from '../task-note/task-note.component';
import { TaskInterface } from '../models/task-interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToDoApiService } from '../to-do-api.service';

@Component({
  selector: 'app-task-book',
  standalone: true,
  imports: [TaskNoteComponent, CommonModule, HttpClientModule],
  templateUrl: './task-book.component.html',
  styleUrl: './task-book.component.css',
  providers: [
    ToDoApiService
  ]
})
export class TaskBookComponent {

  tasks?: TaskInterface[] = [];

  constructor(private doDoApiService: ToDoApiService) { }

  ngOnInit(): void {
    this.doDoApiService.getTasks().subscribe(
      data => {
        this.tasks = data;
      }
    );
  }

}