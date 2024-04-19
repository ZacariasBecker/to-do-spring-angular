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

  show: boolean = true;

  public taskForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  toggleShow() {
    this.show = !this.show;
  }

  onSubmit() {
    if (this.taskForm.value.name && this.taskForm.value.description) {
      this.postEvent.emit({
        name: this.taskForm.value.name,
        description: this.taskForm.value.description,
        completed: false,
        openedDate: (new Date).toString(),
        closedDate: ""
      });
      this.toggleShow();
      this.taskForm.reset();
    }
  }

}
