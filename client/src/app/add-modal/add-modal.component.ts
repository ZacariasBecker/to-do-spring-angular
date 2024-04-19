import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITaskRequest } from '../models/i-task-request';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.css',
})
export class AddModalComponent {

  @Output() postEvent = new EventEmitter<ITaskRequest>();

  show: boolean = false;

  public taskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskDescription: new FormControl('', Validators.required)
  });

  toggleShow() {
    this.show = !this.show;
  }

  onSubmit() {
    if (this.taskForm.value.taskName && this.taskForm.value.taskDescription) {
      this.postEvent.emit({
        name: this.taskForm.value.taskName,
        description: this.taskForm.value.taskDescription,
        completed: false,
        openedDate: (new Date).toString(),
        closedDate: ""
      });
      this.toggleShow();
      this.taskForm.reset();
    }
  }

}
