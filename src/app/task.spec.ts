import {Task} from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let task = new Task({
      description: 'description_1',
      completed: true
    });
    expect(task.description).toEqual('description_1');
    expect(task.completed).toEqual(true);
  });
});
