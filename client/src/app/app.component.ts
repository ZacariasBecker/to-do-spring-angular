import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskBookComponent } from './task-book/task-book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DevToolsComponent } from './dev-tools/dev-tools.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskBookComponent, NavbarComponent, FooterComponent, DevToolsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
