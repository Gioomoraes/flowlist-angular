import { Task } from './task';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskItem } from './task-item/task-item';
import { TaskForm } from './task-form/task-form';

@Component({
  imports: [RouterOutlet, TaskItem, TaskForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('flowlist');
      protected readonly tasks = signal<Task[]>([
    { id: 1, title: 'Estudar Angular', completed: false },
    { id: 2, title: 'Criar o formulário de tarefas', completed: false },
    { id: 3, title: 'Escrever o README', completed: true },
  ]);

    private nextId = 4;

  protected addTask(title: string) {
    this.tasks.update((current) => [
      ...current,
      { id: this.nextId++, title, completed: false },
    ]);
  }

    protected toggleTask(id: number) {
    this.tasks.update((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  protected deleteTask(id: number) {
    this.tasks.update((current) => current.filter((task) => task.id !== id));
  }

    protected readonly doneCount = computed(
    () => this.tasks().filter((task) => task.completed).length,
  );
}
