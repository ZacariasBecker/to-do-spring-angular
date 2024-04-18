import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITaskRequest } from '../models/i-task-request';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.css',
})
export class AddModalComponent {

  show: boolean = false;

  public taskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskDescription: new FormControl('', Validators.required),
  });

  toggleShow() {
    this.show = !this.show;
  }

  onSubmit() {
    console.log('task:', this.taskForm.value);



    this.toggleShow();
    this.taskForm.reset();

  }
}
