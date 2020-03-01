import { Component } from '@angular/core';
import { TaskDataService } from './task-data.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TaskDataService]
})

export class AppComponent {
  title = 'task-list-frontend';
  newTask: Task = new Task();

  constructor(private TaskDataService: TaskDataService) {
  }

  addTask() {
    this.TaskDataService.addTask(this.newTask);
    this.newTask = new Task();
  }

  toggleTaskCompleted(task) {
    this.TaskDataService.toggleTaskCompleted(task);
  }

  removeTask(task) {
    this.TaskDataService.deleteTaskById(task.id);
  }

  get tasks() {
    return this.TaskDataService.getAllTasks();
  }
}
