import { Component } from '@angular/core';
import { TaskNoteComponent } from '../task-note/task-note.component';
import { TaskInterface } from '../task-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-book',
  standalone: true,
  imports: [TaskNoteComponent, CommonModule],
  templateUrl: './task-book.component.html',
  styleUrl: './task-book.component.css'
})
export class TaskBookComponent {

  mockedTasks: TaskInterface[] = [
    {
      id: '1',
      name: 'name_1',
      description: 'description_1',
      openedDate: '01/01/1001',
      closedDate: '01/01/1001',
      completed: false
    },
    {
      id: '2',
      name: 'name_2',
      description: 'description_2',
      openedDate: '02/02/2002',
      closedDate: '02/02/2002',
      completed: false
    },
    {
      id: '3',
      name: 'name_3',
      description: 'description_3',
      openedDate: '03/03/3003',
      closedDate: '03/03/3003',
      completed: false
    },

  ];
}
