import { Component } from '@angular/core';
import { ITaskResponse } from '../models/i-task-response';
import { ToDoApiService } from '../to-do-api.service';
import { ITaskRequest } from '../models/i-task-request';

@Component({
  selector: 'app-dev-tools',
  standalone: true,
  imports: [],
  templateUrl: './dev-tools.component.html',
  styleUrl: './dev-tools.component.css',
  providers: [
    ToDoApiService
  ]
})
export class DevToolsComponent {

  tasks?: ITaskResponse[] = [];

  async dtDeleteAll() {
    this.getAllTasks();

    const idList: string[] = [];
    this.tasks!.map(e => idList.push(e.id));
    console.log(idList);

    for (const id of idList) {
      this.deleteTask(id);
    }
  }


  dtFourItems() {
    this.getAllTasks();

    this.dtDeleteAll();
    this.dtMockPlusFour();
  }

  dtMockPlusFour() {
    this.getAllTasks();

    for (let i = 0; i < 4; i++) {

      let initDate = new Date();
      const openedDate = new Date(new Date(initDate).setDate(initDate.getDate() + i));
      const closedDate = new Date(new Date(openedDate).setDate(openedDate.getDate() + 5));

      this.postTask({
        name: `for: ${i}`,
        description: "DESCRIÇÃO",
        openedDate: openedDate.toString(),
        closedDate: closedDate.toString(),
        completed: i % 2 === 0
      });
    }
  }

  constructor(private toDoApiService: ToDoApiService) { }

  ngOnInit() {
    this.getAllTasks();
  }

  postTask(newTask: ITaskRequest) {
    this.toDoApiService.postTask(newTask).subscribe((data: ITaskResponse) => {
      console.log(data);
    });
  }

  getAllTasks() {
    this.toDoApiService.getAllTasks().subscribe((data: ITaskResponse[]) => {
      this.tasks = data.sort((a, b) => new Date(a.openedDate).valueOf() - new Date(b.openedDate).valueOf());
    });
  }

  deleteTask(id: string) {
    this.toDoApiService.deteleTask(id).subscribe((data: ITaskResponse) => {
      console.log(data);
    });
  }


}
