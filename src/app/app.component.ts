import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskDataService } from './task-data.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TaskDataService]
})

export class AppComponent implements OnInit {
  // title = 'task-list-frontend';
  newTask: Task = new Task();

  tasks: Task[] = [];

  @Output()
  add: EventEmitter<Task> = new EventEmitter();

  constructor(
    private taskDataService: TaskDataService
  ) {
  }

  public ngOnInit() {
    this.taskDataService
      .getAllTasks()
      .subscribe(
        (tasks) => {
          this.tasks = tasks;
        }
      );
  }

  addTask() {
    this.add.emit(this.newTask);
    this.newTask = new Task();
  }

  onAddTask(task) {
    this.taskDataService
      .addTask(task)
      .subscribe(
        (newTask) => {
          this.tasks = this.tasks.concat(newTask);
        }
      );
  }

  onToggleTaskCompleted(task) {
    this.taskDataService
      .toggleTaskCompleted(task)
      .subscribe(
        (updatedTask) => {
          task = updatedTask;
        }
      );
  }

  onRemoveTask(task) {
    this.taskDataService
      .deleteTaskById(task.id)
      .subscribe(
        (_) => {
          this.tasks = this.tasks.filter((t) => t.id !== task.id);
        }
      );
  }
}
