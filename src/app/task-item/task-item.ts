import { Component, input, output } from '@angular/core';
import { Task } from '../task';

@Component({
  imports: [],
  selector: 'app-task-item',
  styleUrl: './task-item.css',
  templateUrl: './task-item.html',
})

export class TaskItem {
  task = input.required<Task>();
  toggled = output<number>();
  deleted = output<number>();
}


