import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todoList">
        <todo [todo]="todo" (removeTodo)="removeTodo($event)" (toggleDone)="toggleDone($event)"></todo>
      </li>
    </ul>
  ` 
})
export class TodoListComponent {
  todoList: Array<Todo>;

  ngOnInit () {
    this.todoList = [
      { id: 1, contents: 'my sample todo', completed: false },
      { id: 2, contents: 'buy milk', completed: false },
      { id: 3, contents: 'walk the dog', completed: true }
    ];
  }

  removeTodo (id: number) {
    this.todoList = this.todoList.filter(t => t.id != id);
  }

  toggleDone (id: number) {
    this.todoList = this.todoList.map(t => {
      if (t.id === id) {
        t.completed = !t.completed;
        return t;
      }
      return t;
    });
  }
}