import { Injectable } from '@angular/core';
import { Task } from './task';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /task
  addTask(task: Task): Observable<Task> {
    return this.api.createTask(task);
  }

  // Simulate DELETE /task/:id
  deleteTaskById(taskId: number): Observable<Task> {
    return this.api.deleteTaskById(taskId);
  }

  // Simulate PUT /task/:id
  updateTask(task: Task): Observable<Task> {
    return this.api.updateTask(task);
  }

  // Simulate GET /tasks
  getAllTasks(): Observable<Task[]> {
    return this.api.getAllTasks();
  }

  // Simulate GET /task/:id
  getTaskById(taskId: number): Observable<Task> {
    return this.api.getTaskById(taskId);
  }

  // Toggle completed
  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
    return this.api.updateTask(task);
  }

}
