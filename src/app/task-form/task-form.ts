import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-task-form',
  styleUrl: './task-form.css',
  templateUrl: './task-form.html',
})
export class TaskForm {
  taskAdded = output<string>();

  add(input: HTMLInputElement) {
    const title = input.value.trim();
    if (title === '') {
      return;
    }
    this.taskAdded.emit(title);
    input.value = '';
  }
}