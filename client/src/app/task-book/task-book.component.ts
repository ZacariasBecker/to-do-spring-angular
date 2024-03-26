import { Component } from '@angular/core';
import { TaskNoteComponent } from '../task-note/task-note.component';
import { ITaskResponse } from '../models/i-task-response';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToDoApiService } from '../to-do-api.service';
import { ITaskRequest } from '../models/i-task-request';

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

  tasks?: ITaskResponse[] = [];

  constructor(private doDoApiService: ToDoApiService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this.doDoApiService.getAllTasks().subscribe((data: ITaskResponse[]) => {
      this.tasks = data;
    });
  }

  getTaskById(id: string) {
    this.doDoApiService.getTaskById(id).subscribe((data: ITaskResponse) => {
      console.log(data);
    });
  }

  postTask(newTask: ITaskRequest) {
    this.doDoApiService.postTask(newTask).subscribe((data: ITaskResponse) => {
      console.log(data);
    });
  }

}