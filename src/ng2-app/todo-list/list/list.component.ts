import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todoList">
        <todo [todo]="todo"></todo>
      </li>
    </ul>
  ` 
})
export class TodoListComponent {
  todoList: Array<Todo>;

  ngOnInit () {
    this.todoList = [
      { id: 1, contents: 'my sample todo', completed: false }
    ];
  }

  addTodo (todo: Todo) {

  }
}