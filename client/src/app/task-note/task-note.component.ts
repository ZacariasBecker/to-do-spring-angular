import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() deletedEvent = new EventEmitter<string>();

  toggleCheckBox = (task?: ITaskResponse) => {
    const closedDate = new Date();
    const newTask: ITaskRequest = {
      name: task!.name,
      description: task!.description,
      completed: !(task!.completed),
      openedDate: task!.openedDate,
      closedDate: task!.completed ? '' : closedDate.toString()
    };

    this.putTask(task!.id, newTask);

  };

  constructor(private toDoApiService: ToDoApiService) { }

  // UNUSED
  // getTaskById(id: string) {
  //   this.toDoApiService.getTaskById(id).subscribe((data: ITaskResponse) => {
  //     this.task = data;
  //   });
  // }

  putTask(id: string, task: ITaskRequest): any {
    this.toDoApiService.putTask(id, task).subscribe((data: ITaskResponse) => {
      this.task = data;
    });
  }

  deleteTask(id: string) {
    this.toDoApiService.deteleTask(id).subscribe((data: ITaskResponse) => {
      this.deletedEvent.emit(id);
    });
  }

  formatDate = (date?: string): string => {
    console.log(date);
    if (!date) return '';
    let dateD = new Date(date);
    return (`${date.split(' ')[1]} - ${dateD.getDate()} - ${dateD.getFullYear()}`);
  };

}
