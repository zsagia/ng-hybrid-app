import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Todo } from './todo';

@Component({
  selector: 'todo',
  template: `
    <span>
      <p [ngClass]="{'strike-through': isDone}">{{todo.contents}}</p>
      <input class="btn btn-primary" type="button" value="Done" (click)="onCompleted(todo.id)" />
      <input class="btn btn-default" type="button" value="X" (click)="onRemove(todo.id)" />
    </span>
  `,
  styles: [
    `
      p, input {
        display: inline-block;
      }

      .strike-through {
        text-decoration: line-through;
      }
    `
  ]
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() removeTodo = new EventEmitter<number>();
  @Output() toggleDone = new EventEmitter<number>();

  public isDone: boolean;

  ngOnInit () {
    if (this.todo.completed) this.isDone = true;
  }

  onCompleted (id: number) {
    this.toggleDone.emit(id);
    this.isDone = !this.isDone;
  }

  onRemove (id: number) {
    this.removeTodo.emit(id);
  }
}
