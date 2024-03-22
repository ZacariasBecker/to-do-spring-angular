import { Component, input, Input } from '@angular/core';
import { TaskInterface } from '../task-interface';

@Component({
  selector: 'app-task-note',
  standalone: true,
  imports: [],
  templateUrl: './task-note.component.html',
  styleUrl: './task-note.component.css'
})
export class TaskNoteComponent {
  @Input() task?: TaskInterface;
}
