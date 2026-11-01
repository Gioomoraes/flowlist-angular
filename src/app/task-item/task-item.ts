import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  imports: [],
  selector: 'app-task-item',
  styleUrl: './task-item.css',
  templateUrl: './task-item.html',
})

export class TaskItem {
  task: Task = {
    id: 1,
    title: 'Estudar Angular',
    completed: false,
  };
}

