import { Component, Input } from '@angular/core';
import { ITaskResponse } from '../models/i-task-response';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToDoApiService } from '../to-do-api.service';
import { ITaskRequest } from '../models/i-task-request';

@Component({
  selector: 'app-task-note',
  standalone: true,
  imports: [CommonModule, HttpClientModule,],
  templateUrl: './task-note.component.html',
  styleUrl: './task-note.component.css',
  providers: [ToDoApiService]
})
export class TaskNoteComponent {

  @Input() task?: ITaskResponse;

  toggleCheckBox = (task?: ITaskResponse) => {
    const newTask: ITaskRequest = {
      name: task!.name,
      description: task!.openedDate,
      completed: !(task!.completed),
      openedDate: task!.openedDate,
      closedDate: task!.closedDate,
    };


    if (task!.completed) {
      document.getElementById('task-' + task!.id)!.classList.add('completed');
    } else {
      console.log(document.getElementById('task-' + task!.id)!.classList);
      document.getElementById('task-' + task!.id)!.classList.remove('completed');
    }

    this.putTask(task!.id, newTask);
  };

  constructor(private toDoApiService: ToDoApiService) { }

  putTask(id: string, task: ITaskRequest): any {

    this.toDoApiService.putTask(id, task).subscribe((data: ITaskResponse) => {
      console.log(data);
    });
  }

  deleteTask(id: string) {
    this.toDoApiService.deteleTask(id).subscribe((data: ITaskResponse) => {
      console.log(data);
    });
  }

}
