import { Component, input, Input } from '@angular/core';
import { TaskInterface } from '../models/task-interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToDoApiService } from '../to-do-api.service';

@Component({
  selector: 'app-task-note',
  standalone: true,
  imports: [CommonModule, HttpClientModule,],
  templateUrl: './task-note.component.html',
  styleUrl: './task-note.component.css',
  providers: [ToDoApiService]
})
export class TaskNoteComponent {

  @Input() task?: TaskInterface;

  toggleCheckbox = (id: string) => {
    this.toDoApiService.deteleTask(id).subscribe();
  };

  constructor(private toDoApiService: ToDoApiService) { }

  getTasks() { }
  getTaskById() { }
  postTask() { }
  deleteTask() { }
  putTask() { }


}
