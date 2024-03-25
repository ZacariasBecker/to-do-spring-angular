import { Component, input, Input } from '@angular/core';
import { TaskInterface } from '../task-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-note.component.html',
  styleUrl: './task-note.component.css'
})
export class TaskNoteComponent {
  @Input() task?: TaskInterface;
}
