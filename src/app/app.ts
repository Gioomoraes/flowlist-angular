import { Task } from './task';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskItem } from './task-item/task-item';

@Component({
  imports: [RouterOutlet, TaskItem],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('flowlist');
    protected readonly firstTask: Task = {
    id: 1,
    title: 'Estudar Angular',
    completed: false,
  };
}
