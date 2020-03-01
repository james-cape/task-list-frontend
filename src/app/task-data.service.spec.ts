import {TestBed, async, inject} from '@angular/core/testing';
import {Task} from './task';
import {TaskDataService} from './task-data.service';

describe('TaskDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskDataService]
    });
  });

  it('should ...', inject([TaskDataService], (service: TaskDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTasks()', () => {
    it('should return an empty array by default', inject([TaskDataService], (service: TaskDataService) => {
      expect(service.getAllTasks()).toEqual([]);
    }));

    it('should return all tasks', inject([TaskDataService], (service: TaskDataService) => {
      let task1 = new Task({description: 'description_1', completed: false});
      let task2 = new Task({description: 'description_2', completed: true});
      service.addTask(task1);
      service.addTask(task2);
      expect(service.getAllTasks()).toEqual([task1, task2]);
    }));
  });

  describe('#save(task)', () => {
    it('should automatically assign an incrementing id', inject([TaskDataService], (service: TaskDataService) => {
      let task1 = new Task({description: 'description_1', completed: false});
      let task2 = new Task({description: 'description_2', completed: true});
      service.addTask(task1);
      service.addTask(task2);
      expect(service.getTaskById(1)).toEqual(task1);
      expect(service.getTaskById(2)).toEqual(task2);
    }));
  });

  describe('#deleteTaskById(id)', () => {
    it('should remove task with the corresponding id', inject([TaskDataService], (service: TaskDataService) => {
      let task1 = new Task({description: 'description_1', completed: false});
      let task2 = new Task({description: 'description_2', completed: true});
      service.addTask(task1);
      service.addTask(task2);
      expect(service.getAllTasks()).toEqual([task1, task2]);
      service.deleteTaskById(1);
      expect(service.getAllTasks()).toEqual([task2]);
      service.deleteTaskById(2);
      expect(service.getAllTasks()).toEqual([]);
    }));

    it('should not removing anything if task with corresponding id is not found', inject([TaskDataService], (service: TaskDataService) => {
      let task1 = new Task({description: 'description_1', completed: false});
      let task2 = new Task({description: 'description_2', completed: true});
      service.addTask(task1);
      service.addTask(task2);
      expect(service.getAllTasks()).toEqual([task1, task2]);
      service.deleteTaskById(3);
      expect(service.getAllTasks()).toEqual([task1, task2]);
    }));
  });

  describe('#updateTaskById(id, values)', () => {
    it('should return task with the corresponding id and updated data', inject([TaskDataService], (service: TaskDataService) => {
      let task = new Task({description: 'description_1', completed: false});
      service.addTask(task);
      let updatedTask = service.updateTaskById(1, {
        description: 'new description'
      });
      expect(updatedTask.description).toEqual('new description');
    }));

    it('should return null if task is not found', inject([TaskDataService], (service: TaskDataService) => {
      let task = new Task({description: 'description_1', completed: false});
      service.addTask(task);
      let updatedTask = service.updateTaskById(2, {
        description: 'new description'
      });
      expect(updatedTask).toEqual(null);
    }));
  });

  describe('#toggleTaskCompleted(task)', () => {
    it('should return the updated task with inverse completed status', inject([TaskDataService], (service: TaskDataService) => {
      let task = new Task({description: 'description_1', completed: false});
      service.addTask(task);
      let updatedTask = service.toggleTaskCompleted(task);
      expect(updatedTask.completed).toEqual(true);
      service.toggleTaskCompleted(task);
      expect(updatedTask.completed).toEqual(false);
    }));
  });
});
