import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.css',
})
export class AddModalComponent {
  show: boolean = false;

  toggle() {
    this.show = !this.show;
  }
}
