import { Component, OnInit, DoCheck } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'todo-list',
  template: `
    <h3>Todos Completed: {{completedTodos.length}} / {{todoList.length}}</h3>
    <ul>
      <li *ngFor="let todo of todoList">
        <todo [todo]="todo" (removeTodo)="removeTodo($event)" (toggleDone)="toggleDone($event)"></todo>
      </li>
    </ul>
    <add-todo (addTodo)="addTodo($event)"></add-todo>
  ` 
})
export class TodoListComponent {
  todoList: Array<Todo>;
  public completedTodos = new Array<Todo>();

  ngOnInit () {
    this.todoList = [
      { id: 1, contents: 'my sample todo', completed: false },
      { id: 2, contents: 'buy milk', completed: false },
      { id: 3, contents: 'walk the dog', completed: true }
    ];
  }

  ngDoCheck () {
    this.completedTodos = this.todoList.filter(t => t.completed === true);
  }

  addTodo (todo: Todo) {
    let newTodo = Object.assign({}, todo, { id: this.getMaxId(this.todoList) + 1 });
    console.log(newTodo)
    this.todoList = this.todoList.concat(newTodo);
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

  private getMaxId (todos: Array<Todo>) : number {
    return todos.reduce((prev, curr) => {
        return prev.id > curr.id ? prev : curr;
    }).id;
  }
}