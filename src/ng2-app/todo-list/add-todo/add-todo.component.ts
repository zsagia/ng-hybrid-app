import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'add-todo',
  template:
    `
      <input type="text" [(ngModel)]="todo.contents" />
      <input type="submit" value="add" (click)="onAdd(todo)" />
    `,
  styles: [

  ]
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter<Todo>();
  public todo: Todo;

  ngOnInit () {
    this.todo = {
      id: 0, // Replaced with real id when added to list
      contents: '',
      completed: false
    };
  }

  onAdd (todo: Todo) {
    this.addTodo.emit(todo);
  }
}